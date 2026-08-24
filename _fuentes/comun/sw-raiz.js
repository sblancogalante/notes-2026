/* Antes la guia vivia en la raiz y su service worker quedo registrado ahi.
   Si alguien ya se la habia instalado, ese service worker le seguiria
   sirviendo la pagina vieja desde la cache para siempre. Este archivo lo
   reemplaza, borra solo las caches de aquella version y se da de baja.

   Ojo: caches.keys() devuelve las de todo el dominio, no las de esta carpeta.
   Por eso se filtra por el prefijo viejo y no se borra todo. */
const VIEJAS = /^notes-2026-/;

self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) {
      if (VIEJAS.test(k)) await caches.delete(k);
    }
    await self.registration.unregister();
    for (const c of await self.clients.matchAll({ type: 'window' })) c.navigate(c.url);
  })());
});
