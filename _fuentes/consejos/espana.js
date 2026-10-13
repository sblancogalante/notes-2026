/* España, para cualquier viaje: como se paga, los horarios, los trenes y el
   idioma. Es un capitulo entero: una guia lo pone como pestana con "@espana"
   en `partes`. Lo propio de cada ciudad va en el capitulo de la ciudad.
   Escrito impersonal, como todo lo de esta carpeta. */
{
  id:'espana',
  nav:{es:'España',en:'Spain'},
  name:{es:'España',en:'Spain'},
  plate:{es:'Cómo funciona',en:'How it works'},
  accent:'#9F1239', lt:'#FDA4AF', maps:'',
  lede:{es:'Lo que sirve en cualquier parte de España: cómo se paga, los horarios, que son los más tarde de Europa, los trenes y el idioma, que es el mismo con otras palabras. Lo propio de cada ciudad está en su pestaña.',
        en:'What works anywhere in Spain: how paying works, the hours, which are the latest in Europe, the trains, and the language. Anything specific to a city is in that city’s tab.'},
  quick:[
    [{es:'Moneda',en:'Currency'},{es:'Euro',en:'Euro'}],
    [{es:'Propina',en:'Tipping'},{es:'No se espera',en:'Not expected'}],
    [{es:'Emergencias',en:'Emergencies'},'112'],
    [{es:'Se almuerza',en:'Lunch'},{es:'14:00 a 16:00',en:'14:00 to 16:00'}],
    [{es:'Se cena',en:'Dinner'},{es:'21:00 a 23:00',en:'21:00 to 23:00'}],
    [{es:'Enchufe',en:'Plugs'},{es:'Tipos C y F, 230 V',en:'Types C and F, 230 V'}]
  ],
  sections:[
  {s:{es:'Cómo se paga y las propinas',en:'Paying and tipping'}, k:'compra', html:{es:`
      <ul>
        <li><b>La propina no es obligatoria ni la esperan.</b> Redondear o dejar algo suelto donde se comió bien alcanza y sobra. En Andalucía todavía menos: el precio de la carta es el precio.</li>
        <li><b>Barra, salón y terraza tienen precios distintos</b>, y es legal siempre que esté avisado en la carta. La barra es la más barata, y en un bar de tapas es directamente la mejor mesa.</li>
        <li>En un restaurante la cuenta se pide y la traen a la mesa. En un bar de barrio, muchas veces se paga en la barra al salir, y quien atendió lleva la cuenta de memoria. Ante la duda, se pregunta al pedir.</li>
        <li>Contactless en todos lados, salvo en algún mercadillo.</li>
      </ul>
    `, en:`
      <ul>
        <li><b>Tipping is neither required nor expected.</b> Rounding up, or leaving some change where you ate well, is more than enough. In Andalusia even less so: the menu price is the price.</li>
        <li><b>Bar, dining room and terrace have different prices</b>, and that is legal as long as it is on the menu. The bar is the cheapest, and in a tapas bar it is simply the best seat.</li>
        <li>In a restaurant you ask for the bill and it comes to the table. In a neighbourhood bar you often pay at the counter on the way out, and whoever served you keeps the tab in their head. When in doubt, ask when ordering.</li>
        <li>Contactless everywhere, except at the odd flea market.</li>
      </ul>
    `}},

  {s:{es:'Los horarios, que son los más tarde de Europa',en:'The hours, the latest in Europe'}, k:'comer', html:{es:`
      <ul>
        <li>Se almuerza de <b>14:00 a 16:00</b> y se cena de <b>21:00 a 23:00</b>. Cenar a las 20:00 es encontrar el lugar vacío, y no porque sea malo.</li>
        <li>Entre las 16:30 y las 20:30 casi ninguna cocina de restaurante trabaja, pero los bares de tapas sirven todo el tiempo y cubren el hueco.</li>
        <li><b>Tapear no es cenar en un lugar</b>: se entra a un bar, se toma algo con una o dos tapas, se paga y se sigue al siguiente. Hay tres tamaños, tapa, media ración y ración, así que no conviene pedir de más en el primero.</li>
        <li>Apenas uno se sienta, preguntan qué se va a tomar. Una respuesta corta, una caña, una copa de vino o agua, da los cinco minutos para leer la carta con calma.</li>
      </ul>
    `, en:`
      <ul>
        <li>Lunch runs from <b>14:00 to 16:00</b> and dinner from <b>21:00 to 23:00</b>. Dinner at 20:00 means an empty room, and not because the place is bad.</li>
        <li>Between 16:30 and 20:30 almost no restaurant kitchen is working, but tapas bars serve all along and fill the gap.</li>
        <li><b>Tapas is not dinner in one place</b>: you go into a bar, have a drink with one or two tapas, pay and move on to the next. There are three sizes, tapa, half portion and portion, so do not over order in the first one.</li>
        <li>As soon as you sit down they ask what you will drink. A short answer, a small beer, a glass of wine or water, buys the five minutes to read the menu in peace.</li>
      </ul>
    `}},

  {s:{es:'Trenes, taxis y huelgas',en:'Trains, taxis and strikes'}, k:'mover', items:[
    {nota:1,
     n:{es:'El tren rápido se compra como un avión',en:'Fast trains are bought like flights'},
     d:{es:'En alta velocidad los precios funcionan como en una aerolínea: comprando con semanas de anticipación sale bastante menos que en la ventanilla. En las rutas grandes compiten Renfe, Iryo y Ouigo, así que vale mirar las tres.',
        en:'On high speed lines prices work like an airline’s: buying weeks ahead costs considerably less than at the counter. On the main routes Renfe, Iryo and Ouigo compete, so check all three.'},
     t:'mover',
     tip:{es:'Si un tramo es opcional, la decisión de ir o no conviene tomarla con semanas de anticipación justamente por el precio.',
          en:'If a leg is optional, decide whether to go weeks ahead, precisely because of the price.'}},
    {nota:1,
     n:{es:'Taxis y apps',en:'Taxis and apps'},
     d:{es:'<b>Cabify</b> y <b>Bolt</b> funcionan en las ciudades grandes y suelen salir menos que el taxi. Para los trenes, la app de <b>Renfe</b> y las de las otras compañías, con el boleto en el teléfono.',
        en:'<b>Cabify</b> and <b>Bolt</b> work in the big cities and are usually cheaper than a taxi. For trains, the <b>Renfe</b> app and the other companies’ apps, with the ticket on the phone.'},
     t:'mover',
     tip:{es:'Para una salida de madrugada o un aeropuerto un domingo de noche, pedir el auto con anticipación en vez de contar con encontrar uno en el momento.',
          en:'For a pre dawn departure or an airport run on a Sunday night, book the car ahead rather than counting on finding one on the spot.'}},
    {nota:1,
     n:{es:'Las huelgas',en:'Strikes'},
     d:{es:'Igual que en Italia, se anuncian con anticipación y con servicios mínimos garantizados: algunos trenes salen igual, y la lista se publica antes.',
        en:'As in Italy, they are announced in advance with guaranteed minimum services: some trains run regardless, and the list is published beforehand.'},
     t:'mover',
     tip:{es:'Una semana antes de cada tramo importante, mirar si hay huelga anunciada y, si la hay, cuáles trenes quedan en los servicios mínimos.',
          en:'A week before each important leg, check whether a strike is announced and, if so, which trains are in the minimum service.'}}
  ]},

  {s:{es:'El idioma',en:'Language'}, k:'idioma', items:[
    {nota:1,
     n:{es:'El mismo idioma, otras palabras',en:'The same language, other words'},
     d:{es:'Se entiende todo, pero cambian las palabras de todos los días: <em>móvil</em> es el celular, <em>maleta</em> la valija, <em>billete</em> el boleto, <em>zumo</em> el jugo, <em>patata</em> la papa, <em>conducir</em> es manejar y <em>aparcar</em> es estacionar. <em>Vale</em> es el sí de todo, y se tutea casi siempre.',
        en:'Rioplatense Spanish speakers understand everything, but the everyday words change: <em>móvil</em> for the phone, <em>maleta</em> for the suitcase, <em>billete</em> for the ticket, <em>zumo</em> for juice, <em>patata</em> for potato, <em>conducir</em> to drive and <em>aparcar</em> to park. <em>Vale</em> is the all purpose yes, and people use the informal <em>tú</em> almost always.'},
     t:'idioma',
     tip:{es:'Para pedir en una barra, lo normal es <em>¿me pones…?</em>, y para llamar al camarero, un <em>perdona</em> cuando pasa cerca. No tiene nada de maleducado.',
          en:'To order at a bar, the normal phrase is <em>¿me pones…?</em>, and to call the waiter, a <em>perdona</em> as they pass. Nothing rude about it.'}},
    {nota:1,
     n:{es:'El catalán en Barcelona',en:'Catalan in Barcelona'},
     d:{es:'En Cataluña el catalán está en todos los carteles, pero nadie espera que se hable y todo el mundo contesta en castellano.',
        en:'In Catalonia every sign is in Catalan, but nobody expects you to speak it and everyone answers in Spanish.'},
     t:'idioma',
     tip:{es:'Dos palabras que aparecen todo el tiempo en las cartas: <em>bo</em> es bueno y <em>pa amb tomàquet</em> es pan con tomate, que es lo primero que hay que pedir.',
          en:'Two words that turn up on every menu: <em>bo</em> is good, and <em>pa amb tomàquet</em> is bread with tomato, the first thing to order.'}}
  ]}
  ]
}
