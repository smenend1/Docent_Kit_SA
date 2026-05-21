const APP_KEY = 'docentkit.resources.v5';
const OLD_KEYS = ['docentkit.resources.v1', 'docentkit.resources.v2', 'docentkit.resources.v3'];

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
  const templateHint = currentModule.id === 'sa' ? "Inclou una sortida d'informe segons pauta de programació de SA, amb rúbrica LOMLOE completa." : 'Inclou una plantilla inicial editable.';
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
  if (isSituation(data)) return buildSaReportHtml(data);
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

function isSituation(data) {
  return String(data.type || '').toLowerCase().includes('situació');
}

function buildSaReportHtml(data) {
  const challengeParts = extractSaParts(data.challenge);
  const competenceParts = extractCompetenceParts(data.competences);
  const sequenceParts = extractSequenceParts(data.sequence);
  const assessmentParts = extractAssessmentParts(data.assessment);
  const inclusionParts = extractInclusionParts(data.inclusion);
  const rubric = buildRubricRows(data, competenceParts.criteriaCodes);
  return `
    <article class="sa-report">
      <header class="sa-cover">
        <p class="sa-kicker">Programació de la situació d’aprenentatge</p>
        <h1>${escapeHtml(data.title)}</h1>
        <p class="sa-question">${escapeHtml(challengeParts.repte || firstSentence(data.challenge) || 'Repte pendent de concretar.')}</p>
      </header>

      <section class="sa-meta-grid">
        ${metaBox('Curs', data.level)}
        ${metaBox('Àrea / matèria / àmbit', data.subject || '—')}
        ${metaBox('Durada', data.duration || '—')}
        ${metaBox('Tipus', data.type || 'Situació d’aprenentatge')}
      </section>

      <section class="sa-block">
        <h2>Descripció</h2>
        ${definition('Context', challengeParts.context)}
        ${definition('Repte', challengeParts.repte)}
        ${definition('Justificació', challengeParts.justificacio)}
        ${definition('Producte final', challengeParts.producte)}
      </section>

      <section class="sa-block">
        <h2>Competències específiques i criteris d’avaluació</h2>
        <div class="sa-two-cols">
          <div>${definition('Competències específiques', competenceParts.competencies || data.competences)}</div>
          <div>${definition('Criteris d’avaluació', competenceParts.criteria || (competenceParts.criteriaCodes.join(', ') || 'Criteris pendents de concretar'))}</div>
        </div>
        ${definition('Competències transversals', competenceParts.transversals)}
      </section>

      <section class="sa-block">
        <h2>Objectius d’aprenentatge</h2>
        ${buildObjectivesList(data)}
      </section>

      <section class="sa-block">
        <h2>Sabers</h2>
        ${formatText(data.knowledge)}
      </section>

      <section class="sa-block">
        <h2>Desenvolupament de la situació d’aprenentatge</h2>
        ${definition('Metodologia, recursos i organització', joinNonEmpty([sequenceParts.metodologia, inclusionParts.universals]))}
        <table class="sa-sequence-table">
          <thead><tr><th>Moment</th><th>Finalitat</th><th>Activitats principals</th></tr></thead>
          <tbody>
            ${sequenceRow('Inicials', 'Què en sabem?', sequenceParts.inicials)}
            ${sequenceRow('Desenvolupament', 'Aprenem nous continguts', sequenceParts.desenvolupament)}
            ${sequenceRow('Estructuració', 'Què hem après?', sequenceParts.estructuracio)}
            ${sequenceRow('Aplicació', 'Apliquem el que hem après', sequenceParts.aplicacio)}
          </tbody>
        </table>
      </section>

      <section class="sa-block">
        <h2>Mesures i suports</h2>
        ${definition('Disseny universal i suports generals', inclusionParts.universals || data.inclusion)}
        <div class="sa-support-grid">
          ${supportCard('TDAH', inclusionParts.tdah)}
          ${supportCard('TEA', inclusionParts.tea)}
          ${supportCard('Dislèxia', inclusionParts.dislexia)}
          ${supportCard('TDL', inclusionParts.tdl)}
        </div>
      </section>

      <section class="sa-block">
        <h2>Evidències, instruments i retorn</h2>
        <div class="sa-three-cols">
          ${definition('Evidències', assessmentParts.evidencies)}
          ${definition('Instruments', assessmentParts.instruments)}
          ${definition('Retorn i millora', assessmentParts.retorn)}
        </div>
      </section>

      <section class="sa-block">
        <h2>Rúbrica de la situació d’aprenentatge</h2>
        <table class="rubric-table">
          <thead><tr><th>Criteri LOMLOE</th><th>Ítem d’avaluació</th><th>NA</th><th>AS</th><th>AN</th><th>AE</th></tr></thead>
          <tbody>${rubric.map(row => rubricRow(row)).join('')}</tbody>
        </table>
      </section>

      <section class="sa-block">
        <h2>Vectors</h2>
        <div class="vectors-grid">
          ${vectorCard('Aprenentatges competencials', 'Repte autèntic, producte final i aplicació funcional dels sabers.')}
          ${vectorCard('Perspectiva de gènere', 'Referents diversos, participació equitativa i revisió d’estereotips en rols i tasques.')}
          ${vectorCard('Universalitat del currículum', 'Opcions d’accés, expressió i participació per reduir barreres.')}
          ${vectorCard('Qualitat de les llengües', 'Ús de llenguatge tècnic, comunicació oral/escrita i suport multimodal.')}
          ${vectorCard('Ciutadania democràtica i consciència global', 'Connexió amb necessitats del centre, sostenibilitat i impacte comunitari.')}
          ${vectorCard('Benestar emocional', 'Clima segur, rols clars, feedback formatiu i confiança en la millora.')}
        </div>
      </section>
    </article>
  `;
}

function section(title, text) {
  if (!text) return '';
  return `<h2>${escapeHtml(title)}</h2>${formatText(text)}`;
}

function formatText(text) {
  const paragraphs = String(text || '').split(/\n{2,}/).map(block => block.trim()).filter(Boolean);
  return paragraphs.map(block => {
    const lines = block.split('\n').map(line => line.trim()).filter(Boolean);
    if (lines.length > 1 || lines.some(line => /^[-•*]|^\d+[.)]/.test(line))) {
      return `<ul>${lines.map(line => `<li>${escapeHtml(line.replace(/^[-•*]\s*/, ''))}</li>`).join('')}</ul>`;
    }
    return `<p>${escapeHtml(block)}</p>`;
  }).join('') || '<p>—</p>';
}

function metaBox(label, value) { return `<div class="sa-meta"><span>${escapeHtml(label)}</span><strong>${escapeHtml(value || '—')}</strong></div>`; }
function definition(label, value) { return `<div class="definition"><h3>${escapeHtml(label)}</h3>${formatText(value || '—')}</div>`; }
function supportCard(label, value) { return `<div class="support-card"><h3>${escapeHtml(label)}</h3>${formatText(value || 'Mesures pendents de concretar.')}</div>`; }
function vectorCard(label, value) { return `<div class="vector-card"><h3>${escapeHtml(label)}</h3><p>${escapeHtml(value)}</p></div>`; }
function sequenceRow(moment, purpose, value) { return `<tr><td><strong>${escapeHtml(moment)}</strong></td><td>${escapeHtml(purpose)}</td><td>${formatText(value || 'Activitats pendents de concretar.')}</td></tr>`; }
function rubricRow(row) { return `<tr><td>${escapeHtml(row.criteri)}</td><td>${escapeHtml(row.item)}</td><td>${escapeHtml(row.na)}</td><td>${escapeHtml(row.as)}</td><td>${escapeHtml(row.an)}</td><td>${escapeHtml(row.ae)}</td></tr>`; }
function joinNonEmpty(values) { return values.filter(Boolean).join('\n\n'); }
function firstSentence(text) { return String(text || '').replace(/\n/g, ' ').split(/[.!?]/).map(s => s.trim()).find(Boolean) || ''; }

function extractSaParts(text) {
  return extractLabeled(text, {
    context: ['Context'], repte: ['Repte'], justificacio: ['Justificació', 'Justificacio'], producte: ['Producte final']
  });
}
function extractCompetenceParts(text) {
  const parts = extractLabeled(text, {
    competencies: ['Competències específiques', 'Competencies especifiques'], criteria: ['Criteris d’avaluació', "Criteris d'avaluació", 'Criteris'], transversals: ['Competències transversals', 'Competencies transversals']
  });
  parts.criteriaCodes = extractCriteriaCodes(parts.criteria || text);
  return parts;
}
function extractSequenceParts(text) {
  const parts = extractLabeled(text, {
    inicials: ['Inicials', 'Activitats inicials'], desenvolupament: ['Desenvolupament'], estructuracio: ['Estructuració', 'Estructuracio'], aplicacio: ['Aplicació', 'Aplicacio'], metodologia: ['Metodologia']
  });
  if (!parts.inicials && !parts.desenvolupament && !parts.estructuracio && !parts.aplicacio) parts.inicials = text;
  return parts;
}
function extractAssessmentParts(text) {
  return extractLabeled(text, { evidencies: ['Evidències', 'Evidencies'], instruments: ['Instruments'], retorn: ['Retorn i millora', 'Retorn'] });
}
function extractInclusionParts(text) {
  return extractLabeled(text, { universals: ['Mesures i suports universals', 'Suports universals'], tdah: ['TDAH'], tea: ['TEA'], dislexia: ['Dislèxia', 'Dislexia'], tdl: ['TDL'] });
}
function extractLabeled(text, labels) {
  const source = String(text || '');
  const allLabels = Object.values(labels).flat().map(escapeRegExp);
  const result = {};
  Object.entries(labels).forEach(([key, aliases]) => {
    for (const alias of aliases) {
      const regex = new RegExp(`${escapeRegExp(alias)}\\s*:?\\s*([\\s\\S]*?)(?=\\n\\s*(?:${allLabels.join('|')})\\s*:?|$)`, 'i');
      const match = source.match(regex);
      if (match && match[1].trim()) { result[key] = match[1].trim(); break; }
    }
  });
  return result;
}
function extractCriteriaCodes(text) {
  const matches = String(text || '').match(/\b\d+\.\d+\b/g) || [];
  return [...new Set(matches)];
}
function escapeRegExp(value) { return String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

function buildObjectivesList(data) {
  const challenge = extractSaParts(data.challenge);
  const product = challenge.producte || 'un producte final contextualitzat';
  const subject = data.subject || 'la matèria';
  const objectives = [
    `Analitzar una necessitat propera per formular un repte tecnològic o competencial rellevant en ${subject}.`,
    `Dissenyar i planificar ${product} utilitzant sabers, criteris de viabilitat i presa de decisions justificada.`,
    `Aplicar procediments de recerca, prototipatge, comunicació i revisió per millorar la proposta durant el procés.`,
    `Comunicar el resultat final amb evidències clares i vocabulari adequat al context.`,
    `Reflexionar sobre el propi aprenentatge, el treball cooperatiu i les millores incorporades.`
  ];
  return `<ol>${objectives.map(o => `<li>${escapeHtml(o)}</li>`).join('')}</ol>`;
}

function buildRubricRows(data, criteriaCodes) {
  const codes = criteriaCodes.length ? criteriaCodes : ['1.1', '2.1', '4.2', '6.1'];
  const base = [
    ['Identificació del problema i recerca', 'identifica el problema de manera molt guiada i aporta informació escassa o poc contrastada', 'identifica el problema i recull informació bàsica amb algun suport', 'analitza el problema i selecciona informació pertinent per justificar decisions', 'formula el problema amb precisió, contrasta fonts i justifica decisions amb criteris tècnics i socials'],
    ['Disseny, planificació i justificació tècnica', 'presenta una proposta incompleta, poc viable o sense planificació clara', 'proposa una solució senzilla amb fases bàsiques i justificació parcial', 'dissenya una solució viable amb planificació, materials i justificació coherent', 'dissenya una solució ben fonamentada, sostenible i optimitzada amb alternatives justificades'],
    ['Construcció, simulació, prova o millora', 'executa parcialment la proposta i incorpora poques comprovacions', 'desenvolupa la proposta amb suport i fa proves bàsiques', 'prova, revisa i millora la solució a partir d’evidències', 'itera la solució amb autonomia, dades de prova i millores ben justificades'],
    ['Comunicació, documentació i reflexió final', 'comunica el resultat amb poca estructura i reflexió limitada', 'presenta el resultat amb estructura bàsica i explica algunes decisions', 'documenta i comunica el procés i el producte amb claredat, vocabulari adequat i reflexió', 'comunica amb rigor, evidències visuals o tècniques i reflexiona sobre impacte, aprenentatge i millores']
  ];
  return base.map((row, i) => ({ criteri: codes[i] || codes[codes.length - 1] || '—', item: row[0], na: row[1], as: row[2], an: row[3], ae: row[4] }));
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
  if (isSituation(data)) return buildSaPlainReport(data);
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

function buildSaPlainReport(data) {
  const c = extractCompetenceParts(data.competences);
  const parts = [
    'PROGRAMACIÓ DE LA SITUACIÓ D’APRENENTATGE',
    data.title,
    `Curs: ${data.level}`,
    `Àrea / matèria / àmbit: ${data.subject || '—'}`,
    `Durada: ${data.duration || '—'}`,
    '',
    plainSection('DESCRIPCIÓ', data.challenge),
    plainSection('COMPETÈNCIES ESPECÍFIQUES I CRITERIS D’AVALUACIÓ', data.competences),
    plainSection('OBJECTIUS D’APRENENTATGE', stripHtml(buildObjectivesList(data))),
    plainSection('SABERS', data.knowledge),
    plainSection('DESENVOLUPAMENT DE LA SITUACIÓ D’APRENENTATGE', data.sequence),
    plainSection('MESURES I SUPORTS', data.inclusion),
    plainSection('EVIDÈNCIES, INSTRUMENTS I RETORN', data.assessment),
    'RÚBRICA DE LA SITUACIÓ D’APRENENTATGE',
    'Criteri LOMLOE | Ítem | NA | AS | AN | AE',
    ...buildRubricRows(data, c.criteriaCodes).map(r => `${r.criteri} | ${r.item} | ${r.na} | ${r.as} | ${r.an} | ${r.ae}`),
    '',
    'VECTORS',
    'Aprenentatges competencials; perspectiva de gènere; universalitat del currículum; qualitat de les llengües; ciutadania democràtica i consciència global; benestar emocional.'
  ];
  return parts.filter(Boolean).join('\n');
}

function stripHtml(html) {
  const div = document.createElement('div');
  div.innerHTML = html;
  return div.innerText;
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
    h3 { margin: .35rem 0; }
    ul, ol { padding-left: 1.3rem; }
    .sa-cover { background: linear-gradient(135deg, #f0fdf4, #ffffff); border-bottom: 2px solid #d8ead9; margin: -28px -28px 22px; padding: 30px 32px; }
    .sa-kicker { text-transform: uppercase; color: #155b32; letter-spacing: .14em; font-weight: 700; }
    .sa-meta-grid, .sa-support-grid, .vectors-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; }
    .sa-meta, .definition, .support-card, .vector-card { border: 1px solid #d8ead9; border-radius: 14px; padding: 14px; background: #fbfffc; }
    .sa-meta span { display: block; text-transform: uppercase; color: #155b32; font-weight: 700; font-size: .8rem; }
    table { width: 100%; border-collapse: collapse; margin-top: 12px; font-size: .88rem; }
    th, td { border: 1px solid #cfd8cf; padding: 8px; vertical-align: top; }
    th { background: #eaf7ef; color: #155b32; }
    .rubric-table th:nth-child(1) { width: 11%; } .rubric-table th:nth-child(2) { width: 19%; }
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
