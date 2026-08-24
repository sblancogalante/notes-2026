# Verificacion

`construir.py` corta solo si hay mojibake, tildes perdidas, rayas largas,
recursos externos, falta el `noindex` o el `robots.txt` esta mal. Todo lo de
abajo hay que mirarlo aparte. Son las cosas que ya se colaron una vez.

## 1. Ids duplicados

Dos fichas con el mismo nombre dentro de una ciudad comparten id, y marcar una
marca las dos. Paso de verdad con "La Mallorquina" en Madrid.

```bash
python3 - <<'PY'
import re, pathlib, json, unicodedata
raiz = pathlib.Path(".")
cfg = json.loads((raiz/"_fuentes"/"<guia>"/"guia.json").read_text(encoding="utf-8"))
js = "".join((raiz/"_fuentes"/cfg["ruta"]/p).read_text(encoding="utf-8") for p in cfg["partes"])
def slug(s):
    s = unicodedata.normalize("NFD", s).encode("ascii","ignore").decode().lower()
    return re.sub(r"-+$","",re.sub(r"[^a-z0-9]+","-",s))[:48]
ciudad, vistos = None, {}
# ojo: una ficha puede empezar con nota:, ruta: o m: antes de n:
for m in re.finditer(r"id:'(\w+)'|\bn:'((?:[^'\\]|\\.)*)'", js):
    if m.group(1): ciudad = m.group(1); continue
    k = (ciudad, slug(m.group(2)))
    if k in vistos: print("DUPLICADO:", k, "|", m.group(2))
    vistos[k] = 1
print("fichas:", len(vistos))
PY
```

## 1b. Coherencia de hito, nota y ruta

Una nota no puede tener mapa, y una ruta necesita al menos dos puntos. Y una
ficha cuyo titulo no sea buscable en Maps tiene que traer `m:` o ser nota.

```bash
node -e "
const fs=require('fs'); let js=fs.readFileSync('/tmp/_app.js','utf8');
js=js.slice(0,js.indexOf('/* ---------- utilidades'));
eval(js.replace('const CITIES','var CITIES').replace('const TIPOS','var TIPOS'));
for(const c of CITIES) for(const s of (c.sections||[]).filter(s=>s.items)) for(const it of s.items){
  if(it.nota&&(it.ruta||it.m)) console.log('nota con mapa:',it.n);
  if(it.ruta&&it.ruta.length<2) console.log('ruta de un punto:',it.n);
}"
```

## 2. Concordancia de genero

Solo cambia lo que habla de quien viaja. Reviza cada resultado a mano antes de
tocarlo: la mitad se refiere a cosas y tiene que quedar en masculino.

```bash
grep -oE ".{60}\b(los dos|cada uno|el otro|uno de los|muertos|cansados|sentado|sentados|desprevenidos|solos|listos|los (agarra|deja|dejan|lleva|mira|espera))\b.{45}" _fuentes/<guia>/*.js
```

## 3. Registro consistente

Si la guia es de ustedes, no puede haber un "tenes" ni un "puedes" sueltos.
Cuidado con el falso positivo: `tip:` contiene "ti".

```bash
grep -oiE "\b(ten[eé]s|pod[eé]s|quer[eé]s|tienes|puedes|quieres|debes|contigo|tuyo)\b" _fuentes/<guia>/*.js | sort | uniq -c
```

## 4. Sintaxis y estructura

```bash
python3 -c "
import re,pathlib,json
cfg=json.loads(pathlib.Path('_fuentes/<guia>/guia.json').read_text())
for p in cfg['partes']:
    t=pathlib.Path('_fuentes/<guia>/'+p).read_text()
    assert t.lstrip().startswith('{'), p+' no empieza con un objeto'
    assert t.rstrip().endswith('},'), p+' no termina en coma'
print('estructura ok')"
```

Y sobre la pagina ya armada, que el script de la app sea JavaScript valido:

```bash
python3 -c "
import re,pathlib
t=pathlib.Path('<guia>/index.html').read_text()
pathlib.Path('/tmp/_app.js').write_text(re.findall(r'<script>(.*?)</script>',t,re.S)[0])"
node --check /tmp/_app.js
```

## 5. Contraste

Cada `accent` tiene que dar 4.5 sobre el fondo claro `#FDF5F8`, y cada `lt`
sobre el oscuro `#221B22`.

```bash
python3 - <<'PY'
def lum(h):
    h=h.lstrip('#'); c=[int(h[i:i+2],16)/255 for i in (0,2,4)]
    c=[x/12.92 if x<=.04045 else ((x+.055)/1.055)**2.4 for x in c]
    return .2126*c[0]+.7152*c[1]+.0722*c[2]
def ratio(a,b):
    l1,l2=sorted([lum(a),lum(b)],reverse=True); return (l1+.05)/(l2+.05)
PARES = [("#A83A5B","#FDF5F8"), ("#F2A3BA","#221B22")]   # poner los de la guia
for f,b in PARES:
    r=ratio(f,b); print("%s sobre %s  %.2f  %s"%(f,b,r,"ok" if r>=4.5 else "BAJO"))
PY
```

## 6. Mirarla de verdad

Abrila en el celular, en claro y en oscuro, y probá:

- el buscador con un acento ("cafe" tiene que encontrar "café")
- marcar visitados, cerrar y volver a abrir
- los filtros de tipo y de precio combinados
- el link a Maps de una ficha con direccion
- modo avion despues de instalarla, que es para lo que existe todo esto

## 7. Despues de publicar

Espera comparando el commit y no solo el estado, y pedi la pagina con un
parametro nuevo. Si mirás el estado nada mas, verificas el build anterior.

```bash
SHA=$(git rev-parse HEAD)
until [ "$(gh api repos/<owner>/<repo>/pages/builds/latest --jq '.status+.commit')" = "built$SHA" ]; do sleep 15; done
curl -s "https://<owner>.github.io/<repo>/<guia>/?v=$SHA" | grep -c "algo que agregaste"
```
