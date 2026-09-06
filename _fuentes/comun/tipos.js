const TIPOS = {
  aire:'Aire libre', visita:'Visita', comer:'Comer', cafe:'Café', coctel:'Cóctel',
  compra:'Compras', navidad:'Navidad', evento:'Evento', mover:'Transporte'
};
/* Como se pide y como se paga en el sitio, y si hace falta reservar. Van solo
   cuando el dato es seguro: una etiqueta inventada es peor que ninguna, porque
   la que viaja la lee parada en la puerta y decide con eso. */
const SERVICIO = {
  mesa:'Mesa y mozo', barra:'En la barra', mostrador:'Mostrador', puesto:'Mercado'
};
const RESERVA = {
  si:'Reservar sí o sí', conviene:'Mejor reservar',
  no:'Se cae sin reserva', cola:'No reservan, hay cola'
};
