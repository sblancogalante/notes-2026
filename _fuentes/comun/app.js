/* ---------- utilidades ---------- */
const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
/* el texto de las fichas se escapa entero, pero deja pasar enfasis simple */
const rich = s => esc(s).replace(/&lt;(\/?)(em|b)&gt;/g, '<$1$2>');
const norm = s => String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'');
const slug = s => norm(s).replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'').slice(0,48);

const ICON = {
  check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12.5l5.5 5.5L20 6.5"/></svg>',
  caret:'<svg class="caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 5l7 7-7 7"/></svg>',
  pin:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z"/><circle cx="12" cy="10" r="2.4"/></svg>',
  link:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 4h6v6"/><path d="M20 4l-9 9"/><path d="M18 14v5a1 1 0 01-1 1H5a1 1 0 01-1-1V7a1 1 0 011-1h5"/></svg>',
  star:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5l2.7 5.6 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1L3.2 10l6.1-.9z"/></svg>',
  sun:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4"/></svg>',
  moon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 14.5A8.5 8.5 0 019.5 4a8.5 8.5 0 106 10.5z"/></svg>',
  nav:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 3L3 10.6l7.6 2.8L13.4 21z"/></svg>',
  auto:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8.5"/><path d="M12 3.5v17" /><path d="M12 3.5a8.5 8.5 0 010 17z" fill="currentColor" stroke="none"/></svg>'
};

/* ---------- los dos idiomas ---------- */
/* El contenido de la guia viene en pares {es,en}. Una cadena suelta sirve
   igual para los dos y no hace falta duplicarla: un nombre propio, una hora,
   una direccion. Todo lo que se imprime pasa por T(). */
const IDIOMAS = __IDIOMAS__;
const par = v => !!v && typeof v === 'object' && !Array.isArray(v) && ('es' in v || 'en' in v);
const KEY = '__CLAVE__';

let lang = IDIOMAS[0];
try {
  const g = localStorage.getItem(KEY + ':lang');
  if (g && IDIOMAS.indexOf(g) >= 0) lang = g;
} catch (e) {}

const T = v => par(v) ? (v[lang] != null ? v[lang] : (v.es != null ? v.es : v.en)) : v;
/* la variante fija, para lo que no puede cambiar al cambiar de idioma: las
   claves de lo visitado y el estado de los tramos quedarian huerfanas. */
const FIJO = v => par(v) ? (v.es != null ? v.es : v.en) : v;

/* los textos de la interfaz. Los que llevan datos adentro son funciones. */
const UI = {
  es:{
    otro:'EN', cambiar:'Read this guide in English',
    buscar:'Buscar en toda la guía', buscarAria:'Buscar', borrar:'Borrar búsqueda',
    filtros:'Filtros', tema:'Tema', idioma:'Idioma',
    temas:{auto:'automático', light:'claro', dark:'oscuro'}, temaPre:'Tema: ',
    precio:'Precio', tipo:'Tipo',
    marcar:n => 'Marcar ' + n + ' como visitado',
    ruta:'Ruta a pie', mapa:'Mapa', web:'Web', resenas:'Reseñas', truco:'Truco',
    tentativa:'Todavía sin confirmar',
    cuenta:(a, b) => a + ' de ' + b, reiniciar:'Reiniciar',
    abrir:'Abrir todo', cerrar:'Cerrar todo', cerrarSec:'Cerrar sección', arriba:'Volver arriba',
    tramo:(i, n) => 'Tramo ' + i + ' de ' + n, sigue:s => 'Sigue: ' + s,
    tramosHechos:n => 'Los ' + n + ' tramos, hechos',
    hoy:'Hoy', badgeSigue:'Sigue',
    marcarTramo:n => 'Marcar ' + n + ' como hecho',
    tramosReset:'Volver al estado por fecha',
    todosDias:'Todos', verDia:n => 'Ver ' + n, waze:'Waze',
    frIt:'En italiano', frPr:'Se dice', frSig:'Quiere decir',
    sinFiltro:'Nada con esos filtros', sinFiltro2:'Prueben quitando alguno.',
    sinNada:q => 'Sin resultados para “' + q + '”',
    sinNada2:'Prueben con el nombre de un sitio, un barrio o algo como “mercado”, “azotea” o “vino caliente”.',
    hallados:n => n + ' resultado' + (n === 1 ? '' : 's') + ' en toda la guía',
    copiar:'Copiar enlace', copiado:'Enlace copiado', usenQR:'Mejor usen el QR de al lado'
  },
  en:{
    otro:'ES', cambiar:'Leer esta guía en español',
    buscar:'Search the whole guide', buscarAria:'Search', borrar:'Clear search',
    filtros:'Filters', tema:'Theme', idioma:'Language',
    temas:{auto:'automatic', light:'light', dark:'dark'}, temaPre:'Theme: ',
    precio:'Price', tipo:'Kind',
    marcar:n => 'Mark ' + n + ' as visited',
    ruta:'Walking route', mapa:'Map', web:'Website', resenas:'Reviews', truco:'Tip',
    tentativa:'Not confirmed yet',
    cuenta:(a, b) => a + ' of ' + b, reiniciar:'Reset',
    abrir:'Open all', cerrar:'Close all', cerrarSec:'Close section', arriba:'Back to top',
    tramo:(i, n) => 'Leg ' + i + ' of ' + n, sigue:s => 'Next up: ' + s,
    tramosHechos:n => 'All ' + n + ' legs done',
    hoy:'Today', badgeSigue:'Next',
    marcarTramo:n => 'Mark ' + n + ' as done',
    tramosReset:'Back to the state set by date',
    todosDias:'All days', verDia:n => 'See ' + n, waze:'Waze',
    frIt:'In Italian', frPr:'Sounds like', frSig:'Means',
    sinFiltro:'Nothing matches those filters', sinFiltro2:'Try dropping one of them.',
    sinNada:q => 'No results for “' + q + '”',
    sinNada2:'Try the name of a place, a neighbourhood, or something like “market”, “rooftop” or “mulled wine”.',
    hallados:n => n + ' result' + (n === 1 ? '' : 's') + ' across the guide',
    copiar:'Copy link', copiado:'Link copied', usenQR:'Use the QR code next to it'
  }
};
const ui = k => (UI[lang] || UI.es)[k];

/* aplana todas las fichas de todas las ciudades, una sola vez. El identificador
   sale siempre de la variante fija, asi que lo marcado como visitado sobrevive
   al cambio de idioma. El indice de busqueda, en cambio, se rearma. */
const ALL = [];
CITIES.forEach(c => c.sections.forEach(sec => (sec.items || []).forEach(it => {
  it._id = c.id + ':' + slug(FIJO(it.n));
  it._city = c; it._sec = sec;
  ALL.push(it);
})));

/* el buscador trabaja sobre el idioma que se esta leyendo */
function indexar() {
  ALL.forEach(it => {
    it._hay = norm([T(it.n), T(it.d), T(it.tip) || '', it.a || '',
                    T(SERVICIO[it.serv]) || '', T(RESERVA[it.res]) || '',
                    T(it._sec.s), T(it._city.name)].join(' '));
  });
}

/* ---------- estado ---------- */
let visited = new Set();
try { visited = new Set(JSON.parse(localStorage.getItem(KEY + ':visited') || '[]')); } catch (e) {}
const saveVisited = () => { try { localStorage.setItem(KEY + ':visited', JSON.stringify([...visited])); } catch (e) {} };

/* estado de los tramos de viaje: por defecto lo decide la fecha del teléfono,
   y cada fila se puede tocar para corregirlo a mano. */
let tramos = {};
try { tramos = JSON.parse(localStorage.getItem(KEY + ':tramos') || '{}'); } catch (e) {}
const saveTramos = () => { try { localStorage.setItem(KEY + ':tramos', JSON.stringify(tramos)); } catch (e) {} };
const hoyISO = () => { const n = new Date(), z = x => String(x).padStart(2, '0');
  return n.getFullYear() + '-' + z(n.getMonth() + 1) + '-' + z(n.getDate()); };
const tramoId = l => l.d + '|' + FIJO(l.t);
const tramoHecho = l => { const k = tramoId(l); return k in tramos ? tramos[k] : l.d < hoyISO(); };

/* La guia abre en el capitulo que toca hoy. Cada uno con fechas declara d1 y
   d2; si hoy cae adentro, abre ahi. Antes del viaje y despues del viaje abre en
   el primero, que son los preparativos, igual que siempre. En los dias de
   traslado los rangos se pisan a proposito: gana el primero en orden de
   contenido, que es el capitulo donde arranca la manana, y el otro queda a un
   toque en el rail, marcado tambien como de hoy. */
const enFecha = c => !!c.d1 && !!c.d2 && c.d1 <= hoyISO() && hoyISO() <= c.d2;
let current = (CITIES.find(enFecha) || CITIES[0]).id;
/* que dia del plan se muestra. null quiere decir que lo decide la fecha, un
   numero que lo eligio quien lee, y 'todos' que quiere el capitulo entero. No se
   guarda en el telefono: al volver a abrir la guia manda la fecha de nuevo. */
let dia = null;
let query = '';
let fPrice = new Set();
let fType = new Set();

/* ---------- tema ---------- */
const hostTheme = document.documentElement.getAttribute('data-theme');
let themeMode = 'auto';
try { themeMode = localStorage.getItem(KEY + ':theme') || 'auto'; } catch (e) {}
function applyTheme() {
  const r = document.documentElement;
  if (themeMode === 'auto') { hostTheme ? r.setAttribute('data-theme', hostTheme) : r.removeAttribute('data-theme'); }
  else r.setAttribute('data-theme', themeMode);
  const btn = $('#themebtn');
  btn.innerHTML = themeMode === 'light' ? ICON.sun : themeMode === 'dark' ? ICON.moon : ICON.auto;
  btn.title = ui('temaPre') + ui('temas')[themeMode];
}
$('#themebtn').addEventListener('click', () => {
  themeMode = themeMode === 'auto' ? 'light' : themeMode === 'light' ? 'dark' : 'auto';
  try { localStorage.setItem(KEY + ':theme', themeMode); } catch (e) {}
  applyTheme();
});

/* ---------- idioma ---------- */
/* Lo que está escrito a mano en el shell lleva data-lang y se muestra o se
   esconde; lo que es un atributo (el placeholder, los aria-label, los title)
   se escribe desde UI. El botón dice el idioma al que se pasa, no el que se
   está leyendo, que es lo que se entiende sin pensarlo. */
function applyLang() {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-lang]').forEach(el => { el.hidden = el.dataset.lang !== lang; });
  const q = $('#q');
  q.placeholder = ui('buscar');
  q.setAttribute('aria-label', ui('buscarAria'));
  $('#clearq').setAttribute('aria-label', ui('borrar'));
  $('#filterbtn').setAttribute('aria-label', ui('filtros'));
  $('#filterbtn').title = ui('filtros');
  $('#themebtn').setAttribute('aria-label', ui('tema'));
  const lb = $('#langbtn');
  if (lb) {
    lb.textContent = ui('otro');
    lb.title = ui('cambiar');
    lb.setAttribute('aria-label', ui('cambiar'));
  }
  const fl = $('#flota');
  if (fl) {
    fl.querySelector('[data-flota="sec"]').textContent = ui('cerrarSec');
    fl.querySelector('[data-flota="todo"]').textContent = ui('cerrar');
    const fa = fl.querySelector('[data-flota="arriba"]');
    fa.setAttribute('aria-label', ui('arriba'));
    fa.title = ui('arriba');
  }
  applyTheme();
}
if (IDIOMAS.length > 1) {
  $('#langbtn').hidden = false;
  $('#langbtn').addEventListener('click', () => {
    lang = IDIOMAS[(IDIOMAS.indexOf(lang) + 1) % IDIOMAS.length];
    try { localStorage.setItem(KEY + ':lang', lang); } catch (e) {} 
    indexar(); applyLang(); paintRail(); paintFilters(); render();
  });
}

/* ---------- filtros ---------- */
const PRICES = ['€', '€€', '€€€'];
function paintFilters() {
  const f = $('#filters');
  let h = `<span class="chip sep">${esc(ui('precio'))}</span>`;
  PRICES.forEach(p => {
    h += `<button class="chip" data-price="${p}" aria-pressed="${fPrice.has(p)}">${p}</button>`;
  });
  h += `<span class="chip sep">${esc(ui('tipo'))}</span>`;
  Object.keys(TIPOS).forEach(k => {
    h += `<button class="chip" data-type="${k}" aria-pressed="${fType.has(k)}">${esc(T(TIPOS[k]))}</button>`;
  });
  f.innerHTML = h;
}
$('#filters').addEventListener('click', e => {
  const b = e.target.closest('button[data-price],button[data-type]');
  if (!b) return;
  const set = b.dataset.price ? fPrice : fType;
  const val = b.dataset.price || b.dataset.type;
  set.has(val) ? set.delete(val) : set.add(val);
  b.setAttribute('aria-pressed', set.has(val) ? 'true' : 'false');
  render();
});
$('#filterbtn').addEventListener('click', () => {
  const on = $('#filters').classList.toggle('on');
  $('#filterbtn').setAttribute('aria-pressed', on ? 'true' : 'false');
});

function passes(it) {
  if (fPrice.size && !fPrice.has(it.p || '')) return false;
  if (fType.size && !fType.has(it.t)) return false;
  return true;
}
const filtering = () => fPrice.size > 0 || fType.size > 0;

/* ---------- raíl de ciudades ---------- */
function paintRail() {
  /* data-opt: destino todavia sin confirmar. Se marca en el rail y en la portada. */
  $('#rail').innerHTML = CITIES.map(c =>
    `<button role="tab" data-city="${c.id}"${c.opcional ? ' data-opt="1"' : ''}${enFecha(c) ? ' data-hoy="1"' : ''} aria-selected="${c.id === current}">${esc(T(c.nav))}</button>`
  ).join('');
}
$('#rail').addEventListener('click', e => {
  const b = e.target.closest('button[data-city]');
  if (!b) return;
  current = b.dataset.city;
  dia = null;
  if (query) { query = ''; $('#q').value = ''; $('#clearq').classList.remove('on'); }
  render();
  window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
});

/* ---------- render de una ficha ---------- */
/* it.m: cuando el nombre de la ficha no sirve como busqueda. Si no esta, el
   nombre que se busca es el fijo: Maps entiende mejor el nombre local que la
   traduccion. */
function mapsQuery(it) {
  return it.m || ((it.a ? FIJO(it.n) + ', ' + it.a : FIJO(it.n)) + (it._city.maps ? ', ' + it._city.maps : ''));
}
/* Waze con la misma consulta que Maps, y arrancando a navegar. Va solo en los
   capitulos que llevan auto: en una ciudad donde se camina es ruido. */
function wazeUrl(it) {
  return 'https://waze.com/ul?q=' + encodeURIComponent(mapsQuery(it)) + '&navigate=yes';
}
function mapsUrl(it) {
  /* it.ruta: una caminata. Maps la dibuja de verdad en vez de buscar el titulo. */
  if (it.ruta && it.ruta.length > 1) {
    const p = it.ruta.map(encodeURIComponent);
    return 'https://www.google.com/maps/dir/?api=1&travelmode=walking'
      + '&origin=' + p[0] + '&destination=' + p[p.length - 1]
      + (p.length > 2 ? '&waypoints=' + p.slice(1, -1).join('%7C') : '');
  }
  return 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(mapsQuery(it));
}
function revUrl(it) {
  return 'https://www.tripadvisor.com/Search?q=' + encodeURIComponent(FIJO(it.n) + ' ' + (it._city.maps || ''));
}
const REVIEWABLE = { comer: 1, cafe: 1, coctel: 1 };

function itemHTML(it) {
  const tags = [];
  if (it.p) tags.push(`<span class="tag price">${it.p}</span>`);
  if (TIPOS[it.t]) tags.push(`<span class="tag">${esc(T(TIPOS[it.t]))}</span>`);
  /* it.serv y it.res: como funciona el servicio y si conviene reservar */
  if (SERVICIO[it.serv]) tags.push(`<span class="tag serv">${esc(T(SERVICIO[it.serv]))}</span>`);
  if (RESERVA[it.res]) tags.push(`<span class="tag res">${esc(T(RESERVA[it.res]))}</span>`);
  const cuerpo = `<h3 class="it-name">${esc(T(it.n))}</h3>
      <p class="it-desc">${rich(T(it.d))}</p>
      ${it.tip ? `<p class="it-note"><b>${esc(ui('truco'))}</b>${rich(T(it.tip))}</p>` : ''}
      ${tags.length ? `<div class="tags">${tags.join('')}</div>` : ''}`;

  /* it.nota: es una recomendacion, no un sitio. Ni casilla ni mapa. */
  if (it.nota) {
    const web = it.w ? `<div class="links"><a href="${esc(it.w)}" target="_blank" rel="noopener">${ICON.link}${esc(ui('web'))}</a></div>` : '';
    return `<div class="item nota" data-id="${esc(it._id)}"><div class="it-main">${cuerpo}${web}</div></div>`;
  }

  const done = visited.has(it._id);
  const links = [`<a href="${esc(mapsUrl(it))}" target="_blank" rel="noopener">${ICON.pin}${esc(it.ruta ? ui('ruta') : ui('mapa'))}</a>`];
  if (it._city.auto && !it.ruta) links.push(`<a href="${esc(wazeUrl(it))}" target="_blank" rel="noopener">${ICON.nav}${esc(ui('waze'))}</a>`);
  if (it.w) links.push(`<a href="${esc(it.w)}" target="_blank" rel="noopener">${ICON.link}${esc(ui('web'))}</a>`);
  if (REVIEWABLE[it.t]) links.push(`<a href="${esc(revUrl(it))}" target="_blank" rel="noopener">${ICON.star}${esc(ui('resenas'))}</a>`);
  return `<div class="item${done ? ' done' : ''}" data-id="${esc(it._id)}">
    <button class="tick" aria-pressed="${done}" aria-label="${esc(ui('marcar')(T(it.n)))}">${ICON.check}</button>
    <div class="it-main">
      ${cuerpo}
      <div class="links">${links.join('')}</div>
    </div>
  </div>`;
}

/* ---------- itinerario con estado ---------- */
function legsHTML(list) {
  const hoy = hoyISO();
  const hecho = list.map(tramoHecho);
  const proximo = hecho.indexOf(false);
  const sig = proximo >= 0 ? list[proximo] : null;

  const cabeza = sig
    ? `<p class="legs-head">${esc(ui('tramo')(proximo + 1, list.length))}<span>${esc(ui('sigue')(T(sig.w) + ', ' + T(sig.t)))}</span></p>`
    : `<p class="legs-head">${esc(ui('tramosHechos')(list.length))}</p>`;

  const filas = list.map((l, i) => {
    const d = hecho[i];
    const esHoy = !d && l.d === hoy;
    const esSig = !d && i === proximo && !esHoy;
    const badge = esHoy ? `<span class="legbadge hoy">${esc(ui('hoy'))}</span>`
                : esSig ? `<span class="legbadge sigue">${esc(ui('badgeSigue'))}</span>` : '';
    /* lo pendiente se resalta. Se mira la variante fija, que no cambia de idioma. */
    const falta = /[Ff]alta/.test(FIJO(l.e) || '');
    return `<div class="leg${d ? ' done' : ''}${esHoy ? ' eshoy' : ''}" data-leg="${esc(tramoId(l))}">
      <button class="legtick" aria-pressed="${d}" aria-label="${esc(ui('marcarTramo')(T(l.t)))}">${ICON.check}</button>
      <div class="leg-main">
        <div class="leg-top"><span class="leg-w">${esc(T(l.w))}</span><span class="leg-t">${esc(T(l.t))}</span>${badge}</div>
        <div class="leg-meta"><span>${esc(T(l.c))}</span><span class="leg-dur">${esc(T(l.dur))}</span>${l.e ? `<span class="leg-e${falta ? ' falta' : ''}">${esc(T(l.e))}</span>` : ''}</div>
      </div>
    </div>`;
  }).join('');

  return `<div class="legs">${cabeza}${filas}<button class="legs-reset" data-legreset="1">${esc(ui('tramosReset'))}</button></div>`;
}

/* ---------- el plan, un dia por vez ---------- */
/* La guia se lee parada en la calle, asi que el plan abre en el dia de hoy y no
   en los cinco juntos. Los chips dejan ir al dia que viene o volver al que quedo
   a medias, y el ultimo muestra el capitulo entero, como estaba antes. */
function diasHTML(list) {
  const hoy = hoyISO();
  /* un dia puede abarcar varios, como la semana de trabajo de Sevilla: entonces
     lleva d2 y la fecha de hoy tiene que caer entre las dos. */
  const esHoy = x => x.d <= hoy && hoy <= (x.d2 || x.d);
  /* el dia de hoy; si hoy no es ninguno, el primero que todavia no paso, que es
     el que viene; y si ya pasaron todos, el ultimo. */
  const porFecha = () => {
    const i = list.findIndex(esHoy);
    if (i >= 0) return i;
    const j = list.findIndex(x => x.d > hoy);
    return j >= 0 ? j : list.length - 1;
  };
  const sel = dia === 'todos' ? 'todos' : (dia == null ? porFecha() : dia);

  const chips = list.map((l, i) =>
    `<button data-dia="${i}" aria-selected="${sel === i}"${esHoy(l) ? ' data-hoy="1"' : ''}`
    + ` aria-label="${esc(ui('verDia')(T(l.t)))}">${esc(T(l.w))}</button>`).join('')
    + `<button data-dia="todos" aria-selected="${sel === 'todos'}">${esc(ui('todosDias'))}</button>`;

  const uno = l => `<h3 class="diatit">${esc(T(l.t))}`
    + (esHoy(l) ? `<span class="diahoy">${esc(ui('hoy'))}</span>` : '')
    + `</h3><div class="prose">${T(l.html)}</div>`;

  return `<div class="dias"><div class="diasrail">${chips}</div>`
    + (sel === 'todos' ? list.map(uno).join('') : uno(list[sel]))
    + `</div>`;
}

/* ---------- el cuadro de frases ---------- */
/* Una fila por frase: como se escribe, como se dice y que quiere decir. La
   columna del medio es la que hace que sirva parado en un mostrador. */
function frasesHTML(list) {
  const filas = list.map(f =>
    `<tr><td class="fr-it">${esc(T(f[0]))}</td><td class="fr-pr">${esc(T(f[1]))}</td><td>${rich(T(f[2]))}</td></tr>`
  ).join('');
  return `<div class="tablewrap frases"><table>
      <thead><tr><th>${esc(ui('frIt'))}</th><th>${esc(ui('frPr'))}</th><th>${esc(ui('frSig'))}</th></tr></thead>
      <tbody>${filas}</tbody>
    </table></div>`;
}

/* ---------- vista de ciudad ---------- */
function cityHTML(c) {
  const items = c.sections.flatMap(s => s.items || []);
  const shown = items.filter(passes);
  const hitos = items.filter(i => !i.nota);          /* las notas no se marcan */
  const done = hitos.filter(i => visited.has(i._id)).length;
  const pct = hitos.length ? Math.round(done / hitos.length * 100) : 0;

  let h = `<section class="cityhead">
    <span class="plate">${esc(T(c.plate))}</span>
    <h1 class="cityname">${esc(T(c.name))}</h1>
    <div class="cityrule"></div>
    ${c.opcional ? `<p class="tentativa">${esc(ui('tentativa'))}</p>` : ''}
    <p class="citylede">${esc(T(c.lede))}</p>
    <dl class="quick">${c.quick.map(q => `<div><dt>${esc(T(q[0]))}</dt><dd>${esc(T(q[1]))}</dd></div>`).join('')}</dl>`;
  if (hitos.length) {
    h += `<div class="progress"><span>${esc(ui('cuenta')(done, hitos.length))}</span>
      <span class="bar"><i style="width:${pct}%"></i></span>
      <button data-reset="${c.id}">${esc(ui('reiniciar'))}</button></div>`;
  }
  h += `</section>`;

  if (c.sections.length > 1) h += `<div class="toolrow pegada"><button data-all="open">${esc(ui('abrir'))}</button><button data-all="close">${esc(ui('cerrar'))}</button></div>`;

  c.sections.forEach((sec, i) => {
    if (sec.dias) {
      if (filtering()) return;
      h += `<details class="sec"${i === 0 ? ' open' : ''}><summary>${ICON.caret}<h2>${esc(T(sec.s))}</h2></summary>
        <div class="body">${diasHTML(sec.dias)}</div></details>`;
      return;
    }
    if (sec.legs || sec.frases) {
      if (filtering()) return;
      const cuadro = sec.legs ? legsHTML(sec.legs) : frasesHTML(sec.frases);
      h += `<details class="sec"${i === 0 ? ' open' : ''}><summary>${ICON.caret}<h2>${esc(T(sec.s))}</h2></summary>
        <div class="body">${cuadro}${sec.html ? `<div class="prose">${T(sec.html)}</div>` : ''}</div></details>`;
      return;
    }
    if (sec.html) {
      if (filtering()) return;
      h += `<details class="sec"${i === 0 ? ' open' : ''}><summary>${ICON.caret}<h2>${esc(T(sec.s))}</h2></summary>
        <div class="body"><div class="prose">${T(sec.html)}</div></div></details>`;
      return;
    }
    const list = (sec.items || []).filter(passes);
    if (!list.length) return;
    const shitos = list.filter(x => !x.nota);
    const sdone = shitos.filter(x => visited.has(x._id)).length;
    h += `<details class="sec"${filtering() || i === 0 ? ' open' : ''}><summary>${ICON.caret}<h2>${esc(T(sec.s))}</h2>
      ${shitos.length ? `<span class="count">${sdone}/${shitos.length}</span>` : ''}</summary>
      <div class="body">${list.map(itemHTML).join('')}</div></details>`;
  });

  if (filtering() && !shown.length) {
    h += `<div class="empty"><strong>${esc(ui('sinFiltro'))}</strong>${esc(ui('sinFiltro2'))}</div>`;
  }
  return h;
}

/* ---------- vista de búsqueda ---------- */
function searchHTML() {
  const q = norm(query).split(/\s+/).filter(Boolean);
  const hits = ALL.filter(it => passes(it) && q.every(w => it._hay.includes(w)));
  if (!hits.length) {
    return `<div class="empty"><strong>${esc(ui('sinNada')(query))}</strong>
      ${esc(ui('sinNada2'))}</div>`;
  }
  let h = '', last = null;
  hits.forEach(it => {
    if (it._city !== last) {
      if (last) h += '</div>';
      h += `<div class="rgroup" style="--city:${it._city.accent};--city-lt:${it._city.lt}"><h2>${esc(T(it._city.name))}</h2>`;
      last = it._city;
    }
    h += `<p class="rpath">${esc(T(it._sec.s))}</p>` + itemHTML(it);
  });
  h += '</div>';
  return `<div class="toolrow"><span>${esc(ui('hallados')(hits.length))}</span></div>` + h;
}

/* Las tablas de frases se apilan en una sola columna cuando no entran en tres.
   Se mide el ancho que quedo, no el de la pantalla: asi tambien vale para una
   ventana angosta en la computadora, no solo para un telefono. */
function medirFrases() {
  document.querySelectorAll('#view .frases').forEach(f =>
    f.classList.toggle('apilada', f.clientWidth < 400));
}

/* ---------- render ---------- */
function render() {
  const c = CITIES.find(x => x.id === current) || CITIES[0];
  const view = $('#view');
  document.querySelectorAll('#rail button').forEach(b =>
    b.setAttribute('aria-selected', b.dataset.city === current ? 'true' : 'false'));
  [view, $('#rail'), $('#filters'), $('#flota')].forEach(el => {
    el.style.setProperty('--city', c.accent);
    el.style.setProperty('--city-lt', c.lt);
  });
  view.innerHTML = query ? searchHTML() : cityHTML(c);
  medirFrases();
  actualizarFlota();
}

/* ---------- eventos delegados ---------- */
$('#view').addEventListener('click', e => {
  const tick = e.target.closest('.tick');
  if (tick) {
    const row = tick.closest('.item');
    const id = row.dataset.id;
    visited.has(id) ? visited.delete(id) : visited.add(id);
    saveVisited();
    row.classList.toggle('done', visited.has(id));
    tick.setAttribute('aria-pressed', String(visited.has(id)));
    if (!query) {
      const c = CITIES.find(x => x.id === current);
      const hitos = c.sections.flatMap(s => s.items || []).filter(i => !i.nota);
      const done = hitos.filter(i => visited.has(i._id)).length;
      const p = $('.progress');
      if (p) { p.firstElementChild.textContent = ui('cuenta')(done, hitos.length);
        p.querySelector('.bar i').style.width = (hitos.length ? done / hitos.length * 100 : 0) + '%'; }
      const sec = row.closest('details');
      const cnt = sec && sec.querySelector('.count');
      if (cnt) {
        const rows = [...sec.querySelectorAll('.item:not(.nota)')];
        cnt.textContent = rows.filter(r => r.classList.contains('done')).length + '/' + rows.length;
      }
    }
    return;
  }
  const chip = e.target.closest('[data-dia]');
  if (chip) {
    dia = chip.dataset.dia === 'todos' ? 'todos' : Number(chip.dataset.dia);
    /* se repinta solo el bloque del plan. Repintar la ciudad entera cerraria las
       secciones que quien lee dejo abiertas, y es lo que mas molesta. */
    const caja = chip.closest('.dias');
    const sec = (CITIES.find(x => x.id === current) || CITIES[0]).sections.find(s => s.dias);
    if (caja && sec) caja.outerHTML = diasHTML(sec.dias);
    return;
  }
  const legtick = e.target.closest('.legtick');
  if (legtick) {
    const row = legtick.closest('.leg');
    tramos[row.dataset.leg] = !row.classList.contains('done');
    saveTramos(); render(); return;
  }
  if (e.target.closest('[data-legreset]')) { tramos = {}; saveTramos(); render(); return; }
  const reset = e.target.closest('[data-reset]');
  if (reset) {
    const c = CITIES.find(x => x.id === reset.dataset.reset);
    c.sections.flatMap(s => s.items || []).forEach(i => visited.delete(i._id));
    saveVisited(); render(); return;
  }
  const all = e.target.closest('[data-all]');
  if (all) {
    const open = all.dataset.all === 'open';
    document.querySelectorAll('#view details.sec').forEach(d => { d.open = open; });
    irAlComienzo();
  }
});

const modoScroll = () => matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';

/* volver al comienzo del listado. Al plegar, todo lo que estaba abierto se
   encoge de golpe y uno queda parado en cualquier lado. */
function irAlComienzo() {
  const cabeza = $('#view .cityhead');
  if (!cabeza) return;
  const alto = parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue('--top-h')) || 0;
  /* .cityhead no es sticky, asi que su posicion es la real */
  const destino = Math.max(0, cabeza.getBoundingClientRect().bottom + window.scrollY - alto);
  window.scrollTo({ top: destino, behavior: modoScroll() });
}

/* ---------- la barra flotante ---------- */
/* Aparece al bajar. Cerrar seccion pliega la que se esta leyendo y deja su
   titulo arriba; cerrar todo pliega todas y vuelve al comienzo del capitulo;
   la flecha va al principio de la pagina. */
const flota = $('#flota');
const altoFijo = () => {
  const cab = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--top-h')) || 0;
  const barra = $('#view .toolrow.pegada');
  return cab + (barra ? barra.offsetHeight : 0);
};
/* la seccion que se esta leyendo: la abierta que cruza el borde de arriba */
function seccionActual() {
  const borde = altoFijo() + 8;
  return [...document.querySelectorAll('#view details.sec[open]')].find(d => {
    const r = d.getBoundingClientRect();
    return r.top < borde && r.bottom > borde + 40;
  });
}
function actualizarFlota() {
  const lejos = window.scrollY > Math.max(400, innerHeight * 0.6);
  flota.querySelector('[data-flota="sec"]').hidden = !(lejos && seccionActual());
  flota.querySelector('[data-flota="todo"]').hidden = !document.querySelector('#view details.sec[open]');
  flota.classList.toggle('on', lejos);
}
let flotaPendiente = false;
addEventListener('scroll', () => {
  if (flotaPendiente) return;
  flotaPendiente = true;
  requestAnimationFrame(() => { flotaPendiente = false; actualizarFlota(); });
}, { passive: true });
/* el toggle de un details no burbujea, pero si pasa por la captura */
$('#view').addEventListener('toggle', actualizarFlota, true);
flota.addEventListener('click', e => {
  const b = e.target.closest('[data-flota]');
  if (!b) return;
  if (b.dataset.flota === 'arriba') { window.scrollTo({ top: 0, behavior: modoScroll() }); return; }
  if (b.dataset.flota === 'todo') {
    document.querySelectorAll('#view details.sec').forEach(d => { d.open = false; });
    irAlComienzo();
    return;
  }
  const d = seccionActual();
  if (!d) return;
  d.open = false;
  const y = d.getBoundingClientRect().top + window.scrollY - altoFijo();
  window.scrollTo({ top: Math.max(0, y), behavior: modoScroll() });
});

/* ---------- buscador ---------- */
let t;
$('#q').addEventListener('input', e => {
  clearTimeout(t);
  const v = e.target.value;
  $('#clearq').classList.toggle('on', v.length > 0);
  t = setTimeout(() => { query = v.trim(); render(); }, 130);
});
$('#clearq').addEventListener('click', () => {
  $('#q').value = ''; query = ''; $('#clearq').classList.remove('on'); render(); $('#q').focus();
});

/* ---------- compartir ---------- */
/* El metodo viejo, para cuando el moderno no esta disponible: dentro de un
   iframe el portapapeles necesita permiso explicito y suele estar bloqueado.
   Lo del contentEditable y el rango es el rodeo que pide Safari en iOS. */
function copiarALaVieja(texto) {
  const ta = document.createElement('textarea');
  ta.value = texto;
  ta.contentEditable = 'true';
  ta.style.cssText = 'position:fixed;top:0;left:0;width:1px;height:1px;opacity:0';
  document.body.appendChild(ta);
  const rango = document.createRange();
  rango.selectNodeContents(ta);
  const sel = getSelection();
  sel.removeAllRanges();
  sel.addRange(rango);
  ta.setSelectionRange(0, texto.length);
  let bien = false;
  try { bien = document.execCommand('copy'); } catch (err) {}
  sel.removeAllRanges();
  ta.remove();
  return bien;
}

document.querySelectorAll('.sharebtn').forEach(b => b.addEventListener('click', async e => {
  e.preventDefault();
  const btn = e.currentTarget, url = btn.href;
  const avisar = t => {
    btn.textContent = t;
    setTimeout(() => { btn.textContent = ui('copiar'); }, 2400);
  };
  if (navigator.clipboard && isSecureContext) {
    try { await navigator.clipboard.writeText(url); avisar(ui('copiado')); return; } catch (err) {}
  }
  /* si tampoco se puede, el QR esta justo al lado y ese siempre funciona */
  avisar(copiarALaVieja(url) ? ui('copiado') : ui('usenQR'));
}));

indexar();
applyLang();
paintRail();
paintFilters();
render();

/* la barra de abrir y cerrar se ancla justo debajo de la cabecera, que no
   siempre mide lo mismo: crece al desplegar los filtros y al girar el telefono */
const cabecera = $('.top');
const medirCabecera = () =>
  document.documentElement.style.setProperty('--top-h', cabecera.offsetHeight + 'px');
medirCabecera();
if (window.ResizeObserver) new ResizeObserver(medirCabecera).observe(cabecera);
else addEventListener('resize', medirCabecera);
addEventListener('resize', medirFrases);
