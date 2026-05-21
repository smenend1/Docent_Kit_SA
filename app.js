const APP_KEY = 'docentkit.resources.v3';
const OLD_KEYS = ['docentkit.resources.v1', 'docentkit.resources.v2'];

const MODULES = [
  { id: 'sa', label: 'Crear SA', type: 'Situació d’aprenentatge', intro: 'Dissenya una situació d’aprenentatge competencial amb repte, sabers, criteris, seqüència, inclusió i evidències.' },
  { id: 'projecte', label: 'Crear projecte', type: 'Projecte', intro: 'Planifica un projecte amb producte final, fases, rols, materials, calendarització i avaluació.' },
  { id: 'sessio', label: 'Crear sessió', type: 'Sessió', intro: 'Prepara una sessió clara amb objectius, activació, desenvolupament, tancament i adaptacions.' },
  { id: 'rubrica', label: 'Crear rúbrica', type: 'Rúbrica', intro: 'Genera una rúbrica amb criteris, nivells d’assoliment i descriptors observables.' },
  { id: 'prova', label: 'Crear prova competencial', type: 'Prova competencial', intro: 'Crea una prova contextualitzada amb estímul, preguntes competencials, criteris i pauta de correcció.' },
  { id: 'fitxa', label: 'Crear fitxa d’activitats', type: 'Fitxa d’activitats', intro: 'Elabora una fitxa per a l’alumnat amb instruccions, passos, recursos, lliurables i autoavaluació.' },
  { id: 'adaptacio', label: 'Adaptar activitat', type: 'Adaptació inclusiva', intro: 'Adapta una activitat per TDAH, TEA, dislèxia i TDL amb mesures concretes i no estigmatitzants.' },
  { id: 'importexport', label: 'Exportar / importar', type: 'Exportació / importació', intro: 'Gestiona recursos en JSON, HTML i PDF descarregable sense finestres emergents.' },
  { id: 'biblioteca', label: 'Biblioteca', type: 'Biblioteca local', intro: 'Consulta, reutilitza, cerca i elimina recursos guardats localment en aquest navegador.' }
];

const TEMPLATES = {
  sa: {
    title: 'Dissenyem una solució tecnològica per millorar el centre',
    level: '2n ESO',
    subject: 'Tecnologia i Digitalització',
    duration: '8 sessions',
    challenge: 'Context: el centre vol detectar una necessitat real d’un espai comú i proposar-hi una millora viable, segura i sostenible.\n\nRepte: com podem dissenyar, justificar i comunicar una solució tecnològica que millori un espai del centre?\n\nJustificació: l’alumnat treballa a partir d’una necessitat propera, pren decisions tècniques i valora l’impacte social i ambiental.\n\nProducte final: proposta tècnica amb esbós, maqueta o simulació, pressupost bàsic, justificació i presentació final.',
    knowledge: 'Blocs de sabers: procés de projectes, comunicació tècnica, eines digitals, tecnologia sostenible i operadors tecnològics.\n\nSabers concrets:\n- Identificació de necessitats i formulació de problemes.\n- Recerca, selecció i contrast d’informació.\n- Disseny d’esbossos, croquis o prototips.\n- Planificació de fases, materials i recursos.\n- Comunicació oral, escrita i visual de solucions.\n- Valoració de sostenibilitat, seguretat i viabilitat.',
    competences: 'Competències específiques: CE1, CE2, CE4.\n\nCriteris d’avaluació: 1.1, 2.1, 4.2.\n\nCompetències transversals:\n- Digital: ús d’eines digitals per documentar, dissenyar i comunicar.\n- Ciutadana: proposta de millora vinculada a la comunitat educativa.\n- Emprenedora: ideació, presa de decisions i millora iterativa.\n- Personal, social i d’aprendre a aprendre: treball cooperatiu, autoregulació i reflexió.',
    sequence: 'Inicials: què en sabem?\n- Observació de l’espai i pluja d’idees de necessitats.\n- Conversa guiada sobre criteris de qualitat: utilitat, sostenibilitat, seguretat i cost.\n\nDesenvolupament: aprenem nous continguts\n- Recerca de solucions existents.\n- Anàlisi de materials, eines, limitacions i usuaris.\n- Esbossos, croquis o simulacions inicials.\n\nEstructuració: què hem après?\n- Organització de la proposta en una memòria breu.\n- Revisió amb llista de control i coavaluació.\n\nAplicació: apliquem el que hem après\n- Elaboració del producte final.\n- Presentació oral o multimodal.\n- Millora final a partir del retorn rebut.',
    inclusion: 'Mesures i suports universals:\n- Instruccions fragmentades i visibles.\n- Exemple de proposta final i checklist.\n- Rols cooperatius clars.\n- Opcions de resposta: text, àudio, esquema, maqueta, presentació o vídeo.\n\nTDAH: tasques curtes, temporitzador, objectius de sessió i pauses funcionals.\nTEA: anticipació de fases, estructura visual, consignes literals i previsibilitat.\nDislèxia: menys càrrega lectora, tipografia clara, suport oral i plantilles amb frases iniciades.\nTDL: vocabulari previ, frases simples, suports visuals i temps addicional per formular respostes.',
    assessment: 'Evidències:\n- Registre d’observació i recerca.\n- Esbossos, croquis, maqueta o simulació.\n- Memòria tècnica breu.\n- Presentació final i reflexió individual.\n\nInstruments:\n- Rúbrica del procés i del producte.\n- Llista de control de la memòria.\n- Coavaluació i autoavaluació.\n\nRetorn i millora:\n- Feedback durant el procés.\n- Revisió entre iguals.\n- Millora obligatòria abans del lliurament final.\n\nRúbrica inicial:\n1. Identificació del problema i recerca: NA / AS / AN / AE.\n2. Disseny, planificació i justificació tècnica: NA / AS / AN / AE.\n3. Construcció, simulació, prova o millora: NA / AS / AN / AE.\n4. Comunicació, documentació i reflexió final: NA / AS / AN / AE.',
    tags: 'SA, Tecnologia ESO, plantilla, competencial, inclusió'
  },
  projecte: {
    title: 'Projecte competencial amb producte final', subject: 'Transversal', duration: '3-5 setmanes',
    challenge: 'Repte real o versemblant que demana investigar, crear un producte i presentar una solució.',
    knowledge: 'Sabers vinculats al context, procediments de recerca, planificació, prototipatge i comunicació.',
    competences: 'Competències específiques i criteris seleccionats. Indicadors observables del procés i del producte.',
    sequence: '1. Llançament del repte.\n2. Recerca i definició del problema.\n3. Ideació i planificació.\n4. Desenvolupament del producte.\n5. Presentació, retorn i millora.',
    inclusion: 'Rols, bastides, exemples, opcions de producte, temps flexible i suports visuals.',
    assessment: 'Rúbrica, diari de projecte, coavaluació i presentació final.', tags: 'projecte, competencial'
  },
  sessio: {
    title: 'Sessió guiada', subject: 'Transversal', duration: '1 hora',
    challenge: 'Objectiu de sessió clar i connectat amb una necessitat o pregunta.',
    knowledge: 'Sabers principals i vocabulari clau.', competences: 'Criteris observables de la sessió.',
    sequence: 'Inici: activació i objectiu.\nDesenvolupament: pràctica guiada i activitat principal.\nTancament: síntesi, evidència ràpida i deures opcionals.',
    inclusion: 'Instruccions curtes, exemple resolt, suport visual i comprovacions de comprensió.',
    assessment: 'Evidència breu de sortida, observació docent i feedback immediat.', tags: 'sessió'
  },
  rubrica: {
    title: 'Rúbrica per valorar un projecte competencial', subject: 'Transversal', duration: 'Una activitat o projecte',
    challenge: 'Valorar de manera clara el procés, el producte final i la comunicació de l’aprenentatge.',
    knowledge: 'Criteris de qualitat, evidències, argumentació, autonomia i revisió del treball.',
    competences: 'Planificar, executar, revisar i comunicar un producte o solució amb evidències.',
    sequence: 'Criteri 1: Comprensió del repte.\nCriteri 2: Qualitat del procés.\nCriteri 3: Producte final.\nCriteri 4: Comunicació.\nCriteri 5: Reflexió i millora.',
    inclusion: 'Descriptors breus, llenguatge clar, exemples de cada nivell i formats diversos per evidenciar l’aprenentatge.',
    assessment: 'Nivells: NA, AS, AN, AE. Incloure descriptors observables i espai per a retroacció formativa.', tags: 'rúbrica, avaluació'
  },
  prova: {
    title: 'Prova competencial contextualitzada', subject: 'Transversal', duration: '1-2 sessions',
    challenge: 'Estímul inicial amb situació real, dades o document breu que l’alumnat ha d’interpretar.',
    knowledge: 'Sabers necessaris per comprendre el context i respondre amb justificació.',
    competences: 'Criteris d’avaluació vinculats a preguntes obertes, aplicades i justificades.',
    sequence: 'Bloc A: comprensió de l’estímul.\nBloc B: aplicació de coneixements.\nBloc C: presa de decisions i justificació.\nBloc D: reflexió o transferència.',
    inclusion: 'Lectura accessible, preguntes clares, temps addicional, suport visual i espai per planificar la resposta.',
    assessment: 'Pauta de correcció amb criteris, exemples de resposta i nivells d’assoliment.', tags: 'prova, competencial'
  },
  fitxa: {
    title: 'Fitxa d’activitats per a l’alumnat', subject: 'Transversal', duration: '1-3 sessions',
    challenge: 'Activitat amb propòsit clar i producte o resposta final.',
    knowledge: 'Conceptes clau, procediments i vocabulari necessari.',
    competences: 'Objectius d’aprenentatge i criteris d’èxit escrits en llenguatge comprensible per a l’alumnat.',
    sequence: '1. Llegeix el repte.\n2. Revisa l’exemple.\n3. Resol les tasques pas a pas.\n4. Comprova la feina amb la checklist.\n5. Escriu una reflexió final.',
    inclusion: 'Passos numerats, frases curtes, icones o suports visuals, opcions de resposta i extensió voluntària.',
    assessment: 'Checklist, autoavaluació i espai de feedback docent.', tags: 'fitxa, activitats'
  },
  adaptacio: {
    title: 'Adaptació inclusiva d’una activitat', subject: 'Transversal', duration: 'Segons activitat base',
    challenge: 'Mantenir el mateix objectiu d’aprenentatge reduint barreres d’accés, expressió i participació.',
    knowledge: 'Disseny universal per a l’aprenentatge, bastides, anticipació, llenguatge clar i regulació del temps.',
    competences: 'Participar, comprendre instruccions, produir evidències i autoregular-se amb suports adequats.',
    sequence: '1. Simplificar instruccions.\n2. Afegir exemple resolt.\n3. Dividir la tasca en passos.\n4. Oferir formats de resposta alternatius.\n5. Incorporar revisió guiada.',
    inclusion: 'TDAH: passos curts, temporitzador i pauses. TEA: anticipació, estructura visual i consignes literals. Dislèxia: tipografia clara, menys càrrega lectora i suport oral. TDL: vocabulari previ, frases simples i suport visual.',
    assessment: 'Avaluar el mateix criteri amb evidències adaptades; prioritzar qualitat de resposta i progrés, no quantitat.', tags: 'TDAH, TEA, dislèxia, TDL'
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
  els.report.innerHTML = '<p>Omple el formulari o prem “Crea des de plantilla” per generar un informe net.</p>';
  if ('serviceWorker' in navigator) navigator.serviceWorker.register('./sw.js');
}

function bindEvents() {
  document.getElementById('newResourceBtn').addEventListener('click', clearForm);
  document.getElementById('loadTemplateBtn').addEventListener('click', loadTemplate);
  document.getElementById('generateBtn').addEventListener('click', () => renderReport(getFormData()));
  document.getElementById('saveBtn').addEventListener('click', saveCurrentResource);
  document.getElementById('exportPdfBtn').addEventListener('click', openExportMode);
  document.getElementById('downloadPdfBtn').addEventListener('click', downloadCurrentPdf);
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
  window.addEventListener('beforeinstallprompt', event => { event.preventDefault(); deferredPrompt = event; els.installBtn.classList.remove('hidden'); });
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

function renderTypeOptions() { els.type.innerHTML = MODULES.map(m => `<option>${escapeHtml(m.type)}</option>`).join(''); }

function setModule(id) {
  currentModule = MODULES.find(m => m.id === id) || MODULES[0];
  document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.id === id));
  els.formTitle.textContent = currentModule.label;
  els.type.value = currentModule.type;
  const templateHint = currentModule.id === 'sa' ? 'Inclou la plantilla oficial de SA de Tecnologia ESO integrada.' : 'Inclou una plantilla inicial editable.';
  els.intro.innerHTML = `<p class="eyebrow">${escapeHtml(currentModule.type)}</p><h2>${escapeHtml(currentModule.label)}</h2><p>${escapeHtml(currentModule.intro)}</p><p class="hint">${escapeHtml(templateHint)}</p>`;
  if (id === 'biblioteca') document.querySelector('.library-card').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function clearForm() {
  ['title','subject','duration','challenge','knowledge','competences','sequence','inclusion','assessment','tags'].forEach(key => els[key].value = '');
  els.level.value = '1r ESO';
  els.type.value = currentModule.type;
  els.report.innerHTML = '<p>Omple el formulari o prem “Crea des de plantilla” per generar un informe net.</p>';
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
  els.report.innerHTML = buildReportHtml(data);
}

function buildReportHtml(data) {
  return `
    <h1>${escapeHtml(data.title)}</h1>
    <p><strong>Tipus:</strong> ${escapeHtml(data.type)} · <strong>Nivell:</strong> ${escapeHtml(data.level)}${data.subject ? ` · <strong>Matèria:</strong> ${escapeHtml(data.subject)}` : ''}${data.duration ? ` · <strong>Durada:</strong> ${escapeHtml(data.duration)}` : ''}</p>
    ${section('1. Descripció, context i repte', data.challenge)}
    ${section('2. Sabers i continguts clau', data.knowledge)}
    ${section('3. Competències i criteris d’avaluació', data.competences)}
    ${section('4. Seqüència d’activitats', data.sequence)}
    ${section('5. Atenció a la diversitat i adaptacions', data.inclusion)}
    ${section('6. Avaluació, evidències i retorn', data.assessment)}
    ${data.tags.length ? `<p class="tags"><strong>Etiquetes:</strong> ${data.tags.map(escapeHtml).join(', ')}</p>` : ''}
  `;
}

function section(title, text) {
  if (!text) return '';
  return `<h2>${escapeHtml(title)}</h2>${formatText(text)}`;
}

function formatText(text) {
  const paragraphs = String(text).split(/\n{2,}/).map(block => block.trim()).filter(Boolean);
  return paragraphs.map(block => {
    const lines = block.split('\n').map(line => line.trim()).filter(Boolean);
    if (lines.length > 1 || lines.some(line => /^[-•*]|^\d+[.)]/.test(line))) {
      return `<ul>${lines.map(line => `<li>${escapeHtml(line.replace(/^[-•*]\s*/, ''))}</li>`).join('')}</ul>`;
    }
    return `<p>${escapeHtml(block)}</p>`;
  }).join('');
}

function saveCurrentResource() {
  const data = getFormData();
  renderReport(data);
  resources.unshift(data);
  persistResources();
  renderLibrary();
  alert('Recurs desat a la biblioteca local.');
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

function closeExportMode() { document.body.classList.remove('export-mode'); }

function downloadCurrentPdf() {
  const data = getFormData();
  renderReport(data);
  const pdfText = buildPlainReport(data);
  const pdfBlob = buildSimplePdf(pdfText, data.title);
  downloadBlob(pdfBlob, slugify(data.title) + '.pdf', 'application/pdf');
}

function downloadCurrentHtml() {
  const data = getFormData();
  renderReport(data);
  const html = buildStandaloneHtml(data, els.report.innerHTML);
  downloadBlob(html, slugify(data.title) + '.html', 'text/html;charset=utf-8');
}

function buildPlainReport(data) {
  const parts = [
    data.title,
    `Tipus: ${data.type}`,
    `Nivell: ${data.level}`,
    data.subject ? `Matèria: ${data.subject}` : '',
    data.duration ? `Durada: ${data.duration}` : '',
    '',
    plainSection('1. Descripció, context i repte', data.challenge),
    plainSection('2. Sabers i continguts clau', data.knowledge),
    plainSection('3. Competències i criteris d’avaluació', data.competences),
    plainSection('4. Seqüència d’activitats', data.sequence),
    plainSection('5. Atenció a la diversitat i adaptacions', data.inclusion),
    plainSection('6. Avaluació, evidències i retorn', data.assessment),
    data.tags.length ? `Etiquetes: ${data.tags.join(', ')}` : ''
  ];
  return parts.filter(Boolean).join('\n');
}

function plainSection(title, text) { return text ? `${title}\n${text}\n` : ''; }

function buildSimplePdf(text, title) {
  const pageWidth = 595.28;
  const pageHeight = 841.89;
  const margin = 48;
  const fontSize = 11;
  const leading = 15;
  const maxChars = 88;
  const lines = wrapPdfText(text, maxChars);
  const pages = [];
  let current = [];
  const maxLines = Math.floor((pageHeight - margin * 2) / leading);
  lines.forEach(line => {
    if (current.length >= maxLines) { pages.push(current); current = []; }
    current.push(line);
  });
  if (current.length) pages.push(current);

  const objects = [];
  const addObject = value => { objects.push(value); return objects.length; };
  const catalogId = addObject('');
  const pagesId = addObject('');
  const fontId = addObject('<< /Type /Font /Subtype /Type1 /BaseFont /Times-Roman >>');
  const pageIds = [];

  pages.forEach(pageLines => {
    const content = makePdfContent(pageLines, margin, pageHeight, fontSize, leading);
    const contentId = addObject(`<< /Length ${byteLength(content)} >>\nstream\n${content}\nendstream`);
    const pageId = addObject(`<< /Type /Page /Parent ${pagesId} 0 R /MediaBox [0 0 ${pageWidth} ${pageHeight}] /Resources << /Font << /F1 ${fontId} 0 R >> >> /Contents ${contentId} 0 R >>`);
    pageIds.push(pageId);
  });

  objects[catalogId - 1] = `<< /Type /Catalog /Pages ${pagesId} 0 R >>`;
  objects[pagesId - 1] = `<< /Type /Pages /Kids [${pageIds.map(id => `${id} 0 R`).join(' ')}] /Count ${pageIds.length} >>`;

  let pdf = `%PDF-1.4\n% DocentKit PDF: ${sanitizePdfComment(title)}\n`;
  const offsets = [0];
  objects.forEach((obj, idx) => {
    offsets.push(byteLength(pdf));
    pdf += `${idx + 1} 0 obj\n${obj}\nendobj\n`;
  });
  const xrefOffset = byteLength(pdf);
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  offsets.slice(1).forEach(offset => { pdf += String(offset).padStart(10, '0') + ' 00000 n \n'; });
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root ${catalogId} 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`;
  return new Blob([pdf], { type: 'application/pdf' });
}

function wrapPdfText(text, maxChars) {
  const output = [];
  String(text).replace(/\r/g, '').split('\n').forEach(paragraph => {
    const clean = paragraph.trim();
    if (!clean) { output.push(''); return; }
    const words = clean.split(/\s+/);
    let line = '';
    words.forEach(word => {
      const candidate = line ? `${line} ${word}` : word;
      if (candidate.length > maxChars && line) { output.push(line); line = word; }
      else { line = candidate; }
    });
    if (line) output.push(line);
  });
  return output;
}

function makePdfContent(lines, margin, pageHeight, fontSize, leading) {
  const chunks = ['BT', `/F1 ${fontSize} Tf`, `${margin} ${pageHeight - margin} Td`, `${leading} TL`];
  lines.forEach((line, index) => {
    if (index > 0) chunks.push('T*');
    chunks.push(`(${escapePdfText(line)}) Tj`);
  });
  chunks.push('ET');
  return chunks.join('\n');
}

function escapePdfText(value) {
  return String(value)
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[’‘]/g, "'").replace(/[“”]/g, '"').replace(/[·]/g, '-')
    .replace(/[^\x09\x0A\x0D\x20-\x7E]/g, '')
    .replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)');
}

function sanitizePdfComment(value) { return escapePdfText(value).replace(/[\r\n]/g, ' '); }
function byteLength(value) { return new TextEncoder().encode(value).length; }

function buildStandaloneHtml(data, reportHtml) {
  return `<!doctype html>
<html lang="ca">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(data.title)} · DocentKit</title>
  <style>
    body { margin: 0; font-family: Verdana, Geneva, Arial, sans-serif; color: #172033; background: #f7f8fb; }
    main { max-width: 900px; margin: 0 auto; padding: 32px 18px; }
    article { background: white; border: 1px solid #e4e7ec; border-radius: 18px; padding: 28px; line-height: 1.6; }
    h1 { margin-top: 0; letter-spacing: -0.015em; font-weight: 700; }
    h2 { margin-top: 1.4rem; border-top: 1px solid #e4e7ec; padding-top: 1rem; font-weight: 700; }
    ul { padding-left: 1.3rem; }
    .actions { display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 14px; }
    button { border: 0; border-radius: 999px; padding: 12px 16px; font-weight: 700; background: #2563eb; color: white; }
    .secondary { background: #eef2f7; color: #172033; }
    @media print { body { background: white; font-family: Verdana, Geneva, Arial, sans-serif; } h1, h2, h3, strong, b { font-weight: 700; letter-spacing: normal; } main { max-width: none; padding: 0; } article { border: 0; border-radius: 0; padding: 0; } .actions { display: none; } }
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
  const blob = content instanceof Blob ? content : new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function exportCurrentJson() { const data = getFormData(); downloadJson(data, slugify(data.title) + '.json'); }
function downloadJson(data, filename) { downloadBlob(JSON.stringify(data, null, 2), filename, 'application/json;charset=utf-8'); }

async function importFile() {
  const file = els.fileInput.files[0];
  if (!file) return alert('Selecciona un fitxer TXT o JSON.');
  if (file.name.endsWith('.json')) {
    const text = await file.text();
    try {
      const parsed = JSON.parse(text);
      const items = Array.isArray(parsed) ? parsed : [parsed];
      resources = [...items.map(normalizeImportedResource), ...resources];
      persistResources(); renderLibrary(); loadResource(resources[0].id);
    } catch { alert('El JSON no és vàlid.'); }
    return;
  }
  if (file.name.endsWith('.docx') || file.name.endsWith('.pdf')) {
    els.title.value = file.name.replace(/\.[^.]+$/, '');
    els.challenge.value = `Document importat: ${file.name}.\n\nLa lectura automàtica completa de DOCX/PDF encara no està activada en aquesta versió sense llibreries externes. Pots copiar-ne el contingut als camps o convertir-lo a TXT.`;
    renderReport(getFormData());
    return;
  }
  const text = await file.text();
  els.title.value = file.name.replace(/\.[^.]+$/, '');
  els.challenge.value = text.slice(0, 2500);
  renderReport(getFormData());
}

function normalizeImportedResource(item) {
  return { ...getFormData(), ...item, id: item.id || (crypto.randomUUID ? crypto.randomUUID() : String(Date.now())), createdAt: item.createdAt || new Date().toISOString(), tags: Array.isArray(item.tags) ? item.tags : [] };
}

async function copyReportText() {
  if (!els.report.innerText.trim()) renderReport(getFormData());
  await navigator.clipboard.writeText(els.report.innerText);
  alert('Text copiat.');
}

function loadResources() {
  try {
    const current = JSON.parse(localStorage.getItem(APP_KEY));
    if (Array.isArray(current)) return current;
    for (const key of OLD_KEYS) {
      const old = JSON.parse(localStorage.getItem(key));
      if (Array.isArray(old)) return old;
    }
    return [];
  } catch { return []; }
}
function persistResources() { localStorage.setItem(APP_KEY, JSON.stringify(resources)); }
function updateOnlineStatus() { els.offlineStatus.textContent = navigator.onLine ? 'Mode connexió: en línia.' : 'Mode connexió: offline.'; }
function slugify(value) { return value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || 'docentkit-recurs'; }
function escapeHtml(value = '') { return String(value).replace(/[&<>'"]/g, char => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', "'":'&#39;', '"':'&quot;' }[char])); }

init();
