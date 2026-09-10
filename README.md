# Guias de viaje

Una guia por viaje, cada una en su propia carpeta. Son paginas sueltas sin
dependencias externas: las tipografias van incrustadas y no piden nada por red,
asi que una vez instaladas en el telefono funcionan sin senal.

No estan pensadas para buscadores: llevan `noindex` y hay un `robots.txt` que
impide el rastreo. El enlace lo tienen los que lo tienen que tener.

## Estructura

```
/                          la portada, que lista las guias
/<guia>/                   la guia publicada (index, manifiesto, sw, iconos, qr)
_fuentes/
  sitio.json               que guias se publican
  portada.html             plantilla de la portada
  construir.py             arma todo el sitio
  comun/                   lo que comparten todas las guias
    shell.html             el HTML con __TITULO__, __SUBTITULO__, __FUENTES__, __QR__
    app.js                 buscador, filtros, visitados, tema
    tipos.js               las etiquetas de tipo de ficha
    fuentes.css            las tipografias en base64
    sw.js                  el service worker de cada guia
    iconos.py              genera los iconos con el color de cada guia
  <guia>/
    guia.json              titulo, color, clave de guardado, partes
    0-antes.js             la seccion de preparativos
    1-*.js ... n-*.js      una ciudad por archivo
```

Las carpetas que empiezan con guion bajo no se publican, asi que `_fuentes`
queda fuera del sitio.

## Como se abre una guia

Cada guia se publica en una carpeta con el nombre que figura en `ruta`, dentro
de su `_fuentes/<guia>/guia.json`. Hoy son estas:

```
eurotrip-serri-cami/     Eurotrip Serri y Cami
italia-espana-2026/      Santi y Vale en Italia y España
```

**El enlace que se comparte** es la `base` de `_fuentes/sitio.json` seguida del
nombre de la carpeta y una barra, o sea `<base>/italia-espana-2026/`. Esa es la
direccion que abre en cualquier telefono y la que codifica el QR de adentro. El
sitio se sirve como proyecto de GitHub Pages: el nombre del repo va siempre en
el medio (`.../notes-2026/<carpeta>/`) y no hay dominio propio, asi que no
existe una version corta.

**Para ver un cambio antes de publicarlo** alcanza con abrir el archivo
generado:

```
open italia-espana-2026/index.html
```

Todo va incrustado, asi que se ve igual desde `file://`. Lo unico que no anda
de esa forma es el service worker y el "agregar a inicio". Para probar tambien
eso hay que servir la carpeta desde la raiz del repo:

```
python3 -m http.server
```

y abrir `http://localhost:8000/italia-espana-2026/` (la portada queda en
`http://localhost:8000/`).

## Como se reconstruye

```
python3 -m venv .venv && .venv/bin/pip install segno pillow   # la primera vez
.venv/bin/python3 _fuentes/construir.py
```

Hace falta `segno` y `Pillow`. El `.venv` esta ignorado por git. El script vuelve a generar cada guia, la portada,
los iconos y los QR, y corta si algo no cierra: mojibake, tildes perdidas, rayas
largas, recursos externos, el `noindex` ausente o el `robots.txt` mal.

## Como se agrega una guia nueva

Hay una skill en `.claude/skills/nueva-guia/`. Se abre Claude Code en este repo
y se invoca `/nueva-guia`: hace la entrevista, genera el contenido, arma la
carpeta y la suma a la portada.

## Como se instala en el telefono

Abrir el enlace de la guia y elegir "Agregar a inicio" (iPhone, desde el boton
de compartir de Safari) o "Instalar aplicacion" (Android, menu de los tres
puntos). Queda con icono propio y abre sin datos.

Conviene hacerlo con wifi: la primera carga baja la guia entera.

Lo que se marca como visitado se guarda en el navegador de cada telefono, con
una clave distinta por guia, asi que cada una lleva su propia cuenta.
