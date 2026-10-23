"""Arma el sitio entero desde _fuentes/.

    python3 _fuentes/construir.py

Cada guia de _fuentes/sitio.json se publica en su propia carpeta, con su
manifiesto, su service worker, sus iconos y su QR. La raiz queda con la
portada que lista las guias y el robots.txt.
"""
import base64, json, pathlib, re, sys

RAIZ = pathlib.Path(__file__).resolve().parent.parent
FUENTES = RAIZ / "_fuentes"
COMUN = FUENTES / "comun"
CONSEJOS = FUENTES / "consejos"
sys.path.insert(0, str(COMUN))

SITIO = json.loads((FUENTES / "sitio.json").read_text(encoding="utf-8"))
BASE = SITIO["base"].rstrip("/") + "/"

CABEZA = ('<meta charset="utf-8">\n'
          '<meta name="viewport" content="width=device-width,initial-scale=1">\n'
          '<meta name="robots" content="noindex, nofollow, noarchive, nosnippet">\n'
          '<meta name="googlebot" content="noindex, nofollow">\n'
          '<meta name="color-scheme" content="light dark">\n')


def paleta_css(cfg):
    """Los colores base de una guia. Sin `paleta` en guia.json no se emite nada
    y la guia se queda con el tema de shell.html, byte por byte igual que antes.
    Los tres estados van juntos: el claro pelado, el oscuro del sistema y el
    oscuro elegido a mano, para que ningun color quede definido en un solo lado.
    """
    pal = cfg.get("paleta")
    if not pal:
        return ""
    def bloque(d):
        return "".join("  %s:%s;\n" % (k, v) for k, v in d.items())
    claro, oscuro = bloque(pal["claro"]), bloque(pal["oscuro"])
    return (":root{\n" + claro + "}\n"
            "@media (prefers-color-scheme:dark){\n"
            ':root:not([data-theme="light"]){\n' + oscuro + "}\n}\n"
            ':root[data-theme="dark"]{\n' + oscuro + "}\n")


def qr_svg(url):
    """QR como data URI. Va embebido para que se vea tambien sin conexion."""
    import segno
    from io import BytesIO
    b = BytesIO()
    segno.make(url, error="m").save(b, kind="svg", scale=4, border=2,
                                    dark="#2B2028", light="#FDF5F8")
    return "data:image/svg+xml;base64," + base64.b64encode(b.getvalue()).decode()


def qr_png(url, destino, color):
    import segno
    segno.make(url, error="m").save(str(destino), scale=10, border=3,
                                    dark=color, light="#FFFFFF")


def pares(texto):
    """Cuantos textos en castellano y cuantos en ingles. Contar las dos marcas
    no reemplaza a leerlo, pero agarra el olvido mas probable, que es agregar
    una ficha nueva en un solo idioma."""
    return (len(re.findall(r"[{,]\s*es:", texto)),
            len(re.findall(r"[{,]\s*en:", texto)))


def consejos_js(cfg):
    """Los consejos compartidos que usa una guia, como `const CONSEJOS`.

    Viven en _fuentes/consejos/, uno por archivo: los generales, los de quien
    sale de Uruguay y uno por pais. Cada archivo es una expresion JS: una lista
    de secciones, que un capitulo de la guia suma con `...CONSEJOS.general`, o
    un capitulo entero, que la guia pone como pestana con "@italia" en
    `partes`. Se cargan los que la guia pide en `consejos` y los que nombra con
    @, y nada mas, para no inflar la pagina con paises que no visita.

    Son siempre bilingues, aunque la guia que los usa no lo sea: una guia de
    un solo idioma lee el castellano y el ingles queda sin uso.
    """
    nombres = list(cfg.get("consejos", []))
    for parte in cfg["partes"]:
        if parte.startswith("@") and parte[1:] not in nombres:
            nombres.append(parte[1:])
    if not nombres:
        return ""
    bloques = []
    for n in nombres:
        texto = (CONSEJOS / (n + ".js")).read_text(encoding="utf-8").strip()
        if texto.endswith(","):
            texto = texto[:-1]
        es, en = pares(texto)
        assert es == en and es > 0, f"consejos/{n}.js: {es} textos en castellano y {en} en ingles"
        bloques.append(f"CONSEJOS[{json.dumps(n)}] = {texto};\n")
    return "const CONSEJOS = {};\n" + "".join(bloques)


def parte_js(src, parte, cfg):
    """Un capitulo propio de la guia, o uno compartido si empieza con @.

    Un capitulo compartido se puede recortar para una guia sola con `ajustes`
    en su guia.json: `sin` lista los `k` de las secciones que no van, y `lede`
    reemplaza la introduccion, que suele nombrar lo que se saco. Sin `ajustes`
    el capitulo sale entero y la guia queda igual que antes.
    """
    if not parte.startswith("@"):
        return (src / parte).read_text(encoding="utf-8")
    nombre = parte[1:]
    cap = f"CONSEJOS[{json.dumps(nombre)}]"
    ajuste = cfg.get("ajustes", {}).get(nombre)
    if not ajuste:
        return cap + ",\n"
    texto = (CONSEJOS / (nombre + ".js")).read_text(encoding="utf-8")
    for k in ajuste.get("sin", []):
        assert f"k:'{k}'" in texto, f"ajustes de {nombre}: no hay ninguna seccion con k:'{k}'"
    cambios = {}
    if "sin" in ajuste:
        cambios["sections"] = (f"{cap}.sections.filter(s => !{json.dumps(ajuste['sin'])}"
                               ".includes(s.k))")
    if "lede" in ajuste:
        cambios["lede"] = json.dumps(ajuste["lede"], ensure_ascii=False)
    campos = ", ".join(f"{c}:{v}" for c, v in cambios.items())
    return f"Object.assign({{}}, {cap}, {{{campos}}}),\n"


# ------------------------------------------------------------------ las guias
publicadas = []
for ruta in SITIO["guias"]:
    src = FUENTES / ruta
    cfg = json.loads((src / "guia.json").read_text(encoding="utf-8"))
    dst = RAIZ / cfg["ruta"]
    dst.mkdir(exist_ok=True)
    url = BASE + cfg["ruta"] + "/"

    shell = (COMUN / "shell.html").read_text(encoding="utf-8")
    shell = (shell.replace("__TITULO__", cfg["titulo"])
                  .replace("__SUBTITULO__", cfg["subtitulo"])
                  # el subtitulo en ingles solo existe en las guias bilingues:
                  # sin el, el bloque en ingles repite el castellano y queda
                  # escondido igual, porque la guia declara un solo idioma.
                  .replace("__SUBTITULO_EN__", cfg.get("subtitulo_en", cfg["subtitulo"]))
                  # `fuentes` y `estilo` dejan que una guia tenga su propia
                  # tipografia sin tocar a las demas: el primero cambia que
                  # familias van incrustadas, el segundo agrega reglas al final
                  # de la hoja, que es donde pueden pisar lo de arriba.
                  .replace("__FUENTES__",
                           (COMUN / cfg.get("fuentes", "fuentes.css")).read_text(encoding="utf-8"))
                  .replace("__EXTRA__\n",
                           (COMUN / cfg["estilo"]).read_text(encoding="utf-8") if cfg.get("estilo") else "")
                  .replace("__URL__", url)
                  .replace("__QR__", qr_svg(url))
                  .replace("__PALETA__\n", paleta_css(cfg)))
    for marca in ("__TITULO__", "__SUBTITULO__", "__SUBTITULO_EN__", "__FUENTES__",
                  "__QR__", "__URL__", "__PALETA__", "__EXTRA__"):
        assert marca not in shell, f"quedo sin reemplazar el marcador {marca}"

    ciudades = "".join(parte_js(src, parte, cfg) for parte in cfg["partes"])
    consejos = consejos_js(cfg)
    app = (COMUN / "app.js").read_text(encoding="utf-8").replace("__CLAVE__", cfg["clave"])
    # que idiomas trae la guia. El primero es el que se lee al abrirla por
    # primera vez; con uno solo, el boton de idioma no aparece.
    idiomas = cfg.get("idiomas", ["es"])
    assert idiomas and idiomas[0] == "es", "el primer idioma tiene que ser es"
    app = app.replace("__IDIOMAS__", json.dumps(idiomas))
    assert "__IDIOMAS__" not in app, "quedo sin reemplazar el marcador __IDIOMAS__"
    # el rango de diacriticos combinantes, en escapes ASCII para no depender de la codificacion
    app = re.sub(r"\.normalize\('NFD'\)\.replace\(/\[[^/]*\]/g,''\)",
                 r".normalize('NFD').replace(/[\\u0300-\\u036f]/g,'')", app)
    assert "\\u0300-\\u036f" in app, "no se sustituyo el rango de diacriticos"
    app = app.replace("window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });",
                      "window.scrollTo(0, 0);")

    js = ("<script>\n" + (COMUN / "tipos.js").read_text(encoding="utf-8")
          + "\n" + consejos + "const CITIES = [\n" + ciudades + "];\n" + app + "</script>\n")

    APP = (f'<meta name="description" content="{cfg["descripcion"]}">\n'
           '<link rel="manifest" href="./manifest.webmanifest">\n'
           '<link rel="apple-touch-icon" href="./apple-touch-icon.png">\n'
           f'<meta name="theme-color" content="{cfg["color"]}">\n'
           '<meta name="apple-mobile-web-app-capable" content="yes">\n'
           f'<meta name="apple-mobile-web-app-title" content="{cfg["nombre_corto"]}">\n')
    SW = ("\n<script>\n"
          "if ('serviceWorker' in navigator) {\n"
          "  addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(() => {}));\n"
          "}\n</script>\n")
    (dst / "index.html").write_text(
        f'<!doctype html>\n<html lang="es">\n<head>\n{CABEZA}{APP}{shell}\n{js}{SW}\n</html>\n',
        encoding="utf-8")

    (dst / "manifest.webmanifest").write_text(json.dumps({
        "name": cfg["titulo"], "short_name": cfg["nombre_corto"],
        "description": cfg["descripcion"], "lang": "es",
        "start_url": "./", "scope": "./", "display": "standalone", "orientation": "portrait",
        "background_color": cfg.get("fondo", "#FDF5F8"), "theme_color": cfg["color"],
        "icons": [{"src": "./icon-192.png", "sizes": "192x192", "type": "image/png", "purpose": "any"},
                  {"src": "./icon-512.png", "sizes": "512x512", "type": "image/png", "purpose": "any"},
                  {"src": "./icon-512.png", "sizes": "512x512", "type": "image/png", "purpose": "maskable"}],
    }, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

    sw = (COMUN / "sw.js").read_text(encoding="utf-8").replace("__CACHE__", cfg["cache"])
    (dst / "sw.js").write_text(sw, encoding="utf-8")

    import iconos
    iconos.generar(dst, cfg["color"], cfg.get("letra", cfg["titulo"][0]),
                   cfg.get("icono_fuente"))
    qr_png(url, dst / "qr.png", "#2B2028")

    # En una guia bilingue cada texto es un par {es:...,en:...}. Los consejos
    # compartidos ya se revisaron al cargarlos.
    if len(idiomas) > 1:
        es, en = pares(ciudades)
        assert es == en, f"{cfg['ruta']}: {es} textos en castellano y {en} en ingles"
        assert es > 0, f"{cfg['ruta']} dice ser bilingue y no tiene un solo par es/en"

    kb = (dst / "index.html").stat().st_size // 1024
    print("  %-26s %4d KB  ->  %s" % (cfg["ruta"], kb, url))
    publicadas.append((cfg, url))

# ----------------------------------------------------------------- la portada
tarjetas = "\n".join(
    f'      <li><a class="tarjeta" href="./{c["ruta"]}/">'
    f'<span class="t">{c["titulo"]}</span>'
    f'<span class="s">{c["subtitulo"]}</span></a></li>'
    for c, _ in publicadas)
portada = (RAIZ / "_fuentes" / "portada.html").read_text(encoding="utf-8")
portada = (portada.replace("__TITULO__", SITIO["titulo"])
                  .replace("__LEDE__", SITIO["lede"])
                  .replace("__TARJETAS__", tarjetas))
(RAIZ / "index.html").write_text(
    f'<!doctype html>\n<html lang="es">\n<head>\n{CABEZA}'
    f'<meta name="theme-color" content="#7D4B6B">\n{portada}\n</html>\n', encoding="utf-8")

# ---------------------------------------------------------------- comprobaciones
for cfg, url in publicadas:
    p = RAIZ / cfg["ruta"] / "index.html"
    t = p.read_text(encoding="utf-8")
    assert "Ã" not in t, f"mojibake en {cfg['ruta']}"
    assert "acá" in t and "cómo" in t, f"tildes perdidas en {cfg['ruta']}"
    assert "—" not in t and "–" not in t, f"quedan rayas en {cfg['ruta']}"
    assert 'name="robots" content="noindex' in t, f"falta el noindex en {cfg['ruta']}"
    externos = set(re.findall(r'(?:src|href)="(https?://[^"]+)"', t)) - {url}
    assert not externos, f"{cfg['ruta']} pide recursos externos: {externos}"
    for f in ("manifest.webmanifest", "sw.js", "icon-192.png", "icon-512.png",
              "apple-touch-icon.png", "qr.png"):
        assert (RAIZ / cfg["ruta"] / f).exists(), f"falta {cfg['ruta']}/{f}"
    assert t.count("<script>") == 2, f"falta el registro del service worker en {cfg['ruta']}"

idx = (RAIZ / "index.html").read_text(encoding="utf-8")
assert "Ã" not in idx and "—" not in idx, "la portada tiene mojibake o rayas"
assert not set(re.findall(r'(?:src|href)="(https?://[^"]+)"', idx)), "la portada pide recursos externos"
for cfg, _ in publicadas:
    assert f'href="./{cfg["ruta"]}/"' in idx, f"la portada no enlaza {cfg['ruta']}"

robots = (RAIZ / "robots.txt").read_text(encoding="utf-8")
assert re.search(r"User-agent:\s*\*", robots) and re.search(r"Disallow:\s*/", robots), \
    "el robots.txt no bloquea el rastreo"
lee = (RAIZ / "README.md").read_text(encoding="utf-8")
assert not any(u in lee for u in [BASE] + [u for _, u in publicadas]), \
    "el README publica la direccion, y el repo es publico"

print("\nportada:", RAIZ / "index.html")
print("guias publicadas:", len(publicadas))
