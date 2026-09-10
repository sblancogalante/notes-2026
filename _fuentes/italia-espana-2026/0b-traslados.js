{
  id:'via', nav:'Traslados', name:'Los traslados', plate:'Itinerario',
  accent:'#C2410C', lt:'#FDBA74', maps:'',
  lede:'Catorce movimientos en veintitrés días: cinco vuelos, cinco tramos de tren, cuatro días de auto y los traslados de aeropuerto. Acá está cada uno, cuánto dura, cuál ya está sacado y cuándo conviene sacar el resto.',
  quick:[
    ['Vuelos','5, todos sacados'],
    ['Trenes','5 tramos, el de Florencia sacado'],
    ['Auto','Vie 9 a mar 13, sin reservar'],
    ['El día más frágil','Mié 14, La Spezia a Milán'],
    ['Lo más urgente','Reservar el auto']
  ],
  sections:[
  {s:'Todo de un vistazo', k:'plan',
   legs:[
     {d:'2026-10-03', w:'Sáb 3',  t:'Montevideo a Madrid',            c:'Air Europa, nocturno',      dur:'~12 h',      e:'Sacado'},
     {d:'2026-10-04', w:'Dom 4',  t:'Madrid a Roma',                  c:'Air Europa',                dur:'~2h30',      e:'Sacado'},
     {d:'2026-10-04', w:'Dom 4',  t:'Fiumicino a Navona',             c:'Taxi o Leonardo Express',   dur:'~40 min',    e:'Se resuelve ahí'},
     {d:'2026-10-08', w:'Jue 8',  t:'Roma a Florencia',               c:'Tren, 9:20 de Termini',     dur:'1h30',       e:'Sacado'},
     {d:'2026-10-09', w:'Vie 9',  t:'Florencia a San Gimignano',      c:'Auto, retiro en Peretola',  dur:'~1h15',      e:'Falta'},
     {d:'2026-10-13', w:'Mar 13', t:'San Gimignano a La Spezia',      c:'Auto, y se devuelve',       dur:'~2h15',      e:'Falta'},
     {d:'2026-10-13', w:'Mar 13', t:'La Spezia y Cinque Terre',       c:'Tren regional',             dur:'5 a 20 min', e:'Se compra ahí'},
     {d:'2026-10-14', w:'Mié 14', t:'La Spezia a Módena',             c:'Tren, cambio en Parma',     dur:'~3 h',       e:'Falta'},
     {d:'2026-10-14', w:'Mié 14', t:'Módena a Milán',                 c:'Tren directo',              dur:'~1h45',      e:'Falta'},
     {d:'2026-10-16', w:'Vie 16', t:'Milán a Varenna, ida y vuelta',  c:'Tren regional',             dur:'~1h05 ida',  e:'Se compra ahí'},
     {d:'2026-10-17', w:'Sáb 17', t:'Milán a Barcelona',              c:'IB 5543',                   dur:'~1h45',      e:'Sacado'},
     {d:'2026-10-18', w:'Dom 18', t:'Barcelona a Sevilla',            c:'IB 5064',                   dur:'~1h45',      e:'Sacado'},
     {d:'2026-10-24', w:'Sáb 24', t:'Sevilla a Córdoba, si vamos',    c:'AVE, ida y vuelta',         dur:'0h45',       e:'Falta, opcional'},
     {d:'2026-10-25', w:'Dom 25', t:'Sevilla a Madrid y a Montevideo',c:'Air Europa, nocturno',      dur:'~13 h',      e:'Sacado'}
   ],
   html:`
      <p>Antes del viaje está todo pendiente y la lista arranca limpia. Durante el viaje, cada tramo se marca solo cuando pasa la fecha, y el de arriba muestra por cuál vamos. Cualquier fila se puede tocar para corregirla.</p>
      <h3>Lo que falta</h3>
      <ul>
        <li>Los cinco vuelos y el tren a Florencia ya están.</li>
        <li>El <b>auto</b> es lo único pendiente de verdad, y lo que más sube de precio con el tiempo.</li>
        <li>Los dos trenes del miércoles 14 se compran casi sobre la fecha.</li>
        <li>El AVE a Córdoba, solo si hacemos la excursión.</li>
      </ul>
      <h3>Los dos días para mirar con lupa</h3>
      <ul>
        <li>El <b>miércoles 14</b> es el frágil: tres horas de tren con un cambio, un museo en el medio y dos horas más de tren, con las valijas encima. Si se cae el primer tramo, se cae el día. Hay que dejar margen entre combinaciones y no tomar la conexión más ajustada de la app.</li>
        <li>El <b>sábado 17</b> depende de un dato que falta: si el IB 5543 sale de Linate o de Malpensa. Son más de una hora de diferencia en el traslado, así que hay que confirmarlo antes de fijar a qué hora salimos del hotel.</li>
      </ul>
    `},

  {s:'Cuándo sacar cada cosa', k:'plan', html:`
      <h3>El orden</h3>
      <p>Comprar de más con demasiada anticipación también cuesta plata. El orden que sirve:</p>
      <ul>
        <li><b>Primero lo que se agota</b>, que no son traslados: los Uffizi y la Última Cena de Milán (el Coliseo ya está sacado). Está en el capítulo de preparativos y es lo único con fecha límite de verdad.</li>
        <li><b>El auto</b>, tres o cuatro meses antes y con tarifa cancelable. El precio de los alquileres sube fuerte cerca de la fecha y después no baja.</li>
        <li><b>Los trenes de larga distancia.</b> El de Roma a Florencia ya está. Para los tramos del miércoles 14, mirar si aparece un tren rápido en vez de regional: si aparece, sacarlo con tiempo, porque es de tarifa dinámica.</li>
        <li><b>El resto, nada.</b> Regionales, tranvía de Florencia, trenes de Cinque Terre y del lago de Como se compran el mismo día o la noche anterior.</li>
      </ul>
      <h3>Por qué los regionales no se compran antes</h3>
      <ul>
        <li>Tienen <b>precio fijo</b>: cuesta lo mismo hoy que el día del viaje, no hay asiento asignado y muchas veces el boleto vale para cualquier tren de esa jornada. Sacarlo con meses de anticipación no ahorra un centavo y nos ata a un horario.</li>
        <li>Los de <b>alta velocidad</b> funcionan como un avión: las tarifas baratas se agotan y el precio sube a medida que se llena el tren. Ahí, cuanto antes mejor.</li>
      </ul>
      <h3>Trenitalia o Italo</h3>
      <ul>
        <li>Compiten en las mismas rutas rápidas, Roma a Florencia entre ellas. Italo suele salir algo más barato y usa las mismas estaciones. Vale mirar las dos apps antes de comprar.</li>
        <li>Las tarifas más baratas de las dos <b>no se cambian ni se devuelven</b> y el boleto es nominativo. Si hay chance de mover el horario, la tarifa del medio permite cambio pagando poco y suele compensar.</li>
      </ul>
    `},

  {s:'Los vuelos, que ya están', k:'mover', items:[
    {nota:1, m:'Aeropuerto Internacional de Carrasco, Montevideo', n:'Sáb 3: Montevideo a Madrid', d:'Air Europa, nocturno. Es el tramo largo y el que define cómo llegamos el domingo a Roma.', t:'mover', tip:'En el check in de Montevideo, confirmar si las valijas van facturadas hasta Roma o hay que retirarlas en Madrid, y en qué terminal es la conexión. Son dos vuelos de la misma compañía, pero preguntarlo igual.'},
    {nota:1, m:'Aeropuerto Adolfo Suarez Madrid Barajas', n:'Dom 4: Madrid a Roma', d:'Air Europa. Es la conexión, y Barajas es grande: entre terminales puede haber un tren interno y bastante caminata.', t:'mover', tip:'Acá entramos a Schengen, así que el control de pasaportes se hace en Madrid, no en Roma. Si la escala es corta, ir directo al control apenas bajamos y dejar el café para después.'},
    {nota:1, n:'Sáb 17: Milán a Barcelona, IB 5543', d:'El vuelo está sacado, pero falta el dato clave: Linate o Malpensa. Linate está pegado a la ciudad y lo conecta la línea M4 del metro en unos veinte minutos. Malpensa está a cuarenta y cinco kilómetros, unos cincuenta minutos en el Malpensa Express.', t:'mover', tip:'Mirarlo en la reserva y anotarlo acá. Si es Malpensa, hay que salir del hotel más de una hora antes de lo que uno calcularía, y sacar el boleto del tren la noche anterior.'},
    {nota:1, m:'Aeropuerto Josep Tarradellas Barcelona El Prat', n:'Dom 18: Barcelona a Sevilla, IB 5064', d:'Un vuelo corto de mediodía que deja la mañana libre en Barcelona.', t:'mover', tip:'Los vuelos de Iberia dentro de España muchas veces los opera otra compañía del grupo, con reglas de equipaje de mano más estrictas. Mirar la franquicia real en la reserva antes de armar la valija en Milán.'},
    {nota:1, m:'Aeropuerto de Sevilla', n:'Dom 25: Sevilla a Madrid y a Montevideo', d:'Vuelo nocturno con conexión en Madrid. El día queda entero en Sevilla.', t:'mover', tip:'Esa madrugada cambia la hora en Europa y los relojes se atrasan. El teléfono se ajusta solo, pero mirarlo dos veces contra el horario del pasaje. El aeropuerto de Sevilla es chico: con dos horas antes alcanza, y por ser conexión internacional yo no bajaría de eso.'},
    {nota:1, n:'El check in y el equipaje', d:'Los cinco vuelos están sacados, así que queda el check in online, que abre entre veinticuatro y cuarenta y ocho horas antes según la compañía.', t:'mover', tip:'Hacerlo apenas abre y bajar las tarjetas de embarque al teléfono, no dejarlas en el mail. Si alguna valija de cabina está al límite, despacharla comprando el extra online sale bastante menos que en el mostrador.'}
  ]},

  {s:'Los trenes', k:'mover', items:[
    {nota:1, m:'Roma Termini', n:'Jue 8: Roma a Florencia', d:'Alta velocidad, una hora y media, 9:20 de Termini. Ya está sacado, así que solo queda llegar a horario.', t:'mover', tip:'Del hotel a Termini son unos veinte minutos en taxi con valijas: salimos 8:15 y estamos cuarenta minutos antes. Termini es enorme y la vía se anuncia con poca anticipación en el cartel general, así que mejor esperar adentro con un café. Llevar el QR bajado al teléfono: se valida solo.'},
    {nota:1, m:'La Spezia Centrale', n:'Mar 13: los trenes de Cinque Terre', d:'El Cinque Terre Express sale de La Spezia Centrale y para en los cinco pueblos, cada quince o treinta minutos.', t:'mover', res:'no', tip:'Se saca en la máquina de la estación el mismo día, o la tarjeta de un día si vamos a hacer tres o cuatro viajes. Si el boleto es de papel, validarlo en la maquinita del andén antes de subir.'},
    {nota:1, m:'La Spezia Centrale', n:'Mié 14: La Spezia a Módena', d:'Unas tres horas con un cambio, casi siempre en Parma. No hay tren directo, así que es la combinación más delicada del viaje.', t:'mover', res:'conviene', tip:'Elegir en la app una combinación con margen entre tren y tren, no la más ajustada. Si el segundo tramo lo hace un tren rápido, comprarlo antes; si son los dos regionales, se compran ese mismo día. Salir temprano, 7:30 u 8:00.'},
    {nota:1, m:'Stazione di Modena', n:'Mié 14: Módena a Milán', d:'Poco menos de dos horas, con servicios directos a Milano Centrale. Último tramo de un día largo.', t:'mover', res:'no', tip:'Si es regional, se compra en Módena el mismo día. Mirar antes a qué hora es el último servicio cómodo, para saber hasta cuándo estirar el museo.'},
    {nota:1, m:'Milano Centrale', n:'Vie 16: Milán a Varenna, ida y vuelta', d:'Poco más de una hora en tren regional hasta Varenna-Esino, por la orilla del lago. La estación queda a diez minutos a pie del puerto.', t:'mover', res:'no', tip:'Se compra el mismo día en la máquina o en la app. Antes de salir hay que mirar el horario del último ferry de vuelta a Varenna y el del último tren cómodo a Milán: quedarse del otro lado del lago sin barco es caro de resolver.'},
    {nota:1, m:'Estacion de Sevilla Santa Justa', n:'Sáb 24: Sevilla a Córdoba, si vamos', d:'Cuarenta y cinco minutos en AVE, ida y vuelta en el día. Solo si elegimos la excursión del sábado.', t:'mover', res:'conviene', tip:'Renfe funciona como los aviones: comprando con semanas de anticipación sale bastante menos que en la ventanilla. La decisión de ir o no conviene tomarla unas semanas antes, justo por el precio.'},
    {nota:1, n:'Cómo se viaja en tren en Italia', d:'Los de alta velocidad tienen asiento asignado y se validan solos con el QR del teléfono. Los regionales no tienen asiento y, si el boleto es de papel, hay que validarlo en la maquinita del andén antes de subir.', t:'mover', tip:'Subir a un regional con boleto sin validar es multa, y los inspectores existen. Comprado por la app con fecha y hora ya va validado. Las valijas van en los estantes de las puntas del vagón: subir por la puerta cercana al asiento.'},
    {nota:1, n:'El tranvía de Florencia', d:'El T2 une Santa Maria Novella con el aeropuerto de Peretola en unos veinte minutos. Es cómo llegamos a buscar el auto el viernes 9.', t:'mover', tip:'Boleto en la máquina del andén o por app, y validarlo al subir. Pasa seguido y tiene lugar para valijas: se toma el que venga.'}
  ]},

  {s:'El auto: cuándo sacarlo y cuándo devolverlo', k:'mover', items:[
    {nota:1, n:'Cuándo retirarlo, y por qué no antes', d:'El auto se retira el <b>viernes 9 a media mañana</b>, después de ver el Duomo y de buscar las valijas en el hotel. No el jueves 8 al llegar a Florencia.', t:'mover', tip:'Retirarlo el jueves es pagar un día más por un auto que va a dormir en un estacionamiento caro, adentro de la ZTL de Florencia, que es la peor zona de Italia para tener un auto parado. Un día menos de alquiler y cero riesgo de multa.'},
    {nota:1, m:'Aeroporto di Firenze Peretola', n:'Vie 9: retirar el auto en Peretola', d:'El aeropuerto de Florencia tiene todas las rentadoras juntas, está afuera de la ciudad y sale directo a la autopista rumbo a Siena y San Gimignano, sin cruzar ninguna cámara de ZTL.', t:'mover', res:'si', tip:'Se llega en tranvía T2 desde Santa Maria Novella en veinte minutos con las valijas. Llevar los dos documentos, la licencia uruguaya y el permiso internacional del ACU, que no se reemplazan entre sí. Y la tarjeta de crédito del conductor, con límite disponible para el depósito en garantía.'},
    {nota:1, n:'Cuándo devolverlo: el martes 13, al llegar a La Spezia', d:'El plan por defecto es devolverlo el <b>martes 13 apenas llegamos a La Spezia</b>, antes de hacer nada más. A Cinque Terre no se entra en auto, y el miércoles nos vamos en tren.', t:'mover', tip:'A partir del martes al mediodía el auto solo sirve para pagar estacionamiento en una ciudad donde estacionar es caro y difícil. Son cuatro días de alquiler, del viernes 9 al martes 13. La otra opción, quedárselo hasta Milán, está en la sección de abajo.'},
    {nota:1, n:'La devolución, paso a paso', d:'Es un alquiler de una punta a la otra, con cargo por devolver en otra ciudad. Hay que tener la dirección exacta de la oficina de La Spezia y su horario, porque muchas cierran al mediodía.', t:'mover', tip:'Llegando cerca de las 11 estamos bien, pero confirmarlo al reservar. Devolver con el tanque como lo entregaron, y antes de dar las llaves sacar fotos de los cuatro lados del auto y del tablero con el nivel de combustible. Es lo único que sirve si después aparece un cargo por un rayón que no hicimos.'},
    {nota:1, n:'Qué reservar, y con cuánta anticipación', d:'Tres o cuatro meses antes, siempre con tarifa que permita cancelar gratis. El precio sube fuerte cerca de la fecha y prácticamente no baja.', t:'mover', tip:'Como es cancelable, volver a mirar precios un mes antes: si bajó, se reserva de nuevo y se cancela la anterior. Y comparar el cargo por devolver en otra ciudad entre empresas, que es donde más se diferencian.'},
    {nota:1, n:'Caja automática y conductor adicional', d:'En Italia lo estándar es la manual. El automático se paga bastante más y hay que pedirlo al reservar, porque hay pocos.', t:'mover', tip:'Si vamos a manejar los dos, hay que declarar al segundo conductor y pagarlo. Si maneja alguien no declarado y pasa cualquier cosa, el seguro no cubre nada. Con las carreteras de la Toscana y cuatro días de auto, poder alternar vale la plata.'},
    {nota:1, n:'El auto que conviene', d:'Chico. Las calles de los pueblos toscanos son angostas, los estacionamientos también, y un auto grande es un problema en cada maniobra.', t:'mover', tip:'Verificar que entren las dos valijas en el baúl, porque en los modelos más chicos no entran; si la categoría dice "dos valijas grandes", alcanza. Y al retirarlo, confirmar si carga nafta o gasoil: equivocarse arruina el motor y no lo cubre ningún seguro.'},
    {nota:1, n:'Los tramos que manejamos', d:'Tres: Florencia a San Gimignano el viernes 9, poco más de una hora; los paseos de la Toscana del sábado al lunes, de media hora a hora y media cada uno; y San Gimignano a La Spezia el martes 13, unas dos horas y cuarto.', t:'mover', tip:'No son muchos kilómetros, así que el kilometraje ilimitado no es imprescindible, aunque casi siempre viene incluido. Lo que importa es salir temprano el martes, sobre las 8:30, para llegar a La Spezia con la tarde entera.'}
  ]},

  {s:'Quedarse el auto hasta Milán y Como', k:'mover', html:`
      <p>El plan por defecto devuelve el auto en La Spezia el martes 13. La alternativa es quedárselo hasta el sábado 17: dejarlo parado en La Spezia los dos días de Cinque Terre, usarlo el miércoles 14 para ir a Módena y llegar a Milán, y el viernes 16 para el día del lago. No para moverse dentro de las ciudades, solo para los traslados entre una y otra.</p>
      <p>Funciona, y para el día de Módena y el del lago es cómodo tener el auto. Pero suma costo y fricción, y por eso no es lo que recomendaría. Esto es lo que cambia, por rubro.</p>
      <h3>Plata</h3>
      <ul>
        <li>Cuatro días más de alquiler, del 13 al 17.</li>
        <li>El cargo por devolver en otra ciudad crece con la distancia, y devolver en Milán o en un aeropuerto suele tener un recargo aparte.</li>
        <li>Dos noches de estacionamiento en el hotel de Milán, entre veinticinco y cuarenta euros cada una.</li>
        <li>El estacionamiento en La Spezia mientras estamos en Cinque Terre, un día entero de garage.</li>
        <li>El <b>Área C</b> de Milán: 7,50 euros por entrar al centro un día hábil, y el miércoles 14 lo es. El hotel está en el borde de esa zona.</li>
        <li>Peajes y nafta de los cuatro tramos, que entre dos personas cuesta parecido a los boletos de tren.</li>
      </ul>
      <h3>Vueltas</h3>
      <ul>
        <li>El <b>Área B</b> de Milán cubre casi toda la ciudad y rige de lunes a viernes. Un auto de alquiler nuevo cumple la norma y pasa, pero hay que confirmarlo al retirarlo y, si la patente es extranjera y la cámara no la reconoce, registrarla antes en el sitio oficial. La multa arranca en ochenta euros.</li>
        <li>En <b>Varenna</b> el estacionamiento es escaso y caro: el playón de la estación tiene unas ochenta plazas, cuesta veinte euros el día y se llena; el garage del pueblo tiene rampas angostas que rayan autos. Varenna está sobre la línea de tren de Milán, y por eso todo el mundo recomienda el tren.</li>
        <li>El auto queda sin usar el martes y el miércoles en Cinque Terre, y de nuevo el viernes de noche y el sábado hasta que lo devolvemos.</li>
        <li>El estacionamiento del hotel de Milán hay que resolverlo antes de llegar, no improvisarlo.</li>
      </ul>
      <h3>Tiempo</h3>
      <ul>
        <li>La Spezia a Módena y de ahí a Milán en auto empata con el tren una vez que se suma estacionar en Módena y entrar a Milán en hora pico.</li>
        <li>En tren, el Museo Enzo Ferrari queda a quince minutos a pie de la estación de Módena: se baja y se camina.</li>
        <li>El día del lago es más rápido en auto solo si el estacionamiento sale bien, y en Varenna muchas veces no sale.</li>
      </ul>
      <h3>Si igual se hace</h3>
      <p>La jugada menos mala no es quedarse este auto toda la semana, sino alquilar uno aparte y chico donde de verdad sirve: medio día desde la estación de Módena para los dos museos Ferrari, o un día desde Milán para el lago. Sale menos, no tiene cargo por devolución en otra ciudad y no nos mete en Milán con el auto grande de la Toscana. El detalle de Módena está en el capítulo de esa ciudad.</p>
    `},

  {s:'Del aeropuerto al centro y al revés', k:'mover', items:[
    {nota:1, n:'Roma, domingo 4', d:'Desde Fiumicino hay dos opciones sensatas: el Leonardo Express, directo a Termini en poco más de media hora, o el taxi, con tarifa fija hasta el centro histórico.', t:'mover', tip:'Llegando de un vuelo largo y con el hotel en Navona, el taxi vale la pena: el tren nos deja en Termini y de ahí igual hay que llegar. La tarifa fija es por viaje, no por persona: confirmar el número antes de subir y tomar solo los taxis blancos de la fila oficial, nunca a alguien que se acerque dentro de la terminal.'},
    {nota:1, n:'Milán, sábado 17', d:'Depende del aeropuerto. De Linate, la línea M4 del metro llega al centro en unos veinte minutos. De Malpensa, el Malpensa Express sale de Cadorna y de Centrale y tarda unos cincuenta.', t:'mover', tip:'El hotel está a diez minutos a pie de Cadorna, así que si es Malpensa, el tren desde ahí es lo más simple. Sacar el boleto la noche anterior y salir con margen: es el traslado más largo de los cinco.'},
    {nota:1, n:'Barcelona, sábado 17 y domingo 18', d:'El Aerobús une el aeropuerto con Plaça Catalunya en unos treinta y cinco minutos, sale cada pocos minutos y tiene bodega para valijas. La línea L9 Sud del metro también llega, más barata y más lenta.', t:'mover', tip:'Con el hotel a diez minutos de Plaça Catalunya, el Aerobús es lo más directo en los dos sentidos. Si el vuelo sale de la T1, ojo que el bus para primero en la T2.'},
    {nota:1, n:'Sevilla, domingo 18 y domingo 25', d:'El aeropuerto está a unos diez kilómetros del centro. Hay un bus especial que llega a Plaza de Armas y taxi con tarifa fija.', t:'mover', tip:'Con las valijas de tres semanas y yendo a un apartamento, el taxi es lo razonable. Confirmar la tarifa fija al subir, que cambia según el día y la hora. Para la vuelta del domingo 25 de noche, pedirlo con anticipación o usar Cabify.'},
    {nota:1, n:'Florencia y La Spezia', d:'A Florencia llegamos en tren y salimos en auto; a La Spezia llegamos en auto y salimos en tren. En ninguna hace falta un traslado de aeropuerto.', t:'mover', tip:'En las dos, del alojamiento a la estación se va caminando o con un taxi corto. En Florencia son diez minutos a pie hasta Santa Maria Novella.'}
  ]},

  {s:'Cuando algo sale mal', k:'mover', items:[
    {nota:1, n:'Las huelgas de transporte en Italia', d:'Los <em>scioperi</em> de trenes, buses o aviones son habituales y no son sorpresa: se anuncian con al menos diez días de anticipación, tienen día y horario definidos, y hay franjas con servicio garantizado.', t:'mover', tip:'Mirar el calendario oficial de huelgas del ministerio de transporte italiano una semana antes de cada tramo importante, sobre todo antes del jueves 8 y del miércoles 14. Si cae huelga ese día, se mueve el horario dentro de la franja garantizada. En España pasa lo mismo y también se anuncian con servicios mínimos.'},
    {nota:1, n:'Si se cae el tren del miércoles 14', d:'Es el día sin colchón: si el primer tramo llega tarde y perdemos la combinación de Parma, se atrasa todo y el museo puede quedar afuera.', t:'mover', tip:'El plan B es simple y hay que tenerlo pensado: si llegamos a Módena pasado el mediodía, se saltea el almuerzo tranquilo y se va directo al museo, que es lo único que no se puede hacer otro día. Y si se complica de verdad, Módena se saltea entero y seguimos a Milán, que es donde dormimos.'},
    {nota:1, n:'Los márgenes que conviene dejar', d:'Vuelos internacionales, tres horas antes en el mostrador. Vuelos internos de Iberia, dos. Trenes de alta velocidad, media hora en la estación. Regionales, quince minutos.', t:'mover', tip:'La excepción es Termini el jueves 8, donde mejor estar cuarenta minutos antes: es enorme, confusa, y la vía se anuncia con poca anticipación. Mejor esperar sentados con un café que correr por el andén con las valijas.'},
    {nota:1, n:'Todo junto y sin conexión', d:'Los pasajes, los vouchers de los ocho alojamientos, la reserva del auto y las entradas van bajados al teléfono en una carpeta, más una copia en papel de lo importante.', t:'mover', tip:'En un andén italiano o en la fila de una rentadora la señal suele ser mala, y es justo cuando hay que mostrar algo. Una copia en el teléfono de cada uno, no en uno solo.'}
  ]}
  ]
},
