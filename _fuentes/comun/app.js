
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
  auto:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8.5"/><path d="M12 3.5v17" /><path d="M12 3.5a8.5 8.5 0 010 17z" fill="currentColor" stroke="none"/></svg>'
};

/* aplana todas las fichas de todas las ciudades, una sola vez */
const ALL = [];
CITIES.forEach(c => c.sections.forEach(sec => (sec.items || []).forEach(it => {
  it._id = c.id + ':' + slug(it.n);
  it._city = c; it._sec = sec;
  it._hay = norm([it.n, it.d, it.tip || '', it.a || '', sec.s, c.name].join(' '));
  ALL.push(it);
})));

/* ---------- estado ---------- */
const KEY = '__CLAVE__';
let visited = new Set();
try { visited = new Set(JSON.parse(localStorage.getItem(KEY + ':visited') || '[]')); } catch (e) {}
const saveVisited = () => { try { localStorage.setItem(KEY + ':visited', JSON.stringify([...visited])); } catch (e) {} };

let current = CITIES[0].id;
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
  btn.title = 'Tema: ' + ({auto:'automático', light:'claro', dark:'oscuro'})[themeMode];
}
$('#themebtn').addEventListener('click', () => {
  themeMode = themeMode === 'auto' ? 'light' : themeMode === 'light' ? 'dark' : 'auto';
  try { localStorage.setItem(KEY + ':theme', themeMode); } catch (e) {}
  applyTheme();
});
applyTheme();

/* ---------- filtros ---------- */
const PRICES = ['€', '€€', '€€€'];
function buildFilters() {
  const f = $('#filters');
  let h = '<span class="chip sep">Precio</span>';
  PRICES.forEach(p => { h += `<button class="chip" data-price="${p}" aria-pressed="false">${p}</button>`; });
  h += '<span class="chip sep">Tipo</span>';
  Object.keys(TIPOS).forEach(k => { h += `<button class="chip" data-type="${k}" aria-pressed="false">${esc(TIPOS[k])}</button>`; });
  f.innerHTML = h;
  f.addEventListener('click', e => {
    const b = e.target.closest('button[data-price],button[data-type]');
    if (!b) return;
    const set = b.dataset.price ? fPrice : fType;
    const val = b.dataset.price || b.dataset.type;
    set.has(val) ? set.delete(val) : set.add(val);
    b.setAttribute('aria-pressed', set.has(val) ? 'true' : 'false');
    render();
  });
}
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
function buildRail() {
  $('#rail').innerHTML = CITIES.map(c =>
    `<button role="tab" data-city="${c.id}" aria-selected="${c.id === current}">${esc(c.nav)}</button>`
  ).join('');
  $('#rail').addEventListener('click', e => {
    const b = e.target.closest('button[data-city]');
    if (!b) return;
    current = b.dataset.city;
    if (query) { query = ''; $('#q').value = ''; $('#clearq').classList.remove('on'); }
    render();
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
  });
}

/* ---------- render de una ficha ---------- */
function mapsUrl(it) {
  /* it.ruta: una caminata. Maps la dibuja de verdad en vez de buscar el titulo. */
  if (it.ruta && it.ruta.length > 1) {
    const p = it.ruta.map(encodeURIComponent);
    return 'https://www.google.com/maps/dir/?api=1&travelmode=walking'
      + '&origin=' + p[0] + '&destination=' + p[p.length - 1]
      + (p.length > 2 ? '&waypoints=' + p.slice(1, -1).join('%7C') : '');
  }
  /* it.m: cuando el nombre de la ficha no sirve como busqueda */
  const q = it.m || ((it.a ? it.n + ', ' + it.a : it.n) + (it._city.maps ? ', ' + it._city.maps : ''));
  return 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(q);
}
function revUrl(it) {
  return 'https://www.tripadvisor.com/Search?q=' + encodeURIComponent(it.n + ' ' + (it._city.maps || ''));
}
const REVIEWABLE = { comer: 1, cafe: 1, coctel: 1 };

function itemHTML(it) {
  const tags = [];
  if (it.p) tags.push(`<span class="tag price">${it.p}</span>`);
  if (TIPOS[it.t]) tags.push(`<span class="tag">${esc(TIPOS[it.t])}</span>`);
  const cuerpo = `<h3 class="it-name">${esc(it.n)}</h3>
      <p class="it-desc">${rich(it.d)}</p>
      ${it.tip ? `<p class="it-note"><b>Truco</b>${rich(it.tip)}</p>` : ''}
      ${tags.length ? `<div class="tags">${tags.join('')}</div>` : ''}`;

  /* it.nota: es una recomendacion, no un sitio. Ni casilla ni mapa. */
  if (it.nota) {
    const web = it.w ? `<div class="links"><a href="${esc(it.w)}" target="_blank" rel="noopener">${ICON.link}Web</a></div>` : '';
    return `<div class="item nota" data-id="${esc(it._id)}"><div class="it-main">${cuerpo}${web}</div></div>`;
  }

  const done = visited.has(it._id);
  const links = [`<a href="${esc(mapsUrl(it))}" target="_blank" rel="noopener">${ICON.pin}${it.ruta ? 'Ruta a pie' : 'Mapa'}</a>`];
  if (it.w) links.push(`<a href="${esc(it.w)}" target="_blank" rel="noopener">${ICON.link}Web</a>`);
  if (REVIEWABLE[it.t]) links.push(`<a href="${esc(revUrl(it))}" target="_blank" rel="noopener">${ICON.star}Reseñas</a>`);
  return `<div class="item${done ? ' done' : ''}" data-id="${esc(it._id)}">
    <button class="tick" aria-pressed="${done}" aria-label="Marcar ${esc(it.n)} como visitado">${ICON.check}</button>
    <div class="it-main">
      ${cuerpo}
      <div class="links">${links.join('')}</div>
    </div>
  </div>`;
}

/* ---------- vista de ciudad ---------- */
function cityHTML(c) {
  const items = c.sections.flatMap(s => s.items || []);
  const shown = items.filter(passes);
  const hitos = items.filter(i => !i.nota);          /* las notas no se marcan */
  const done = hitos.filter(i => visited.has(i._id)).length;
  const pct = hitos.length ? Math.round(done / hitos.length * 100) : 0;

  let h = `<section class="cityhead">
    <span class="plate">${esc(c.plate)}</span>
    <h1 class="cityname">${esc(c.name)}</h1>
    <div class="cityrule"></div>
    <p class="citylede">${esc(c.lede)}</p>
    <dl class="quick">${c.quick.map(q => `<div><dt>${esc(q[0])}</dt><dd>${esc(q[1])}</dd></div>`).join('')}</dl>`;
  if (hitos.length) {
    h += `<div class="progress"><span>${done} de ${hitos.length}</span>
      <span class="bar"><i style="width:${pct}%"></i></span>
      <button data-reset="${c.id}">Reiniciar</button></div>`;
  }
  h += `</section>`;

  if (items.length) h += `<div class="toolrow pegada"><button data-all="open">Abrir todo</button><button data-all="close">Cerrar todo</button></div>`;

  c.sections.forEach((sec, i) => {
    if (sec.html) {
      if (filtering()) return;
      h += `<details class="sec"${i === 0 ? ' open' : ''}><summary>${ICON.caret}<h2>${esc(sec.s)}</h2></summary>
        <div class="body"><div class="prose">${sec.html}</div></div></details>`;
      return;
    }
    const list = (sec.items || []).filter(passes);
    if (!list.length) return;
    const shitos = list.filter(x => !x.nota);
    const sdone = shitos.filter(x => visited.has(x._id)).length;
    h += `<details class="sec"${filtering() || i === 0 ? ' open' : ''}><summary>${ICON.caret}<h2>${esc(sec.s)}</h2>
      ${shitos.length ? `<span class="count">${sdone}/${shitos.length}</span>` : ''}</summary>
      <div class="body">${list.map(itemHTML).join('')}</div></details>`;
  });

  if (filtering() && !shown.length) {
    h += `<div class="empty"><strong>Nada con esos filtros</strong>Prueben quitando alguno.</div>`;
  }
  return h;
}

/* ---------- vista de búsqueda ---------- */
function searchHTML() {
  const q = norm(query).split(/\s+/).filter(Boolean);
  const hits = ALL.filter(it => passes(it) && q.every(w => it._hay.includes(w)));
  if (!hits.length) {
    return `<div class="empty"><strong>Sin resultados para “${esc(query)}”</strong>
      Prueben con el nombre de un sitio, un barrio o algo como “mercado”, “azotea” o “vino caliente”.</div>`;
  }
  let h = '', last = null;
  hits.forEach(it => {
    if (it._city !== last) {
      if (last) h += '</div>';
      h += `<div class="rgroup" style="--city:${it._city.accent};--city-lt:${it._city.lt}"><h2>${esc(it._city.name)}</h2>`;
      last = it._city;
    }
    h += `<p class="rpath">${esc(it._sec.s)}</p>` + itemHTML(it);
  });
  h += '</div>';
  return `<div class="toolrow"><span>${hits.length} resultado${hits.length === 1 ? '' : 's'} en toda la guía</span></div>` + h;
}

/* ---------- render ---------- */
function render() {
  const c = CITIES.find(x => x.id === current) || CITIES[0];
  const view = $('#view');
  document.querySelectorAll('#rail button').forEach(b =>
    b.setAttribute('aria-selected', b.dataset.city === current ? 'true' : 'false'));
  [view, $('#rail'), $('#filters')].forEach(el => {
    el.style.setProperty('--city', c.accent);
    el.style.setProperty('--city-lt', c.lt);
  });
  view.innerHTML = query ? searchHTML() : cityHTML(c);
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
      if (p) { p.firstElementChild.textContent = `${done} de ${hitos.length}`;
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
  }
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
$('#sharebtn').addEventListener('click', async e => {
  e.preventDefault();
  const url = location.href, btn = e.currentTarget;
  try {
    if (navigator.share) { await navigator.share({ title: document.title, url }); return; }
    await navigator.clipboard.writeText(url);
    btn.textContent = 'Enlace copiado';
    setTimeout(() => { btn.textContent = 'Copiar enlace'; }, 2200);
  } catch (err) {
    btn.textContent = 'Copien la URL de la barra';
    setTimeout(() => { btn.textContent = 'Copiar enlace'; }, 2600);
  }
});

buildRail();
buildFilters();
render();

/* la barra de abrir y cerrar se ancla justo debajo de la cabecera, que no
   siempre mide lo mismo: crece al desplegar los filtros y al girar el telefono */
const cabecera = $('.top');
const medirCabecera = () =>
  document.documentElement.style.setProperty('--top-h', cabecera.offsetHeight + 'px');
medirCabecera();
if (window.ResizeObserver) new ResizeObserver(medirCabecera).observe(cabecera);
else addEventListener('resize', medirCabecera);
