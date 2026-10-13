/* Italia, para cualquier viaje: como se paga, como se maneja, los trenes y el
   italiano minimo. Es un capitulo entero: una guia lo pone como pestana con
   "@italia" en `partes`. Lo propio de cada ciudad va en el capitulo de la
   ciudad, no aca. Escrito impersonal, como todo lo de esta carpeta. */
{
  id:'italia',
  nav:{es:'Italia',en:'Italy'},
  name:{es:'Italia',en:'Italy'},
  plate:{es:'Cómo funciona',en:'How it works'},
  accent:'#15803D', lt:'#86EFAC', maps:'',
  lede:{es:'Lo que sirve en cualquier parte de Italia: cómo se paga, cómo se maneja y se viaja en tren, y el italiano mínimo para que el trato cambie. Lo propio de cada ciudad está en su pestaña.',
        en:'What works anywhere in Italy: how paying works, how to drive and take the train, and the minimum Italian that changes how you are treated. Anything specific to a city is in that city’s tab.'},
  quick:[
    [{es:'Moneda',en:'Currency'},{es:'Euro',en:'Euro'}],
    [{es:'Propina',en:'Tipping'},{es:'El coperto no es propina',en:'The coperto is not a tip'}],
    [{es:'Emergencias',en:'Emergencies'},'112'],
    [{es:'Enchufe',en:'Plugs'},{es:'Tipos C, F y L, 230 V',en:'Types C, F and L, 230 V'}],
    [{es:'Si el italiano no sale',en:'If Italian fails'},{es:'Inglés antes que castellano',en:'English before Spanish'}],
    [{es:'Ojo',en:'Watch out'},{es:'El ticket del peaje, lejos del celular',en:'Keep the toll ticket away from phones'}]
  ],
  sections:[
  {s:{es:'Cómo se paga y las propinas',en:'Paying and tipping'}, k:'compra', html:{es:`
      <ul>
        <li>En la cuenta aparece el <b>coperto</b>, un cargo por persona de un par de euros que cubre el pan y la mesa. Tiene que estar avisado en la carta y no es la propina.</li>
        <li>Si además dice <em>servizio</em>, esa sí es la propina y ya está cobrada. Si no aparece ninguna de las dos, redondear o dejar unas monedas alcanza: nadie espera un porcentaje.</li>
        <li><b>La cuenta no viene sola.</b> Traerla sin que la pidan se considera echar al cliente, así que hay que pedirla: <em>il conto, per favore</em>.</li>
        <li><b>Barra, mesa y terraza no cuestan lo mismo</b>, y es legal mientras esté publicado. Un espresso parado en la barra puede costar varias veces menos que sentado en una plaza turística. En muchos bares se paga primero en la caja y después se pide en la barra con el ticket.</li>
        <li>Por ley aceptan tarjeta y dan el ticket fiscal. Igual, en bares de barrio, mercados y algunas trattorias el efectivo es bienvenido, y los baños de las estaciones se pagan con monedas.</li>
      </ul>
    `, en:`
      <ul>
        <li>The bill carries the <b>coperto</b>, a per person charge of a couple of euros for bread and the table. It has to be printed on the menu and it is not the tip.</li>
        <li>If it also says <em>servizio</em>, that one is the tip and it is already charged. If neither appears, rounding up or leaving a few coins is plenty: nobody expects a percentage.</li>
        <li><b>The bill does not just arrive.</b> Bringing it unasked reads as throwing the customer out, so you have to ask: <em>il conto, per favore</em>.</li>
        <li><b>Bar, table and terrace do not cost the same</b>, and that is legal as long as it is posted. An espresso standing at the bar can cost several times less than sitting in a tourist square. In many bars you pay first at the till and then order at the counter with the receipt.</li>
        <li>By law they take cards and issue a fiscal receipt. Even so, in neighbourhood bars, markets and some trattorias cash is welcome, and station toilets take coins.</li>
      </ul>
    `}},

  {s:{es:'Manejar en Italia',en:'Driving in Italy'}, k:'mover', items:[
    {nota:1,
     n:{es:'La ZTL, en casi todos los centros',en:'The ZTL, in almost every old centre'},
     d:{es:'Casi todos los centros históricos tienen <em>zona traffico limitato</em>: una zona restringida con cámaras que leen la patente en cada entrada. La multa llega meses después a la rentadora, que la paga, la carga a la tarjeta y suma su propio cargo de gestión.',
        en:'Almost every historic centre has a <em>zona traffico limitato</em>: a restricted zone with cameras reading plates at every entry. The fine reaches the rental company months later, which pays it, charges it to the card and adds its own handling fee.'},
     t:'mover',
     tip:{es:'La regla que no falla: estacionar afuera y entrar caminando. Nunca cruzar el cartel redondo de borde rojo que dice <em>zona traffico limitato</em>, aunque el GPS lo indique: el GPS no sabe qué portón está activo.',
          en:'The rule that never fails: park outside and walk in. Never pass the round red bordered sign reading <em>zona traffico limitato</em>, even if the GPS says so: the GPS does not know which gate is live.'}},
    {nota:1,
     n:{es:'Los peajes, y el ticket que se arruina',en:'Tolls, and the ticket that gets ruined'},
     d:{es:'En la autopista se saca un ticket al entrar y se paga al salir según los kilómetros, en una máquina que acepta tarjeta sin problema. Las cabinas con cartel <b>azul</b> son de tarjeta, las <b>blancas</b> de efectivo y las <b>amarillas</b>, con la T, solo de Telepass: meterse en una sin el aparato traba todo y no se puede dar marcha atrás.',
        en:'On the motorway you take a ticket on entry and pay on exit by distance, at a machine that takes cards without fuss. Lanes with a <b>blue</b> sign are for cards, <b>white</b> ones for cash, and <b>yellow</b> ones marked T are Telepass only: entering one without the device jams everything, and reversing is not allowed.'},
     t:'mover',
     tip:{es:'El ticket tiene una <b>banda magnética muy sensible</b>, y pasa más de lo que parece que salga ilegible en la máquina de salida por haber viajado debajo o al lado de un celular. Guardarlo lejos de teléfonos, tarjetas y soportes con imán, por ejemplo en la guantera. Si la máquina no lo lee: no bajarse ni dar marcha atrás, apretar el botón de asistencia y decir en qué peaje se entró, porque si no pueden cobrar desde la entrada más lejana. A veces dan un comprobante para pagar después, con quince días de plazo.',
          en:'The ticket has a <b>very sensitive magnetic strip</b>, and it happens more than you would think that it comes out unreadable at the exit machine after travelling under or next to a phone. Keep it away from phones, cards and magnetic mounts, in the glovebox for instance. If the machine cannot read it: do not get out or reverse, press the assistance button and say which toll gate you entered at, because otherwise they can charge from the furthest entry. Sometimes they hand over a slip to pay later, with fifteen days to do it.'}},
    {nota:1,
     n:{es:'La nafta, y las dos formas de pagarla',en:'Fuel, and the two ways to pay for it'},
     d:{es:'<em>Benzina</em> es nafta y <em>gasolio</em> es gasoil: anotarlo al retirar el auto, porque equivocarse arruina el motor. Hay dos surtidores del mismo combustible, <em>fai da te</em>, que es autoservicio y más barato, y <em>servito</em>, donde atienden y cuesta bastante más.',
        en:'<em>Benzina</em> is petrol and <em>gasolio</em> is diesel: write it down at pick up, because getting it wrong wrecks the engine. There are two pumps for the same fuel, <em>fai da te</em>, self service and cheaper, and <em>servito</em>, where someone serves you and it costs considerably more.'},
     t:'mover',
     tip:{es:'Y no todas cobran igual. En algunas se paga primero en la máquina del surtidor lo que se quiere cargar, y después se carga. En otras, sobre todo las de autoservicio sin gente, la máquina <b>bloquea un monto alto en la tarjeta</b> antes de habilitar el surtidor, se carga lo que se quiere y después se devuelve la diferencia: lo que aparece en la app del banco no es lo que se cargó. Ese bloqueo cuenta para el tope diario de la tarjeta. En el campo muchas cierran al mediodía y los domingos y quedan solo con la máquina, así que no conviene andar con menos de un cuarto de tanque.',
          en:'And they do not all charge the same way. At some you pay first at the pump machine for the amount you want, then fill up. At others, especially unstaffed self service ones, the machine <b>blocks a large amount on the card</b> before enabling the pump, you fill what you want and the difference is refunded afterwards: what the bank app shows is not what you pumped. That block counts towards the card’s daily cap. Out in the country many close at midday and on Sundays and run on the machine alone, so do not drive on less than a quarter of a tank.'}},
    {nota:1,
     n:{es:'Dónde se puede estacionar',en:'Where you can park'},
     d:{es:'Las líneas pintadas en el piso lo dicen. <b>Azules</b>: pago, con máquina o app. <b>Blancas</b>: libre, a veces con tiempo limitado y disco horario. <b>Amarillas</b>: reservado para residentes, discapacitados o carga, y ahí no.',
        en:'The painted lines say it. <b>Blue</b>: paid, by machine or app. <b>White</b>: free, sometimes time limited with a parking disc. <b>Yellow</b>: reserved for residents, disabled drivers or loading, and not for you.'},
     t:'mover',
     tip:{es:'En los pueblos amurallados, la playa paga justo antes de la puerta, señalizada con la P, es casi siempre la mejor opción.',
          en:'In walled towns, the paid car park just before the gate, signposted with a P, is almost always the best option.'}},
    {nota:1,
     n:{es:'Las velocidades',en:'Speed limits'},
     d:{es:'En autopista el máximo es 130 km/h, y 110 con lluvia. En rutas, 90, y en ciudad, 50. Además de los radares fijos hay controles de velocidad promedio entre dos puntos, el <em>Tutor</em>.',
        en:'On the motorway the limit is 130 km/h, and 110 in the rain. On ordinary roads, 90, and in towns, 50. Besides fixed cameras there are average speed checks between two points, the <em>Tutor</em>.'},
     t:'mover',
     tip:{es:'Los locales manejan rápido y pegados atrás. No hay que seguirles el ritmo: con dejarlos pasar alcanza.',
          en:'Locals drive fast and close behind. No need to match them: letting them pass is enough.'}}
  ]},

  {s:{es:'Trenes, taxis y huelgas',en:'Trains, taxis and strikes'}, k:'mover', items:[
    {nota:1,
     n:{es:'Cómo se viaja en tren',en:'How train travel works'},
     d:{es:'Los de alta velocidad tienen asiento asignado y se validan solos con el QR del teléfono. Los regionales no tienen asiento y, si el boleto es de papel, hay que validarlo en la maquinita del andén antes de subir.',
        en:'High speed trains have assigned seats and validate themselves from the QR code on the phone. Regionals have no seats, and if the ticket is paper it has to be validated in the little machine on the platform before boarding.'},
     t:'mover',
     tip:{es:'Subir a un regional con boleto sin validar es multa, y los inspectores existen. Comprado por la app con fecha y hora, ya va validado. Las valijas van en los estantes de las puntas del vagón.',
          en:'Boarding a regional with an unvalidated ticket is a fine, and the inspectors are real. Bought on the app with a date and time, it is already validated. Bags go on the racks at either end of the carriage.'}},
    {nota:1,
     n:{es:'Trenitalia o Italo, y cuándo comprar',en:'Trenitalia or Italo, and when to buy'},
     d:{es:'Compiten en las rutas rápidas y usan las mismas estaciones; Italo suele salir algo más barato, así que vale mirar las dos apps. Los rápidos funcionan como un avión: las tarifas baratas se agotan y conviene comprar con tiempo.',
        en:'They compete on the fast routes and use the same stations; Italo is often a little cheaper, so check both apps. Fast trains work like planes: the cheap fares sell out and it pays to buy early.'},
     t:'mover',
     tip:{es:'Los regionales son al revés: precio fijo, sin asiento, y muchas veces el boleto vale para cualquier tren del día. Comprarlos antes no ahorra nada y ata a un horario: se compran el mismo día. Y las tarifas más baratas de los rápidos no se cambian ni se devuelven; si hay chance de mover el horario, la del medio suele compensar.',
          en:'Regionals are the opposite: fixed price, no seat, and often the ticket is good for any train that day. Buying ahead saves nothing and ties you to a time: buy them on the day. And the cheapest fast fares cannot be changed or refunded; if the time might move, the middle fare usually pays off.'}},
    {nota:1,
     n:{es:'Taxis y apps',en:'Taxis and apps'},
     d:{es:'En Italia Uber funciona solo en su versión cara. Las que sirven son <b>FreeNow</b> e <b>itTaxi</b>, que piden taxis comunes. En la calle y en los aeropuertos, solo los taxis blancos de la fila oficial, nunca alguien que se acerca a ofrecer.',
        en:'In Italy Uber only runs its expensive tier. The useful ones are <b>FreeNow</b> and <b>itTaxi</b>, which call ordinary cabs. On the street and at airports, only the white cabs from the official rank, never someone who walks up offering a ride.'},
     t:'mover',
     tip:{es:'Las otras apps que rinden: <b>Trenitalia</b> e <b>Italo</b> para los trenes, y <b>TheFork</b> para reservar mesa, que muchas veces tiene descuento.',
          en:'The other apps that earn their place: <b>Trenitalia</b> and <b>Italo</b> for trains, and <b>TheFork</b> for booking tables, often with a discount.'}},
    {nota:1,
     n:{es:'Las huelgas',en:'Strikes'},
     d:{es:'Los <em>scioperi</em> de trenes, buses o aviones son habituales y no son sorpresa: se anuncian con al menos diez días de anticipación, tienen día y horario definidos y hay franjas con servicio garantizado.',
        en:'Train, bus and air <em>scioperi</em> are routine and never a surprise: they are announced at least ten days ahead, with a set day and hours, and there are windows of guaranteed service.'},
     t:'mover',
     tip:{es:'Una semana antes de cada tramo importante, mirar el calendario oficial de huelgas del ministerio de transporte. Si cae una ese día, se mueve el horario a la franja garantizada.',
          en:'A week before each important leg, check the transport ministry’s official strike calendar. If one falls on the day, shift to the guaranteed window.'}}
  ]},

  {s:{es:'El idioma: con quién y en qué',en:'Language: with whom, and in what'}, k:'idioma', items:[
    {nota:1,
     n:{es:'Inglés antes que castellano',en:'English before Spanish'},
     d:{es:'El castellano se entiende en las tiendas grandes y en las cadenas, de ropa o de comida. En los lugares chicos, si el castellano no funciona, el inglés suele funcionar mejor: lo prefieren antes que hacer el esfuerzo con un idioma parecido al suyo.',
        en:'Spanish gets understood in big shops and chains, clothing or food. In small places, if Spanish does not work, English usually works better: people prefer it to straining at a language close to their own.'},
     t:'idioma',
     tip:{es:'El orden que funciona: saludar en italiano, que siempre cae bien, y si la charla sigue, preguntar <em>parla inglese?</em> antes de largarse en castellano.',
          en:'The order that works: greet in Italian, which always goes down well, and if the conversation continues, ask <em>parla inglese?</em> before launching into Spanish.'}},
    {nota:1,
     n:{es:'Nadie espera que se hable italiano',en:'Nobody expects you to speak Italian'},
     d:{es:'Con diez palabras alcanza para que el trato cambie por completo: lo que se agradece es el intento. Cada frase de abajo viene con cómo se dice, para poder leerla parado en un mostrador.',
        en:'Ten words are enough to change how you are treated: what counts is the attempt. Every phrase below comes with how it sounds, so you can read it off the screen standing at a counter.'},
     t:'idioma',
     tip:{es:'Antes de salir, bajar el italiano en el traductor del teléfono: lee cartas y carteles con la cámara sin señal.',
          en:'Before leaving, download Italian in the phone’s translator: it reads menus and signs through the camera with no signal.'}}
  ]},

  {s:{es:'Las diez que hay que saber',en:'The ten to actually learn'}, k:'idioma', frases:[
    ['Buongiorno',{es:'buon-YÓR-no',en:'bwon-JOR-noh'},
     {es:'Buenos días. Se usa de la mañana hasta media tarde y sirve para entrar a cualquier lado.',
      en:'Good morning, good day. Works from morning until mid afternoon and is how you walk into anywhere.'}],
    ['Buonasera',{es:'buo-na-SÉ-ra',en:'bwoh-nah-SEH-rah'},
     {es:'Buenas tardes y buenas noches, desde media tarde en adelante.',
      en:'Good afternoon and good evening, from mid afternoon onwards.'}],
    ['Grazie',{es:'GRÁ-tsie',en:'GRAHT-tsyeh'},
     {es:'Gracias. <b>Grazie mille</b> es mil gracias y nunca sobra.',
      en:'Thank you. <b>Grazie mille</b> is a thousand thanks and is never too much.'}],
    ['Prego',{es:'PRÉ-go',en:'PREH-goh'},
     {es:'De nada, pase, adelante, dígame. La palabra más útil del idioma.',
      en:'You are welcome, go ahead, after you, how can I help. The most useful word in the language.'}],
    ['Per favore',{es:'per fa-VÓ-re',en:'pair fah-VOH-reh'},
     {es:'Por favor. Va al final de todo lo que se pide.',
      en:'Please. It goes at the end of anything you ask for.'}],
    ['Scusi',{es:'SKÚ-si',en:'SKOO-zee'},
     {es:'Perdón o disculpe, para llamar a alguien o para pasar. <b>Scusa</b> es la versión informal.',
      en:'Excuse me or sorry, to get someone’s attention or to get past. <b>Scusa</b> is the informal one.'}],
    ['Permesso',{es:'per-MÉS-so',en:'pair-MESS-soh'},
     {es:'Con permiso, para abrirse paso en un vagón lleno o en un mercado.',
      en:'Coming through, for squeezing past in a packed train carriage or a market.'}],
    ['Sì / No',{es:'si / no',en:'see / noh'},
     {es:'Sí y no. El sí italiano lleva acento y se dice igual que en castellano.',
      en:'Yes and no. The Italian yes carries an accent and sounds like the English word “see”.'}],
    ['Quanto costa?',{es:'KUÁN-to KÓS-ta',en:'KWAN-toh KOSS-tah'},
     {es:'Cuánto cuesta. <b>Quant’è?</b> es lo mismo, más corto y más local.',
      en:'How much is it. <b>Quant’è?</b> means the same, shorter and more local.'}],
    ['Arrivederci',{es:'a-rri-ve-DÉR-chi',en:'ah-ree-veh-DAIR-chee'},
     {es:'Hasta luego, al salir de un negocio o de un restaurante.',
      en:'Goodbye, on the way out of a shop or a restaurant.'}]
  ]},

  {s:{es:'Saludar, agradecer y salir del paso',en:'Greeting, thanking and getting by'}, k:'idioma', frases:[
    ['Ciao',{es:'chao',en:'chow'},
     {es:'Hola y chau, las dos cosas. Es informal: con un mozo, un vendedor o alguien mayor, mejor buongiorno.',
      en:'Both hi and bye. It is informal: with a waiter, a shopkeeper or someone older, use buongiorno.'}],
    ['Salve',{es:'SÁL-ve',en:'SAHL-veh'},
     {es:'Un hola neutro, ni formal ni informal. Sirve cuando no se sabe cuál de los dos usar.',
      en:'A neutral hello, neither formal nor informal. Handy when you cannot tell which one to use.'}],
    ['Buonanotte',{es:'buo-na-NÓT-te',en:'bwoh-nah-NOT-teh'},
     {es:'Buenas noches, pero solo para irse a dormir. Para entrar a un restaurante de noche es buonasera.',
      en:'Good night, but only on the way to bed. To walk into a restaurant in the evening it is buonasera.'}],
    ['A domani',{es:'a do-MÁ-ni',en:'ah doh-MAH-nee'},
     {es:'Hasta mañana.',en:'See you tomorrow.'}],
    ['Come sta?',{es:'KÓ-me sta',en:'KOH-meh stah'},
     {es:'Cómo está, formal. La informal es <b>come stai?</b>',
      en:'How are you, formal. The informal one is <b>come stai?</b>'}],
    ['Bene, grazie',{es:'BÉ-ne GRÁ-tsie',en:'BEH-neh GRAHT-tsyeh'},
     {es:'Bien, gracias. La respuesta de siempre.',en:'Fine, thanks. The standard answer.'}],
    ['Piacere',{es:'pia-CHÉ-re',en:'pyah-CHEH-reh'},
     {es:'Encantado, al presentarse.',en:'Pleased to meet you, when being introduced.'}],
    ['Mi chiamo...',{es:'mi KIÁ-mo',en:'mee KYAH-moh'},
     {es:'Me llamo. La <em>chi</em> italiana suena como <em>qui</em>.',
      en:'My name is. Italian <em>chi</em> sounds like the “ki” in “kit”.'}],
    ['Non parlo italiano',{es:'non PÁR-lo i-ta-LIÁ-no',en:'non PAR-loh ee-tah-LYAH-noh'},
     {es:'No hablo italiano. Dicho en italiano, abre todas las puertas.',
      en:'I do not speak Italian. Said in Italian, it opens every door.'}],
    ['Parla inglese?',{es:'PÁR-la in-GLÉ-se',en:'PAR-lah een-GLEH-zeh'},
     {es:'Habla inglés. Es la pregunta que más rinde: fuera de las tiendas grandes y las cadenas, el inglés funciona más seguido que el castellano. <b>Parla spagnolo?</b> es habla castellano.',
      en:'Do you speak English. The question that pays off most: outside big shops and chains, English works more often than Spanish. <b>Parla spagnolo?</b> is do you speak Spanish.'}],
    ['Non capisco',{es:'non ca-PÍS-co',en:'non kah-PEE-skoh'},
     {es:'No entiendo.',en:'I do not understand.'}],
    ['Più lentamente, per favore',{es:'piu len-ta-MÉN-te',en:'pyoo len-tah-MEN-teh'},
     {es:'Más despacio, por favor. Es la frase que de verdad hace falta: el italiano hablado va rápido.',
      en:'More slowly, please. This is the one you actually need: spoken Italian comes out fast.'}],
    ['Come si dice...?',{es:'KÓ-me si DÍ-che',en:'KOH-meh see DEE-cheh'},
     {es:'Cómo se dice. Señalando algo, resuelve media conversación.',
      en:'How do you say. Pointing at something, it solves half a conversation.'}],
    ['Va bene',{es:'va BÉ-ne',en:'vah BEH-neh'},
     {es:'Está bien, de acuerdo, listo. Sirve para cerrar cualquier intercambio.',
      en:'All right, agreed, done. It closes any exchange.'}]
  ]},

  {s:{es:'El baño, que es lo primero que se pregunta',en:'The bathroom, the first thing you ask'}, k:'idioma', frases:[
    ['Dov’è il bagno?',{es:'do-VÉ il BÁ-ño',en:'doh-VEH eel BAH-nyoh'},
     {es:'Dónde está el baño. La <em>gn</em> italiana es exactamente la <em>ñ</em>.',
      en:'Where is the bathroom. Italian <em>gn</em> is the “ny” in “canyon”.'}],
    ['Il bagno, per favore?',{es:'il BÁ-ño per fa-VÓ-re',en:'eel BAH-nyoh pair fah-VOH-reh'},
     {es:'La versión corta, y funciona igual de bien.',en:'The short version, and it works just as well.'}],
    ['Posso usare il bagno?',{es:'PÓS-so u-SÁ-re il BÁ-ño',en:'POSS-soh oo-ZAH-reh eel BAH-nyoh'},
     {es:'Puedo usar el baño. En un bar, lo correcto es consumir algo primero.',
      en:'May I use the bathroom. In a bar, the done thing is to order something first.'}],
    ['Dov’è la stazione?',{es:'do-VÉ la sta-TSIÓ-ne',en:'doh-VEH lah stah-TSYOH-neh'},
     {es:'Dónde está la estación.',en:'Where is the station.'}],
    ['Come arrivo a...?',{es:'KÓ-me a-RRÍ-vo a',en:'KOH-meh ah-REE-voh ah'},
     {es:'Cómo llego a. Después del <em>a</em> va el nombre del lugar, sin más.',
      en:'How do I get to. The place name goes straight after the “a”.'}],
    ['È lontano?',{es:'e lon-TÁ-no',en:'eh lon-TAH-noh'},
     {es:'Está lejos. <b>Qui vicino</b> es acá cerca, y es la respuesta que uno quiere oír.',
      en:'Is it far. <b>Qui vicino</b> means just nearby, which is the answer you want.'}],
    ['A destra / A sinistra',{es:'a DÉS-tra / a si-NÍS-tra',en:'ah DESS-trah / ah see-NEESS-trah'},
     {es:'A la derecha y a la izquierda. Ojo: <em>sinistra</em> es izquierda, no siniestra.',
      en:'To the right and to the left. Note that <em>sinistra</em> is left, nothing sinister about it.'}],
    ['Sempre dritto',{es:'SÉM-pre DRÍT-to',en:'SEM-preh DREET-toh'},
     {es:'Todo derecho, siempre de frente.',en:'Straight ahead, keep going.'}],
    ['Mi sono perso',{es:'mi SÓ-no PÉR-so',en:'mee SOH-noh PAIR-soh'},
     {es:'Me perdí. Una mujer dice <b>mi sono persa</b>.',
      en:'I am lost. A woman says <b>mi sono persa</b>.'}],
    ['Può mostrarmi sulla mappa?',{es:'puó mos-TRÁR-mi SÚL-la MÁP-pa',en:'pwoh moh-STRAR-mee SOOL-lah MAHP-pah'},
     {es:'Me lo puede mostrar en el mapa. Con el teléfono en la mano, resuelve lo que las palabras no.',
      en:'Can you show me on the map. With the phone in your hand it solves what words cannot.'}]
  ]},

  {s:{es:'Sentarse a comer',en:'Sitting down to eat'}, k:'idioma', frases:[
    ['Un tavolo per due, per favore',{es:'un TÁ-vo-lo per DÚ-e',en:'oon TAH-voh-loh pair DOO-eh'},
     {es:'Una mesa para dos, por favor.',en:'A table for two, please.'}],
    ['Abbiamo una prenotazione',{es:'ab-BIÁ-mo una pre-no-ta-TSIÓ-ne',en:'ahb-BYAH-moh oo-nah preh-noh-tah-TSYOH-neh'},
     {es:'Tenemos una reserva.',en:'We have a booking.'}],
    ['Il menù, per favore',{es:'il me-NÚ',en:'eel meh-NOO'},
     {es:'La carta, por favor.',en:'The menu, please.'}],
    ['Che cosa mi consiglia?',{es:'ke CÓ-sa mi con-SÍ-lia',en:'keh KOH-zah mee kon-SEE-lyah'},
     {es:'Qué me recomienda. La mejor frase de todas: casi siempre contestan con lo que sale bien ese día.',
      en:'What do you recommend. The best phrase of all: the answer is usually whatever is good that day.'}],
    ['Vorrei...',{es:'vo-RRÉI',en:'vor-RAY'},
     {es:'Querría. Es más amable que <em>voglio</em>, que suena a orden.',
      en:'I would like. Softer than <em>voglio</em>, which lands like an order.'}],
    ['Per me...',{es:'per me',en:'pair meh'},
     {es:'Para mí. Lo más práctico para pedir: <em>per me</em> y se señala el plato.',
      en:'For me. The most practical way to order: say it and point at the dish.'}],
    ['Senza...',{es:'SÉN-tsa',en:'SEN-tsah'},
     {es:'Sin. <b>Senza glutine</b> es sin gluten, <b>senza lattosio</b> sin lactosa.',
      en:'Without. <b>Senza glutine</b> is gluten free, <b>senza lattosio</b> lactose free.'}],
    ['Sono allergico a...',{es:'SÓ-no al-LÉR-yi-co a',en:'SOH-noh ahl-LAIR-jee-koh ah'},
     {es:'Soy alérgico a. En femenino, <b>allergica</b>. Vale la pena saberla de memoria.',
      en:'I am allergic to. A woman says <b>allergica</b>. Worth knowing by heart.'}],
    ['Dell’acqua, per favore',{es:'del-LÁK-kua',en:'dell-AHK-kwah'},
     {es:'Agua, por favor. Van a preguntar <b>naturale o frizzante</b>: sin gas o con gas.',
      en:'Some water, please. They will ask <b>naturale o frizzante</b>: still or sparkling.'}],
    ['Un bicchiere di vino rosso',{es:'un bik-KIÉ-re di VÍ-no RÓS-so',en:'oon beek-KYEH-reh dee VEE-noh ROSS-soh'},
     {es:'Una copa de vino tinto. Blanco es <b>bianco</b>. Media jarra de la casa es <b>mezzo litro della casa</b>.',
      en:'A glass of red wine. White is <b>bianco</b>. Half a litre of the house wine is <b>mezzo litro della casa</b>.'}],
    ['Un altro, per favore',{es:'un ÁL-tro',en:'oon AHL-troh'},
     {es:'Otro, por favor.',en:'Another one, please.'}],
    ['Basta, grazie',{es:'BÁS-ta GRÁ-tsie',en:'BAH-stah GRAHT-tsyeh'},
     {es:'Suficiente, gracias. Para cortar el queso rallado o el vino sin quedar mal.',
      en:'That is enough, thanks. To stop the grated cheese or the wine without being rude.'}],
    ['Il conto, per favore',{es:'il CÓN-to',en:'eel KON-toh'},
     {es:'La cuenta, por favor. No la traen solas: hay que pedirla.',
      en:'The bill, please. It never comes on its own: you have to ask.'}],
    ['Posso pagare con la carta?',{es:'PÓS-so pa-GÁ-re con la CÁR-ta',en:'POSS-soh pah-GAH-reh kon lah KAR-tah'},
     {es:'Puedo pagar con tarjeta. Por ley tienen que aceptarla, aunque en lugares chicos pongan cara.',
      en:'Can I pay by card. By law they have to take it, though small places may pull a face.'}],
    ['Era buonissimo',{es:'É-ra buo-NÍS-si-mo',en:'EH-rah bwoh-NEESS-see-moh'},
     {es:'Estaba riquísimo. Dicho al irse, cambia la despedida.',
      en:'That was delicious. Said on the way out, it changes the goodbye.'}]
  ]},

  {s:{es:'El café, que tiene sus reglas',en:'Coffee, which has its own rules'}, k:'idioma', frases:[
    ['Un caffè, per favore',{es:'un caf-FÉ',en:'oon kahf-FEH'},
     {es:'Un café. En Italia eso es un espresso corto y nada más. Para uno largo, hay que decirlo.',
      en:'A coffee. In Italy that means a short espresso, full stop. For anything longer you have to say so.'}],
    ['Un caffè macchiato',{es:'un caf-FÉ mak-KIÁ-to',en:'oon kahf-FEH mahk-KYAH-toh'},
     {es:'Un espresso con una gota de leche. Lo más cercano a un cortado.',
      en:'An espresso with a drop of milk. The closest thing to a flat white in miniature.'}],
    ['Un cappuccino',{es:'un cap-pu-CHÍ-no',en:'oon kahp-poo-CHEE-noh'},
     {es:'Con leche y espuma, y solo de mañana. Después del mediodía nadie lo pide.',
      en:'With milk and foam, and only in the morning. After midday nobody orders one.'}],
    ['Un caffè americano',{es:'un caf-FÉ a-me-ri-CÁ-no',en:'oon kahf-FEH ah-meh-ree-KAH-noh'},
     {es:'Un espresso con agua caliente aparte. Es lo que más se parece a un café de filtro.',
      en:'An espresso with hot water alongside. The nearest thing to a filter coffee.'}],
    ['Un cornetto',{es:'un cor-NÉT-to',en:'oon kor-NET-toh'},
     {es:'La medialuna italiana, más dulce y más blanda. Con un café, es el desayuno entero.',
      en:'The Italian croissant, sweeter and softer. With a coffee, that is the whole breakfast.'}],
    ['Una spremuta',{es:'una spre-MÚ-ta',en:'oo-nah spreh-MOO-tah'},
     {es:'Un jugo recién exprimido, casi siempre de naranja.',
      en:'A freshly squeezed juice, almost always orange.'}],
    ['Al banco o al tavolo?',{es:'al BÁN-co o al TÁ-vo-lo',en:'ahl BAHN-koh oh ahl TAH-voh-loh'},
     {es:'En la barra o en la mesa. Lo van a preguntar, y la respuesta cambia el precio.',
      en:'At the bar or at a table. They will ask, and the answer changes the price.'}],
    ['Pago prima?',{es:'PÁ-go PRÍ-ma',en:'PAH-goh PREE-mah'},
     {es:'Pago primero. En muchos bares se paga en la caja y después se pide con el ticket.',
      en:'Do I pay first. In many bars you pay at the till and then order with the receipt.'}],
    ['Lo scontrino',{es:'lo scon-TRÍ-no',en:'loh skon-TREE-noh'},
     {es:'El ticket. Es el papel que se apoya en la barra para que atiendan.',
      en:'The receipt. It is the slip you put on the bar counter to get served.'}]
  ]},

  {s:{es:'Comprar, pagar y los números',en:'Shopping, paying and numbers'}, k:'idioma', frases:[
    ['Quant’è?',{es:'kuan-TÉ',en:'kwahn-TEH'},
     {es:'Cuánto es. Más corto y más usado que <em>quanto costa</em>.',
      en:'How much is it. Shorter and more common than <em>quanto costa</em>.'}],
    ['Sto solo guardando',{es:'sto SÓ-lo guar-DÁN-do',en:'stoh SOH-loh gwar-DAHN-doh'},
     {es:'Solo estoy mirando.',en:'I am just looking.'}],
    ['Posso provarlo?',{es:'PÓS-so pro-VÁR-lo',en:'POSS-soh proh-VAR-loh'},
     {es:'Me lo puedo probar, o lo puedo probar si es comida.',
      en:'Can I try it on, or can I taste it if it is food.'}],
    ['Un etto',{es:'un ÉT-to',en:'oon ET-toh'},
     {es:'Cien gramos. En la fiambrería y en el mercado se pide así, no en gramos: <b>due etti</b> son doscientos.',
      en:'A hundred grams. At the deli and the market you order this way, not in grams: <b>due etti</b> is two hundred.'}],
    ['Mezzo chilo',{es:'MÉD-dso KÍ-lo',en:'MED-dzoh KEE-loh'},
     {es:'Medio kilo.',en:'Half a kilo.'}],
    ['Solo contanti',{es:'SÓ-lo con-TÁN-ti',en:'SOH-loh kon-TAHN-tee'},
     {es:'Solo efectivo. Es el cartel que hay que saber leer antes de hacer la cola.',
      en:'Cash only. The sign worth reading before you join the queue.'}],
    ['Da uno a cinque',{es:'ÚN-o, DÚ-e, tre, KUÁT-tro, CHÍN-kue',en:'OO-noh, DOO-eh, treh, KWAHT-troh, CHEEN-kweh'},
     {es:'Uno, due, tre, quattro, cinque.',en:'Uno, due, tre, quattro, cinque.'}],
    ['Da sei a dieci',{es:'sei, SÉT-te, ÓT-to, NÓ-ve, DIÉ-chi',en:'say, SET-teh, OT-toh, NOH-veh, DYEH-chee'},
     {es:'Sei, sette, otto, nove, dieci.',en:'Sei, sette, otto, nove, dieci.'}],
    ['Venti, cento, mille',{es:'VÉN-ti, CHÉN-to, MÍL-le',en:'VEN-tee, CHEN-toh, MEEL-leh'},
     {es:'Veinte, cien, mil. Con estos y los diez de arriba se sobrevive a cualquier precio.',
      en:'Twenty, a hundred, a thousand. With these and the ten above you survive any price.'}]
  ]},

  {s:{es:'Trenes, boletos y andenes',en:'Trains, tickets and platforms'}, k:'idioma', frases:[
    ['Un biglietto per..., per favore',{es:'un bi-LIÉT-to per',en:'oon bee-LYET-toh pair'},
     {es:'Un boleto para. La <em>gli</em> italiana suena como una <em>li</em> rápida.',
      en:'A ticket to. Italian <em>gli</em> sounds like the “lli” in “million”.'}],
    ['Andata e ritorno',{es:'an-DÁ-ta e ri-TÓR-no',en:'ahn-DAH-tah eh ree-TOR-noh'},
     {es:'Ida y vuelta. Solo ida es <b>solo andata</b>.',
      en:'Return. One way is <b>solo andata</b>.'}],
    ['Da quale binario?',{es:'da KUÁ-le bi-NÁ-rio',en:'dah KWAH-leh bee-NAH-ryoh'},
     {es:'De qué andén. <em>Binario</em> es andén o vía, y es la palabra que hay que buscar en la pantalla.',
      en:'From which platform. <em>Binario</em> is the platform, and it is the word to look for on the board.'}],
    ['È questo il treno per...?',{es:'e KUÉS-to il TRÉ-no per',en:'eh KWESS-toh eel TREH-noh pair'},
     {es:'Es este el tren para. La que salva el día cuando hay dos trenes en el mismo andén.',
      en:'Is this the train to. The one that saves the day when two trains share a platform.'}],
    ['Devo cambiare?',{es:'DÉ-vo cam-BIÁ-re',en:'DEH-voh kahm-BYAH-reh'},
     {es:'Tengo que hacer cambio.',en:'Do I have to change trains.'}],
    ['Devo convalidare il biglietto?',{es:'con-va-li-DÁ-re',en:'kon-vah-lee-DAH-reh'},
     {es:'Tengo que validar el boleto. En los regionales, sí: en la maquinita del andén, antes de subir, o es multa.',
      en:'Do I have to validate the ticket. On regional trains, yes: in the little machine on the platform, before boarding, or it is a fine.'}],
    ['Questo posto è libero?',{es:'KUÉS-to PÓS-to e LÍ-be-ro',en:'KWESS-toh POH-stoh eh LEE-beh-roh'},
     {es:'Está libre este asiento.',en:'Is this seat free.'}],
    ['Il treno è in ritardo',{es:'il TRÉ-no e in ri-TÁR-do',en:'eel TREH-noh eh een ree-TAR-doh'},
     {es:'El tren viene con retraso. Es lo que dice el cartel cuando algo no cierra.',
      en:'The train is delayed. It is what the board says when something does not add up.'}],
    ['Prossima fermata',{es:'PRÓS-si-ma fer-MÁ-ta',en:'PROSS-see-mah fair-MAH-tah'},
     {es:'Próxima parada. Lo dice el altoparlante de los trenes y de los buses.',
      en:'Next stop. What the announcement says on trains and buses.'}],
    ['Sciopero',{es:'SCIÓ-pe-ro',en:'SHOH-peh-roh'},
     {es:'Huelga. Si aparece en la pantalla de la estación, el plan del día cambia. Conviene reconocerla de lejos.',
      en:'Strike. If it shows up on the station board, the day’s plan changes. Worth recognising at a glance.'}]
  ]},

  {s:{es:'Si algo sale mal',en:'If something goes wrong'}, k:'idioma', frases:[
    ['Aiuto!',{es:'a-YÚ-to',en:'ah-YOO-toh'},
     {es:'Auxilio.',en:'Help.'}],
    ['Chiami la polizia',{es:'KIÁ-mi la po-li-TSÍ-a',en:'KYAH-mee lah poh-lee-TSEE-ah'},
     {es:'Llame a la policía. El número de emergencias en toda Europa es el <b>112</b>.',
      en:'Call the police. The emergency number across Europe is <b>112</b>.'}],
    ['Chiami un’ambulanza',{es:'KIÁ-mi un am-bu-LÁN-tsa',en:'KYAH-mee oon ahm-boo-LAHN-tsah'},
     {es:'Llame a una ambulancia.',en:'Call an ambulance.'}],
    ['Ho perso il passaporto',{es:'o PÉR-so il pas-sa-PÓR-to',en:'oh PAIR-soh eel pahs-sah-POR-toh'},
     {es:'Perdí el pasaporte. <b>Il portafoglio</b> es la billetera, <b>il telefono</b> el teléfono.',
      en:'I lost my passport. <b>Il portafoglio</b> is the wallet, <b>il telefono</b> the phone.'}],
    ['Mi hanno rubato la borsa',{es:'mi ÁN-no ru-BÁ-to la BÓR-sa',en:'mee AHN-noh roo-BAH-toh lah BOR-sah'},
     {es:'Me robaron el bolso. Para el seguro hace falta la denuncia, que es <b>la denuncia</b> igual.',
      en:'My bag was stolen. The insurance needs a police report, which is <b>la denuncia</b>.'}],
    ['Non mi sento bene',{es:'non mi SÉN-to BÉ-ne',en:'non mee SEN-toh BEH-neh'},
     {es:'No me siento bien.',en:'I do not feel well.'}],
    ['Ho bisogno di un medico',{es:'o bi-SÓ-ño di un MÉ-di-co',en:'oh bee-ZOH-nyoh dee oon MEH-dee-koh'},
     {es:'Necesito un médico.',en:'I need a doctor.'}],
    ['Dov’è la farmacia?',{es:'do-VÉ la far-ma-CHÍ-a',en:'doh-VEH lah far-mah-CHEE-ah'},
     {es:'Dónde está la farmacia. La cruz verde de la vereda es la señal, y hay una de turno siempre.',
      en:'Where is the pharmacy. The green cross on the street is the sign, and one is always on duty.'}],
    ['Mi sono chiuso fuori',{es:'mi SÓ-no KIÚ-so FUÓ-ri',en:'mee SOH-noh KYOO-zoh FWOH-ree'},
     {es:'Me quedé afuera. Una mujer dice <b>chiusa</b>. Con tanto alojamiento sin recepción, no es una frase tan improbable.',
      en:'I locked myself out. A woman says <b>chiusa</b>. With so many places that have no front desk, not that unlikely a phrase.'}]
  ]},

  {s:{es:'Cómo se pronuncia', en:'How it is pronounced'}, k:'idioma', html:{es:`
      <p>El italiano se lee casi como se escribe, igual que el castellano, y eso deja a quien lo habla bastante arriba. Lo que cambia son seis o siete reglas, y con esas alcanza para leer cualquier cartel en voz alta sin quedar en ridículo.</p>
      <h3>Las que hay que saber</h3>
      <ul>
        <li><b>ci, ce</b> suenan <em>chi, che</em>: <em>cinque</em> es <em>chínkue</em>, <em>piacere</em> es <em>piachére</em>.</li>
        <li><b>chi, che</b> suenan <em>qui, que</em>: <em>chianti</em> es <em>quianti</em>, <em>perché</em> es <em>perqué</em>.</li>
        <li><b>gi, ge</b> suenan como la <em>y</em> rioplatense, un poco más marcada: <em>giorno</em>, <em>gelato</em>.</li>
        <li><b>ghi, ghe</b> suenan <em>gui, gue</em>: <em>spaghetti</em> es <em>spaguetti</em>.</li>
        <li><b>gn</b> es la <em>ñ</em>, sin vueltas: <em>bagno</em> es <em>baño</em>, <em>gnocchi</em> es <em>ñokki</em>.</li>
        <li><b>gli</b> suena como una <em>li</em> dicha rápido, sin la <em>sh</em> rioplatense: <em>biglietto</em> es casi <em>bilietto</em>, <em>figlio</em> es casi <em>filio</em>.</li>
        <li><b>sc</b> antes de <em>i</em> o <em>e</em> suena <em>sh</em>: <em>sciopero</em>, <em>prosciutto</em>.</li>
        <li><b>z</b> suena <em>ts</em>: <em>grazie</em> es <em>gratsie</em>, <em>pizza</em> es <em>pitsa</em>.</li>
        <li>La <b>h</b> no suena nunca y la <b>v</b> es labiodental de verdad, no una <em>b</em>.</li>
      </ul>
      <h3>La consonante doble, que no es un detalle</h3>
      <p>En italiano una consonante doble se sostiene, y eso cambia la palabra. <em>Nonno</em> es abuelo y <em>nono</em> es noveno. <em>Penne</em> son los fideos y <em>pene</em> es exactamente lo que parece, así que al pedir pasta conviene estirar esa <em>n</em>. Es el error que más risa causa y el más fácil de evitar: si está escrita doble, se dura el doble.</p>
      <h3>El acento</h3>
      <p>Casi siempre cae en la penúltima sílaba, igual que en castellano, así que la intuición funciona. Las excepciones suelen venir marcadas con tilde, como en <em>perché</em>, <em>caffè</em> o <em>città</em>. En las frases, la sílaba fuerte va en mayúscula.</p>
    `, en:`
      <p>Italian is read almost exactly as it is written, with no silent endings and no guessing. What you need is six or seven rules, and with those you can read any sign out loud without embarrassing yourself.</p>
      <h3>The ones that matter</h3>
      <ul>
        <li><b>ci, ce</b> sound like <em>chee, cheh</em>: <em>cinque</em> is <em>CHEEN-kweh</em>, <em>piacere</em> is <em>pyah-CHEH-reh</em>.</li>
        <li><b>chi, che</b> sound like <em>kee, keh</em>: <em>chianti</em> is <em>KYAHN-tee</em>, <em>perché</em> is <em>pair-KEH</em>.</li>
        <li><b>gi, ge</b> sound like the English <em>j</em>: <em>giorno</em>, <em>gelato</em>.</li>
        <li><b>ghi, ghe</b> are a hard <em>g</em>: <em>spaghetti</em> is <em>spah-GET-tee</em>.</li>
        <li><b>gn</b> is the <em>ny</em> of “canyon”: <em>bagno</em>, <em>gnocchi</em>.</li>
        <li><b>gli</b> is the <em>lli</em> of “million”: <em>biglietto</em>, <em>figlio</em>.</li>
        <li><b>sc</b> before <em>i</em> or <em>e</em> is <em>sh</em>: <em>sciopero</em>, <em>prosciutto</em>.</li>
        <li><b>z</b> is <em>ts</em>: <em>grazie</em> is <em>GRAHT-tsyeh</em>, <em>pizza</em> is <em>PEET-tsah</em>.</li>
        <li><b>h</b> is always silent, and every vowel is said cleanly: no English drift from one sound into another.</li>
      </ul>
      <h3>Double consonants are not decoration</h3>
      <p>A double consonant is held longer, and that changes the word. <em>Nonno</em> is grandfather, <em>nono</em> is ninth. <em>Penne</em> is the pasta and <em>pene</em> is exactly what it looks like, so stretch that <em>n</em> when ordering. It is the mistake that gets the most laughs and the easiest one to avoid: if it is written double, hold it twice as long.</p>
      <h3>Stress</h3>
      <p>It almost always falls on the second to last syllable, so your first instinct is usually right. The exceptions normally carry a written accent: <em>perché</em>, <em>caffè</em>, <em>città</em>. In the phrases, the stressed syllable is in capitals.</p>
    `}},

  {s:{es:'Las trampas que conviene saber',en:'The traps worth knowing about'}, k:'idioma', items:[
    {nota:1, n:{es:'Prego sirve para todo',en:'Prego does everything'},
     d:{es:'Es de nada, pase usted, adelante, dígame, por favor siéntese y sírvase, según el momento. Se escucha veinte veces por día y casi nunca quiere decir lo mismo.',
        en:'It means you are welcome, after you, go ahead, how can I help, please sit down and help yourself, depending on the moment. You will hear it twenty times a day and it almost never means the same thing twice.'},
     t:'idioma',
     tip:{es:'La regla práctica: si alguien dice <em>prego</em> y no se sabe qué contestar, <em>grazie</em> siempre encaja.',
          en:'The practical rule: if someone says <em>prego</em> and you do not know what to answer, <em>grazie</em> always fits.'}},
    {nota:1, n:{es:'Ciao no se usa con todo el mundo',en:'Ciao is not for everyone'},
     d:{es:'Es informal, de amigos y de gente de la misma edad. Con un mozo, en un negocio, con alguien mayor o en una recepción, lo que corresponde es buongiorno o buonasera, y arrivederci al irse.',
        en:'It is informal, for friends and people your own age. With a waiter, in a shop, with someone older or at a hotel desk, the right call is buongiorno or buonasera, and arrivederci on the way out.'},
     t:'idioma',
     tip:{es:'Entrar a un negocio sin saludar queda mal, bastante más que en el Río de la Plata. Un buongiorno al cruzar la puerta y un grazie al salir es casi un trámite obligatorio.',
          en:'Walking into a shop without greeting anyone lands badly. A buongiorno on the way in and a grazie on the way out is close to a formality.'}},
    {nota:1, n:{es:'Un etto, no cien gramos',en:'Un etto, not a hundred grams'},
     d:{es:'En la fiambrería, en el mercado y en cualquier mostrador de comida, la unidad es el <em>etto</em>: cien gramos. Se pide <em>un etto di prosciutto</em>, no cien gramos, y al decirlo así el trato cambia.',
        en:'At the deli, at the market and at any food counter, the unit is the <em>etto</em>: a hundred grams. You ask for <em>un etto di prosciutto</em>, not a hundred grams, and saying it that way changes how you are treated.'},
     t:'idioma',
     tip:{es:'Dos etti son doscientos gramos y alcanzan para un almuerzo de pan, fiambre y queso en una plaza. Es el almuerzo más barato y más rico de Italia.',
          en:'Two etti is two hundred grams, enough for a lunch of bread, cured meat and cheese in a square. The cheapest and best lunch in Italy.'}},
    {nota:1, n:{es:'Permesso y scusi no son lo mismo',en:'Permesso and scusi are not the same'},
     d:{es:'<em>Permesso</em> es para pasar: un vagón lleno, un mercado, una escalera angosta. <em>Scusi</em> es para interrumpir o para disculparse. Usar la que corresponde es la diferencia entre sonar local y sonar a turista.',
        en:'<em>Permesso</em> is for getting through: a packed carriage, a market, a narrow staircase. <em>Scusi</em> is for interrupting or apologising. Using the right one is the difference between sounding local and sounding like a tourist.'},
     t:'idioma',
     tip:{es:'Al entrar a una casa ajena también se dice <em>permesso</em>, parado en la puerta, antes de pasar. Sirve en cualquier alojamiento que lleva su dueño.',
          en:'You also say <em>permesso</em> at the door of someone’s home before stepping in. Useful in any place run by its owner.'}},
    {nota:1, n:{es:'Buon appetito se dice y se contesta',en:'Buon appetito is said and answered'},
     d:{es:'Lo dice el mozo al traer el plato, lo dice la mesa de al lado y lo dicen los desconocidos en un tren si uno abre un sándwich. Se contesta <em>grazie, altrettanto</em>, que es gracias, igualmente.',
        en:'The waiter says it with the plate, the next table says it, and strangers on a train say it if you open a sandwich. The answer is <em>grazie, altrettanto</em>, which is thanks, same to you.'},
     t:'idioma',
     tip:{es:'Si <em>altrettanto</em> no sale, <em>grazie</em> solo también está bien. Lo que queda mal es no contestar nada.',
          en:'If <em>altrettanto</em> does not come out, plain <em>grazie</em> is fine too. What lands badly is not answering at all.'}},
    {nota:1, n:{es:'El castellano ayuda y traiciona',en:'Spanish helps, and betrays'},
     d:{es:'Quien habla castellano entiende el setenta por ciento sin estudiar nada, y después aparecen las palabras que no quieren decir lo que parecen. <em>Burro</em> es manteca, <em>salire</em> es subir, <em>caldo</em> es caliente, <em>aceto</em> es vinagre y <em>gamba</em> es pierna.',
        en:'If you know any Spanish you understand most of it for free, and then come the words that do not mean what they look like. <em>Burro</em> is butter, <em>salire</em> is to go up, <em>caldo</em> is hot, <em>aceto</em> is vinegar and <em>gamba</em> is leg.'},
     t:'idioma',
     tip:{es:'La más útil de todas: <em>prenotazione</em> es la reserva, no una anotación. Y <em>conto</em> es la cuenta, mientras <em>racconto</em> es un relato.',
          en:'The most useful of the lot: <em>prenotazione</em> is the booking. And <em>conto</em> is the bill, while <em>racconto</em> is a story.'}}
  ]}
  ]
}
