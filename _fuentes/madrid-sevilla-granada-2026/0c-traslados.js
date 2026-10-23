{
  id:'via',
  nav:'Traslados',
  name:'Los traslados',
  plate:'Trenes y taxis',
  accent:'#1D4ED8', lt:'#93C5FD', maps:'',
  lede:'Cuatro tramos largos, todos en tren, más el aeropuerto a la ida y a la vuelta. Con seis valijas grandes, lo que más cambia el día es cómo se sube y se baja de cada tren y de cada taxi. Acá está cada tramo, cuánto dura y cómo se resuelve.',
  quick:[
    ['Madrid a Sevilla','2h30 a 3h en tren'],
    ['Sevilla a Granada','2h40 en tren directo'],
    ['Granada a Madrid','3h20 a 3h50 en tren'],
    ['Taxi Barajas','33 euros fijos al centro'],
    ['Con valijas','Dos taxis, no uno']
  ],
  sections:[
  {s:'Todo de un vistazo', k:'mover', html:`
      <div class="tablewrap"><table>
        <thead><tr><th>Tramo</th><th>Cómo</th><th>Dura</th><th>De dónde a dónde</th></tr></thead>
        <tbody>
          <tr><td>Barajas al centro</td><td>Dos taxis, tarifa fija</td><td>25 a 40 min</td><td>La terminal al alojamiento</td></tr>
          <tr><td>Madrid a Sevilla</td><td>AVE, Iryo u Ouigo</td><td>2h30 a 3h</td><td>Atocha a Santa Justa</td></tr>
          <tr><td>Sevilla a Granada</td><td>Avant directo, o bus</td><td>2h40, o unas 3h</td><td>Santa Justa a Granada</td></tr>
          <tr><td>Granada a Madrid</td><td>AVE directo</td><td>3h20 a 3h50</td><td>Granada a Atocha</td></tr>
          <tr><td>Madrid a Barajas</td><td>Dos taxis, tarifa fija</td><td>25 a 40 min</td><td>El alojamiento a la terminal</td></tr>
          <tr><td>Segovia, si va</td><td>Avant, o bus</td><td>30 min, o 1h15</td><td>Chamartín o Moncloa</td></tr>
          <tr><td>Córdoba, si va</td><td>AVE o Avant</td><td>45 min desde Sevilla</td><td>Santa Justa a Córdoba</td></tr>
        </tbody>
      </table></div>
      <p>Los tiempos son los de los trenes directos de 2026. Algunos horarios paran más o hacen transbordo, y eso aparece al comprar.</p>
    `},

  {s:'Los trenes', k:'mover', items:[
    {nota:1, n:'Comprar con tiempo', d:'Los trenes de larga distancia en España se compran como los pasajes de avión: el mismo asiento sale bastante menos con semanas de anticipación que el día anterior. Los seis en la misma compra, para que queden juntos.', t:'mover', tip:'Al elegir asientos, buscar las mesas de cuatro enfrentados y los dos de al lado del pasillo. Así viajan los seis juntos y los bolsos quedan a la vista.'},
    {nota:1, n:'Tres compañías, y la valija cambia el precio', d:'Entre Madrid y Andalucía corren Renfe (AVE y su versión barata, Avlo), Iryo y Ouigo. Renfe AVE es la que más equipaje incluye sin pagar aparte. En Ouigo y en las tarifas más baratas de Iryo, la valija grande es un extra.', t:'mover', tip:'En Ouigo la valija grande cuesta 5 euros comprada online y 20 si se paga en la estación (2026). Hay que sumarla al comprar, no al llegar. Antes de elegir el pasaje más barato, conviene hacer la cuenta con las seis valijas.'},
    {nota:1, n:'Dónde va la valija grande', d:'Arriba de los asientos entran bolsos y valijas chicas. Las grandes van en los portaequipajes de las puntas de cada vagón, que tienen lugar para pocas.', t:'mover', tip:'Con seis valijas grandes, conviene estar en el andén apenas abren el embarque y subir primero, para encontrar lugar en las puntas. Si no queda, el personal del tren indica dónde dejarlas.'},
    {nota:1, n:'En la estación', d:'Los trenes de larga distancia tienen control de seguridad con escáner para el equipaje, como en un aeropuerto chico. El andén se anuncia en la pantalla unos minutos antes de salir y el embarque cierra un par de minutos antes de la hora.', t:'mover', tip:'Media hora antes en la estación alcanza y sobra. El billete en el celular se escanea en el acceso al andén.'},
    {nota:1, n:'Madrid tiene dos estaciones grandes', d:'Casi todos los trenes a Andalucía salen de Madrid-Puerta de Atocha-Almudena Grandes, que en el billete puede figurar con ese nombre largo. Los de Segovia salen de Chamartín, en la otra punta de la ciudad.', t:'mover', tip:'La estación de salida viene en el billete. Mirarla la noche antes ahorra el susto, porque entre una y otra hay media hora de taxi.'},
    {nota:1, n:'De Sevilla a Granada', d:'Hay un tren Avant directo de unas 2h40, que para en Córdoba, Puente Genil, Antequera y Loja. Algunos horarios hacen transbordo y tardan más. El bus de Alsa tarda unas tres horas y deja en la estación de buses de Granada, en las afueras.', t:'mover', tip:'El tren es más cómodo con valijas grandes y llega más cerca del centro. El bus sirve si no queda tren a buena hora.'}
  ]},

  {s:'Llegar y salir con valijas', k:'mover', items:[
    {nota:1, n:'De Barajas al centro', d:'El taxi tiene tarifa fija de 33 euros entre el aeropuerto y cualquier punto dentro de la M-30, que es todo el Madrid que interesa. Es por auto, no por persona, e incluye el equipaje: no se pueden cobrar extras por valijas ni por la hora.', t:'mover', tip:'La fila de taxis está a la salida de cada terminal. Con seis personas y seis valijas, dos taxis son 66 euros en total, y el auto los deja en la puerta.'},
    {nota:1, n:'Dos taxis o un auto grande', d:'Un taxi lleva cuatro personas. Uber y Cabify tienen autos de seis plazas, los XL, pero con seis valijas grandes no entra todo.', t:'mover', tip:'Con valijas, dos taxis. Sin valijas, para salir a cenar, un Uber XL o un Cabify XL lleva a los seis juntos y cuesta parecido a dos taxis.'},
    {nota:1, n:'En Granada, el taxi y el Albaicín', d:'Los taxis pueden entrar al Albaicín, pero muchas calles son escaleras o pasajes donde no pasa un auto. Si el alojamiento está ahí, el taxi deja en el punto más cercano y lo que falta se hace a pie con la valija.', t:'mover', tip:'Antes de llegar, preguntarle al alojamiento hasta dónde llega un auto y cuánto hay que caminar desde ahí. Con valijas grandes y cuesta arriba, no es un detalle.'},
    {nota:1, n:'Volver a Barajas', d:'La misma tarifa fija de 33 euros, pedida en la calle, por teléfono o por aplicación. La terminal depende de la aerolínea y viene en la tarjeta de embarque.', t:'mover', tip:'La T4 queda lejos de las otras terminales. Decirle al taxista la terminal exacta al subir evita dar la vuelta entera al aeropuerto.'}
  ]},

  {s:'Las excursiones', k:'mover', items:[
    {nota:1, n:'Segovia, en tren o en bus', d:'El Avant sale de Chamartín y llega en unos 30 minutos a Segovia-Guiomar, una estación a seis kilómetros del centro. De ahí, un bus urbano o un taxi hasta el Acueducto. El bus de Avanza sale del intercambiador de Moncloa, tarda alrededor de una hora y cuarto y deja cerca del Acueducto.', t:'mover', tip:'El tren es más rápido pero suma el tramo desde Guiomar. El bus tarda más y deja en el centro. Para seis personas, cualquiera de los dos funciona; el tren conviene comprarlo antes.'},
    {nota:1, n:'Córdoba, de paso o desde Sevilla', d:'Córdoba queda en la línea entre Madrid y Sevilla, a unos 45 minutos de Sevilla en tren. Se puede hacer como parada a mitad de camino o como ida y vuelta en el día desde Sevilla.', t:'mover', tip:'De paso, las valijas tienen que quedar en algún lado: la estación de tren no tiene consigna propia, pero la de buses, al lado, tiene casilleros, y hay consignas privadas cerca. Con seis valijas grandes, la ida y vuelta desde Sevilla es bastante más cómoda.'}
  ]}
  ]
},
