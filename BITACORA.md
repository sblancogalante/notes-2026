# Bitacora

Historial de cambios de las guias. La pagina publicada muestra solo el plan
vigente: lo que se saco, lo que se corrigio y por que queda anotado aca.

El formato es una entrada por commit, de la mas nueva a la mas vieja.

## italia-espana-2026

### 2026-10-13

Dia de Cinque Terre, con la guia en uso.

**`734c5f1` fix: la cache del service worker cambia para que los telefonos bajen la guia nueva**

Los telefonos seguian mostrando la version de `f8885dd`. La clave de cache
se habia cambiado solo en ese commit, y `0fecec4`, `8a4f8cb` y `dc885ee`
publicaron contenido nuevo con el mismo `sw.js`. Como el service worker sirve
primero la copia guardada y solo la descarta cuando cambia la clave, el
telefono no tenia como enterarse. La regla: **cada commit que cambia el
contenido de una guia cambia tambien su `cache` en `guia.json`**.

**`dc885ee` fix: el turno de Julieta a las 16:00 ya esta sacado**

Sacado la noche del 13. Salio la alternativa para un turno de las 16:30, y
en Traslados lo mas urgente paso a ser el dato de Linate o Malpensa.

**`8a4f8cb` feat: Verona se camina por fuera, con Julieta y el Ponte Pietra como fijos**

Salio la Arena por dentro, y con ella la entrada de 12 euros: se ve desde
Piazza Bra. Castel San Pietro dejo de ser una subida y quedo como la foto
desde el Ponte Pietra. La tarde se volvio una vuelta a pie que pasa por
fuera de todo y suma Via Sottoriva, Sant'Anastasia, el Duomo, Porta Borsari,
Corso Cavour y Castelvecchio con el Ponte Scaligero. La nota de que se toma
en el Veneto salio, porque el plan no tiene paradas para sentarse.

La vuelta termina 17:20, asi que la salida a Milan se adelanto a 17:30 y la
llegada a cerca de las 20:00. El limite de las 18:00 no cambio.

**`0fecec4` fix: Verona a paso rapido y la salida pensada para la hora pico de Milan**

Correccion de un calculo del commit anterior: el tramo de Verona a Milan se
habia contado en 1h55, que es lo que tarda con la ruta libre, y se salia a las
18:15. A esa hora se entra a Milan con la hora pico, que en la ciudad anda a
mas de 38 minutos cada 10 km segun TomTom, y la A4 entre Brescia y Milan va
cargada. Ahora se cuentan dos horas y media: salida 17:45, limite 18:00,
llegada cerca de las 20:15. Salir antes no ayuda, porque se entraria a Milan
en lo peor de la hora pico.

El almuerzo bajo de hora y media a una hora y diez. Verona quedo de 15:10 a
17:40 a paso rapido, con el turno de Julieta a las 16:00 en vez de 16:30 y
Castel San Pietro adentro del plan.

**`f8885dd` feat: el miercoles 14 pasa por el Ferrari, Persiceto y Verona**

El martes entraron cuatro pueblos en la tarde, Riomaggiore, Manarola,
Vernazza y Monterosso, y no dos. Con eso se cayo la manana del miercoles en
"el pueblo que falte" y el dia se rearmo entero: check out 7:15, salida 7:45,
museo a las 9:45 y Verona a la tarde, camino a Milan. La mesa del Mirasole se
movio por telefono de las 13:45 a las 12:30, que es lo que le da a Verona dos
horas y media en vez de una. La entrega del auto sigue calculada contra el
cierre de la oficina, 21:00: salida de Verona 18:15, limite 18:30, llegada
cerca de las 20:15.

Verona entro como capitulo propio. La Casa de Julieta cambio en 2026: desde el
1 de abril el patio se visita solo con turno reservado, 5 euros el patio y 12
con la casa, verificado en el sitio del municipio. El centro de Modena, que
habia vuelto al plan con la mesa de las 13:45, quedo como alternativa si el
museo se hace en una hora.

Se sacaron la ficha de los dos pueblos salteados, el miercoles de Cinque
Terre, las dos fichas de los trenes del 14, que seguian ahi desde antes de
quedarnos con el auto, y la de devolver el auto en La Spezia en la Toscana.
Cinque Terre ahora termina el 13, asi que el 14 la guia abre en Modena.

### 2026-10-10

Dia 2 de la Toscana, con la guia ya en uso. Nueve commits en el dia.

**`0c08930` fix: la oficina abre hasta las 21:00, el auto se entrega el miercoles**

Correccion de una conclusion equivocada del commit anterior. Se habia tomado
el horario de dos sucursales de barrio de Europcar en Milan, Viale Espinasse y
Viale Umbria, que cierran 18:00 y 18:30, y se habia aplicado a la oficina de
Via Galvani 12, que es la que recibe en Vittor Pisani 19. No es la misma: es
oficina de estacion y abre de lunes a sabado de 7:30 a 21:00, domingos hasta
las 20:00, verificado en dos fuentes. Llegando 19:45 el auto se entrega esa
misma noche, asi que se cayo la noche de garage y los 36,40 euros que el
commit anterior habia agregado.

Se sumo la letra chica de la devolucion, que no estaba: tolerancia de 29
minutos, despues un dia entero de alquiler; por cada dia de demora un dia mas
50 euros de penalidad; la entrega fuera de horario es un servicio aparte que
hay que pedir al reservar.

**`fbb1d57` feat: la manana del miercoles queda en Cinque Terre y el museo pasa a la tarde**

El dia 14 se dio vuelta alrededor de la reserva de las 13:45: manana libre en
los pueblos con cierre a las 10:30, almuerzo, museo a las 16:00 de vuelta
hacia Milan. Antes el museo iba a la ida, a las 10:15. Se saco del plan la
visita al centro historico de Modena, que con el museo a la tarde no entra.

**`7d73417` feat: el auto se queda hasta Milan, y el miercoles 14 se rearma entero**

El plan original devolvia el auto en La Spezia el martes 13 y seguia en tren.
Ahora el auto acompana hasta Milan. Cambios: estacionamiento en La Spezia en
vez de devolucion, el miercoles en auto y no en tren, un solo museo en Modena
en vez de la eleccion entre dos, y la devolucion en Vittor Pisani 19.

De Modena se saco la seccion que comparaba los dos museos y las fichas de
Maranello y del ticket combinado, porque Maranello no entra en el dia.

**`acc130b` feat: sin Bagno Vignoni, y el almuerzo pasa a Pienza en horario de cocina**

Bagno Vignoni salio del itinerario del domingo. La hora que ocupaba se
reparti: Pienza paso a ser el almuerzo a las 13:25, dentro del servicio de
cocina, Montepulciano subio a 1h40 y Montalcino a 1h25. La ficha de Bagno
Vignoni se mantuvo como parada opcional.

**`b243a05` fix: en Saturnia alquilan toallas, y la enoteca de Montalcino abre el domingo**

Tres dudas practicas verificadas. El bar que esta a cien metros del agua en
Saturnia tiene vestuarios, duchas a 1 euro la ficha, lockers a 5 euros y
alquiler de toallas y batas. El estacionamiento pago tiene tarifa de 4 euros
el dia. La enoteca de la fortaleza de Montalcino abre el domingo hasta las
20:00.

**`e8a3471` feat: Saturnia es la primera parada del domingo y entra todo**

Correccion de un numero que estaba mal y que habia llevado a una conclusion
equivocada. Se habia dicho que Saturnia estaba a 2h20 del hotel citando un
router publico que, validado contra cuatro tramos ya verificados, corre entre
10 y 35 minutos de mas. Son unas dos horas, 152 km. Con ese numero el dia
cierra con Saturnia primero y todo lo demas de vuelta.

Bagni San Filippo salio del domingo: es lo mismo que Saturnia dos horas
despues. Quedo como plan B. La caminata de un kilometro a la capilla de
Vitaleta tambien salio; la capilla se mira desde la banquina.

**`a929267` feat: el domingo se lee como un recorrido, y la Val d'Orcia existe**

La Val d'Orcia figuraba en el titulo del domingo y en ninguna parada. Se
agrego una seccion con una ficha por punto: el campo de Terrapille donde se
filmo la escena del Eliseo, la capilla de Vitaleta, la casa de Maximo en
Poggio Manzuoli, que es el punto que Google Maps llama el set del Gladiador,
San Quirico y el Podere Belvedere. El dia paso a tener las paradas en orden
con su hora y su tramo.

**`05bd292` fix: las tarifas de estacionamiento, verificadas contra la fuente**

Cuatro tarifas que se habian escrito sin fuente, verificadas contra el
municipio y los operadores. Tres estaban mal: el P3 y el P4 de San Gimignano
cuestan 2,50 las dos primeras horas y 2 las siguientes, no 2 planas; el Park
Odeon de Livorno es 1 euro la hora con tope de 8, no 2; y de Castiglioncello
se afirmaba que fuera de temporada no se cobra, que no se pudo confirmar. El
P1 de San Gimignano baja a 6 y a 5 euros en los dias seguidos, que faltaba.

**`0fd5aaf` feat: la guia abre en el dia de hoy, y la Toscana suma mar, vino y parkings**

El cambio de mecanica: cada capitulo declara su rango de fechas, el plan se
parte por dia y la guia abre sola en la ciudad y el dia que corresponde, con
chips para moverse a cualquier otro. Va en los nueve capitulos.

La Toscana sumo la seccion de estacionamientos con mapa y Waze, las bodegas
verificadas, el dia de mar del lunes y Pisa con Forte dei Marmi el martes.
Volterra paso al sabado, que es cuando se hizo.

### 2026-10-02

**`65296fa` feat: la guia se puede leer en ingles, y una pestana de italiano**

Modelo de contenido bilingue: cada texto traducible pasa a ser un par
`{es, en}`. Una cadena suelta sigue valiendo para los dos idiomas.

### 2026-09-13

**`c3a575c` fix: sacar la ficha de la Galeria de la Academia**

**`bc60311` fix: sin la cupula de Brunelleschi, y Florencia se arma alrededor de caminar**

**`fadebae` fix: el Duomo de Milan es de 9:00 a 9:30 y las terrazas vienen incluidas**

**`f56ed01` feat: los recuadros de cada pestana toman el color de esa ciudad**

## Como se usa esta bitacora

Las correcciones y los descartes van aca y no en la guia. En la pagina, una
ficha que ya no es parte del plan se saca; una alternativa que sigue siendo
util se escribe como alternativa y no como "lo que quedo afuera".

Para ver que cambio en un commit concreto:

```
git show <hash>
```
