const APP_KEY = 'docentkit.resources.v1';
const MODULES = [
  { id: 'sa', label: 'Crear SA', type: 'Situació d’aprenentatge', intro: 'Dissenya una situació d’aprenentatge competencial amb repte, sabers, criteris, seqüència, inclusió i evidències.' },
  { id: 'projecte', label: 'Crear projecte', type: 'Projecte', intro: 'Planifica un projecte amb producte final, fases, rols, materials, calendarització i avaluació.' },
  { id: 'sessio', label: 'Crear sessió', type: 'Sessió', intro: 'Prepara una sessió clara amb objectius, activació, desenvolupament, tancament i adaptacions.' },
  { id: 'rubrica', label: 'Crear rúbrica', type: 'Rúbrica', intro: 'Genera una rúbrica amb criteris, nivells d’assoliment i descriptors observables.' },
  { id: 'prova', label: 'Crear prova competencial', type: 'Prova competencial', intro: 'Crea una prova contextualitzada amb estímul, preguntes competencials, criteris i pauta de correcció.' },
  { id: 'fitxa', label: 'Crear fitxa d’activitats', type: 'Fitxa d’activitats', intro: 'Elabora una fitxa per a l’alumnat amb instruccions, passos, recursos, lliurables i autoavaluació.' },
  { id: 'adaptacio', label: 'Adaptar activitat', type: 'Adaptació inclusiva', intro: 'Adapta una activitat per TDAH, TEA, dislèxia i TDL amb mesures concretes i no estigmatitzants.' },
  { id: 'importexport', label: 'Exportar / importar', type: 'Exportació / importació', intro: 'Gestiona recursos en JSON i prepara informes nets sense finestres emergents, amb vista d’exportació i descàrrega HTML.' },
  { id: 'biblioteca', label: 'Biblioteca', type: 'Biblioteca local', intro: 'Consulta, reutilitza, cerca i elimina recursos guardats localment en aquest navegador.' }
];

const TEMPLATES = {
  sa: {
    title: 'Investiguem i millorem un espai del centre', subject: 'Àmbit STEAM', duration: '6 sessions',
    challenge: 'L’alumnat detecta una necessitat real del centre i proposa una millora argumentada, viable i sostenible.',
    knowledge: 'Observació de l’entorn, recollida de dades, disseny de solucions, comunicació de resultats i ús responsable d’eines digitals.',
    competences: 'Analitzar problemes reals, formular propostes, justificar decisions i comunicar evidències amb criteris de qualitat.',
    sequence: '1. Presentació del repte i exploració inicial.\n2. Recollida de dades i anàlisi.\n3. Ideació de solucions.\n4. Prototip o proposta visual.\n5. Presentació i retroacció.\n6. Millora i reflexió final.',
    inclusion: 'Opcions de treball individual i cooperatiu, instruccions fragmentades, exemples visuals, temps flexible, anticipació de tasques i productes finals alternatius.',
    assessment: 'Rúbrica del procés i del producte final, diari d’aprenentatge, observació docent, coavaluació i defensa oral breu.',
    tags: 'SA, competencial, STEAM, inclusió'
  },
  rubrica: {
    title: 'Rúbrica per valorar un projecte competencial', subject: 'Transversal', duration: 'Una activitat o projecte',
    challenge: 'Valorar de manera clara el procés, el producte final i la comunicació de l’aprenentatge.',
    knowledge: 'Criteris de qualitat, evidències, argumentació, autonomia i revisió del treball.',
    competences: 'Planificar, executar, revisar i comunicar un producte o solució amb evidències.',
    sequence: 'Criteri 1: Comprensió del repte.\nCriteri 2: Qualitat del procés.\nCriteri 3: Producte final.\nCriteri 4: Comunicació.\nCriteri 5: Reflexió i millora.',
    inclusion: 'Descriptors breus, llenguatge clar, exemples de cada nivell i possibilitat d’evidenciar l’aprenentatge en formats diversos.',
    assessment: 'Nivells: Inicial, En procés, Assolit, Excel·lent. Incloure descriptors observables i espai per a retroacció formativa.',
    tags: 'rúbrica, avaluació, competencial'
  },
  adaptacio: {
    title: 'Adaptació inclusiva d’una activitat', subject: 'Transversal', duration: 'Segons activitat base',
    challenge: 'Mantenir el mateix objectiu d’aprenentatge reduint barreres d’accés, expressió i participació.',
    knowledge: 'Disseny universal per a l’aprenentatge, bastides, anticipació, llenguatge clar i regulació del temps.',
    competences: 'Participar, comprendre instruccions, produir evidències i autoregular-se amb suports adequats.',
    sequence: '1. Simplificar instruccions.\n2. Afegir exemple resolt.\n3. Dividir la tasca en passos.\n4. Oferir formats de resposta alternatius.\n5. Incorporar revisió guiada.',
    inclusion: 'TDAH: passos curts, temporitzador i pauses. TEA: anticipació, estructura visual i consignes literals. Dislèxia: tipografia clara, menys càrrega lectora i suport oral. TDL: vocabulari previ, frases simples i suport visual.',
    assessment: 'Avaluar el mateix criteri amb evidències adaptades; prioritzar qualitat de resposta i progrés, no la quantitat de producció.',
    tags: 'TDAH, TEA, dislèxia, TDL, inclusió'
  }
};

let currentModule = MODULES[0];
let resources = loadResources();
let deferredPrompt = null;

const els = {
  nav: document.getElementById('moduleNav'), intro: document.getElementById('moduleIntro'), formTitle: document.getElementById('formTitle'),
  type: document.getElementById('type'), title: document.getElementById('title'), level: document.getElementById('level'), subject: document.getElementById('subject'),
  duration: document.getElementById('duration'), challenge: document.getElementById('challenge'), knowledge: document.getElementById('knowledge'), competences: document.getElementById('competences'),
  sequence: document.getElementById('sequence'), inclusion: document.getElementById('inclusion'), assessment: document.getElementById('assessment'), tags: document.getElementById('tags'),
  report: document.getElementById('reportPreview'), library: document.getElementById('libraryList'), storageStatus: document.getElementById('storageStatus'), offlineStatus: document.getElementById('offlineStatus'),
  search: document.getElementById('searchInput'), levelFilter: document.getElementById('levelFilter'), fileInput: document.getElementById('fileInput'), installBtn: document.getElementById('installBtn')
};

function init() {
  renderNav();
  renderTypeOptions();
  setModule('sa');
  renderLibrary();
  bindEvents();
  updateOnlineStatus();
  if ('serviceWorker' in navigator) navigator.serviceWorker.register('./sw.js');
}

function bindEvents() {
  document.getElementById('newResourceBtn').addEventListener('click', clearForm);
  document.getElementById('loadTemplateBtn').addEventListener('click', loadTemplate);
  document.getElementById('generateBtn').addEventListener('click', () => renderReport(getFormData()));
  document.getElementById('saveBtn').addEventListener('click', saveCurrentResource);
  document.getElementById('exportPdfBtn').addEventListener('click', openExportMode);
  document.getElementById('closeExportModeBtn').addEventListener('click', closeExportMode);
  document.getElementById('printSamePageBtn').addEventListener('click', () => window.print());
  document.getElementById('downloadHtmlBtn').addEventListener('click', downloadCurrentHtml);
  document.getElementById('exportJsonBtn').addEventListener('click', exportCurrentJson);
  document.getElementById('copyBtn').addEventListener('click', copyReportText);
  document.getElementById('importBtn').addEventListener('click', importFile);
  document.getElementById('clearLibraryBtn').addEventListener('click', clearLibrary);
  els.search.addEventListener('input', renderLibrary);
  els.levelFilter.addEventListener('change', renderLibrary);
  window.addEventListener('online', updateOnlineStatus);
  window.addEventListener('offline', updateOnlineStatus);
  window.addEventListener('beforeinstallprompt', event => {
    event.preventDefault(); deferredPrompt = event; els.installBtn.classList.remove('hidden');
  });
  els.installBtn.addEventListener('click', async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    deferredPrompt = null;
    els.installBtn.classList.add('hidden');
  });
}

function renderNav() {
  els.nav.innerHTML = '';
  MODULES.forEach(module => {
    const btn = document.createElement('button');
    btn.className = 'nav-btn'; btn.textContent = module.label; btn.dataset.id = module.id;
    btn.addEventListener('click', () => setModule(module.id));
    els.nav.appendChild(btn);
  });
}

function renderTypeOptions() {
  els.type.innerHTML = MODULES.map(m => `<option>${escapeHtml(m.type)}</option>`).join('');
}

function setModule(id) {
  currentModule = MODULES.find(m => m.id === id) || MODULES[0];
  document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.id === id));
  els.formTitle.textContent = currentModule.label;
  els.type.value = currentModule.type;
  els.intro.innerHTML = `<p class="eyebrow">${escapeHtml(currentModule.type)}</p><h2>${escapeHtml(currentModule.label)}</h2><p>${escapeHtml(currentModule.intro)}</p>`;
  if (id === 'biblioteca') document.querySelector('.library-card').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function clearForm() {
  ['title','subject','duration','challenge','knowledge','competences','sequence','inclusion','assessment','tags'].forEach(key => els[key].value = '');
  els.level.value = '1r ESO';
  els.type.value = currentModule.type;
  els.report.innerHTML = '<p>Omple el formulari o carrega una plantilla per generar un informe net.</p>';
}

function loadTemplate() {
  const template = TEMPLATES[currentModule.id] || TEMPLATES.sa;
  Object.entries(template).forEach(([key, value]) => { if (els[key]) els[key].value = value; });
  els.type.value = currentModule.type;
  renderReport(getFormData());
}

function getFormData() {
  return {
    id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
    createdAt: new Date().toISOString(), type: els.type.value, title: els.title.value.trim() || 'Recurs sense títol', level: els.level.value,
    subject: els.subject.value.trim(), duration: els.duration.value.trim(), challenge: els.challenge.value.trim(), knowledge: els.knowledge.value.trim(),
    competences: els.competences.value.trim(), sequence: els.sequence.value.trim(), inclusion: els.inclusion.value.trim(), assessment: els.assessment.value.trim(),
    tags: els.tags.value.split(',').map(t => t.trim()).filter(Boolean)
  };
}

function renderReport(data) {
  els.report.innerHTML = `
    <h1>${escapeHtml(data.title)}</h1>
    <p><strong>Tipus:</strong> ${escapeHtml(data.type)} · <strong>Nivell:</strong> ${escapeHtml(data.level)}${data.subject ? ' · <strong>Àmbit:</strong> ' + escapeHtml(data.subject) : ''}${data.duration ? ' · <strong>Durada:</strong> ' + escapeHtml(data.duration) : ''}</p>
    ${section('Repte o necessitat', data.challenge)}
    ${section('Sabers / continguts clau', data.knowledge)}
    ${section('Competències i criteris d’avaluació', data.competences)}
    ${section('Seqüència d’activitats', asList(data.sequence))}
    ${section('Atenció a la diversitat', asList(data.inclusion))}
    ${section('Avaluació i evidències', asList(data.assessment))}
    ${data.tags.length ? `<h2>Etiquetes</h2><p>${data.tags.map(escapeHtml).join(' · ')}</p>` : ''}
  `;
}

function section(title, value) {
  if (!value) return '';
  return `<h2>${escapeHtml(title)}</h2><div>${value}</div>`;
}

function asList(text) {
  if (!text) return '';
  const lines = text.split('\n').map(line => line.trim()).filter(Boolean);
  if (lines.length < 2) return `<p>${escapeHtml(text)}</p>`;
  return `<ul>${lines.map(line => `<li>${escapeHtml(line)}</li>`).join('')}</ul>`;
}

function saveCurrentResource() {
  const data = getFormData();
  renderReport(data);
  resources.unshift(data);
  persistResources();
  renderLibrary();
}

function renderLibrary() {
  const query = els.search.value.toLowerCase();
  const level = els.levelFilter.value;
  const filtered = resources.filter(item => {
    const haystack = [item.title, item.type, item.level, item.subject, ...(item.tags || [])].join(' ').toLowerCase();
    return (!query || haystack.includes(query)) && (!level || item.level === level);
  });
  els.storageStatus.textContent = `${resources.length} recurs(os) desat(s) en aquest navegador.`;
  els.library.innerHTML = '';
  if (!filtered.length) {
    els.library.innerHTML = '<p class="resource-summary">Encara no hi ha recursos que coincideixin amb la cerca.</p>';
    return;
  }
  const template = document.getElementById('resourceItemTemplate');
  filtered.forEach(item => {
    const node = template.content.cloneNode(true);
    node.querySelector('h3').textContent = item.title;
    node.querySelector('.resource-meta').textContent = `${item.type} · ${item.level} · ${new Date(item.createdAt).toLocaleDateString('ca-ES')}`;
    node.querySelector('.resource-summary').textContent = item.challenge || item.subject || 'Recurs docent desat.';
    node.querySelector('.load-item').addEventListener('click', () => loadResource(item.id));
    node.querySelector('.delete-item').addEventListener('click', () => deleteResource(item.id));
    els.library.appendChild(node);
  });
}

function loadResource(id) {
  const item = resources.find(r => r.id === id);
  if (!item) return;
  ['title','level','subject','duration','type','challenge','knowledge','competences','sequence','inclusion','assessment'].forEach(key => { if (els[key]) els[key].value = item[key] || ''; });
  els.tags.value = (item.tags || []).join(', ');
  renderReport(item);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function deleteResource(id) {
  resources = resources.filter(r => r.id !== id);
  persistResources();
  renderLibrary();
}

function clearLibrary() {
  if (!confirm('Vols eliminar tots els recursos desats localment?')) return;
  resources = [];
  persistResources();
  renderLibrary();
}


function openExportMode() {
  const data = getFormData();
  renderReport(data);
  document.getElementById('exportTitle').textContent = data.title || 'Document per exportar';
  document.body.classList.add('export-mode');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function closeExportMode() {
  document.body.classList.remove('export-mode');
}

function downloadCurrentHtml() {
  const data = getFormData();
  renderReport(data);
  const html = buildStandaloneHtml(data, els.report.innerHTML);
  downloadBlob(html, slugify(data.title) + '.html', 'text/html;charset=utf-8');
}

function buildStandaloneHtml(data, reportHtml) {
  return `<!doctype html>
<html lang="ca">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(data.title)} · DocentKit</title>
  <style>
    body { margin: 0; font-family: Arial, sans-serif; color: #172033; background: #f7f8fb; }
    main { max-width: 900px; margin: 0 auto; padding: 32px 18px; }
    article { background: white; border: 1px solid #e4e7ec; border-radius: 18px; padding: 28px; line-height: 1.6; }
    h1 { margin-top: 0; letter-spacing: -0.03em; }
    h2 { margin-top: 1.4rem; border-top: 1px solid #e4e7ec; padding-top: 1rem; }
    ul { padding-left: 1.3rem; }
    .actions { display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 14px; }
    button { border: 0; border-radius: 999px; padding: 12px 16px; font-weight: 700; background: #2563eb; color: white; }
    .secondary { background: #eef2f7; color: #172033; }
    @media print { body { background: white; } main { max-width: none; padding: 0; } article { border: 0; border-radius: 0; padding: 0; } .actions { display: none; } }
  </style>
</head>
<body>
  <main>
    <div class="actions">
      <button onclick="window.print()">Imprimeix / desa com a PDF</button>
      <button class="secondary" onclick="navigator.share ? navigator.share({title: document.title, text: document.body.innerText}) : navigator.clipboard.writeText(document.body.innerText)">Comparteix o copia text</button>
    </div>
    <article>${reportHtml}</article>
  </main>
</body>
</html>`;
}

function downloadBlob(content, filename, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function exportCurrentJson() {
  const data = getFormData();
  downloadJson(data, slugify(data.title) + '.json');
}

function downloadJson(data, filename) {
  downloadBlob(JSON.stringify(data, null, 2), filename, 'application/json;charset=utf-8');
}

async function importFile() {
  const file = els.fileInput.files[0];
  if (!file) return alert('Selecciona un fitxer TXT o JSON.');
  const text = await file.text();
  if (file.name.endsWith('.json')) {
    try {
      const parsed = JSON.parse(text);
      const items = Array.isArray(parsed) ? parsed : [parsed];
      resources = [...items.map(normalizeImportedResource), ...resources];
      persistResources(); renderLibrary(); loadResource(resources[0].id);
    } catch { alert('El JSON no és vàlid.'); }
    return;
  }
  if (file.name.endsWith('.docx') || file.name.endsWith('.pdf')) {
    alert('Fitxer detectat. En aquesta primera versió es registra el nom, però la lectura DOCX/PDF s’afegirà amb llibreries específiques.');
  }
  els.title.value = file.name.replace(/\.[^.]+$/, '');
  els.challenge.value = text.slice(0, 1800);
  renderReport(getFormData());
}

function normalizeImportedResource(item) {
  return { ...getFormData(), ...item, id: item.id || (crypto.randomUUID ? crypto.randomUUID() : String(Date.now())), createdAt: item.createdAt || new Date().toISOString(), tags: Array.isArray(item.tags) ? item.tags : [] };
}

async function copyReportText() {
  await navigator.clipboard.writeText(els.report.innerText);
}

function loadResources() {
  try { return JSON.parse(localStorage.getItem(APP_KEY)) || []; } catch { return []; }
}
function persistResources() { localStorage.setItem(APP_KEY, JSON.stringify(resources)); }
function updateOnlineStatus() { els.offlineStatus.textContent = navigator.onLine ? 'Mode connexió: en línia.' : 'Mode connexió: offline.'; }
function slugify(value) { return value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || 'docentkit-recurs'; }
function escapeHtml(value = '') { return String(value).replace(/[&<>'"]/g, char => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', "'":'&#39;', '"':'&quot;' }[char])); }

init();
