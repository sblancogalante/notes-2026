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
  consejos/                los consejos que comparten todas las guias
    general.js             cualquier viaje: documentos, vuelo, valija, eSIM...
    uruguay.js             saliendo de Uruguay: tarjetas, cuotas, permiso del ACU
    italia.js              una pestana por pais: pagar, manejar, trenes, idioma
    espana.js
  <guia>/
    guia.json              titulo, color, clave de guardado, idiomas, partes
    0-antes.js             la seccion de preparativos
    1-*.js ... n-*.js      una ciudad por archivo
```

Las carpetas que empiezan con guion bajo no se publican, asi que `_fuentes`
queda fuera del sitio.

## Consejos compartidos

Lo que sirve para cualquier viaje no se escribe en cada guia: vive una sola vez
en `_fuentes/consejos/` y cada guia elige que usa. Hay dos formas:

- **Secciones sueltas** (`general.js`, `uruguay.js`). Son una lista de
  secciones. La guia las declara en su `guia.json` y las suma a su capitulo de
  preparativos, despues de lo propio del viaje:

  ```json
  "consejos": ["general", "uruguay"],
  ```
  ```js
  sections:[
    {s:{es:'Las entradas, que ya estan', ...}},
    ...CONSEJOS.general,
    ...CONSEJOS.uruguay
  ]
  ```

- **Una pestana por pais** (`italia.js`, `espana.js`). Son un capitulo entero y
  se ponen en `partes` con una arroba: `"@italia"`. Lo que es de una ciudad
  sigue en el capitulo de la ciudad.

  Si a una guia le sobra una seccion de la pestana, se recorta solo para ella
  con `ajustes` en su `guia.json`, sin tocar el archivo compartido. `sin` lista
  el `k` de las secciones que no van y `lede` reemplaza la introduccion, que
  suele nombrar lo que se saco:

  ```json
  "ajustes": {
    "espana": { "sin": ["idioma"], "lede": "Lo que sirve en cualquier parte..." }
  }
  ```

Los consejos se escriben impersonales ("conviene", "se paga", "hay que") porque
cada guia le habla a gente distinta, y siempre en los dos idiomas: el build
corta si un archivo de `consejos/` tiene distinta cantidad de `es:` que de
`en:`. Una guia de un solo idioma lee el castellano y el ingles queda sin uso.

Al corregir un consejo compartido, se corrige en todas las guias que lo usan la
proxima vez que se construyen. Hay que cambiar la `cache` de cada una (ver
abajo) para que los telefonos lo bajen.

## Guias en dos idiomas

Una guia puede estar en castellano y en ingles a la vez. Se declara en su
`guia.json`:

```json
"idiomas": ["es", "en"],
"subtitulo_en": "3 to 25 October 2026",
```

El primero de la lista es el que se ve al abrirla. Con uno solo, el boton de
idioma no aparece y la guia queda exactamente como estaba.

En el contenido, cada texto traducible pasa de ser una cadena a ser un par:

```js
{n:{es:'El Duomo y su plaza', en:'The Duomo and its square'},
 d:{es:'La catedral con la fachada...', en:'The cathedral with its facade...'},
 t:'visita', w:'https://duomo.firenze.it/'}
```

Una cadena suelta sigue valiendo y se usa para los dos idiomas: los nombres
propios, las direcciones, las duraciones y los numeros de vuelo no se traducen.
Lo que lleva par es `nav`, `name`, `lede`, `quick`, el `s` de cada seccion, el
`html`, y de cada ficha `n`, `d` y `tip`.

Lo marcado como visitado es el mismo en los dos idiomas: la clave sale siempre
de la variante en castellano. El idioma elegido se guarda en el navegador, igual
que el tema.

`construir.py` corta si una guia bilingue tiene distinta cantidad de `es:` que
de `en:`, que es la forma de agarrar la ficha nueva agregada en un solo idioma.

## Como se abre una guia

Cada guia se publica en una carpeta con el nombre que figura en `ruta`, dentro
de su `_fuentes/<guia>/guia.json`. Hoy son estas:

```
eurotrip-serri-cami/     Eurotrip Serri y Cami
italia-espana-2026/      Santi y Vale en Italia y España
madrid-sevilla-granada-2026/   Madrid, Sevilla y Granada
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

## Bitacora de cambios

`BITACORA.md` lleva el historial: que cambio en cada commit, que se corrigio y
que se saco del plan. La pagina publicada muestra solo el plan vigente, asi
que las correcciones y los descartes se anotan ahi y no en el contenido de la
guia.

## Como se reconstruye

```
python3 -m venv .venv && .venv/bin/pip install segno pillow   # la primera vez
.venv/bin/python3 _fuentes/construir.py
```

**Cada vez que cambia el contenido de una guia, o algo de `comun/` o de
`consejos/` que esa guia usa, hay que cambiar su `cache` en `guia.json`.** El
service worker sirve primero la copia guardada en el telefono y solo la
descarta cuando cambia esa clave: sin el cambio, la pagina se publica pero los
telefonos siguen mostrando la version vieja.

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
