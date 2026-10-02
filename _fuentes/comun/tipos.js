/* Las etiquetas de las fichas. Cada una puede ser una cadena suelta, y
   entonces vale igual para los dos idiomas, o un par {es,en}. Quien las
   imprime las pasa por T(), asi que las guias viejas de un solo idioma siguen
   andando sin tocar nada. */
const TIPOS = {
  aire:{es:'Aire libre',en:'Outdoors'}, visita:{es:'Visita',en:'Sight'},
  comer:{es:'Comer',en:'Eat'}, cafe:{es:'Café',en:'Coffee'},
  coctel:{es:'Cóctel',en:'Drinks'}, compra:{es:'Compras',en:'Shopping'},
  navidad:{es:'Navidad',en:'Christmas'}, evento:{es:'Evento',en:'Event'},
  mover:{es:'Transporte',en:'Getting around'},
  idioma:{es:'Idioma',en:'Language'}
};
/* Como se pide y como se paga en el sitio, y si hace falta reservar. Van solo
   cuando el dato es seguro: una etiqueta inventada es peor que ninguna, porque
   la que viaja la lee parada en la puerta y decide con eso. */
const SERVICIO = {
  mesa:{es:'Mesa y mozo',en:'Table service'}, barra:{es:'En la barra',en:'At the bar'},
  mostrador:{es:'Mostrador',en:'Order at the counter'}, puesto:{es:'Mercado',en:'Market stall'}
};
const RESERVA = {
  si:{es:'Reservar sí o sí',en:'Book ahead, no excuses'},
  conviene:{es:'Mejor reservar',en:'Better to book'},
  no:{es:'Se cae sin reserva',en:'Walk in, no booking'},
  cola:{es:'No reservan, hay cola',en:'No bookings, expect a queue'}
};
