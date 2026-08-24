---
name: nueva-guia
description: Use when the user wants a travel guide page for a new trip in this repo (new destinations, new travellers, "armar una guia", "otra pagina de viaje"). Runs an extended interview about who is travelling and what they like, then researches, generates, builds and publishes the guide in the same style as the existing ones.
---

# Nueva guia de viaje

Genera una guia como las que ya hay en este repo: una pagina sola, offline,
instalable, con buscador, filtros, marcado de visitados y tema claro y oscuro.

**No empieces a escribir contenido hasta terminar la entrevista.** Lo que hace
que estas guias sirvan no es la cantidad de lugares, es que esten elegidos para
esas personas concretas. Sin la entrevista sale una lista de TripAdvisor.

## 1. La entrevista

Una pregunta por vez. Espera la respuesta antes de la siguiente. Si una
respuesta es vaga ("lo que sea", "nos gusta todo"), repregunta con opciones
concretas en vez de aceptarla: la vaguedad se convierte despues en fichas
genericas.

Usa `AskUserQuestion` cuando haya dos o tres caminos claros, y texto normal
cuando la respuesta sea abierta. Al terminar cada bloque, resumi en una linea
lo que entendiste y segui.

### Bloque A: quienes viajan

Este bloque es el que mas se paga despues. Preguntalo entero.

- Nombres y que relacion tienen entre si (pareja, amigas, familia).
- **Genero de cada persona.** El castellano concuerda por defecto en masculino
  y eso misgenera. Si viajan dos mujeres, es "muertas de sueno", "entre las
  dos", "cada una". Preguntalo derecho, no lo deduzcas de los nombres.
- De donde son. Define el vocabulario: "valija" o "maleta", "celular" o
  "movil", "plata" o "dinero", "manejar" o "conducir".
- Que trato quieren: de ustedes, de vosotros, de vos, de tu.
- Quien lee la guia. Si es un regalo, el tono es el de quien la regala.

### Bloque B: el viaje

- Ciudades, y si el orden ya esta decidido.
- Ventana de fechas. Alcanza con el mes o la quincena; no hace falta el
  itinerario dia por dia y es mejor no inventarlo.
- Cuantos dias en cada ciudad, aunque sea aproximado.
- Como se mueven entre ciudades: avion, tren, o sin decidir.

### Bloque C: el ritmo

- Cuanto caminan en un dia normal y cuanto estan dispuestas a caminar.
- Madrugan o arrancan tarde.
- Prefieren pocas cosas con calma o muchas cosas por dia.
- Hay algun limite fisico que convenga tener en cuenta.

### Bloque D: transporte

- Metro, taxi, caminar: que prefieren y con que se sienten incomodas.
- Si les molesta el transporte publico lleno o de noche.
- Cuanto equipaje llevan, que cambia lo que conviene recomendar.

### Bloque E: comida

- Reparto entre barato, intermedio y caro. Pedi proporciones, no un numero.
- Restricciones: alergias, vegetarianismo, celiaquia, lo que sea.
- Cuanto se animan a probar cosas raras.
- Lugares que ya tienen decididos, con nombre. Estos van si o si.
- Si les importa la sobremesa o comen para seguir caminando.

### Bloque F: que les interesa

Pedi que repartan el peso, no que digan si a todo:

- Aire libre, parques y caminatas
- Museos y arte
- Espectaculos, musica, teatro
- Compras, mercadillos, outlets
- Comida como plan en si mismo
- Vida nocturna y bares
- Fotos y lugares fotogenicos
- Cosas de pelicula, series o libros

Y despues: **de que se aburren.** Es mas util que la lista de lo que les gusta.

### Bloque G: lo que ya esta decidido

Lugares, barrios, restaurantes o actividades que ya quieren si o si. Van
completos, aunque a vos te parezcan turisticos. No los discutas: son de ellas.

### Bloque H: lo practico

- Nivel de presupuesto general.
- Si hace falta la seccion de preparativos (ropa, botiquin, eSIM, equipaje) o
  si ya viajaron mucho y sobra.
- Si hay fechas fuertes en la ventana del viaje: Navidad, Black Friday,
  fiestas locales, algo que valga la pena avisar.

## 2. La investigacion

Recien ahora. Para cada ciudad, busca y verifica:

- Horarios, precios y fechas de temporada. Ponelos con el ano a la vista.
- Si algo no esta confirmado, marcalo con "previsto" y decilo.
- Direcciones concretas de los lugares con nombre. Un dato mal en una guia que
  se usa sin datos cuesta caro.
- Eventos de temporada dentro de la ventana de fechas.

Cuando algo caiga justo al filo de las fechas, avisalo en la ficha en vez de
darlo por hecho.

## 3. El contenido

Lee `.claude/skills/nueva-guia/estilo.md` antes de escribir la primera ficha.
Ahi estan las reglas de voz, que son la mitad del trabajo.

Copia la estructura de `_fuentes/eurotrip-serri-cami/` como referencia.

**`guia.json`**

```json
{
  "ruta": "carpeta-en-la-url",
  "titulo": "Como se llama la guia",
  "subtitulo": "Mes y ano",
  "descripcion": "Una linea, sin tildes (va en un meta).",
  "nombre_corto": "Para el icono del telefono",
  "color": "#7D4B6B",
  "letra": "E",
  "clave": "clave-unica-de-guardado",
  "cache": "ruta-aaaa-mm-dd-a",
  "partes": ["0-antes.js", "1-ciudad.js"]
}
```

`clave` tiene que ser distinta en cada guia: es la clave de localStorage de los
visitados y el dominio es compartido. `cache` se cambia en cada publicacion o
los telefonos siguen sirviendo la version vieja.

**Los archivos de contenido.** Cada uno es un objeto de ciudad que empieza con
`{` y termina con `},`. El build los concatena dentro de `const CITIES = [...]`.

```js
{
  id:'lon', nav:'Londres', name:'Londres', plate:'Underground',
  accent:'#A83A5B', lt:'#F2A3BA', maps:'London',
  lede:'Dos o tres frases sobre como se siente la ciudad en esas fechas.',
  quick:[ ['Se cena','18:30 a 20:00'], ['Tope diario','GBP 8,90'] ],
  sections:[
    {s:'Al aire libre', k:'aire', items:[
      {n:'Nombre', d:'Que es y por que ir.', t:'aire', p:'EUR', a:'Direccion',
       w:'https://...', tip:'El dato que no esta en las otras guias.'}
    ]}
  ]
}
```

- `accent` y `lt` son el color de la ciudad en tema claro y en oscuro. El claro
  tiene que contrastar 4.5 sobre `#FDF5F8` y el oscuro sobre `#221B22`.
- `t` sale de `_fuentes/comun/tipos.js`. Si agregas uno nuevo, agregalo ahi.
- `p` es `EUR`, `EUR EUR` o `EUR EUR EUR` con el simbolo real.
- `d` y `tip` admiten `<em>` y `<b>`; el resto del HTML se escapa.
- La seccion de preparativos usa `html:` con un template literal en vez de
  `items:`, y no aparece en los filtros.
- Los nombres de ficha tienen que ser unicos dentro de la ciudad: el id sale de
  ahi y dos iguales hacen que marcar una marque las dos.

### Hito, nota o ruta

Esta es la decision que mas se nota al usar la guia. **Antes de escribir cada
ficha, preguntate si es algo que se hace o algo que se lee.**

**Hito**: un sitio concreto al que se va. Lleva casilla para marcar y enlace a
Maps. Si el nombre de la ficha no sirve como busqueda ("Andén 9¾, King's
Cross", "Museo Sorolla: la casa del pintor"), agrega `m:'Consulta exacta,
Ciudad'` y el mapa usa eso en lugar del titulo.

**Nota** (`nota:1`): es un consejo, una costumbre o una recomendacion que
compara varias opciones. No lleva casilla ni mapa, y se ve con borde punteado.
Van aca los horarios de comida, como funciona el metro, las huelgas, las
propinas, "que museo vale la pena", las carteleras y las rebajas. Un mapa que
busca "Huelgas: comprobar antes de salir" no le sirve a nadie.

**Ruta** (`ruta:['Punto A, Ciudad','Punto B, Ciudad', ...]`): una caminata.
Genera un enlace de indicaciones a pie que Maps dibuja de verdad, con los
puntos intermedios. Sigue siendo un hito y se puede marcar. Usala siempre que
la ficha describa un recorrido o junte dos lugares que se caminan entre si; si
estan lejos y no tiene sentido caminarlos, es una nota, no una ruta.

La regla corta: **una ficha lleva enlace a mapa solo si apunta a un lugar
findable o a una caminata real. Si no, es nota.**

### El orden de las secciones

`mover`, `comer`, `cafe`, `coctel`, `aire`, `visita`, `navidad`, `compra`,
`evento`. Primero lo que se necesita para funcionar en la ciudad (como moverse
y donde comer) y despues lo que se elige hacer. La primera seccion aparece
abierta, asi que conviene que sea la mas util al llegar.

Ajusta el contenido a lo que dijeron en el bloque F: si no les interesan los
museos, esa seccion se achica, no se llena por simetria.

## 4. Construir y verificar

Agrega la ruta a `_fuentes/sitio.json` y corre:

```
python3 _fuentes/construir.py
```

El script corta solo si hay mojibake, tildes perdidas, rayas largas, recursos
externos, falta el `noindex` o el `robots.txt` no bloquea.

Eso no alcanza. Pasa tambien `verificacion.md`, que cubre lo que el script no
puede ver: ids duplicados, concordancia de genero, contraste y registro.

## 5. Publicar

Commit y push. GitHub Pages publica desde la raiz.

Espera a que el despliegue termine **comparando el commit**, no solo el estado,
y pedi la pagina con un parametro nuevo para saltarte la cache. Si mirás el
estado nada mas, agarras el build anterior y verificas la version vieja.

```bash
gh api repos/<owner>/<repo>/pages/builds/latest --jq '[.status, .commit] | @tsv'
```

El QR de cada guia queda en `<ruta>/qr.png` y tambien embebido en el pie de la
propia pagina. Pasale el link a quien viaja y deciles que la instalen **desde
casa con wifi**, porque la primera carga baja la guia entera.
