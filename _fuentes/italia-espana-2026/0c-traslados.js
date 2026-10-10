{
  id:'via',
  nav:{es:'Traslados',en:'Getting there'},
  name:{es:'Los traslados',en:'The journeys'},
  plate:{es:'Itinerario',en:'Itinerary'},
  accent:'#C2410C', lt:'#FDBA74', maps:'',
  lede:{es:'Catorce movimientos en veintitrés días: cinco vuelos, cinco tramos de tren, cuatro días de auto y los traslados de aeropuerto. Acá está cada uno, cuánto dura, cuál ya está sacado y cuándo conviene sacar el resto.',
        en:'Fourteen moves in twenty three days: five flights, five train legs, four days with a car and the airport transfers. Here is each one, how long it takes, which are already booked and when to book the rest.'},
  quick:[
    [{es:'Vuelos',en:'Flights'},{es:'5, todos sacados',en:'5, all booked'}],
    [{es:'Trenes',en:'Trains'},{es:'5 tramos, el de Florencia sacado',en:'5 legs, the Florence one booked'}],
    [{es:'Auto',en:'Car'},{es:'Vie 9 a mar 13, sin reservar',en:'Fri 9 to Tue 13, not booked'}],
    [{es:'El día más frágil',en:'The fragile day'},{es:'Mié 14, La Spezia a Milán',en:'Wed 14, La Spezia to Milan'}],
    [{es:'Lo más urgente',en:'Most urgent'},{es:'Reservar el auto',en:'Book the car'}]
  ],
  sections:[
  {s:{es:'Todo de un vistazo',en:'The whole thing at a glance'}, k:'plan',
   legs:[
     {d:'2026-10-03', w:{es:'Sáb 3',en:'Sat 3'},   t:{es:'Montevideo a Madrid',en:'Montevideo to Madrid'},              c:{es:'Air Europa, nocturno',en:'Air Europa, overnight'},         dur:'~12 h',      e:{es:'Sacado',en:'Booked'}},
     {d:'2026-10-04', w:{es:'Dom 4',en:'Sun 4'},   t:{es:'Madrid a Roma',en:'Madrid to Rome'},                          c:'Air Europa',                                                   dur:'~2h30',      e:{es:'Sacado',en:'Booked'}},
     {d:'2026-10-04', w:{es:'Dom 4',en:'Sun 4'},   t:{es:'Fiumicino a Navona',en:'Fiumicino to Navona'},                c:{es:'Taxi o Leonardo Express',en:'Taxi or Leonardo Express'},   dur:{es:'~40 min',en:'~40 min'}, e:{es:'Se resuelve ahí',en:'Sorted out there'}},
     {d:'2026-10-08', w:{es:'Jue 8',en:'Thu 8'},   t:{es:'Roma a Florencia',en:'Rome to Florence'},                     c:{es:'Tren, 9:20 de Termini',en:'Train, 9:20 from Termini'},      dur:'1h30',       e:{es:'Sacado',en:'Booked'}},
     {d:'2026-10-09', w:{es:'Vie 9',en:'Fri 9'},   t:{es:'Florencia a San Gimignano',en:'Florence to San Gimignano'},   c:{es:'Auto, retiro en Peretola',en:'Car, pickup at Peretola'},   dur:'~1h15',      e:{es:'Falta',en:'Not booked'}},
     {d:'2026-10-13', w:{es:'Mar 13',en:'Tue 13'}, t:{es:'San Gimignano a La Spezia',en:'San Gimignano to La Spezia'},  c:{es:'Auto, y se devuelve',en:'Car, and it goes back'},           dur:'~2h15',      e:{es:'Falta',en:'Not booked'}},
     {d:'2026-10-13', w:{es:'Mar 13',en:'Tue 13'}, t:{es:'La Spezia y Cinque Terre',en:'La Spezia and Cinque Terre'},   c:{es:'Tren regional',en:'Regional train'},                       dur:{es:'5 a 20 min',en:'5 to 20 min'}, e:{es:'Se compra ahí',en:'Bought there'}},
     {d:'2026-10-14', w:{es:'Mié 14',en:'Wed 14'}, t:{es:'La Spezia a Módena',en:'La Spezia to Modena'},                c:{es:'Tren, cambio en Parma',en:'Train, change at Parma'},        dur:'~3 h',       e:{es:'Falta',en:'Not booked'}},
     {d:'2026-10-14', w:{es:'Mié 14',en:'Wed 14'}, t:{es:'Módena a Milán',en:'Modena to Milan'},                        c:{es:'Tren directo',en:'Direct train'},                          dur:'~1h45',      e:{es:'Falta',en:'Not booked'}},
     {d:'2026-10-16', w:{es:'Vie 16',en:'Fri 16'}, t:{es:'Milán a Varenna, ida y vuelta',en:'Milan to Varenna and back'}, c:{es:'Tren regional',en:'Regional train'},                     dur:{es:'~1h05 ida',en:'~1h05 each way'}, e:{es:'Se compra ahí',en:'Bought there'}},
     {d:'2026-10-17', w:{es:'Sáb 17',en:'Sat 17'}, t:{es:'Milán a Barcelona',en:'Milan to Barcelona'},                  c:'IB 5543',                                                      dur:'~1h45',      e:{es:'Sacado',en:'Booked'}},
     {d:'2026-10-18', w:{es:'Dom 18',en:'Sun 18'}, t:{es:'Barcelona a Sevilla',en:'Barcelona to Seville'},              c:'IB 5064',                                                      dur:'~1h45',      e:{es:'Sacado',en:'Booked'}},
     {d:'2026-10-24', w:{es:'Sáb 24',en:'Sat 24'}, t:{es:'Sevilla a Córdoba, si vamos',en:'Seville to Córdoba, if we go'}, c:{es:'AVE, ida y vuelta',en:'AVE, return'},                   dur:'0h45',       e:{es:'Falta, opcional',en:'Not booked, optional'}},
     {d:'2026-10-25', w:{es:'Dom 25',en:'Sun 25'}, t:{es:'Sevilla a Madrid y a Montevideo',en:'Seville to Madrid and Montevideo'}, c:{es:'Air Europa, nocturno',en:'Air Europa, overnight'}, dur:'~13 h',   e:{es:'Sacado',en:'Booked'}}
   ],
   html:{es:`
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
    `, en:`
      <p>Before the trip everything is pending and the list starts clean. During the trip each leg ticks itself off once its date passes, and the line at the top shows which one we are on. Any row can be tapped to correct it.</p>
      <h3>What is still missing</h3>
      <ul>
        <li>All five flights and the train to Florence are done.</li>
        <li>The <b>car</b> is the only real outstanding item, and the one whose price climbs fastest.</li>
        <li>The two trains on Wednesday the 14th get bought close to the date.</li>
        <li>The AVE to Córdoba, only if we do the day trip.</li>
      </ul>
      <h3>The two days to look at closely</h3>
      <ul>
        <li><b>Wednesday the 14th</b> is the fragile one: three hours of train with a change, a museum in the middle and two more hours of train, with the bags along for all of it. If the first leg falls over, the day falls over. Leave slack between connections and do not take the tightest one the app offers.</li>
        <li><b>Saturday the 17th</b> hangs on a missing detail: whether IB 5543 leaves from Linate or Malpensa. That is more than an hour of difference in the transfer, so confirm it before fixing what time we leave the hotel.</li>
      </ul>
    `}},

  {s:{es:'Cuándo sacar cada cosa',en:'When to book what'}, k:'plan', html:{es:`
      <h3>El orden</h3>
      <p>Comprar de más con demasiada anticipación también cuesta plata. El orden que sirve:</p>
      <ul>
        <li><b>Lo que se agota ya no es problema</b>: el Coliseo y el Duomo de Milán están sacados y no queda ninguna entrada con fecha límite. Está todo en el capítulo de preparativos.</li>
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
    `, en:`
      <h3>The order</h3>
      <p>Buying too far ahead costs money too. The order that works:</p>
      <ul>
        <li><b>What sells out is no longer a problem</b>: the Colosseum and the Milan Duomo are booked and no ticket has a deadline left. It is all in the preparation chapter.</li>
        <li><b>The car</b>, three or four months out and on a cancellable rate. Rental prices climb hard near the date and never come back down.</li>
        <li><b>The long distance trains.</b> Rome to Florence is done. For the two legs on Wednesday the 14th, check whether a fast train shows up instead of a regional: if it does, book early, because the fare is dynamic.</li>
        <li><b>Everything else, nothing.</b> Regionals, the Florence tram, the Cinque Terre trains and the Lake Como ones get bought the same day or the night before.</li>
      </ul>
      <h3>Why regionals are not bought ahead</h3>
      <ul>
        <li>They have a <b>fixed price</b>: it costs the same today as on the day, there is no assigned seat, and the ticket is often valid for any train that day. Buying months ahead saves nothing and ties us to a timetable.</li>
        <li><b>High speed</b> trains work like planes: cheap fares sell out and the price rises as the train fills. There, the earlier the better.</li>
      </ul>
      <h3>Trenitalia or Italo</h3>
      <ul>
        <li>They compete on the same fast routes, Rome to Florence among them. Italo usually comes out a bit cheaper and uses the same stations. Worth checking both apps before buying.</li>
        <li>The cheapest fares on both are <b>non changeable and non refundable</b>, and the ticket carries your name. If there is any chance of moving the time, the middle fare allows a change for little and usually pays off.</li>
      </ul>
    `}},

  {s:{es:'Los vuelos, que ya están',en:'The flights, already booked'}, k:'mover', items:[
    {nota:1, m:'Aeropuerto Internacional de Carrasco, Montevideo',
     n:{es:'Sáb 3: Montevideo a Madrid',en:'Sat 3: Montevideo to Madrid'},
     d:{es:'Air Europa, nocturno. Es el tramo largo y el que define cómo llegamos el domingo a Roma.',
        en:'Air Europa, overnight. It is the long leg and the one that decides what shape we arrive in Rome on Sunday.'},
     t:'mover',
     tip:{es:'En el check in de Montevideo, confirmar si las valijas van facturadas hasta Roma o hay que retirarlas en Madrid, y en qué terminal es la conexión. Son dos vuelos de la misma compañía, pero preguntarlo igual.',
          en:'At check in in Montevideo, confirm whether the bags are checked through to Rome or have to be collected in Madrid, and which terminal the connection is in. Both flights are with the same airline, but ask anyway.'}},
    {nota:1, m:'Aeropuerto Adolfo Suarez Madrid Barajas',
     n:{es:'Dom 4: Madrid a Roma',en:'Sun 4: Madrid to Rome'},
     d:{es:'Air Europa. Es la conexión, y Barajas es grande: entre terminales puede haber un tren interno y bastante caminata.',
        en:'Air Europa. This is the connection, and Barajas is big: between terminals there can be an internal train and a fair amount of walking.'},
     t:'mover',
     tip:{es:'Acá entramos a Schengen, así que el control de pasaportes se hace en Madrid, no en Roma. Si la escala es corta, ir directo al control apenas bajamos y dejar el café para después.',
          en:'This is where we enter Schengen, so passport control happens in Madrid, not in Rome. If the layover is short, head straight for control on landing and leave the coffee for later.'}},
    {nota:1,
     n:{es:'Sáb 17: Milán a Barcelona, IB 5543',en:'Sat 17: Milan to Barcelona, IB 5543'},
     d:{es:'El vuelo está sacado, pero falta el dato clave: Linate o Malpensa. Linate está pegado a la ciudad y lo conecta la línea M4 del metro en unos veinte minutos. Malpensa está a cuarenta y cinco kilómetros, unos cincuenta minutos en el Malpensa Express.',
        en:'The flight is booked, but the key detail is missing: Linate or Malpensa. Linate sits right against the city and the M4 metro line reaches it in about twenty minutes. Malpensa is forty five kilometres out, around fifty minutes on the Malpensa Express.'},
     t:'mover',
     tip:{es:'Mirarlo en la reserva y anotarlo acá. Si es Malpensa, hay que salir del hotel más de una hora antes de lo que uno calcularía, y sacar el boleto del tren la noche anterior.',
          en:'Check the booking and write it down here. If it is Malpensa, we need to leave the hotel more than an hour earlier than you would guess, and buy the train ticket the night before.'}},
    {nota:1, m:'Aeropuerto Josep Tarradellas Barcelona El Prat',
     n:{es:'Dom 18: Barcelona a Sevilla, IB 5064',en:'Sun 18: Barcelona to Seville, IB 5064'},
     d:{es:'Un vuelo corto de mediodía que deja la mañana libre en Barcelona.',
        en:'A short midday flight that leaves the morning free in Barcelona.'},
     t:'mover',
     tip:{es:'Los vuelos de Iberia dentro de España muchas veces los opera otra compañía del grupo, con reglas de equipaje de mano más estrictas. Mirar la franquicia real en la reserva antes de armar la valija en Milán.',
          en:'Iberia flights inside Spain are often operated by another airline in the group, with stricter cabin baggage rules. Check the real allowance on the booking before packing in Milan.'}},
    {nota:1, m:'Aeropuerto de Sevilla',
     n:{es:'Dom 25: Sevilla a Madrid y a Montevideo',en:'Sun 25: Seville to Madrid and Montevideo'},
     d:{es:'Vuelo nocturno con conexión en Madrid. El día queda entero en Sevilla.',
        en:'An overnight flight connecting in Madrid. The whole day stays in Seville.'},
     t:'mover',
     tip:{es:'Esa madrugada cambia la hora en Europa y los relojes se atrasan. El teléfono se ajusta solo, pero mirarlo dos veces contra el horario del pasaje. El aeropuerto de Sevilla es chico: con dos horas antes alcanza, y por ser conexión internacional yo no bajaría de eso.',
          en:'The clocks go back across Europe that same early morning. The phone adjusts itself, but check it twice against the ticket. Seville airport is small: two hours ahead is enough, and since it is an international connection I would not go below that.'}},
    {nota:1,
     n:{es:'El check in y el equipaje',en:'Check in and baggage'},
     d:{es:'Los cinco vuelos están sacados, así que queda el check in online, que abre entre veinticuatro y cuarenta y ocho horas antes según la compañía.',
        en:'All five flights are booked, so what is left is online check in, which opens between twenty four and forty eight hours ahead depending on the airline.'},
     t:'mover',
     tip:{es:'Hacerlo apenas abre y bajar las tarjetas de embarque al teléfono, no dejarlas en el mail. Si alguna valija de cabina está al límite, despacharla comprando el extra online sale bastante menos que en el mostrador.',
          en:'Do it the moment it opens and download the boarding passes to the phone rather than leaving them in an email. If a carry on is at the limit, buying the checked bag online costs considerably less than at the desk.'}}
  ]},

  {s:{es:'Los trenes',en:'The trains'}, k:'mover', items:[
    {nota:1, m:'Roma Termini',
     n:{es:'Jue 8: Roma a Florencia',en:'Thu 8: Rome to Florence'},
     d:{es:'Alta velocidad, una hora y media, 9:20 de Termini. Ya está sacado, así que solo queda llegar a horario.',
        en:'High speed, an hour and a half, 9:20 from Termini. Already booked, so all that is left is turning up on time.'},
     t:'mover',
     tip:{es:'Del hotel a Termini son unos veinte minutos en taxi con valijas: salimos 8:15 y estamos cuarenta minutos antes. Termini es enorme y la vía se anuncia con poca anticipación en el cartel general, así que mejor esperar adentro con un café. Llevar el QR bajado al teléfono: se valida solo.',
          en:'Hotel to Termini is about twenty minutes by taxi with bags: leave at 8:15 and we are there forty minutes early. Termini is enormous and the platform goes up on the main board at short notice, so better to wait inside with a coffee. Have the QR code downloaded: it validates itself.'}},
    {nota:1, m:'La Spezia Centrale',
     n:{es:'Mar 13: los trenes de Cinque Terre',en:'Tue 13: the Cinque Terre trains'},
     d:{es:'El Cinque Terre Express sale de La Spezia Centrale y para en los cinco pueblos, cada quince o treinta minutos.',
        en:'The Cinque Terre Express leaves from La Spezia Centrale and stops at all five villages, every fifteen or thirty minutes.'},
     t:'mover', res:'no',
     tip:{es:'Se saca en la máquina de la estación el mismo día, o la tarjeta de un día si vamos a hacer tres o cuatro viajes. Si el boleto es de papel, validarlo en la maquinita del andén antes de subir.',
          en:'Buy it from the station machine on the day, or the one day card if we are making three or four trips. If the ticket is paper, validate it in the little machine on the platform before boarding.'}},
    {nota:1, m:'La Spezia Centrale',
     n:{es:'Mié 14: La Spezia a Módena',en:'Wed 14: La Spezia to Modena'},
     d:{es:'Unas tres horas con un cambio, casi siempre en Parma. No hay tren directo, así que es la combinación más delicada del viaje.',
        en:'About three hours with one change, almost always at Parma. There is no direct train, which makes it the most delicate connection of the trip.'},
     t:'mover', res:'conviene',
     tip:{es:'Elegir en la app una combinación con margen entre tren y tren, no la más ajustada. Si el segundo tramo lo hace un tren rápido, comprarlo antes; si son los dos regionales, se compran ese mismo día. Salir temprano, 7:30 u 8:00.',
          en:'Pick a connection in the app with slack between trains, not the tightest one. If the second leg is a fast train, buy it in advance; if both are regionals, buy them on the day. Leave early, 7:30 or 8:00.'}},
    {nota:1, m:'Stazione di Modena',
     n:{es:'Mié 14: Módena a Milán',en:'Wed 14: Modena to Milan'},
     d:{es:'Poco menos de dos horas, con servicios directos a Milano Centrale. Último tramo de un día largo.',
        en:'A little under two hours, with direct services to Milano Centrale. The last leg of a long day.'},
     t:'mover', res:'no',
     tip:{es:'Si es regional, se compra en Módena el mismo día. Mirar antes a qué hora es el último servicio cómodo, para saber hasta cuándo estirar el museo.',
          en:'If it is a regional, buy it in Modena on the day. Check beforehand when the last comfortable service runs, so we know how long we can stretch the museum.'}},
    {nota:1, m:'Milano Centrale',
     n:{es:'Vie 16: Milán a Varenna, ida y vuelta',en:'Fri 16: Milan to Varenna and back'},
     d:{es:'Poco más de una hora en tren regional hasta Varenna-Esino, por la orilla del lago. La estación queda a diez minutos a pie del puerto.',
        en:'A little over an hour on a regional train to Varenna-Esino, along the lake shore. The station is ten minutes on foot from the harbour.'},
     t:'mover', res:'no',
     tip:{es:'Se compra el mismo día en la máquina o en la app. Antes de salir hay que mirar el horario del último ferry de vuelta a Varenna y el del último tren cómodo a Milán: quedarse del otro lado del lago sin barco es caro de resolver.',
          en:'Buy it on the day from the machine or the app. Before setting out, check the time of the last ferry back to Varenna and the last comfortable train to Milan: being stuck on the far shore with no boat is expensive to fix.'}},
    {nota:1, m:'Estacion de Sevilla Santa Justa',
     n:{es:'Sáb 24: Sevilla a Córdoba, si vamos',en:'Sat 24: Seville to Córdoba, if we go'},
     d:{es:'Cuarenta y cinco minutos en AVE, ida y vuelta en el día. Solo si elegimos la excursión del sábado.',
        en:'Forty five minutes on the AVE, there and back in a day. Only if we choose the Saturday excursion.'},
     t:'mover', res:'conviene',
     tip:{es:'Renfe funciona como los aviones: comprando con semanas de anticipación sale bastante menos que en la ventanilla. La decisión de ir o no conviene tomarla unas semanas antes, justo por el precio.',
          en:'Renfe works like an airline: buying weeks ahead costs considerably less than at the counter. Decide whether to go a few weeks out, precisely because of the price.'}},
    {nota:1,
     n:{es:'Cómo se viaja en tren en Italia',en:'How train travel works in Italy'},
     d:{es:'Los de alta velocidad tienen asiento asignado y se validan solos con el QR del teléfono. Los regionales no tienen asiento y, si el boleto es de papel, hay que validarlo en la maquinita del andén antes de subir.',
        en:'High speed trains have assigned seats and validate themselves from the QR code on your phone. Regionals have no seats, and if the ticket is paper it has to be validated in the little machine on the platform before boarding.'},
     t:'mover',
     tip:{es:'Subir a un regional con boleto sin validar es multa, y los inspectores existen. Comprado por la app con fecha y hora ya va validado. Las valijas van en los estantes de las puntas del vagón: subir por la puerta cercana al asiento.',
          en:'Boarding a regional with an unvalidated ticket is a fine, and the inspectors are real. Bought through the app with a date and time, it is already validated. Bags go on the racks at either end of the carriage: board through the door nearest your seat.'}},
    {nota:1,
     n:{es:'El tranvía de Florencia',en:'The Florence tram'},
     d:{es:'El T2 une Santa Maria Novella con el aeropuerto de Peretola en unos veinte minutos. Es cómo llegamos a buscar el auto el viernes 9.',
        en:'The T2 links Santa Maria Novella with Peretola airport in about twenty minutes. It is how we get to the car on Friday the 9th.'},
     t:'mover',
     tip:{es:'Boleto en la máquina del andén o por app, y validarlo al subir. Pasa seguido y tiene lugar para valijas: se toma el que venga.',
          en:'Ticket from the platform machine or the app, and validate it on boarding. They run often and have room for bags: take whichever comes.'}}
  ]},

  {s:{es:'El auto: cuándo sacarlo y cuándo devolverlo',en:'The car: when to collect it and when to give it back'}, k:'mover', items:[
    {nota:1,
     n:{es:'Cuándo retirarlo, y por qué no antes',en:'When to collect it, and why not earlier'},
     d:{es:'El auto se retira el <b>viernes 9 a media mañana</b>, después de ver el Duomo y de buscar las valijas en el hotel. No el jueves 8 al llegar a Florencia.',
        en:'The car gets picked up on <b>Friday the 9th, mid morning</b>, after seeing the Duomo and collecting the bags from the hotel. Not on Thursday the 8th when we reach Florence.'},
     t:'mover',
     tip:{es:'Retirarlo el jueves es pagar un día más por un auto que va a dormir en un estacionamiento caro, adentro de la ZTL de Florencia, que es la peor zona de Italia para tener un auto parado. Un día menos de alquiler y cero riesgo de multa.',
          en:'Collecting it on Thursday means paying an extra day for a car that will sleep in an expensive car park inside the Florence ZTL, the worst place in Italy to leave a car standing. One day less of rental and no risk of a fine.'}},
    {nota:1, m:'Aeroporto di Firenze Peretola',
     n:{es:'Vie 9: retirar el auto en Peretola',en:'Fri 9: collecting the car at Peretola'},
     d:{es:'El aeropuerto de Florencia tiene todas las rentadoras juntas, está afuera de la ciudad y sale directo a la autopista rumbo a Siena y San Gimignano, sin cruzar ninguna cámara de ZTL.',
        en:'Florence airport has all the rental desks in one place, sits outside the city and feeds straight onto the motorway towards Siena and San Gimignano without passing a single ZTL camera.'},
     t:'mover', res:'si',
     tip:{es:'Se llega en tranvía T2 desde Santa Maria Novella en veinte minutos con las valijas. Llevar los dos documentos, la licencia uruguaya y el permiso internacional del ACU, que no se reemplazan entre sí. Y la tarjeta de crédito del conductor, con límite disponible para el depósito en garantía.',
          en:'Twenty minutes on the T2 tram from Santa Maria Novella, bags and all. Bring both documents, the Uruguayan licence and the ACU international permit, since neither replaces the other. And the driver’s credit card, with enough limit free for the security deposit.'}},
    {nota:1,
     n:{es:'Cuándo devolverlo: el martes 13, al llegar a La Spezia',en:'When to return it: Tuesday the 13th, on arrival in La Spezia'},
     d:{es:'El plan por defecto es devolverlo el <b>martes 13 apenas llegamos a La Spezia</b>, antes de hacer nada más. A Cinque Terre no se entra en auto, y el miércoles nos vamos en tren.',
        en:'The default plan is to hand it back <b>on Tuesday the 13th the moment we reach La Spezia</b>, before doing anything else. You do not drive into Cinque Terre, and on Wednesday we leave by train.'},
     t:'mover',
     tip:{es:'A partir del martes al mediodía el auto solo sirve para pagar estacionamiento en una ciudad donde estacionar es caro y difícil. Son cuatro días de alquiler, del viernes 9 al martes 13. La otra opción, quedárselo hasta Milán, está en la sección de abajo.',
          en:'From Tuesday midday onwards the car only serves to rack up parking charges in a city where parking is expensive and awkward. That makes four rental days, Friday the 9th to Tuesday the 13th. The other option, keeping it as far as Milan, is in the section below.'}},
    {nota:1,
     n:{es:'La devolución, paso a paso',en:'The handback, step by step'},
     d:{es:'Es un alquiler de una punta a la otra, con cargo por devolver en otra ciudad. Hay que tener la dirección exacta de la oficina de La Spezia y su horario, porque muchas cierran al mediodía.',
        en:'It is a one way rental, with a fee for returning in a different city. We need the exact address of the La Spezia office and its opening hours, because many of them close at midday.'},
     t:'mover',
     tip:{es:'Llegando cerca de las 11 estamos bien, pero confirmarlo al reservar. Devolver con el tanque como lo entregaron, y antes de dar las llaves sacar fotos de los cuatro lados del auto y del tablero con el nivel de combustible. Es lo único que sirve si después aparece un cargo por un rayón que no hicimos.',
          en:'Arriving around 11 puts us in the clear, but confirm it when booking. Return it with the tank as they handed it over, and before giving back the keys photograph all four sides of the car and the dashboard with the fuel level. That is the only thing that helps if a charge later appears for a scratch we did not make.'}},
    {nota:1,
     n:{es:'Qué reservar, y con cuánta anticipación',en:'What to book, and how far ahead'},
     d:{es:'Tres o cuatro meses antes, siempre con tarifa que permita cancelar gratis. El precio sube fuerte cerca de la fecha y prácticamente no baja.',
        en:'Three or four months ahead, always on a rate that allows free cancellation. The price climbs hard near the date and essentially never drops.'},
     t:'mover',
     tip:{es:'Como es cancelable, volver a mirar precios un mes antes: si bajó, se reserva de nuevo y se cancela la anterior. Y comparar el cargo por devolver en otra ciudad entre empresas, que es donde más se diferencian.',
          en:'Since it is cancellable, look at prices again a month out: if they dropped, book again and cancel the first one. And compare the one way fee between companies, which is where they differ most.'}},
    {nota:1,
     n:{es:'Caja automática y conductor adicional',en:'Automatic gearbox and second driver'},
     d:{es:'En Italia lo estándar es la manual. El automático se paga bastante más y hay que pedirlo al reservar, porque hay pocos.',
        en:'In Italy manual is standard. An automatic costs considerably more and has to be requested when booking, because there are few of them.'},
     t:'mover',
     tip:{es:'Si vamos a manejar los dos, hay que declarar al segundo conductor y pagarlo. Si maneja alguien no declarado y pasa cualquier cosa, el seguro no cubre nada. Con las carreteras de la Toscana y cuatro días de auto, poder alternar vale la plata.',
          en:'If we are both going to drive, the second driver has to be declared and paid for. If someone undeclared is at the wheel and anything happens, the insurance covers nothing. With Tuscan roads and four days of driving, being able to swap is worth the money.'}},
    {nota:1,
     n:{es:'El auto que conviene',en:'The car to go for'},
     d:{es:'Chico. Las calles de los pueblos toscanos son angostas, los estacionamientos también, y un auto grande es un problema en cada maniobra.',
        en:'Small. The streets in the Tuscan towns are narrow, so are the car parks, and a big car is a problem at every manoeuvre.'},
     t:'mover',
     tip:{es:'Verificar que entren las dos valijas en el baúl, porque en los modelos más chicos no entran; si la categoría dice "dos valijas grandes", alcanza. Y al retirarlo, confirmar si carga nafta o gasoil: equivocarse arruina el motor y no lo cubre ningún seguro.',
          en:'Check that both suitcases fit in the boot, because in the smallest models they do not; if the category says "two large bags", that is enough. And on collection, confirm whether it takes petrol or diesel: getting it wrong wrecks the engine and no insurance covers it.'}},
    {nota:1,
     n:{es:'Los tramos que manejamos',en:'The stretches we drive'},
     d:{es:'Tres: Florencia a San Gimignano el viernes 9, poco más de una hora; los paseos de la Toscana del sábado al lunes, de media hora a hora y media cada uno; y San Gimignano a La Spezia el martes 13, unas dos horas y cuarto.',
        en:'Three: Florence to San Gimignano on Friday the 9th, a little over an hour; the Tuscan outings from Saturday to Monday, half an hour to an hour and a half each; and San Gimignano to La Spezia on Tuesday the 13th, about two and a quarter hours.'},
     t:'mover',
     tip:{es:'No son muchos kilómetros, así que el kilometraje ilimitado no es imprescindible, aunque casi siempre viene incluido. Lo que importa es salir temprano el martes, 7:30, para que entren Pisa y Forte dei Marmi de paso y llegar a La Spezia con la tarde entera.',
          en:'It is not many kilometres, so unlimited mileage is not essential, though it almost always comes included. What matters is leaving early on Tuesday, at 7:30, so that Pisa and Forte dei Marmi fit on the way and we reach La Spezia with the whole afternoon ahead.'}}
  ]},

  {s:{es:'El auto se queda hasta Milán',en:'The car stays as far as Milan'}, k:'mover', html:{es:`
      <p>Decidido: el auto no se devuelve en La Spezia el martes 13 como decía el plan original, sino en <b>Milán el miércoles 14</b>, en Via Vittor Pisani 19. Es la opción del medio y es la que cierra mejor, porque el día de Módena es el único del viaje donde el auto gana de verdad: el museo, el almuerzo en un pueblo de la llanura boloñesa y seguir a Milán no se hace en tren sin perder medio día en combinaciones.</p>
      <p>Lo que queda afuera de la discusión: el auto <b>no</b> sigue hasta el sábado. El lago de Como se hace en tren el viernes, que es lo correcto, y los días de Milán no lo necesitan. Eso evita dos noches de garage en el hotel y el estacionamiento de Varenna, que es escaso y caro.</p>
      <h3>Lo que hay que tener presente</h3>
      <ul>
        <li><b>Dos días parado en La Spezia</b>, martes y miércoles a la mañana. Va al Park Centro Stazione, enfrente de la estación: 1,50 euros la hora de día y 1 de noche, cubierto y con cámaras. Antes de pagarlo, preguntar en el alojamiento si tiene acuerdo con algún garage.</li>
        <li><b>El Área C de Milán</b>, 7,50 euros por entrar al centro un día hábil, rige los miércoles de 7:30 a 19:30. Vittor Pisani queda <b>afuera</b>: devolviendo el auto antes de ir al hotel no se paga. Al hotel se va en metro.</li>
        <li><b>El Área B</b> cubre casi toda la ciudad y rige de lunes a viernes. Un auto de alquiler nuevo cumple la norma y pasa, pero conviene confirmarlo al retirarlo.</li>
        <li><b>El cargo por devolver en otra ciudad</b> crece con la distancia y Milán no es Florencia. Ya está en el contrato, pero vale mirar el detalle para no sorprenderse.</li>
        <li><b>El horario de la oficina.</b> Las de ciudad cierran más temprano que las de estación y algunas no abren domingos. La hora de entrega figura en el voucher: mirarla antes del miércoles, porque desde Persiceto llegamos cerca de las 18:00.</li>
        <li><b>Las valijas viajan en el auto todo el miércoles</b>, así que no hace falta consigna en Módena. Sí hace falta la regla de siempre: todo al baúl y nada a la vista.</li>
      </ul>
      <h3>Al entregarlo</h3>
      <p>Fotos del auto por los cuatro lados, del tablero con el kilometraje y el nivel de nafta, y del interior. Si la oficina está cerrada y hay buzón de llaves, esas fotos son la única prueba de cómo se dejó. Y el bloqueo de la tarjeta se libera varios días después, no al momento.</p>
    `, en:`
      <p>Settled: the car is not handed back in La Spezia on Tuesday the 13th as the original plan had it, but in <b>Milan on Wednesday the 14th</b>, at Via Vittor Pisani 19. It is the middle option and the one that fits best, because the Modena day is the only one on the trip where the car genuinely earns its keep: the museum, lunch in a town on the Bolognese plain and then on to Milan cannot be done by train without losing half a day to connections.</p>
      <p>What is off the table: the car does <b>not</b> stay until Saturday. Lake Como is done by train on Friday, which is correct, and the Milan days do not need it. That avoids two nights of hotel garage and parking at Varenna, which is scarce and expensive.</p>
      <h3>What to keep in mind</h3>
      <ul>
        <li><b>Two days standing still in La Spezia</b>, Tuesday and Wednesday morning. It goes in the Park Centro Stazione, across from the station: 1.50 euros an hour by day and 1 by night, covered and with cameras. Before paying for it, ask the apartment whether they have an arrangement with a garage.</li>
        <li><b>Milan’s Area C</b>, 7.50 euros to enter the centre on a working day, runs on Wednesdays from 7:30 to 19:30. Vittor Pisani is <b>outside</b> it: handing the car back before going to the hotel costs nothing. We take the metro to the hotel.</li>
        <li><b>Area B</b> covers almost the whole city and runs Monday to Friday. A new hire car meets the standard and passes, but it is worth confirming at pick up.</li>
        <li><b>The one way drop charge</b> grows with distance and Milan is not Florence. It is already in the contract, but worth reading the line so it is not a surprise.</li>
        <li><b>The office hours.</b> City offices close earlier than station ones and some do not open on Sundays. The drop off time is on the voucher: check it before Wednesday, because we arrive from Persiceto around 18:00.</li>
        <li><b>The bags travel in the car all Wednesday</b>, so no left luggage is needed in Modena. The usual rule does apply: everything in the boot and nothing in sight.</li>
      </ul>
      <h3>When handing it over</h3>
      <p>Photographs of the car from all four sides, of the dashboard with the mileage and the fuel level, and of the interior. If the office is closed and there is a key drop, those photographs are the only record of how it was left. And the card hold is released several days later, not there and then.</p>
    `}},

  {s:{es:'Del aeropuerto al centro y al revés',en:'Airport to centre and back'}, k:'mover', items:[
    {nota:1,
     n:{es:'Roma, domingo 4',en:'Rome, Sunday the 4th'},
     d:{es:'Desde Fiumicino hay dos opciones sensatas: el Leonardo Express, directo a Termini en poco más de media hora, o el taxi, con tarifa fija hasta el centro histórico.',
        en:'From Fiumicino there are two sensible options: the Leonardo Express, direct to Termini in a little over half an hour, or a taxi, on a fixed fare into the historic centre.'},
     t:'mover',
     tip:{es:'Llegando de un vuelo largo y con el hotel en Navona, el taxi vale la pena: el tren nos deja en Termini y de ahí igual hay que llegar. La tarifa fija es por viaje, no por persona: confirmar el número antes de subir y tomar solo los taxis blancos de la fila oficial, nunca a alguien que se acerque dentro de la terminal.',
          en:'Arriving off a long flight with the hotel in Navona, the taxi is worth it: the train leaves us at Termini and we still have to get across town. The fixed fare is per trip, not per person: confirm the number before getting in and take only the white taxis from the official rank, never anyone who approaches you inside the terminal.'}},
    {nota:1,
     n:{es:'Milán, sábado 17',en:'Milan, Saturday the 17th'},
     d:{es:'Depende del aeropuerto. De Linate, la línea M4 del metro llega al centro en unos veinte minutos. De Malpensa, el Malpensa Express sale de Cadorna y de Centrale y tarda unos cincuenta.',
        en:'It depends on the airport. From Linate, the M4 metro line reaches the centre in about twenty minutes. From Malpensa, the Malpensa Express runs from Cadorna and Centrale and takes about fifty.'},
     t:'mover',
     tip:{es:'El hotel está a diez minutos a pie de Cadorna, así que si es Malpensa, el tren desde ahí es lo más simple. Sacar el boleto la noche anterior y salir con margen: es el traslado más largo de los cinco.',
          en:'The hotel is ten minutes on foot from Cadorna, so if it is Malpensa, the train from there is the simplest answer. Buy the ticket the night before and leave with time to spare: it is the longest of the five transfers.'}},
    {nota:1,
     n:{es:'Barcelona, sábado 17 y domingo 18',en:'Barcelona, Saturday the 17th and Sunday the 18th'},
     d:{es:'El Aerobús une el aeropuerto con Plaça Catalunya en unos treinta y cinco minutos, sale cada pocos minutos y tiene bodega para valijas. La línea L9 Sud del metro también llega, más barata y más lenta.',
        en:'The Aerobús links the airport with Plaça Catalunya in about thirty five minutes, leaves every few minutes and has a hold for luggage. The L9 Sud metro line also gets there, cheaper and slower.'},
     t:'mover',
     tip:{es:'Con el hotel a diez minutos de Plaça Catalunya, el Aerobús es lo más directo en los dos sentidos. Si el vuelo sale de la T1, ojo que el bus para primero en la T2.',
          en:'With the hotel ten minutes from Plaça Catalunya, the Aerobús is the most direct option both ways. If the flight leaves from T1, note that the bus stops at T2 first.'}},
    {nota:1,
     n:{es:'Sevilla, domingo 18 y domingo 25',en:'Seville, Sunday the 18th and Sunday the 25th'},
     d:{es:'El aeropuerto está a unos diez kilómetros del centro. Hay un bus especial que llega a Plaza de Armas y taxi con tarifa fija.',
        en:'The airport is about ten kilometres from the centre. There is a dedicated bus to Plaza de Armas and taxis on a fixed fare.'},
     t:'mover',
     tip:{es:'Con las valijas de tres semanas y yendo a un apartamento, el taxi es lo razonable. Confirmar la tarifa fija al subir, que cambia según el día y la hora. Para la vuelta del domingo 25 de noche, pedirlo con anticipación o usar Cabify.',
          en:'With three weeks of luggage and an apartment to reach, the taxi is the sensible call. Confirm the fixed fare on getting in, since it changes by day and hour. For the Sunday night return on the 25th, book it ahead or use Cabify.'}},
    {nota:1,
     n:{es:'Florencia y La Spezia',en:'Florence and La Spezia'},
     d:{es:'A Florencia llegamos en tren y salimos en auto; a La Spezia llegamos en auto y salimos en tren. En ninguna hace falta un traslado de aeropuerto.',
        en:'We arrive in Florence by train and leave by car; we arrive in La Spezia by car and leave by train. Neither needs an airport transfer.'},
     t:'mover',
     tip:{es:'En las dos, del alojamiento a la estación se va caminando o con un taxi corto. En Florencia son diez minutos a pie hasta Santa Maria Novella.',
          en:'In both, it is a walk or a short taxi from where we are staying to the station. In Florence it is ten minutes on foot to Santa Maria Novella.'}}
  ]},

  {s:{es:'Cuando algo sale mal',en:'When something goes wrong'}, k:'mover', items:[
    {nota:1,
     n:{es:'Las huelgas de transporte en Italia',en:'Transport strikes in Italy'},
     d:{es:'Los <em>scioperi</em> de trenes, buses o aviones son habituales y no son sorpresa: se anuncian con al menos diez días de anticipación, tienen día y horario definidos, y hay franjas con servicio garantizado.',
        en:'Train, bus and air <em>scioperi</em> are routine and never a surprise: they are announced at least ten days ahead, have a set day and set hours, and there are windows with guaranteed service.'},
     t:'mover',
     tip:{es:'Mirar el calendario oficial de huelgas del ministerio de transporte italiano una semana antes de cada tramo importante, sobre todo antes del jueves 8 y del miércoles 14. Si cae huelga ese día, se mueve el horario dentro de la franja garantizada. En España pasa lo mismo y también se anuncian con servicios mínimos.',
          en:'Check the Italian transport ministry’s official strike calendar a week before each important leg, above all before Thursday the 8th and Wednesday the 14th. If a strike falls on the day, shift the time into the guaranteed window. The same happens in Spain, also announced with minimum service levels.'}},
    {nota:1,
     n:{es:'Si se cae el tren del miércoles 14',en:'If the Wednesday train falls over'},
     d:{es:'Es el día sin colchón: si el primer tramo llega tarde y perdemos la combinación de Parma, se atrasa todo y el museo puede quedar afuera.',
        en:'It is the day with no cushion: if the first leg runs late and we miss the Parma connection, everything slides and the museum may drop off.'},
     t:'mover',
     tip:{es:'El plan B es simple y hay que tenerlo pensado: si llegamos a Módena pasado el mediodía, se saltea el almuerzo tranquilo y se va directo al museo, que es lo único que no se puede hacer otro día. Y si se complica de verdad, Módena se saltea entero y seguimos a Milán, que es donde dormimos.',
          en:'Plan B is simple and worth deciding in advance: if we reach Modena after midday, skip the leisurely lunch and go straight to the museum, which is the one thing that cannot be done another day. And if it really unravels, skip Modena entirely and carry on to Milan, which is where we sleep.'}},
    {nota:1,
     n:{es:'Los márgenes que conviene dejar',en:'The margins worth leaving'},
     d:{es:'Vuelos internacionales, tres horas antes en el mostrador. Vuelos internos de Iberia, dos. Trenes de alta velocidad, media hora en la estación. Regionales, quince minutos.',
        en:'International flights, three hours before at the desk. Iberia domestic flights, two. High speed trains, half an hour at the station. Regionals, fifteen minutes.'},
     t:'mover',
     tip:{es:'La excepción es Termini el jueves 8, donde mejor estar cuarenta minutos antes: es enorme, confusa, y la vía se anuncia con poca anticipación. Mejor esperar sentados con un café que correr por el andén con las valijas.',
          en:'The exception is Termini on Thursday the 8th, where forty minutes early is better: it is enormous, confusing, and the platform goes up at short notice. Better to wait sitting down with a coffee than to run along the platform with the bags.'}},
    {nota:1,
     n:{es:'Todo junto y sin conexión',en:'Everything together and offline'},
     d:{es:'Los pasajes, los vouchers de los ocho alojamientos, la reserva del auto y las entradas van bajados al teléfono en una carpeta, más una copia en papel de lo importante.',
        en:'The tickets, the vouchers for all eight places to stay, the car booking and the entry tickets go downloaded to the phone in one folder, plus a paper copy of whatever matters.'},
     t:'mover',
     tip:{es:'En un andén italiano o en la fila de una rentadora la señal suele ser mala, y es justo cuando hay que mostrar algo. Una copia en el teléfono de cada uno, no en uno solo.',
          en:'On an Italian platform or in a rental queue the signal is usually bad, and that is exactly when you have to show something. A copy on each of our phones, not just one.'}}
  ]}
  ]
},
