{
  id:'mod', nav:'Módena', name:'Módena', plate:'Ferrari', accent:'#B91C1C', lt:'#FCA5A5', maps:'Modena',
  lede:'Un día de paso entre La Spezia y Milán, con un objetivo claro. La pregunta no es si vamos a un museo Ferrari, es a cuál de los dos, y la respuesta depende de a qué hora llegamos y con cuántas valijas.',
  quick:[
    ['Cuándo','Mié 14 de octubre, de paso'],
    ['Llegamos','En tren desde La Spezia, ~3 h'],
    ['Seguimos','A Milán, poco menos de 2 h'],
    ['Son dos museos','Módena y Maranello'],
    ['Ojo','Dónde dejar las valijas']
  ],
  sections:[
  {s:'Cómo armar el día', k:'plan', html:`
      <h3>El problema es la logística, no el museo</h3>
      <ul>
        <li>Llegamos de La Spezia con las valijas encima y a la noche tenemos que estar en Milán. El día se arma alrededor de dos preguntas: dónde dejamos el equipaje y cuánto tiempo real queda.</li>
        <li>Averiguar antes de viajar si la estación de Módena tiene consigna y en qué horario, y si no, si el <b>Museo Enzo Ferrari</b> guarda valijas. Muchos museos aceptan mochilas pero no valijas grandes: escribirles y no descubrirlo en la puerta.</li>
      </ul>
      <h3>La versión corta, que es la que recomiendo</h3>
      <ul>
        <li>Tren desde La Spezia llegando cerca del mediodía. Valijas en consigna, quince minutos a pie hasta el <b>Museo Enzo Ferrari</b>, al lado de la estación, y una hora y media larga adentro.</li>
        <li>Almuerzo en el centro, a diez minutos: la <b>Piazza Grande</b>, el Duomo y la torre Ghirlandina se ven de paso, y el <b>Mercato Albinelli</b> resuelve el almuerzo con lo mejor de Emilia.</li>
        <li>A media tarde, tren a Milán, y a las siete el check in.</li>
      </ul>
      <h3>La versión larga, si somos fanáticos</h3>
      <ul>
        <li>Para los autos de Fórmula 1 de verdad hay que ir a <b>Maranello</b>, a unos veinte kilómetros. Hay entrada combinada para los dos museos y una lanzadera que los une, unos treinta minutos cada tramo.</li>
        <li>Eso es salir de La Spezia bien temprano y llegar a Milán de noche, con el día convertido en una carrera y valijas encima. Si Ferrari es <em>el</em> motivo del día, vale la pena; si es una parada más, con Módena alcanza.</li>
      </ul>
    `},

  {s:'Los dos museos, y cuál conviene', k:'visita', items:[
    {nota:1, n:'La diferencia entre uno y otro', d:'El <b>Museo Enzo Ferrari</b>, en Módena, es sobre el hombre: está en la casa donde nació, con el taller de su padre restaurado, y al lado una galería moderna con techo amarillo en forma de capó donde exponen autos de calle y de diseño. El <b>Museo Ferrari de Maranello</b> es sobre la marca: la Fórmula 1, los trofeos, los motores y la historia de las carreras.', t:'visita', tip:'Dicho corto: si nos interesa la historia y el personaje, Módena. Si lo que queremos es ver monoplazas de Fórmula 1 y la sala de trofeos, Maranello. El de Módena está a quince minutos a pie de la estación; el de Maranello, a media hora de viaje.'},
    {n:'Museo Enzo Ferrari', d:'La casa natal de Enzo Ferrari con el taller mecánico de su padre, y pegada una nave con el techo amarillo curvo que imita un capó. Adentro, exposiciones que cambian, autos de calle y una proyección envolvente sobre las paredes.', t:'visita', p:'€€', w:'https://www.ferrari.com/museums', tip:'Es el que entra sin forzar el día. Se hace en una hora y media con nuestro ritmo. Comprar la entrada online ahorra la fila y a veces sale algo menos.'},
    {m:'Museo Ferrari Maranello', n:'Museo Ferrari de Maranello', d:'El museo de la escudería, en el pueblo donde está la fábrica. Monoplazas de Fórmula 1 de todas las épocas alineados, la sala de trofeos, motores abiertos y simuladores.', t:'visita', p:'€€', w:'https://www.ferrari.com/museums', tip:'Hay entrada combinada con el de Módena y una lanzadera entre los dos. La visita a la fábrica no se puede hacer: es solo para propietarios de un Ferrari. Alrededor del museo hay empresas que alquilan vueltas en Ferrari por la ruta, que se contratan aparte y con reserva.'},
    {nota:1, n:'Si vamos a los dos', d:'La entrada combinada vale para los dos museos en días distintos también, pero nosotros los haríamos el mismo día. La lanzadera entre Módena y Maranello tiene pocos horarios, así que hay que mirarlos antes y armar el día alrededor de ellos.', t:'visita', tip:'También hay un bus público de línea que hace el trayecto y sale mucho menos, pero tarda más y para en todos lados. Y la tercera opción, que es la mejor si de verdad queremos los dos: alquilar un auto chico en la estación de Módena por medio día y devolverlo ahí antes del tren a Milán. Resuelve los horarios de la lanzadera y de paso las valijas van en el baúl.'}
  ]},

  {s:'Módena, lo que se ve de paso', k:'visita', items:[
    {n:'Piazza Grande y el Duomo', d:'La plaza medieval con la catedral románica de mármol blanco y la torre Ghirlandina al lado, inclinada apenas. Todo el conjunto es patrimonio de la humanidad y se ve en media hora.', t:'visita', tip:'Está a diez minutos caminando de la estación, en el camino natural entre el museo y el almuerzo. Adentro del Duomo, los relieves de piedra de las fachadas cuentan historias del Génesis y son del siglo XII.'},
    {n:'Mercato Albinelli', d:'El mercado cubierto de 1931, con hierro, vidrio y una fuente en el medio. Puestos de pasta fresca, quesos, embutidos y varios lugares donde se come ahí mismo, de pie o en una banqueta.', t:'comer', p:'€', serv:'puesto', res:'no', tip:'Es el mejor almuerzo posible del día: barato, rápido y de lo mejor que se come en Italia. Cierra a media tarde y los domingos, pero el miércoles está abierto de mañana.'},
    {nota:1, n:'El vinagre balsámico de verdad', d:'El <em>aceto balsamico tradizionale di Modena</em> no tiene nada que ver con el que compramos en el supermercado: se hace solo con mosto de uva cocido, envejece doce o veinticinco años en una batería de barricas de maderas distintas y es espeso, dulce y carísimo.', t:'visita', tip:'Las acetaie se visitan con reserva previa y la visita lleva una hora larga, así que en este día no entra. Pero en el Mercato Albinelli y en las tiendas del centro se puede probar y comprar una botella chica, que es un regalo excelente y aguanta el viaje.'},
    {nota:1, n:'Qué se come en Emilia', d:'Estamos en la mejor zona gastronómica de Italia y se nota: tortellini en caldo, tagliatelle al ragú, gnocco fritto y tigelle con embutidos, parmesano de verdad y prosciutto de Parma.', t:'comer', tip:'El gnocco fritto es una masa frita que se infla y se come caliente con jamón y queso blando encima. Es lo más de acá que hay y cuesta poco. Y el lambrusco, que en el resto del mundo tiene mala fama, acá es seco y va perfecto con la comida grasa.'},
    {nota:1, n:'La Osteria Francescana', d:'El restaurante de Massimo Bottura, que fue elegido el mejor del mundo dos veces, está en Módena. Reservar es prácticamente imposible: abren el cupo con meses de anticipación y se agota en minutos.', t:'comer', tip:'La versión accesible es Franceschetta 58, del mismo cocinero, que sí se reserva y está a unos minutos del centro. Pero para eso hay que quedarse a cenar, y esa noche dormimos en Milán.'}
  ]}
  ]
},
