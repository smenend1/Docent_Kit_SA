const APP_KEY = 'docentkit.resources.v20';
const SETTINGS_KEY = 'docentkit.settings.v20';
const OLD_KEYS = ['docentkit.resources.v19', 'docentkit.resources.v18', 'docentkit.resources.v17', 'docentkit.resources.v16', 'docentkit.resources.v15', 'docentkit.resources.v14', 'docentkit.resources.v13', 'docentkit.resources.v12', 'docentkit.resources.v11', 'docentkit.resources.v10', 'docentkit.resources.v9', 'docentkit.resources.v8', 'docentkit.resources.v7', 'docentkit.resources.v6', 'docentkit.resources.v5', 'docentkit.resources.v4', 'docentkit.resources.v3', 'docentkit.resources.v2', 'docentkit.resources.v1'];

const MODULES = [
  { id: 'sa', label: 'Crear SA', type: 'Situació d’aprenentatge', intro: 'Dissenya una situació d’aprenentatge competencial amb repte, sabers, criteris, seqüència, inclusió i evidències.' },
  { id: 'projecte', label: 'Crear projecte', type: 'Projecte', intro: 'Planifica un projecte amb producte final, fases, rols, materials, calendarització i avaluació.' },
  { id: 'sessio', label: 'Crear sessió', type: 'Sessió', intro: 'Prepara una sessió clara amb objectius, activació, desenvolupament, tancament i adaptacions.' },
  { id: 'rubrica', label: 'Crear rúbrica', type: 'Rúbrica', intro: 'Genera una rúbrica amb criteris, nivells d’assoliment i descriptors observables.' },
  { id: 'prova', label: 'Crear prova competencial', type: 'Prova competencial', intro: 'Crea una prova contextualitzada amb estímul, preguntes competencials, criteris i pauta de correcció.' },
  { id: 'fitxa', label: 'Crear fitxa d’activitats', type: 'Fitxa d’activitats', intro: 'Elabora una fitxa per a l’alumnat amb instruccions, passos, recursos, lliurables i autoavaluació.' },
  { id: 'adaptacio', label: 'Adaptar activitat', type: 'Adaptació inclusiva', intro: 'Adapta una activitat per TDAH, TEA, dislèxia i TDL amb mesures concretes i no estigmatitzants.' },
  { id: 'importexport', label: 'Exportar / importar', type: 'Exportació / importació', intro: 'Gestiona recursos en JSON, HTML i PDF descarregable sense finestres emergents.' },
  { id: 'biblioteca', label: 'Biblioteca', type: 'Biblioteca local', intro: 'Consulta, reutilitza, cerca i elimina recursos guardats localment en aquest navegador.' },
  { id: 'modeia', label: 'Mode IA assistida', type: 'IA assistida', intro: 'Prepara una evolució amb generació local guiada i connexió opcional a una API externa.' }
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

const EXTRA_TEMPLATES = {
  sa_matematiques: {
    title: 'Investiguem dades reals per prendre decisions', level: '3r ESO', subject: 'Matemàtiques', duration: '7 sessions',
    challenge: 'Context: l’alumnat analitza dades properes del centre o del barri per detectar patrons i prendre decisions justificades.\n\nRepte: com podem interpretar dades reals i comunicar conclusions útils amb arguments matemàtics?\n\nJustificació: la proposta connecta estadística, representació gràfica i pensament crític amb una situació significativa.\n\nProducte final: informe breu amb gràfics, conclusions, recomanacions i presentació oral o visual.',
    knowledge: 'Blocs de sabers: sentit estocàstic, sentit numèric, representació i comunicació matemàtica.\n\nSabers concrets:\n- Recollida, organització i neteja de dades.\n- Taules de freqüències, gràfics i mesures de centralització.\n- Interpretació crítica de resultats.\n- Comunicació d’arguments matemàtics.',
    competences: 'Competències específiques: CE1, CE2, CE5, CE6.\n\nCriteris d’avaluació: 1.1, 2.1, 5.1, 6.2.\n\nCompetències transversals:\n- Digital: ús de fulls de càlcul i gràfics.\n- Ciutadana: lectura crítica de dades.\n- Personal i social: treball cooperatiu i revisió de conclusions.',
    sequence: 'Inicials: activació amb una pregunta sobre dades properes.\nDesenvolupament: recollida, organització i representació de dades.\nEstructuració: interpretació de gràfics, mesures i possibles biaixos.\nAplicació: informe final amb conclusions i recomanacions.',
    inclusion: 'Mesures i suports universals: exemples resolts, plantilla de càlcul, glossari visual i rols cooperatius.\nTDAH: tasques curtes i temporitzades.\nTEA: seqüència anticipada i criteris explícits.\nDislèxia: lectura reduïda i suport gràfic.\nTDL: vocabulari matemàtic previ i frases model.',
    assessment: 'Evidències: taula de dades, gràfics, càlculs, informe i exposició.\nInstruments: rúbrica, checklist i autoavaluació.\nRetorn i millora: revisió de gràfics i conclusions abans del lliurament.',
    tags: 'SA, Matemàtiques ESO, dades, estadística, competencial'
  },
  sa_generica: {
    title: 'Situació d’aprenentatge competencial', level: '2n ESO', subject: 'Matèria o àmbit', duration: '6-8 sessions',
    challenge: 'Context: situació propera o repte social, científic, tecnològic o cultural.\n\nRepte: pregunta o problema que l’alumnat haurà de comprendre, respondre o transformar.\n\nJustificació: relació amb interessos de l’alumnat, currículum i context del centre.\n\nProducte final: evidència competencial transferible i comunicable.',
    knowledge: 'Blocs de sabers: sabers curriculars seleccionats i sabers procedimentals necessaris.\n\nSabers concrets:\n- Conceptes clau.\n- Procediments.\n- Estratègies de comunicació.\n- Valors i actituds vinculats al repte.',
    competences: 'Competències específiques: CE1, CE2, CE3.\n\nCriteris d’avaluació: 1.1, 2.1, 3.1.\n\nCompetències transversals: digital, ciutadana, emprenedora i personal, social i d’aprendre a aprendre.',
    sequence: 'Inicials: exploració de coneixements previs i presentació del repte.\nDesenvolupament: recerca, pràctica guiada i construcció de sabers.\nEstructuració: síntesi, mapa d’idees o pauta de criteris.\nAplicació: producte final, presentació i transferència.',
    inclusion: 'Mesures i suports universals: instruccions clares, exemples, bastides, opcions de resposta i revisió guiada.\nTDAH: fragmentació i temporització.\nTEA: estructura visual i previsibilitat.\nDislèxia: suport oral i menys càrrega lectora.\nTDL: vocabulari previ i frases model.',
    assessment: 'Evidències: procés, producte final i reflexió.\nInstruments: rúbrica, llista de control, coavaluació i autoavaluació.\nRetorn i millora: feedback formatiu i possibilitat de revisió.',
    tags: 'SA, plantilla general, competencial, inclusió'
  },
  projecte_steam: {
    title: 'Projecte STEAM amb prototip', level: '3r ESO', subject: 'Àmbit STEAM', duration: '4 setmanes',
    challenge: 'Dissenyar una solució a una necessitat real mitjançant recerca, càlculs, prototipatge i comunicació.',
    knowledge: 'Procés tecnològic, dades, mesures, representació, sostenibilitat, iteració i comunicació científica.',
    competences: 'Competències específiques de tecnologia, matemàtiques i ciències. Criteris: 1.1, 2.1, 3.2, 4.1.',
    sequence: '1. Llançament del repte.\n2. Recerca i definició de requisits.\n3. Disseny i planificació.\n4. Construcció o simulació.\n5. Proves, millores i presentació.',
    inclusion: 'Rols cooperatius, prototipatge amb opcions de baixa complexitat, suports visuals i rúbrica compartida.',
    assessment: 'Rúbrica del procés, registre de proves, producte final i defensa oral.', tags: 'projecte, STEAM, prototip'
  },
  prova_lomloe: {
    title: 'Prova competencial amb estímul i pauta de correcció', level: '4t ESO', subject: 'Transversal', duration: '1-2 sessions',
    challenge: 'Una situació inicial amb dades, text o imatge que exigeix interpretar, aplicar sabers i justificar decisions.',
    knowledge: 'Sabers vinculats a l’estímul, vocabulari clau, procediments de resolució i argumentació.',
    competences: 'Criteris d’avaluació: 1.1, 2.1, 3.1. Relacionar cada pregunta amb un criteri i un nivell d’assoliment.',
    sequence: 'Bloc 1: comprensió de l’estímul.\nBloc 2: aplicació de sabers.\nBloc 3: presa de decisions.\nBloc 4: justificació i transferència.',
    inclusion: 'Lectura accessible, preguntes numerades, espai per planificar la resposta, suport visual i temps addicional quan calgui.',
    assessment: 'Pauta de correcció amb criteris LOMLOE, descriptors NA/AS/AN/AE i exemples de resposta esperada.', tags: 'prova, LOMLOE, competencial'
  }
};

const TEMPLATE_LIBRARY = [
  { id: 'sa_tecnologia', module: 'sa', label: 'SA · Tecnologia ESO · Millora del centre', data: TEMPLATES.sa },
  { id: 'sa_matematiques', module: 'sa', label: 'SA · Matemàtiques ESO · Dades reals', data: EXTRA_TEMPLATES.sa_matematiques },
  { id: 'sa_generica', module: 'sa', label: 'SA · Plantilla general competencial', data: EXTRA_TEMPLATES.sa_generica },
  { id: 'projecte_base', module: 'projecte', label: 'Projecte · Base competencial', data: TEMPLATES.projecte },
  { id: 'projecte_steam', module: 'projecte', label: 'Projecte · STEAM amb prototip', data: EXTRA_TEMPLATES.projecte_steam },
  { id: 'sessio_base', module: 'sessio', label: 'Sessió · Guiada', data: TEMPLATES.sessio },
  { id: 'rubrica_base', module: 'rubrica', label: 'Rúbrica · Quadre NA/AS/AN/AE', data: TEMPLATES.rubrica },
  { id: 'prova_base', module: 'prova', label: 'Prova · Competencial base', data: TEMPLATES.prova },
  { id: 'prova_lomloe', module: 'prova', label: 'Prova · LOMLOE amb estímul', data: EXTRA_TEMPLATES.prova_lomloe },
  { id: 'fitxa_base', module: 'fitxa', label: 'Fitxa · Activitats alumnat', data: TEMPLATES.fitxa },
  { id: 'adaptacio_base', module: 'adaptacio', label: 'Adaptació · TDAH, TEA, dislèxia i TDL', data: TEMPLATES.adaptacio }
];


let currentModule = MODULES[0];
let resources = loadResources();
let deferredPrompt = null;

const els = {
  nav: document.getElementById('moduleNav'), intro: document.getElementById('moduleIntro'), formTitle: document.getElementById('formTitle'),
  type: document.getElementById('type'), title: document.getElementById('title'), level: document.getElementById('level'), subject: document.getElementById('subject'),
  duration: document.getElementById('duration'), challenge: document.getElementById('challenge'), knowledge: document.getElementById('knowledge'), competences: document.getElementById('competences'),
  sequence: document.getElementById('sequence'), inclusion: document.getElementById('inclusion'), assessment: document.getElementById('assessment'), tags: document.getElementById('tags'),
  report: document.getElementById('reportPreview'), library: document.getElementById('libraryList'), storageStatus: document.getElementById('storageStatus'), offlineStatus: document.getElementById('offlineStatus'),
  search: document.getElementById('searchInput'), levelFilter: document.getElementById('levelFilter'), typeFilter: document.getElementById('typeFilter'), fileInput: document.getElementById('fileInput'), installBtn: document.getElementById('installBtn'),
  templateSelect: document.getElementById('templateSelect'), aiProvider: document.getElementById('aiProvider'), aiKey: document.getElementById('aiKey'),
  aiModel: document.getElementById('aiModel'), aiModeStatus: document.getElementById('aiModeStatus'), aiContext: document.getElementById('aiContext'), aiOutput: document.getElementById('aiOutput'),
  aiCourse: document.getElementById('aiCourse'), aiSubject: document.getElementById('aiSubject'), aiTopic: document.getElementById('aiTopic'), aiProduct: document.getElementById('aiProduct'),
  aiDuration: document.getElementById('aiDuration'), aiTools: document.getElementById('aiTools'), aiKnowledge: document.getElementById('aiKnowledge'), aiCriteria: document.getElementById('aiCriteria'),
  aiInclTdah: document.getElementById('aiInclTdah'), aiInclTea: document.getElementById('aiInclTea'), aiInclDislexia: document.getElementById('aiInclDislexia'), aiInclTdl: document.getElementById('aiInclTdl'),
  aiValidationPanel: document.getElementById('aiValidationPanel'), importStatus: document.getElementById('importStatus')
};

function init() {
  renderNav();
  renderTypeOptions();
  renderTemplateOptions();
  setModule('sa');
  renderLibraryTypeFilter();
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
  const loadPackBtn = document.getElementById('loadLocalTechPackBtn');
  if (loadPackBtn) loadPackBtn.addEventListener('click', addLocalTechPackToLibrary);
  const exportTechBtn = document.getElementById('exportTechPackBtn');
  if (exportTechBtn) exportTechBtn.addEventListener('click', exportLocalTechPack);
  const exportLibraryBtn = document.getElementById('exportLibraryPackBtn');
  if (exportLibraryBtn) exportLibraryBtn.addEventListener('click', exportLibraryPack);
  document.getElementById('aiDraftBtn').addEventListener('click', generateAiDraft);
  const aiTestBtn = document.getElementById('aiTestBtn');
  if (aiTestBtn) aiTestBtn.addEventListener('click', testGeminiConnection);
  const aiBuildPromptBtn = document.getElementById('aiBuildPromptBtn');
  if (aiBuildPromptBtn) aiBuildPromptBtn.addEventListener('click', fillAiContextFromWizard);
  ['aiCourse','aiSubject','aiTopic','aiProduct','aiDuration','aiTools','aiKnowledge','aiCriteria'].forEach(id => {
    const node = document.getElementById(id);
    if (node) node.addEventListener('change', saveAiWizardSettings);
  });
  ['aiInclTdah','aiInclTea','aiInclDislexia','aiInclTdl'].forEach(id => {
    const node = document.getElementById(id);
    if (node) node.addEventListener('change', saveAiWizardSettings);
  });
  loadAiWizardSettings();
  document.getElementById('aiApplyBtn').addEventListener('click', applyAiDraftToForm);
  const aiValidateBtn = document.getElementById('aiValidateBtn');
  if (aiValidateBtn) aiValidateBtn.addEventListener('click', () => renderAiValidation(validateSaQuality(getFormData())));
  const pedagogicAuditBtn = document.getElementById('pedagogicAuditBtn');
  if (pedagogicAuditBtn) pedagogicAuditBtn.addEventListener('click', () => renderPedagogicAudit(validateSaPedagogy(getFormData())));
  const aiCompleteMissingBtn = document.getElementById('aiCompleteMissingBtn');
  if (aiCompleteMissingBtn) aiCompleteMissingBtn.addEventListener('click', () => generatePartialAiDraft('missing'));
  const aiKnowledgeBtn = document.getElementById('aiKnowledgeBtn');
  if (aiKnowledgeBtn) aiKnowledgeBtn.addEventListener('click', () => generatePartialAiDraft('knowledge'));
  const aiInclusionBtn = document.getElementById('aiInclusionBtn');
  if (aiInclusionBtn) aiInclusionBtn.addEventListener('click', () => generatePartialAiDraft('inclusion'));
  const aiRubricBtn = document.getElementById('aiRubricBtn');
  if (aiRubricBtn) aiRubricBtn.addEventListener('click', () => generatePartialAiDraft('rubric'));
  els.aiProvider.addEventListener('change', updateAiStatus);
  els.aiProvider.addEventListener('input', updateAiStatus);
  els.aiKey.value = loadSettings().googleApiKey || '';
  els.aiKey.addEventListener('change', () => saveSettings({ googleApiKey: els.aiKey.value.trim() }));
  if (els.aiModel) {
    els.aiModel.value = loadSettings().googleModel || 'gemini-2.5-flash';
    els.aiModel.addEventListener('change', () => saveSettings({ googleModel: els.aiModel.value }));
  }
  updateAiStatus();
  els.search.addEventListener('input', renderLibrary);
  els.levelFilter.addEventListener('change', renderLibrary);
  if (els.typeFilter) els.typeFilter.addEventListener('change', renderLibrary);
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
  renderTemplateOptions();
  if (id === 'biblioteca') document.querySelector('.library-card').scrollIntoView({ behavior: 'smooth', block: 'start' });
  if (id === 'modeia') document.querySelector('.ai-card').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function clearForm() {
  ['title','subject','duration','challenge','knowledge','competences','sequence','inclusion','assessment','tags'].forEach(key => els[key].value = '');
  els.level.value = '1r ESO';
  els.type.value = currentModule.type;
  els.report.innerHTML = '<p>Omple el formulari o prem “Crea des de plantilla” per generar un informe net.</p>';
}

function renderTemplateOptions() {
  if (!els.templateSelect) return;
  const allowed = TEMPLATE_LIBRARY.filter(t => t.module === currentModule.id || currentModule.id === 'modeia');
  const list = allowed.length ? allowed : TEMPLATE_LIBRARY.filter(t => t.module === 'sa');
  els.templateSelect.innerHTML = list.map(t => `<option value="${escapeHtml(t.id)}">${escapeHtml(t.label)}</option>`).join('');
}

function loadTemplate() {
  const selected = TEMPLATE_LIBRARY.find(t => t.id === els.templateSelect.value);
  const template = selected ? selected.data : (TEMPLATES[currentModule.id] || TEMPLATES.sa);
  Object.entries(template).forEach(([key, value]) => { if (els[key]) els[key].value = value; });
  const moduleId = selected ? selected.module : currentModule.id;
  const module = MODULES.find(m => m.id === moduleId) || currentModule;
  els.type.value = module.type;
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

function renderLibraryTypeFilter() {
  if (!els.typeFilter) return;
  const current = els.typeFilter.value || '';
  const types = Array.from(new Set(resources.map(r => r.type).filter(Boolean))).sort((a, b) => a.localeCompare(b, 'ca'));
  els.typeFilter.innerHTML = '<option value="">Tots</option>' + types.map(type => `<option value="${escapeHtml(type)}">${escapeHtml(type)}</option>`).join('');
  if (types.includes(current)) els.typeFilter.value = current;
}

function renderLibrary() {
  renderLibraryTypeFilter();
  const query = (els.search.value || '').toLowerCase();
  const level = els.levelFilter.value;
  const type = els.typeFilter ? els.typeFilter.value : '';
  const filtered = resources.filter(item => {
    const haystack = [item.title, item.type, item.level, item.subject, item.duration, ...(item.tags || [])].join(' ').toLowerCase();
    return (!query || haystack.includes(query)) && (!level || item.level === level) && (!type || item.type === type);
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
    node.querySelector('h3').textContent = item.title || 'Recurs sense títol';
    node.querySelector('.resource-meta').textContent = `${item.type || 'Recurs'} · ${item.level || 'sense nivell'} · ${new Date(item.createdAt || Date.now()).toLocaleDateString('ca-ES')}`;
    node.querySelector('.resource-summary').textContent = item.challenge || item.subject || 'Recurs docent desat.';
    node.querySelector('.load-item').addEventListener('click', () => loadResource(item.id));
    node.querySelector('.duplicate-item').addEventListener('click', () => duplicateResource(item.id));
    node.querySelector('.export-item').addEventListener('click', () => exportSingleResource(item.id));
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

function duplicateResource(id) {
  const item = resources.find(r => r.id === id);
  if (!item) return;
  const copy = {
    ...item,
    id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
    title: `${item.title || 'Recurs'} · còpia`,
    createdAt: new Date().toISOString()
  };
  resources.unshift(copy);
  persistResources();
  renderLibrary();
}

function exportSingleResource(id) {
  const item = resources.find(r => r.id === id);
  if (!item) return;
  const payload = formResourceToDocentKitJson(item);
  downloadBlob(new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' }), `${slugify(item.title || 'recurs')}.json`, 'application/json');
}

function addLocalTechPackToLibrary() {
  if (!Array.isArray(LOCAL_TECH_2ESO_SA)) return alert('No s’ha trobat el paquet local de Tecnologia.');
  const mapped = LOCAL_TECH_2ESO_SA.map(jsonSaToFormResource);
  let added = 0;
  mapped.reverse().forEach(item => {
    const exists = resources.some(r => normalizeLibraryKey(r.title) === normalizeLibraryKey(item.title));
    if (!exists) { resources.unshift(item); added += 1; }
  });
  persistResources();
  renderLibrary();
  if (els.importStatus) els.importStatus.textContent = `Paquet local de Tecnologia afegit a la biblioteca: ${added} recurs(os) nou(s).`;
  alert(added ? `S’han afegit ${added} SA locals a la biblioteca.` : 'Aquestes SA ja eren a la biblioteca.');
}

function exportLocalTechPack() {
  const pack = {
    schema: 'docentkit.pack.v1',
    nom: 'Tecnologia i Digitalització 2n ESO · 6 SA',
    idioma: 'ca',
    versio: '2.0',
    data_exportacio: new Date().toISOString().slice(0, 10),
    recursos: LOCAL_TECH_2ESO_SA
  };
  downloadBlob(new Blob([JSON.stringify(pack, null, 2)], { type: 'application/json' }), 'docentkit-pack-tecnologia-2eso.json', 'application/json');
}

function exportLibraryPack() {
  const pack = {
    schema: 'docentkit.library.v1',
    nom: 'Biblioteca local DocentKit',
    idioma: 'ca',
    versio: '2.0',
    data_exportacio: new Date().toISOString(),
    resources: resources.map(formResourceToDocentKitJson)
  };
  downloadBlob(new Blob([JSON.stringify(pack, null, 2)], { type: 'application/json' }), 'docentkit-biblioteca-local.json', 'application/json');
}

function normalizeLibraryKey(value) {
  return String(value || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, ' ').trim();
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
  const pdfBlob = isSituation(data) ? buildVisualSaPdf(data) : buildSimplePdf(buildPlainReport(data), data.title);
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


function buildVisualSaPdf(data) {
  const doc = new PdfDoc();
  const challenge = extractSaParts(data.challenge);
  const competences = extractCompetenceParts(data.competences);
  const sequence = extractSequenceParts(data.sequence);
  const assessment = extractAssessmentParts(data.assessment);
  const inclusion = extractInclusionParts(data.inclusion);
  const rubric = buildRubricRows(data, competences.criteriaCodes);
  doc.cover(data.title || 'Situació d’aprenentatge', challenge.repte || firstSentence(data.challenge), data.level, data.subject || '—', data.duration || '—');
  doc.twoMeta('Curs', data.level, 'Àrea / matèria / àmbit', data.subject || '—');
  doc.section('Descripció, context i repte');
  doc.textBlock('Context', challenge.context || data.challenge);
  doc.textBlock('Repte', challenge.repte || '—');
  doc.textBlock('Justificació', challenge.justificacio || '—');
  doc.textBlock('Producte final', challenge.producte || '—');
  doc.section('Competències específiques i criteris d’avaluació');
  doc.textBlock('Competències específiques', competences.competencies || data.competences);
  doc.textBlock('Criteris d’avaluació', competences.criteria || competences.criteriaCodes.join(', ') || '—');
  doc.textBlock('Competències transversals', competences.transversals || 'Digital, ciutadana, emprenedora i personal, social i d’aprendre a aprendre.');
  doc.section('Objectius d’aprenentatge');
  doc.paragraphs(stripHtml(buildObjectivesList(data)));
  doc.section('Sabers');
  doc.paragraphs(data.knowledge || '—');
  doc.section('Desenvolupament de la situació d’aprenentatge');
  doc.table(['Moment', 'Finalitat', 'Activitats principals'], [
    ['Inicials', 'Què en sabem?', sequence.inicials || '—'],
    ['Desenvolupament', 'Aprenem nous continguts', sequence.desenvolupament || '—'],
    ['Estructuració', 'Què hem après?', sequence.estructuracio || '—'],
    ['Aplicació', 'Apliquem el que hem après', sequence.aplicacio || '—']
  ], [0.17, 0.22, 0.61]);
  doc.section('Mesures i suports');
  doc.textBlock('Disseny universal i suports generals', inclusion.universals || data.inclusion || '—');
  doc.table(['TDAH', 'TEA', 'Dislèxia', 'TDL'], [[inclusion.tdah || '—', inclusion.tea || '—', inclusion.dislexia || '—', inclusion.tdl || '—']], [0.25,0.25,0.25,0.25]);
  doc.section('Evidències, instruments i retorn');
  doc.textBlock('Evidències', assessment.evidencies || '—');
  doc.textBlock('Instruments', assessment.instruments || '—');
  doc.textBlock('Retorn i millora', assessment.retorn || '—');
  doc.section('Rúbrica de la situació d’aprenentatge');
  doc.table(['Criteri LOMLOE', 'Ítem', 'NA', 'AS', 'AN', 'AE'], rubric.map(r => [r.criteri, r.item, r.na, r.as, r.an, r.ae]), [0.10,0.18,0.18,0.18,0.18,0.18], 7.5);
  doc.section('Vectors');
  doc.table(['Vector', 'Concreció'], [
    ['Aprenentatges competencials', 'Repte autèntic, producte final i aplicació funcional dels sabers.'],
    ['Perspectiva de gènere', 'Referents diversos, participació equitativa i revisió d’estereotips.'],
    ['Universalitat del currículum', 'Opcions d’accés, expressió i participació per reduir barreres.'],
    ['Qualitat de les llengües', 'Comunicació oral, escrita, tècnica i multimodal.'],
    ['Ciutadania democràtica i consciència global', 'Connexió amb necessitats del centre, sostenibilitat i impacte comunitari.'],
    ['Benestar emocional', 'Clima segur, rols clars, feedback formatiu i confiança en la millora.']
  ], [0.32,0.68]);
  return doc.toBlob(data.title);
}

class PdfDoc {
  constructor() { this.w = 595.28; this.h = 841.89; this.margin = 42; this.y = this.h - this.margin; this.pages = [[]]; this.pageNo = 1; }
  current() { return this.pages[this.pages.length - 1]; }
  add(cmd) { this.current().push(cmd); }
  newPage() { this.pages.push([]); this.pageNo += 1; this.y = this.h - this.margin; this.footer(); }
  ensure(height) { if (this.y - height < this.margin + 24) this.newPage(); }
  footer() { this.text(`DocentKit · ${this.pageNo}`, this.margin, 24, 8, false, 0.45); }
  text(value, x, y, size=10, bold=false, gray=0) { const font = bold ? 'F2' : 'F1'; this.add(`BT /${font} ${size} Tf ${gray} g ${x.toFixed(2)} ${y.toFixed(2)} Td (${escapePdfText(value)}) Tj ET`); }
  rect(x, y, w, h, fill=[1,1,1], stroke=[0.82,0.88,0.82]) { this.add(`q ${fill.join(' ')} rg ${stroke.join(' ')} RG ${x.toFixed(2)} ${y.toFixed(2)} ${w.toFixed(2)} ${h.toFixed(2)} re B Q`); }
  line(x1,y1,x2,y2, color=[0.82,0.88,0.82]) { this.add(`q ${color.join(' ')} RG ${x1} ${y1} m ${x2} ${y2} l S Q`); }
  cover(title, question) { this.rect(0, this.h-170, this.w, 170, [0.94,0.99,0.95], [0.94,0.99,0.95]); this.text('PROGRAMACIO DE LA SITUACIO D APRENENTATGE', this.margin, this.h-48, 11, true, 0.10); this.wrap(title, this.margin, this.h-85, this.w-this.margin*2, 26, true, 31); this.y = this.h-120; this.wrap(question || 'Repte pendent de concretar.', this.margin, this.y, this.w-this.margin*2, 14, false, 18); this.y = this.h-205; }
  twoMeta(l1,v1,l2,v2) { const gap=14, boxW=(this.w-this.margin*2-gap)/2, boxH=54; this.ensure(boxH+10); this.rect(this.margin, this.y-boxH, boxW, boxH, [0.99,1,0.99]); this.rect(this.margin+boxW+gap, this.y-boxH, boxW, boxH, [0.99,1,0.99]); this.text(l1.toUpperCase(), this.margin+12, this.y-19, 9, true, 0.15); this.text(v1 || '—', this.margin+12, this.y-39, 14, true, 0.05); this.text(l2.toUpperCase(), this.margin+boxW+gap+12, this.y-19, 9, true, 0.15); this.text(v2 || '—', this.margin+boxW+gap+12, this.y-39, 14, true, 0.05); this.y -= boxH + 18; }
  section(title) { this.ensure(46); this.line(this.margin, this.y, this.w-this.margin, this.y); this.y -= 20; this.text(title, this.margin, this.y, 15, true, 0.12); this.y -= 16; }
  textBlock(title, body) { const lines = this.wrapLines(String(body || '—'), 82); const height = Math.max(48, 22 + lines.length * 11); this.ensure(height + 8); this.rect(this.margin, this.y-height, this.w-this.margin*2, height, [0.99,1,0.99]); this.text(title, this.margin+10, this.y-16, 10.5, true, 0.12); let yy = this.y-31; lines.slice(0, 18).forEach(line => { this.text(line, this.margin+10, yy, 9.3, false, 0.05); yy -= 11; }); this.y -= height + 8; }
  paragraphs(text) { const lines = this.wrapLines(text, 92); lines.forEach(line => { this.ensure(13); this.text(line, this.margin, this.y, 9.5, false, 0.05); this.y -= 12; }); this.y -= 5; }
  table(headers, rows, widths, fontSize=8.5) { const totalW = this.w - this.margin*2; const colW = widths.map(v => v*totalW); const drawRow = (cells, header=false) => { const cellLines = cells.map((c,i) => this.wrapLines(String(c || '—'), Math.max(8, Math.floor(colW[i]/(fontSize*0.48))))); const rowH = Math.max(24, 13 + Math.max(...cellLines.map(l => l.length))* (fontSize+2)); this.ensure(rowH+2); let x=this.margin; cells.forEach((c,i) => { this.rect(x, this.y-rowH, colW[i], rowH, header ? [0.91,0.97,0.93] : [1,1,1], [0.74,0.82,0.74]); let yy=this.y-12; cellLines[i].slice(0, 9).forEach(line => { this.text(line, x+4, yy, fontSize, header, header ? 0.12 : 0.05); yy -= fontSize+2; }); x += colW[i]; }); this.y -= rowH; }; drawRow(headers, true); rows.forEach(row => drawRow(row, false)); this.y -= 10; }
  wrap(text, x, y, width, size, bold=false, leading=14) { const maxChars = Math.max(16, Math.floor(width/(size*0.52))); const lines = this.wrapLines(text, maxChars); let yy = y; lines.forEach(line => { this.text(line, x, yy, size, bold, 0.05); yy -= leading; }); return lines.length * leading; }
  wrapLines(text, maxChars) { const output=[]; String(text || '').replace(/\r/g,'').split(/\n+/).forEach(p => { const clean=p.replace(/^[-•*]\s*/, '').trim(); if (!clean) { output.push(''); return; } let line=''; clean.split(/\s+/).forEach(word => { const cand=line ? line+' '+word : word; if (cand.length > maxChars && line) { output.push(line); line=word; } else line=cand; }); if (line) output.push(line); }); return output; }
  toBlob(title) { this.footer(); const objects=[]; const add=v=>{objects.push(v); return objects.length;}; const catalogId=add(''), pagesId=add(''); const fontId=add('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>'); const boldId=add('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>'); const pageIds=[]; this.pages.forEach(cmds => { const content = cmds.join('\n'); const contentId=add(`<< /Length ${byteLength(content)} >>\nstream\n${content}\nendstream`); const pageId=add(`<< /Type /Page /Parent ${pagesId} 0 R /MediaBox [0 0 ${this.w} ${this.h}] /Resources << /Font << /F1 ${fontId} 0 R /F2 ${boldId} 0 R >> >> /Contents ${contentId} 0 R >>`); pageIds.push(pageId); }); objects[catalogId-1]=`<< /Type /Catalog /Pages ${pagesId} 0 R >>`; objects[pagesId-1]=`<< /Type /Pages /Kids [${pageIds.map(id => `${id} 0 R`).join(' ')}] /Count ${pageIds.length} >>`; let pdf=`%PDF-1.4\n% DocentKit PDF visual: ${sanitizePdfComment(title)}\n`; const offsets=[0]; objects.forEach((obj,idx)=>{offsets.push(byteLength(pdf)); pdf += `${idx+1} 0 obj\n${obj}\nendobj\n`;}); const xref=byteLength(pdf); pdf += `xref\n0 ${objects.length+1}\n0000000000 65535 f \n`; offsets.slice(1).forEach(o => { pdf += String(o).padStart(10,'0') + ' 00000 n \n'; }); pdf += `trailer\n<< /Size ${objects.length+1} /Root ${catalogId} 0 R >>\nstartxref\n${xref}\n%%EOF`; return new Blob([pdf], {type:'application/pdf'}); }
}

async function extractDocxText(file) {
  const buffer = await file.arrayBuffer();
  const entries = parseZipEntries(buffer);
  const documentEntry = entries.find(e => e.name === 'word/document.xml');
  if (!documentEntry) throw new Error('No word/document.xml found');
  const xmlBytes = await inflateZipEntry(buffer, documentEntry);
  const xml = new TextDecoder('utf-8').decode(xmlBytes);
  return docxXmlToText(xml);
}
function parseZipEntries(buffer) { const view = new DataView(buffer); const entries=[]; let offset=0; while (offset + 30 < view.byteLength) { const sig = view.getUint32(offset, true); if (sig !== 0x04034b50) break; const method = view.getUint16(offset+8, true); const compressedSize = view.getUint32(offset+18, true); const uncompressedSize = view.getUint32(offset+22, true); const nameLen = view.getUint16(offset+26, true); const extraLen = view.getUint16(offset+28, true); const nameBytes = new Uint8Array(buffer, offset+30, nameLen); const name = new TextDecoder('utf-8').decode(nameBytes); const dataOffset = offset + 30 + nameLen + extraLen; entries.push({name, method, compressedSize, uncompressedSize, dataOffset}); offset = dataOffset + compressedSize; } return entries; }
async function inflateZipEntry(buffer, entry) { const bytes = new Uint8Array(buffer, entry.dataOffset, entry.compressedSize); if (entry.method === 0) return bytes; if (entry.method !== 8) throw new Error('Unsupported zip compression'); if (!('DecompressionStream' in window)) throw new Error('DecompressionStream not available'); const stream = new Blob([bytes]).stream().pipeThrough(new DecompressionStream('deflate-raw')); return new Uint8Array(await new Response(stream).arrayBuffer()); }
function docxXmlToText(xml) { return xml.replace(/<w:tab\/>/g, '\t').replace(/<w:br\/>/g, '\n').replace(/<\/w:p>/g, '\n').replace(/<\/w:tr>/g, '\n').replace(/<[^>]+>/g, '').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/\n{3,}/g, '\n\n').trim(); }
async function extractPdfText(file) { const buffer = await file.arrayBuffer(); const bytes = new Uint8Array(buffer); let binary = ''; const chunk = 0x8000; for (let i=0; i<bytes.length; i+=chunk) binary += String.fromCharCode(...bytes.subarray(i, i+chunk)); const parts=[]; const literalRegex = /\((?:\\.|[^\\)]){2,}\)\s*Tj/g; let match; while ((match = literalRegex.exec(binary))) parts.push(decodePdfLiteral(match[0].replace(/\)\s*Tj$/, '').slice(1))); const tjRegex = /\[(.*?)\]\s*TJ/gs; while ((match = tjRegex.exec(binary))) { const inner = match[1]; let m; const re=/\((?:\\.|[^\\)])+\)/g; const line=[]; while ((m = re.exec(inner))) line.push(decodePdfLiteral(m[0].slice(1,-1))); if (line.length) parts.push(line.join('')); } const text = parts.join('\n').replace(/\s+\n/g, '\n').replace(/\n{3,}/g, '\n\n').trim(); if (!text || text.length < 20) throw new Error('No extractable PDF text'); return text; }
function decodePdfLiteral(value) { return value.replace(/\\([nrtbf()\\])/g, (_, c) => ({n:'\n', r:'\r', t:'\t', b:'\b', f:'\f', '(':'(', ')':')', '\\':'\\'}[c] || c)); }
function applyImportedText(filename, text, kind) { els.title.value = filename.replace(/\.[^.]+$/, ''); const mapped = mapImportedTemplateText(text); if (mapped.title) els.title.value = mapped.title; if (mapped.level) els.level.value = mapped.level; if (mapped.subject) els.subject.value = mapped.subject; if (mapped.duration) els.duration.value = mapped.duration; if (mapped.challenge) els.challenge.value = mapped.challenge; if (mapped.knowledge) els.knowledge.value = mapped.knowledge; if (mapped.competences) els.competences.value = mapped.competences; if (mapped.sequence) els.sequence.value = mapped.sequence; if (mapped.inclusion) els.inclusion.value = mapped.inclusion; if (mapped.assessment) els.assessment.value = mapped.assessment; if (!mapped.challenge && text) els.challenge.value = `${kind} importat: ${filename}\n\n${text.slice(0, 3000)}`; renderReport(getFormData()); }
function mapImportedTemplateText(text) {
  const labels = 'TÍTOL|TITOL|CURS|MATÈRIA|MATERIA|DURADA|DOCENT|CONTEXT|REPTE|JUSTIFICACIÓ|JUSTIFICACIO|PRODUCTE FINAL|COMPETÈNCIES ESPECÍFIQUES|COMPETENCIES ESPECIFIQUES|CRITERIS D’AVALUACIÓ|CRITERIS D.AVALUACIÓ|CRITERIS D.AVALUACIO|OBJECTIUS D.APRENENTATGE|BLOCS DE SABERS|SABERS CONCRETS|METODOLOGIA|ORGANITZACIÓ DE L.AULA|ORGANITZACIO DE L.AULA|RECURSOS|MESURES I SUPORTS|ADAPTACIONS TDAH|ADAPTACIONS TEA|ADAPTACIONS DISLÈXIA|ADAPTACIONS DISLEXIA|ADAPTACIONS TDL|INICIALS|DESENVOLUPAMENT|ESTRUCTURACIÓ|ESTRUCTURACIO|APLICACIÓ|APLICACIO|EVIDÈNCIES|EVIDENCIES|INSTRUMENTS|RETORN I MILLORA|RÚBRICA|RUBRICA|APRENENTATGES COMPETENCIALS|PERSPECTIVA DE GÈNERE|PERSPECTIVA DE GENERE|UNIVERSALITAT|QUALITAT|CIUTADANIA|BENESTAR|Ítem d.avaluació|Item d.avaluacio|Annex|CE|CA|BLOCS';
  const get = (...aliases) => {
    for (const label of aliases) {
      const re = new RegExp(`${escapeRegExp(label)}\s*:?\s*\n+([\s\S]*?)(?=\n\s*(?:${labels})\b|$)`, 'i');
      const m = text.match(re);
      if (m && cleanImportedValue(m[1])) return cleanImportedValue(m[1]);
    }
    return '';
  };
  const title=get('TÍTOL','TITOL'), level=normalizeLevel(get('CURS')), subject=get('MATÈRIA','MATERIA'), duration=get('DURADA');
  const context=get('CONTEXT'), repte=get('REPTE'), justificacio=get('JUSTIFICACIÓ','JUSTIFICACIO'), producte=get('PRODUCTE FINAL');
  const ce=get('COMPETÈNCIES ESPECÍFIQUES','COMPETENCIES ESPECIFIQUES','CE'), ca=get('CRITERIS D’AVALUACIÓ','CRITERIS D AVALUACIÓ','CA');
  const objectius=get('OBJECTIUS D’APRENENTATGE','OBJECTIUS D APRENENTATGE');
  const blocs=get('BLOCS DE SABERS','BLOCS'), sabers=get('SABERS CONCRETS');
  const metodologia=get('METODOLOGIA'), organitzacio=get('ORGANITZACIÓ DE L’AULA','ORGANITZACIO DE L AULA'), recursos=get('RECURSOS'), mesures=get('MESURES I SUPORTS');
  const tdah=get('ADAPTACIONS TDAH'), tea=get('ADAPTACIONS TEA'), dislexia=get('ADAPTACIONS DISLÈXIA','ADAPTACIONS DISLEXIA'), tdl=get('ADAPTACIONS TDL');
  const inicials=get('INICIALS: QUÈ EN SABEM?','INICIALS'), desenvolupament=get('DESENVOLUPAMENT: APRENEM NOUS CONTINGUTS','DESENVOLUPAMENT'), estructuracio=get('ESTRUCTURACIÓ: QUÈ HEM APRÈS?','ESTRUCTURACIO'), aplicacio=get('APLICACIÓ: APLIQUEM EL QUE HEM APRÈS','APLICACIO');
  const evidencies=get('EVIDÈNCIES','EVIDENCIES'), instruments=get('INSTRUMENTS'), retorn=get('RETORN I MILLORA'), rubrica=get('RÚBRICA','RUBRICA');
  const vectors = joinNonEmpty([
    get('APRENENTATGES COMPETENCIALS') && `Aprenentatges competencials: ${get('APRENENTATGES COMPETENCIALS')}`,
    get('PERSPECTIVA DE GÈNERE','PERSPECTIVA DE GENERE') && `Perspectiva de gènere: ${get('PERSPECTIVA DE GÈNERE','PERSPECTIVA DE GENERE')}`,
    get('UNIVERSALITAT') && `Universalitat del currículum: ${get('UNIVERSALITAT')}`,
    get('QUALITAT') && `Qualitat de les llengües: ${get('QUALITAT')}`,
    get('CIUTADANIA') && `Ciutadania democràtica i consciència global: ${get('CIUTADANIA')}`,
    get('BENESTAR') && `Benestar emocional: ${get('BENESTAR')}`
  ]);
  return {
    title, level, subject, duration,
    challenge: joinNonEmpty([context && `Context: ${context}`, repte && `Repte: ${repte}`, justificacio && `Justificació: ${justificacio}`, producte && `Producte final: ${producte}`]),
    competences: joinNonEmpty([ce && `Competències específiques: ${ce}`, ca && `Criteris d’avaluació: ${ca}`, objectius && `Objectius d’aprenentatge: ${objectius}`]),
    knowledge: joinNonEmpty([blocs && `Blocs de sabers: ${blocs}`, sabers && `Sabers concrets: ${sabers}`]),
    sequence: joinNonEmpty([metodologia && `Metodologia: ${metodologia}`, organitzacio && `Organització de l’aula: ${organitzacio}`, recursos && `Recursos: ${recursos}`, inicials && `Inicials: ${inicials}`, desenvolupament && `Desenvolupament: ${desenvolupament}`, estructuracio && `Estructuració: ${estructuracio}`, aplicacio && `Aplicació: ${aplicacio}`]),
    inclusion: joinNonEmpty([mesures && `Mesures i suports: ${mesures}`, tdah && `TDAH: ${tdah}`, tea && `TEA: ${tea}`, dislexia && `Dislèxia: ${dislexia}`, tdl && `TDL: ${tdl}`]),
    assessment: joinNonEmpty([evidencies && `Evidències: ${evidencies}`, instruments && `Instruments: ${instruments}`, retorn && `Retorn i millora: ${retorn}`, vectors && `Vectors: ${vectors}`, rubrica && `Rúbrica: ${rubrica}`])
  };
}
function cleanImportedValue(value) { return String(value || '').replace(/\[[^\]]*\]/g, '').replace(/\n{3,}/g, '\n\n').trim(); }
function normalizeLevel(value) { const v = String(value || '').toLowerCase(); if (v.includes('1r') || v.includes('eso1')) return '1r ESO'; if (v.includes('2n') || v.includes('eso2')) return '2n ESO'; if (v.includes('3r') || v.includes('eso3')) return '3r ESO'; if (v.includes('4t') || v.includes('eso4')) return '4t ESO'; return value || ''; }

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
  const file = els.fileInput && els.fileInput.files ? els.fileInput.files[0] : null;
  if (!file) return alert('Selecciona un fitxer TXT, JSON, DOCX o PDF.');
  const lowerName = file.name.toLowerCase();

  if (lowerName.endsWith('.json')) {
    const text = await file.text();
    try {
      const parsed = JSON.parse(text);
      const items = extractJsonSaItems(parsed);

      if (items.length === 1) {
        applyImportedJson(file.name, items[0]);
      } else if (items.length > 1) {
        const mappedItems = items.map(jsonSaToFormResource);
        resources = [...mappedItems, ...resources.filter(r => !mappedItems.some(m => m.id === r.id))];
        persistResources();
        renderLibrary();
        applyImportedJson(file.name, items[0], { fromPack: true, count: items.length });
      } else {
        const formItems = extractJsonFormResources(parsed);
        if (formItems.length) {
          const mapped = formItems.map(normalizeImportedResource);
          resources = [...mapped, ...resources.filter(r => !mapped.some(m => m.id === r.id))];
          persistResources();
          renderLibrary();
          loadResource(mapped[0].id);
          if (els.importStatus) els.importStatus.textContent = `Paquet de biblioteca importat: ${file.name}. ${mapped.length} recurs(os) carregat(s).`;
        } else {
          const generic = normalizeImportedResource(parsed);
          resources = [generic, ...resources];
          persistResources();
          renderLibrary();
          loadResource(generic.id);
          if (els.importStatus) els.importStatus.textContent = `JSON importat: ${file.name}. No és un JSON de SA DocentKit; s'ha carregat com a recurs genèric.`;
        }
      }
    } catch (error) {
      console.error(error);
      alert('El JSON no és vàlid o no s’ha pogut interpretar. Revisa comes, claus i cometes.');
    }
    return;
  }

  if (lowerName.endsWith('.docx')) {
    try {
      const text = await extractDocxText(file);
      applyImportedText(file.name, text, 'DOCX');
    } catch (error) {
      console.error(error);
      alert('No he pogut llegir el DOCX en aquest navegador. Prova de convertir-lo a TXT o obrir-lo amb un navegador actualitzat.');
    }
    return;
  }
  if (lowerName.endsWith('.pdf')) {
    try {
      const text = await extractPdfText(file);
      applyImportedText(file.name, text, 'PDF');
    } catch (error) {
      console.error(error);
      alert('No he pogut extreure text útil del PDF. Alguns PDF són imatges escanejades i necessiten OCR.');
    }
    return;
  }
  const text = await file.text();
  applyImportedText(file.name, text, 'TXT');
}

function extractJsonSaItems(parsed) {
  const pools = [];
  if (Array.isArray(parsed)) pools.push(parsed);
  if (parsed && typeof parsed === 'object') {
    ['recursos','resources','situacions','situacions_aprenentatge','items','plantilles','templates'].forEach(key => {
      if (Array.isArray(parsed[key])) pools.push(parsed[key]);
    });
    if (isDocentKitSaJson(parsed)) pools.push([parsed]);
  }
  const flat = pools.flat().filter(isDocentKitSaJson);
  const seen = new Set();
  return flat.filter(item => {
    const key = item.id || item.titol || item.title || JSON.stringify(item).slice(0, 120);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function normalizeImportedResource(item) {
  return { ...getFormData(), ...(item || {}), id: item?.id || (crypto.randomUUID ? crypto.randomUUID() : String(Date.now())), createdAt: item?.createdAt || new Date().toISOString(), tags: Array.isArray(item?.tags) ? item.tags : [] };
}

function extractJsonFormResources(parsed) {
  const pools = [];
  if (Array.isArray(parsed)) pools.push(parsed);
  if (parsed && typeof parsed === 'object') {
    ['resources','recursos','items','library','biblioteca'].forEach(key => {
      if (Array.isArray(parsed[key])) pools.push(parsed[key]);
    });
  }
  return pools.flat().filter(item => item && typeof item === 'object' && (item.title || item.titol) && (item.challenge || item.repte || item.type || item.tipus));
}

function formResourceToDocentKitJson(item) {
  if (!item) return {};
  if (isDocentKitSaJson(item) && item.titol) return item;
  const isSa = String(item.type || '').toLowerCase().includes('situació') || String(item.type || '').toLowerCase().includes('situacio');
  if (!isSa) return { ...item, schema: 'docentkit.resource.v1' };
  return {
    schema: 'docentkit.sa.v1',
    tipus: 'situacio_aprenentatge',
    idioma: 'ca',
    normativa: 'LOMLOE',
    titol: item.title || item.titol || '',
    curs: item.level || item.curs || '',
    materia: item.subject || item.materia || '',
    durada: { total: item.duration || '' },
    repte: item.challenge || '',
    sabers_continguts: item.knowledge ? item.knowledge.split(/\n+/).filter(Boolean) : [],
    competencies: item.competences || '',
    sequencia: item.sequence || '',
    mesures_suports: item.inclusion || '',
    avaluacio: item.assessment || '',
    tags: item.tags || []
  };
}


// ===== v1.8: importació JSON DocentKit SA robusta =====
function isDocentKitSaJson(item) {
  if (!item || typeof item !== 'object') return false;
  const normalize = value => String(value || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const schema = normalize(item.schema);
  const tipus = normalize(item.tipus || item.type);
  const hasSaFields = !!(item.titol || item.title) && !!(item.repte || item.context || item.producte_final || item.sabers || item.sequencia_activitats || item.rubrica);
  return schema.includes('docentkit.sa') || tipus.includes('situacio_aprenentatge') || tipus.includes('situacio') || hasSaFields;
}

function applyImportedJson(filename, item, options = {}) {
  const mapped = jsonSaToFormResource(item);

  setModule('sa');
  currentModule = MODULES.find(m => m.id === 'sa') || currentModule;

  resources = [mapped, ...resources.filter(r => r.id !== mapped.id && r.title !== mapped.title)];
  persistResources();
  renderLibrary();

  const fieldMap = {
    title: mapped.title,
    level: mapped.level,
    subject: mapped.subject,
    duration: mapped.duration,
    type: mapped.type,
    challenge: mapped.challenge,
    knowledge: mapped.knowledge,
    competences: mapped.competences,
    sequence: mapped.sequence,
    inclusion: mapped.inclusion,
    assessment: mapped.assessment,
    tags: (mapped.tags || []).join(', ')
  };
  Object.entries(fieldMap).forEach(([key, value]) => {
    if (els[key]) els[key].value = value || '';
  });

  const liveData = getFormData();
  liveData.id = mapped.id;
  liveData.createdAt = mapped.createdAt;
  renderReport(liveData);
  if (typeof renderAiValidation === 'function' && typeof validateSaQuality === 'function') {
    renderAiValidation(validateSaQuality(liveData));
  }

  if (els.importStatus) {
    const prefix = options.fromPack ? `Paquet JSON DocentKit importat: ${filename}. ${options.count} SA carregades; oberta la primera.` : `JSON DocentKit importat: ${filename}.`;
    els.importStatus.textContent = `${prefix} S'ha carregat al formulari: ${liveData.title} · ${liveData.level} · ${liveData.subject || 'sense matèria'}.`;
  }

  const formCard = document.querySelector('.form-card');
  if (formCard) formCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
}


function jsonSaToFormResource(item) {
  const title = item.titol || item.title || 'Recurs sense títol';
  const level = normalizeJsonCourse(item.curs || item.level || item.etapa_nivell || '');
  const subject = cleanJsonText(item.materia || item.subject || item.ambit || '');
  const duration = formatJsonDuration(item.durada || item.duration || item.temporalitzacio || '');
  const challenge = joinNonEmpty([
    item.subtitol && `Subtítol: ${item.subtitol}`,
    item.context && `Context: ${item.context}`,
    item.justificacio && `Justificació: ${item.justificacio}`,
    item.repte && `Repte: ${item.repte}`,
    item.producte_final && `Producte final: ${item.producte_final}`
  ]);
  const competences = joinNonEmpty([
    formatJsonArray('Competències clau', item.competencies_clau),
    formatJsonArray('Competències específiques', item.competencies_especifiques || item.competencies),
    formatJsonArray('Criteris d’avaluació', item.criteris_avaluacio),
    formatJsonArray('Objectius d’aprenentatge', item.objectius_aprenentatge || item.objectius)
  ]);
  const knowledge = formatJsonKnowledge(item.sabers || item.sabers_continguts || item.coneixements);
  const sequence = joinNonEmpty([
    formatJsonMethodology(item.metodologia),
    formatJsonArray('Seqüència d’activitats', item.sequencia_activitats || item.sequencia || item.activitats)
  ]);
  const inclusion = formatJsonInclusion(item.mesures_i_suports || item.mesures_suports || item.inclusio || item.adaptacions);
  const assessment = joinNonEmpty([
    formatJsonAssessment(item.avaluacio),
    formatJsonVectors(item.vectors),
    formatJsonRubric(item.rubrica)
  ]);
  return {
    ...getFormData(),
    id: item.id || (crypto.randomUUID ? crypto.randomUUID() : String(Date.now())),
    createdAt: item.createdAt || item.metadades?.data_creacio || new Date().toISOString(),
    type: 'Situació d’aprenentatge',
    title,
    level: level || '1r ESO',
    subject,
    duration,
    challenge,
    knowledge,
    competences,
    sequence,
    inclusion,
    assessment,
    tags: Array.isArray(item.tags) ? item.tags : ['json', item.schema || 'docentkit.sa.v1'].filter(Boolean)
  };
}

function normalizeJsonCourse(value) {
  const text = String(value || '').toLowerCase().replace(/[’‘]/g, "'");
  if (/1\s*r|primer/.test(text)) return '1r ESO';
  if (/2\s*n|segon/.test(text)) return '2n ESO';
  if (/3\s*r|tercer/.test(text)) return '3r ESO';
  if (/4\s*t|quart/.test(text)) return '4t ESO';
  return cleanJsonText(value).replace(/d['’]ESO/gi, 'ESO').replace(/\s+/g, ' ').trim();
}

function formatJsonDuration(value) {
  if (!value) return '';
  if (typeof value === 'string') return value;
  if (typeof value === 'object') {
    return joinNonEmpty([
      value.total,
      value.sessions ? `${value.sessions} sessions` : '',
      value.distribucio
    ], ' · ');
  }
  return String(value);
}

function cleanJsonText(value) {
  return String(value || '').replace(/\s+/g, ' ').trim();
}

function formatJsonArray(title, value) {
  if (!value) return '';
  const arr = Array.isArray(value) ? value : [value];
  const lines = arr.map(formatJsonItem).filter(Boolean);
  return lines.length ? `${title}:\n${lines.join('\n')}` : '';
}

function formatJsonItem(item) {
  if (item == null) return '';
  if (typeof item === 'string') return `- ${item}`;
  if (typeof item !== 'object') return `- ${String(item)}`;
  const code = item.codi || item.id || item.criteri_lomloe || item.competencia || '';
  const title = item.titol || item.fase || item.item || item.objectiu || '';
  const desc = item.descripcio || item.activitats || item.text || '';
  const dur = item.durada ? ` (${item.durada})` : '';
  const rel = Array.isArray(item.criteris_relacionats) && item.criteris_relacionats.length ? ` [criteris: ${item.criteris_relacionats.join(', ')}]` : '';
  if (Array.isArray(item.activitats)) {
    const acts = item.activitats.map(v => `  - ${v}`).join('\n');
    const ev = Array.isArray(item.evidencies) && item.evidencies.length ? `\n  Evidències: ${item.evidencies.join('; ')}` : '';
    return `- ${[item.fase, item.titol].filter(Boolean).join(': ')}${dur}\n${acts}${ev}`;
  }
  return `- ${[code, title, desc].filter(Boolean).join(' - ')}${dur}${rel}`;
}

function formatJsonKnowledge(value) {
  if (!value) return '';
  if (Array.isArray(value)) return `Sabers / continguts:\n${value.map(v => `- ${v}`).join('\n')}`;
  if (typeof value === 'object') {
    return joinNonEmpty([
      value.blocs ? `Blocs de sabers:\n${asBulletList(value.blocs)}` : '',
      value.continguts ? `Sabers / continguts:\n${asBulletList(value.continguts)}` : ''
    ]);
  }
  return String(value);
}

function formatJsonMethodology(value) {
  if (!value) return '';
  if (typeof value === 'string') return `Metodologia: ${value}`;
  return joinNonEmpty([
    value.enfocament && `Metodologia: ${value.enfocament}`,
    value.organitzacio_aula && `Organització de l’aula: ${value.organitzacio_aula}`,
    value.rols && `Rols:\n${asBulletList(value.rols)}`,
    value.recursos && `Recursos:\n${asBulletList(value.recursos)}`
  ]);
}

function formatJsonInclusion(value) {
  if (!value) return '';
  if (Array.isArray(value)) return `Mesures i suports:\n${asBulletList(value)}`;
  if (typeof value === 'string') return value;
  return joinNonEmpty([
    value.universals && `Mesures universals:\n${asBulletList(value.universals)}`,
    value.tdah && `Adaptacions TDAH:\n${asBulletList(value.tdah)}`,
    value.tea && `Adaptacions TEA:\n${asBulletList(value.tea)}`,
    value.dislexia && `Adaptacions dislèxia:\n${asBulletList(value.dislexia)}`,
    value.dislèxia && `Adaptacions dislèxia:\n${asBulletList(value.dislèxia)}`,
    value.tdl && `Adaptacions TDL:\n${asBulletList(value.tdl)}`
  ]);
}

function formatJsonAssessment(value) {
  if (!value) return '';
  if (typeof value === 'string') return value;
  return joinNonEmpty([
    value.evidencies && `Evidències:\n${asBulletList(value.evidencies)}`,
    value.instruments && `Instruments:\n${asBulletList(value.instruments)}`,
    value.retorn_i_millora && `Retorn i millora:\n${asBulletList(value.retorn_i_millora)}`
  ]);
}

function formatJsonVectors(value) {
  if (!value) return '';
  if (Array.isArray(value)) return `Vectors:\n${asBulletList(value)}`;
  if (typeof value === 'string') return `Vectors:\n${value}`;
  const labels = {
    aprenentatges_competencials: 'Aprenentatges competencials',
    perspectiva_genere: 'Perspectiva de gènere',
    universalitat_curriculum: 'Universalitat del currículum',
    qualitat_llengues: 'Qualitat de les llengües',
    ciutadania_democratica_consciencia_global: 'Ciutadania democràtica i consciència global',
    benestar_emocional: 'Benestar emocional'
  };
  const lines = Object.entries(value).map(([k, v]) => `- ${(labels[k] || k)}: ${v}`);
  return lines.length ? `Vectors:\n${lines.join('\n')}` : '';
}

function formatJsonRubric(value) {
  if (!value) return '';
  if (typeof value === 'string') return `Rúbrica:\n${value}`;
  const arr = Array.isArray(value) ? value : [value];
  const blocks = arr.map(row => {
    if (!row || typeof row !== 'object') return String(row || '');
    return joinNonEmpty([
      `CRITERI LOMLOE: ${[row.criteri_lomloe, row.competencia].filter(Boolean).join(' / ')}`,
      `ÍTEM: ${row.item || ''}`,
      `NA: ${row.NA || row.na || ''}`,
      `AS: ${row.AS || row.as || ''}`,
      `AN: ${row.AN || row.an || ''}`,
      `AE: ${row.AE || row.ae || ''}`
    ]);
  }).filter(Boolean);
  return blocks.length ? `Rúbrica:\n${blocks.join('\n\n')}` : '';
}

function asBulletList(value) {
  const arr = Array.isArray(value) ? value : [value];
  return arr.map(v => `- ${typeof v === 'object' ? formatJsonItem(v).replace(/^[-]\s*/, '') : v}`).join('\n');
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


function loadSettings() {
  try { return JSON.parse(localStorage.getItem(SETTINGS_KEY)) || {}; } catch { return {}; }
}
function saveSettings(partial) {
  const next = { ...loadSettings(), ...partial };
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(next));
}
function updateAiStatus() {
  if (!els.aiModeStatus || !els.aiProvider) return;
  const provider = els.aiProvider.value;
  const isGoogle = provider === 'google';
  els.aiModeStatus.textContent = isGoogle ? 'Mode Gemini · API key' : 'Mode local · sense API';
  els.aiModeStatus.classList.toggle('google-mode', isGoogle);
  els.aiModeStatus.classList.toggle('local-mode', !isGoogle);
  els.aiModeStatus.style.background = isGoogle ? '#fff7ed' : '#ecfdf3';
  els.aiModeStatus.style.color = isGoogle ? '#9a3412' : '#155b32';
}

function getElValue(node, fallback = '') {
  return node && typeof node.value === 'string' ? node.value.trim() : fallback;
}

function getAiWizardData() {
  return {
    course: getElValue(els.aiCourse, els.level.value || '3r ESO'),
    subject: getElValue(els.aiSubject, els.subject.value || 'Tecnologia i Digitalització'),
    topic: getElValue(els.aiTopic, els.challenge.value || ''),
    product: getElValue(els.aiProduct, 'producte final competencial'),
    duration: getElValue(els.aiDuration, els.duration.value || '8 sessions'),
    tools: getElValue(els.aiTools, ''),
    knowledge: getElValue(els.aiKnowledge, els.knowledge.value || ''),
    criteria: getElValue(els.aiCriteria, els.competences.value || ''),
    inclusion: [
      els.aiInclTdah?.checked ? 'TDAH' : '',
      els.aiInclTea?.checked ? 'TEA' : '',
      els.aiInclDislexia?.checked ? 'dislèxia' : '',
      els.aiInclTdl?.checked ? 'TDL' : ''
    ].filter(Boolean)
  };
}

function saveAiWizardSettings() {
  saveSettings({ aiWizard: getAiWizardData() });
}

function loadAiWizardSettings() {
  const data = loadSettings().aiWizard || {};
  if (els.aiCourse && data.course) els.aiCourse.value = data.course;
  if (els.aiSubject && data.subject) els.aiSubject.value = data.subject;
  if (els.aiTopic && data.topic) els.aiTopic.value = data.topic;
  if (els.aiProduct && data.product) els.aiProduct.value = data.product;
  if (els.aiDuration && data.duration) els.aiDuration.value = data.duration;
  if (els.aiTools && data.tools) els.aiTools.value = data.tools;
  if (els.aiKnowledge && data.knowledge) els.aiKnowledge.value = data.knowledge;
  if (els.aiCriteria && data.criteria) els.aiCriteria.value = data.criteria;
  if (els.aiInclTdah && data.inclusion) els.aiInclTdah.checked = data.inclusion.includes('TDAH');
  if (els.aiInclTea && data.inclusion) els.aiInclTea.checked = data.inclusion.includes('TEA');
  if (els.aiInclDislexia && data.inclusion) els.aiInclDislexia.checked = data.inclusion.includes('dislèxia');
  if (els.aiInclTdl && data.inclusion) els.aiInclTdl.checked = data.inclusion.includes('TDL');
}

function buildGuidedInstructionText() {
  const w = getAiWizardData();
  const inclusion = w.inclusion.length ? w.inclusion.join(', ') : 'mesures universals i adaptacions inclusives';
  return `Vull una situació d’aprenentatge completa per a ${w.course} de ${w.subject}.

Tema o repte:
${w.topic || 'Defineix un repte proper, significatiu i competencial per a l’alumnat.'}

Producte final:
${w.product || 'Proposta, producte o evidència final vinculada al repte.'}

Durada:
${w.duration || '8 sessions'}.

Materials, eines i recursos:
${w.tools || 'Materials de l’aula, eines digitals i recursos adaptats al context.'}

Sabers o continguts clau:
${w.knowledge || 'Selecciona sabers conceptuals, procedimentals i actitudinals coherents amb el repte.'}

Competències específiques i criteris LOMLOE:
${w.criteria || 'Selecciona competències i criteris adequats al curs i a la matèria, amb numeració LOMLOE.'}

Condicions d’avaluació:
Vull una rúbrica completa en format quadre amb les columnes Criteri LOMLOE, Ítem d’avaluació, NA, AS, AN i AE. Inclou evidències, instruments, autoavaluació, coavaluació, retorn i millora.

Inclusió:
Inclou mesures universals i adaptacions específiques per a ${inclusion}.

Format de sortida:
Genera tota la programació de la SA amb llenguatge docent, complet i directament aprofitable. No deixis apartats buits.`;
}

function fillAiContextFromWizard() {
  saveAiWizardSettings();
  els.aiContext.value = buildGuidedInstructionText();
  els.aiOutput.textContent = 'He construït unes instruccions completes. Ara pots prémer “Genera SA completa assistida”.';
}

function buildAiPrompt() {
  const data = getFormData();
  const guided = buildGuidedInstructionText();
  const manualContext = els.aiContext.value.trim();
  const context = manualContext || guided;
  return `Ets un assistent docent expert en currículum LOMLOE a Catalunya. Escriu en català formal, clar i útil per a docents d’ESO.

Objectiu: generar una situació d’aprenentatge completa, coherent i importable per DocentKit. No facis una resposta breu. Desenvolupa tots els apartats amb detall suficient per portar-la a l’aula.

Dades del formulari actual:
Tipus: ${data.type}
Títol provisional: ${data.title}
Nivell: ${data.level}
Matèria: ${data.subject || 'pendent'}
Durada: ${data.duration || 'pendent'}

Instruccions guiades de l’usuari:
${context}

Requisits obligatoris:
- Inclou context, justificació, repte i producte final.
- Formula objectius d’aprenentatge amb CAPACITAT + SABER + FINALITAT.
- Inclou competències específiques i criteris d’avaluació amb numeració LOMLOE quan sigui possible.
- Inclou sabers, metodologia, organització, recursos, mesures i suports.
- Organitza les activitats en inicials, desenvolupament, estructuració i aplicació.
- Inclou evidències, instruments, retorn i millora.
- Inclou els sis vectors del currículum.
- Inclou adaptacions per TDAH, TEA, dislèxia i TDL si l’usuari les ha demanat.
- La rúbrica ha de tenir com a mínim 5 files i aquest format: criteri LOMLOE | ítem d’avaluació | NA | AS | AN | AE.

Respon només amb aquests apartats i etiquetes exactes, perquè l’app ho pugui interpretar:
TÍTOL
CURS
MATÈRIA
DURADA
CONTEXT
REPTE
JUSTIFICACIÓ
PRODUCTE FINAL
COMPETÈNCIES ESPECÍFIQUES
CRITERIS D’AVALUACIÓ
OBJECTIUS D’APRENENTATGE
BLOCS DE SABERS
SABERS CONCRETS
METODOLOGIA
ORGANITZACIÓ DE L’AULA
RECURSOS
INICIALS
DESENVOLUPAMENT
ESTRUCTURACIÓ
APLICACIÓ
MESURES I SUPORTS
EVIDÈNCIES
INSTRUMENTS
RETORN I MILLORA
VECTORS
RÚBRICA`;
}

function buildLocalAIDraft() {
  const data = getFormData();
  const w = getAiWizardData();
  const context = els.aiContext.value.trim() || w.topic || data.challenge || 'necessitat propera de l’alumnat';
  const subject = w.subject || data.subject || 'Matèria o àmbit';
  const level = w.course || data.level || 'ESO';
  const title = data.title && data.title !== 'Recurs sense títol' ? data.title : `Situació d’aprenentatge sobre ${subject}`;
  const product = w.product || (isSituation(data) ? 'producte final competencial amb evidències, presentació i reflexió' : 'producte o evidència final vinculada al repte');
  return `TÍTOL\n${title}\n\nCURS\n${level}\n\nMATÈRIA\n${subject}\n\nDURADA\n${w.duration || data.duration || '8 sessions'}\n\nCONTEXT\n${context}\n\nREPTE\nCom podem donar resposta a aquesta necessitat aplicant sabers de ${subject} i comunicant una proposta justificada?\n\nJUSTIFICACIÓ\nLa proposta parteix d’un context proper i permet treballar aprenentatges funcionals, presa de decisions, cooperació i comunicació d’evidències.\n\nPRODUCTE FINAL\n${product}.\n\nCOMPETÈNCIES ESPECÍFIQUES\n${w.criteria || 'CE1, CE2, CE3. Ajusta-les segons el currículum de la matèria.'}\n\nCRITERIS D’AVALUACIÓ\n${w.criteria || '1.1, 2.1, 3.1. Revisa la numeració LOMLOE de la matèria i el curs.'}\n\nBLOCS DE SABERS\n${w.knowledge || 'Sabers conceptuals, procedimentals i actitudinals vinculats al repte.'}\n\nSABERS CONCRETS\n- Comprensió del context i formulació del problema.\n- Recerca i selecció d’informació.\n- Aplicació de procediments propis de la matèria.
- Ús de recursos i eines: ${w.tools || 'materials i eines adequades al repte.'}\n- Comunicació clara del procés i dels resultats.\n\nMETODOLOGIA\nAprenentatge basat en reptes, treball cooperatiu, bastides, revisió entre iguals i feedback formatiu.\n\nINICIALS\nActivació de coneixements previs, presentació del repte i construcció compartida dels criteris d’èxit.\n\nDESENVOLUPAMENT\nRecerca, pràctica guiada, resolució de tasques parcials i revisió del procés.\n\nESTRUCTURACIÓ\nSíntesi dels aprenentatges, organització d’evidències i preparació del producte final.\n\nAPLICACIÓ\nPresentació del producte final, transferència a un context proper i reflexió individual.\n\nMESURES I SUPORTS\nDisseny universal: instruccions fragmentades, exemples, checklist, rols i opcions de resposta. TDAH: temporització i tasques curtes. TEA: anticipació i estructura visual. Dislèxia: suport oral i reducció de càrrega lectora. TDL: vocabulari previ i frases model.\n\nEVIDÈNCIES\nProcés de treball, producte final, presentació i reflexió final.\n\nINSTRUMENTS\nRúbrica NA/AS/AN/AE, llista de control, coavaluació i autoavaluació.\n\nRETORN I MILLORA\nFeedback durant el procés, revisió entre iguals i millora abans del lliurament.\n\nRÚBRICA\n1.1 | Comprensió del repte | NA: identifica parcialment | AS: identifica els elements bàsics | AN: analitza i justifica | AE: analitza amb profunditat i transfereix\n2.1 | Aplicació de sabers | NA: aplica amb moltes ajudes | AS: aplica procediments bàsics | AN: aplica de manera coherent | AE: aplica amb autonomia i criteri\n3.1 | Comunicació i reflexió | NA: comunica amb poca claredat | AS: comunica la idea principal | AN: comunica amb evidències | AE: comunica amb rigor i proposa millores`; 
}

function getSelectedGeminiModel() {
  return (els.aiModel && els.aiModel.value) || loadSettings().googleModel || 'gemini-2.5-flash';
}

function formatGeminiError(status, detail) {
  let message = detail || '';
  try {
    const parsed = JSON.parse(detail);
    message = parsed?.error?.message || detail;
  } catch {}
  const tips = [];
  if (status === 400) tips.push('El model o el format de la petició no és acceptat. Prova gemini-2.5-flash.');
  if (status === 401 || status === 403) tips.push('La clau pot ser incorrecta, no tenir activada la Gemini API / Generative Language API, tenir restriccions de domini massa estrictes o no permetre aquest model.');
  if (status === 404) tips.push('El model seleccionat no està disponible per aquesta clau o endpoint. Prova gemini-2.5-flash.');
  if (status === 429) tips.push('S’ha superat el límit de quota o peticions. Espera una estona o revisa quota/facturació.');
  if (status >= 500) tips.push('Error temporal del servei de Google. Torna-ho a provar més tard.');
  return `Error API ${status}${message ? `: ${message}` : ''}${tips.length ? `\n\nPossibles causes:\n- ${tips.join('\n- ')}` : ''}`;
}

async function callGeminiText(prompt) {
  const key = els.aiKey.value.trim();
  if (!key) throw new Error('No hi ha API key configurada.');
  const model = getSelectedGeminiModel();
  saveSettings({ googleApiKey: key, googleModel: model });
  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent?key=${encodeURIComponent(key)}`;
  let response;
  try {
    response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { temperature: 0.5, maxOutputTokens: 8192 }
      })
    });
  } catch (networkError) {
    throw new Error('No s’ha pogut contactar amb Google. Revisa connexió, bloquejadors, CORS/restriccions de domini o si estàs obrint la PWA des de file:// en lloc d’https://.');
  }
  const detail = await response.text();
  if (!response.ok) throw new Error(formatGeminiError(response.status, detail));
  let json;
  try { json = JSON.parse(detail); } catch { throw new Error('La resposta de Gemini no és JSON vàlid.'); }
  const text = json?.candidates?.[0]?.content?.parts?.map(p => p.text || '').join('\n').trim();
  if (!text) throw new Error('Gemini ha respost, però no ha retornat text. Pot ser un bloqueig de seguretat o una resposta buida.');
  return text;
}

async function testGeminiConnection() {
  if (els.aiProvider.value !== 'google') {
    els.aiOutput.textContent = 'El mode seleccionat és local. Tria “Mode Gemini · usa la meva API key” per provar la connexió.';
    return;
  }
  els.aiOutput.textContent = `Provant connexió amb ${getSelectedGeminiModel()}...`;
  try {
    const text = await callGeminiText('Respon només amb aquesta frase en català: Connexió Gemini correcta.');
    els.aiOutput.textContent = `Connexió correcta amb ${getSelectedGeminiModel()}.\n\nResposta:\n${text}`;
  } catch (error) {
    console.error(error);
    els.aiOutput.textContent = `No s’ha pogut connectar amb Gemini.\n\n${error.message}`;
  }
}

async function generateAiDraft() {
  const provider = els.aiProvider.value;
  els.aiOutput.textContent = 'Generant esborrany...';
  if (provider !== 'google') {
    els.aiOutput.textContent = buildLocalAIDraft();
    return;
  }
  if (!els.aiKey.value.trim()) {
    els.aiOutput.textContent = 'No hi ha API key. Genero un esborrany local sense enviar dades fora del navegador.\n\n' + buildLocalAIDraft();
    return;
  }
  try {
    const text = await callGeminiText(buildAiPrompt());
    els.aiOutput.textContent = text;
  } catch (error) {
    console.error(error);
    els.aiOutput.textContent = `No he pogut obtenir resposta de la API.\n\n${error.message}\n\nMantinc un esborrany local perquè puguis continuar.\n\n` + buildLocalAIDraft();
  }
}

function applyAiDraftToForm() {
  const text = els.aiOutput.textContent.trim();
  if (!text || text === 'Encara no hi ha cap esborrany.') return alert('Primer genera o enganxa un esborrany.');
  applyImportedText('esborrany-ia.txt', text, els.aiProvider.value === 'google' ? 'IA Google' : 'IA local');
  renderAiValidation(validateSaQuality(getFormData()));
}

function validateSaQuality(data) {
  const competenceParts = extractCompetenceParts(data.competences || '');
  const criteriaCodes = competenceParts.criteriaCodes || [];
  const knowledgeText = (data.knowledge || '').trim();
  const inclusionText = (data.inclusion || '').trim();
  const assessmentText = (data.assessment || '').trim();
  const seqText = (data.sequence || '').trim();
  const rubricRows = buildRubricRows(data, criteriaCodes);
  const checks = [
    { id: 'knowledge', label: 'Sabers', ok: knowledgeText.length > 140 && /saber|contingut|programaci|proc[eé]s|recerca|disseny|compet[eè]ncia|bloc/i.test(knowledgeText), reason: 'Falten blocs de sabers o sabers concrets prou desenvolupats.' },
    { id: 'criteria', label: 'Criteris LOMLOE', ok: criteriaCodes.length >= 2 || /criteri|avaluaci[oó]|CE\d/i.test(data.competences || ''), reason: 'Falten criteris numerats o competències específiques vinculades.' },
    { id: 'sequence', label: 'Seqüència', ok: /inicial|desenvolupament|estructuraci[oó]|aplicaci[oó]/i.test(seqText) && seqText.length > 220, reason: 'La seqüència ha d’incloure inicials, desenvolupament, estructuració i aplicació.' },
    { id: 'inclusion', label: 'Adaptacions', ok: inclusionText.length > 220 && /TDAH/i.test(inclusionText) && /TEA/i.test(inclusionText) && /disl[eè]xia/i.test(inclusionText) && /TDL/i.test(inclusionText), reason: 'Falten adaptacions concretes per TDAH, TEA, dislèxia i TDL.' },
    { id: 'assessment', label: 'Avaluació', ok: /evid[eè]nc|instrument|retorn|millora/i.test(assessmentText), reason: 'Falten evidències, instruments o retorn i millora.' },
    { id: 'rubric', label: 'Rúbrica', ok: rubricRows.length >= 5 && /NA/i.test(assessmentText) && /AS/i.test(assessmentText) && /AN/i.test(assessmentText) && /AE/i.test(assessmentText), reason: 'La rúbrica ha de tenir almenys 5 ítems amb NA, AS, AN i AE.' }
  ];
  const missing = checks.filter(c => !c.ok);
  return { checks, missing, score: checks.length - missing.length, total: checks.length };
}

function renderAiValidation(result) {
  if (!els.aiValidationPanel) return;
  const chips = result.checks.map(c => `<span class="validation-chip ${c.ok ? 'ok' : 'missing'}">${c.ok ? '✓' : '!' } ${escapeHtml(c.label)}</span>`).join('');
  if (!result.missing.length) {
    els.aiValidationPanel.innerHTML = `<p class="ok">Validació correcta: ${result.score}/${result.total} blocs essencials detectats.</p><div class="validation-chip-row">${chips}</div>`;
    return;
  }
  els.aiValidationPanel.innerHTML = `<p class="warn">Validació parcial: ${result.score}/${result.total} blocs complets.</p><div class="validation-chip-row">${chips}</div><ul>${result.missing.map(m => `<li><span class="missing">${escapeHtml(m.label)}:</span> ${escapeHtml(m.reason)}</li>`).join('')}</ul>`;
}


function validateSaPedagogy(data) {
  const challengeParts = extractSaParts(data.challenge || '');
  const competenceParts = extractCompetenceParts(data.competences || '');
  const sequenceParts = extractSequenceParts(data.sequence || '');
  const assessmentParts = extractAssessmentParts(data.assessment || '');
  const inclusionParts = extractInclusionParts(data.inclusion || '');
  const criteriaCodes = competenceParts.criteriaCodes || [];
  const rubricRows = buildRubricRows(data, criteriaCodes);
  const challengeText = [challengeParts.context, challengeParts.repte, challengeParts.justificacio, challengeParts.producte, data.challenge].join('\n');
  const productText = challengeParts.producte || '';
  const sequenceText = data.sequence || '';
  const assessmentText = data.assessment || '';
  const knowledgeText = data.knowledge || '';
  const inclusionText = data.inclusion || '';
  const lowerAll = [challengeText, productText, sequenceText, assessmentText, knowledgeText].join('\n').toLowerCase();
  const activityMoments = ['inicial', 'desenvolupament', 'estructuraci', 'aplicaci'].filter(token => lowerAll.includes(token)).length;
  const hasEvidence = /evid[eè]nc|producte|prototip|dossier|mem[oò]ria|presentaci[oó]|fitxa|registre|portafoli|codi|pl[aà]nol|croquis/i.test(assessmentText + '\n' + sequenceText);
  const hasReturn = /retorn|feedback|millora|revisi[oó]|coavaluaci[oó]|autoavaluaci[oó]|prova|iteraci[oó]|depuraci[oó]/i.test(assessmentText + '\n' + sequenceText);
  const hasWorkshopSafety = /seguretat|eina|taller|material|risc|norma|epi|electric|impressora|arduino|circuit|tall|sold/i.test(inclusionText + '\n' + knowledgeText + '\n' + sequenceText + '\n' + assessmentText);
  const hasRealContext = (challengeParts.context || '').length > 120 && /centre|aula|barri|comunitat|entorn|necessitat|problema|ODS|sostenibil/i.test(challengeText);
  const hasClearProduct = productText.length > 50 && /prototip|producte|maqueta|model|app|web|circuit|robot|mem[oò]ria|presentaci[oó]|informe|pe[cç]a|sistema/i.test(productText);
  const hasCriteriaAlignment = criteriaCodes.length >= 2 && rubricRows.length >= Math.min(3, criteriaCodes.length);
  const hasRubricLevels = rubricRows.length >= 3 && rubricRows.every(row => row.NA && row.AS && row.AN && row.AE);
  const hasInclusionQuality = /TDAH/i.test(inclusionText) && /TEA/i.test(inclusionText) && /disl[eè]xia/i.test(inclusionText) && /TDL/i.test(inclusionText) && /instruccions|visual|temps|anticipaci|glossari|rol|suport/i.test(inclusionText);
  const checks = [
    { id: 'repte', label: 'Repte contextualitzat', ok: hasRealContext && /repte|pregunta|com podem|problema|necessitat/i.test(challengeText), advice: 'Concreta un context proper i formula el repte com una pregunta o necessitat real.' },
    { id: 'producte', label: 'Producte final observable', ok: hasClearProduct, advice: 'Defineix què lliurarà o mostrarà l’alumnat: prototip, memòria, codi, model, presentació, etc.' },
    { id: 'alignment', label: 'Alineació criteris-rúbrica', ok: hasCriteriaAlignment && hasRubricLevels, advice: 'Relaciona cada fila de rúbrica amb criteris LOMLOE i completa NA, AS, AN i AE.' },
    { id: 'sequence', label: 'Seqüència didàctica completa', ok: activityMoments >= 4 && sequenceText.length > 300, advice: 'Inclou activitats inicials, desenvolupament, estructuració i aplicació amb activitats concretes.' },
    { id: 'assessment', label: 'Evidències i retorn formatiu', ok: hasEvidence && hasReturn, advice: 'Afegeix evidències observables, instruments i moments de feedback/millora.' },
    { id: 'inclusion', label: 'Inclusió aplicable', ok: hasInclusionQuality, advice: 'Concreta mesures universals i adaptacions per TDAH, TEA, dislèxia i TDL sense rebaixar objectius.' },
    { id: 'workshop', label: 'Seguretat i organització de taller', ok: hasWorkshopSafety, advice: 'En Tecnologia convé explicitar eines, materials, normes de seguretat, riscos i organització de l’espai.' },
    { id: 'duration', label: 'Durada realista', ok: /\d+\s*(h|hores|sessions)/i.test(data.duration || '') || /\d+\s*(h|hores|sessions)/i.test(sequenceText), advice: 'Indica durada global i, si és possible, distribució per fases o sessions.' }
  ];
  const passed = checks.filter(c => c.ok).length;
  const score = Math.round((passed / checks.length) * 100);
  let level = 'Cal revisar';
  if (score >= 85) level = 'Molt sòlida';
  else if (score >= 65) level = 'Bona base';
  else if (score >= 45) level = 'Parcial';
  const recommendations = checks.filter(c => !c.ok).map(c => c.advice);
  return { checks, score, level, recommendations };
}

function renderPedagogicAudit(result) {
  if (!els.aiValidationPanel) return;
  const chips = result.checks.map(c => `<span class="validation-chip ${c.ok ? 'ok' : 'missing'}">${c.ok ? '✓' : '!' } ${escapeHtml(c.label)}</span>`).join('');
  const recs = result.recommendations.length ? `<h4>Recomanacions prioritàries</h4><ol>${result.recommendations.map(r => `<li>${escapeHtml(r)}</li>`).join('')}</ol>` : '<p class="ok">La SA és coherent i està prou alineada per generar informe i PDF.</p>';
  els.aiValidationPanel.innerHTML = `<p class="${result.score >= 65 ? 'ok' : 'warn'}">Revisió pedagògica: ${result.score}/100 · ${escapeHtml(result.level)}</p><div class="validation-chip-row">${chips}</div>${recs}`;
}

function buildPartialPrompt(kind) {
  const data = getFormData();
  const w = getAiWizardData();
  const validation = validateSaQuality(data);
  const missingIds = validation.missing.map(m => m.id);
  const context = els.aiContext.value.trim() || buildGuidedInstructionText();
  const common = `Ets un assistent docent expert en situacions d’aprenentatge LOMLOE a Catalunya. Escriu en català i dona contingut directament aprofitable.

Context de la SA:
Títol: ${data.title}
Curs: ${w.course || data.level}
Matèria: ${w.subject || data.subject}
Repte o tema: ${w.topic || data.challenge}
Producte final: ${w.product || 'producte final competencial'}
Criteris o competències coneguts: ${w.criteria || data.competences || 'pendent'}
Instruccions de l’usuari:
${context}`;

  if (kind === 'knowledge') return `${common}

Genera només els sabers de la SA. Respon amb aquestes etiquetes exactes:
BLOCS DE SABERS
SABERS CONCRETS

Els sabers han de ser concrets, curriculars, vinculats al repte i separats en llista.`;
  if (kind === 'inclusion') return `${common}

Genera només la part d’inclusió. Respon amb aquestes etiquetes exactes:
MESURES I SUPORTS
ADAPTACIONS TDAH
ADAPTACIONS TEA
ADAPTACIONS DISLÈXIA
ADAPTACIONS TDL

Les adaptacions han de ser concretes, aplicables a l’aula i no han de rebaixar els objectius essencials.`;
  if (kind === 'rubric') return `${common}

Genera només una rúbrica completa en format textual però estructurat. Respon amb aquesta etiqueta exacta:
RÚBRICA

Cada fila ha de seguir aquest format:
Criteri LOMLOE | Ítem d’avaluació | NA | AS | AN | AE

Inclou almenys 6 files i usa criteris numerats quan sigui possible.`;
  const needKnowledge = missingIds.includes('knowledge') || !data.knowledge.trim();
  const needInclusion = missingIds.includes('inclusion') || !data.inclusion.trim();
  const needRubric = missingIds.includes('rubric') || !/NA/i.test(data.assessment || '');
  const needCriteria = missingIds.includes('criteria');
  const blocks = [];
  if (needCriteria) blocks.push('COMPETÈNCIES ESPECÍFIQUES\nCRITERIS D’AVALUACIÓ');
  if (needKnowledge) blocks.push('BLOCS DE SABERS\nSABERS CONCRETS');
  if (needInclusion) blocks.push('MESURES I SUPORTS\nADAPTACIONS TDAH\nADAPTACIONS TEA\nADAPTACIONS DISLÈXIA\nADAPTACIONS TDL');
  if (needRubric) blocks.push('RÚBRICA');
  return `${common}

Completa només els apartats que falten o són febles. No repeteixis tota la SA. Respon només amb aquestes etiquetes exactes, segons calgui:
${blocks.join('\n')}

No deixis cap apartat buit.`;
}

function buildLocalPartialDraft(kind) {
  const data = getFormData();
  const subject = els.aiSubject?.value || data.subject || 'la matèria';
  const topic = els.aiTopic?.value || firstSentence(data.challenge) || 'el repte plantejat';
  if (kind === 'knowledge') {
    return `BLOCS DE SABERS
- Procés de resolució de problemes i projectes.
- Recerca, selecció i organització d’informació.
- Comunicació tècnica, oral, escrita i multimodal.
- Ús d’eines digitals i recursos propis de ${subject}.
- Revisió, prova, millora i reflexió sobre el procés.

SABERS CONCRETS
- Anàlisi del context i formulació del problema relacionat amb ${topic}.
- Identificació de requisits, limitacions i criteris de qualitat.
- Planificació de fases de treball, rols, materials i temps.
- Elaboració de propostes, esquemes, prototips, càlculs o produccions segons la matèria.
- Documentació del procés i justificació de decisions.
- Comunicació del producte final i valoració de l’impacte, la sostenibilitat i la millora.`;
  }
  if (kind === 'inclusion') {
    return `MESURES I SUPORTS
- Objectius i criteris d’èxit visibles des de l’inici.
- Instruccions fragmentades, exemples model i checklist de seguiment.
- Opcions diverses d’accés a la informació: text breu, esquema, imatge, demostració i explicació oral.
- Rols cooperatius clars, temps flexible i retorn formatiu durant el procés.

ADAPTACIONS TDAH
Tasques curtes amb temporització, pauses funcionals, recordatoris visuals, objectius de sessió i validació freqüent del progrés.

ADAPTACIONS TEA
Anticipació de fases, estructura estable, consignes literals, reducció d’ambigüitats, suport visual i possibilitat de preparar la intervenció oral.

ADAPTACIONS DISLÈXIA
Tipografia clara, textos breus, lectura assistida, menys còpia mecànica, plantilles amb frases iniciades i opcions de resposta oral o visual.

ADAPTACIONS TDL
Vocabulari previ, frases curtes, pictogrames o esquemes, temps addicional per elaborar respostes i models lingüístics per explicar el procés.`;
  }
  if (kind === 'rubric' || kind === 'missing') {
    const criteria = extractCompetenceParts(data.competences || '').criteriaCodes;
    const c = (i) => criteria[i] || `${i+1}.1`;
    return `RÚBRICA
${c(0)} | Comprensió del repte i identificació de necessitats | Identifica el repte de manera confusa o incompleta. | Identifica el repte amb ajuda i recull alguna necessitat. | Explica el repte i relaciona necessitats amb dades o observacions. | Analitza el repte amb profunditat i justifica prioritats amb evidències.
${c(1)} | Aplicació de sabers i procediments | Aplica procediments amb molts errors o sense autonomia. | Aplica alguns procediments amb suport. | Aplica sabers i procediments adequats de manera autònoma. | Transfereix sabers a situacions noves i justifica decisions.
${c(2)} | Planificació i gestió del procés | No planifica o no segueix les fases. | Planifica parcialment i necessita recordatoris. | Organitza fases, materials i rols amb coherència. | Revisa la planificació i introdueix millores justificades.
${c(3)} | Producte final o solució | El producte és incomplet o poc funcional. | El producte respon parcialment al repte. | El producte és funcional, coherent i ben justificat. | El producte és complet, creatiu, millorat i transferible.
${c(4)} | Comunicació i documentació | Comunica amb poca claredat i amb evidències insuficients. | Comunica les idees principals amb suport. | Documenta i comunica el procés amb ordre i vocabulari adequat. | Comunica de manera rigorosa, visual i argumentada.
${c(5)} | Reflexió, autoavaluació i millora | No identifica aprenentatges ni millores. | Identifica algun aprenentatge amb ajuda. | Valora el procés i proposa millores realistes. | Fa una reflexió crítica i concreta sobre aprenentatges, dificultats i millores.`;
  }
  return buildLocalPartialDraft('knowledge') + '\n\n' + buildLocalPartialDraft('inclusion') + '\n\n' + buildLocalPartialDraft('rubric');
}

async function generatePartialAiDraft(kind) {
  renderAiValidation(validateSaQuality(getFormData()));
  const label = kind === 'knowledge' ? 'sabers' : kind === 'inclusion' ? 'adaptacions' : kind === 'rubric' ? 'rúbrica' : 'camps buits o febles';
  els.aiOutput.textContent = `Generant ${label}...`;
  const provider = els.aiProvider.value;
  if (provider !== 'google' || !els.aiKey.value.trim()) {
    els.aiOutput.textContent = buildLocalPartialDraft(kind);
    return;
  }
  try {
    els.aiOutput.textContent = await callGeminiText(buildPartialPrompt(kind));
  } catch (error) {
    console.error(error);
    els.aiOutput.textContent = `No he pogut obtenir resposta de la API per completar ${label}.

${error.message}

Et deixo una proposta local:

${buildLocalPartialDraft(kind)}`;
  }
}

async function extractDocxText(file) {
  const buffer = await file.arrayBuffer();
  const entries = findZipEntries(buffer);
  const parts = [];
  for (const name of ['word/document.xml', 'word/footnotes.xml', 'word/endnotes.xml']) {
    const entry = entries.find(e => e.name === name);
    if (!entry) continue;
    const xmlBytes = await inflateZipEntry(buffer, entry);
    parts.push(docxXmlToText(new TextDecoder('utf-8').decode(xmlBytes)));
  }
  const text = parts.join('\n\n').replace(/\n{3,}/g, '\n\n').trim();
  if (!text) throw new Error('DOCX sense text');
  return text;
}

function findZipEntries(buffer) {
  const view = new DataView(buffer);
  const entries = [];
  for (let offset = 0; offset + 46 < view.byteLength; offset++) {
    if (view.getUint32(offset, true) !== 0x02014b50) continue;
    const method = view.getUint16(offset + 10, true);
    const compressedSize = view.getUint32(offset + 20, true);
    const uncompressedSize = view.getUint32(offset + 24, true);
    const nameLen = view.getUint16(offset + 28, true);
    const extraLen = view.getUint16(offset + 30, true);
    const commentLen = view.getUint16(offset + 32, true);
    const localHeaderOffset = view.getUint32(offset + 42, true);
    const name = new TextDecoder('utf-8').decode(new Uint8Array(buffer, offset + 46, nameLen));
    if (localHeaderOffset + 30 < view.byteLength && view.getUint32(localHeaderOffset, true) === 0x04034b50) {
      const localNameLen = view.getUint16(localHeaderOffset + 26, true);
      const localExtraLen = view.getUint16(localHeaderOffset + 28, true);
      const dataOffset = localHeaderOffset + 30 + localNameLen + localExtraLen;
      entries.push({ name, method, compressedSize, uncompressedSize, dataOffset });
    }
    offset += 45 + nameLen + extraLen + commentLen;
  }
  if (entries.length) return entries;
  return parseZipEntries(buffer);
}

function docxXmlToText(xml) {
  return xml
    .replace(/<w:tab\s*\/>/g, '\t')
    .replace(/<w:br\s*\/>/g, '\n')
    .replace(/<\/w:tc>/g, '\n')
    .replace(/<\/w:tr>/g, '\n')
    .replace(/<\/w:p>/g, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"').replace(/&apos;/g, "'")
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function applyImportedText(filename, text, kind) {
  const mapped = mapImportedTemplateText(text);
  const isAi = String(kind || '').toLowerCase().includes('ia');
  const isPartialAi = isAi && !mapped.title && !mapped.challenge && (mapped.knowledge || mapped.inclusion || mapped.assessment || mapped.competences);
  if (mapped.title) els.title.value = mapped.title;
  else if (!isAi && filename) els.title.value = filename.replace(/\.[^.]+$/, '');
  if (mapped.level) els.level.value = mapped.level;
  if (mapped.subject) els.subject.value = mapped.subject;
  if (mapped.duration) els.duration.value = mapped.duration;
  if (mapped.challenge) els.challenge.value = mapped.challenge;
  if (mapped.knowledge) els.knowledge.value = mapped.knowledge;
  if (mapped.competences) {
    if (isPartialAi && els.competences.value.trim()) els.competences.value = joinNonEmpty([els.competences.value, mapped.competences]);
    else els.competences.value = mapped.competences;
  }
  if (mapped.sequence) els.sequence.value = mapped.sequence;
  if (mapped.inclusion) els.inclusion.value = mapped.inclusion;
  if (mapped.assessment) {
    if (isPartialAi && els.assessment.value.trim() && !/evid[eè]nc|instrument|retorn/i.test(mapped.assessment)) {
      els.assessment.value = joinNonEmpty([els.assessment.value, mapped.assessment]);
    } else {
      els.assessment.value = mapped.assessment;
    }
  }
  if (!mapped.challenge && text && !isPartialAi) els.challenge.value = `${kind} importat: ${filename}\n\n${text.slice(0, 5000)}`;
  if (els.importStatus) els.importStatus.textContent = `${kind} importat: ${filename}. Text recuperat: ${text.length.toLocaleString('ca-ES')} caràcters. Camps detectats: ${Object.values(mapped).filter(Boolean).length}.`;
  renderReport(getFormData());
  renderAiValidation(validateSaQuality(getFormData()));
}



// ===== v1.3: aplicacio robusta d'esborrany IA al formulari =====
function normalizeDraftForParsing(text) {
  return String(text || '')
    .replace(/\r/g, '')
    .replace(/[“”]/g, '"')
    .replace(/[’]/g, "'")
    .replace(/^\s{0,3}(#{1,6})\s*/gm, '')
    .replace(/^\s{0,3}(\d+|\d+\.\d+)\.\s+(?=[A-ZÀ-Ú])/gm, '')
    .replace(/^\s*[-*]\s+\*\*([^*\n]{2,80})\*\*\s*:?\s*$/gm, '$1')
    .replace(/^\s*\*\*([^*\n]{2,90})\*\*\s*:?\s*$/gm, '$1')
    .replace(/^\s*__([^_\n]{2,90})__\s*:?\s*$/gm, '$1')
    .trim();
}

function stripHeadingDecoration(value) {
  return String(value || '')
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[’']/g, ' ')
    .replace(/[^A-Za-z0-9]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .toUpperCase();
}

function canonicalDraftLabel(line) {
  const raw = String(line || '').trim()
    .replace(/^[-*•]\s*/, '')
    .replace(/^\d+(?:\.\d+)*[).:-]?\s*/, '')
    .replace(/^\*\*|\*\*$/g, '')
    .replace(/[:：]\s*$/, '')
    .trim();
  const n = stripHeadingDecoration(raw);
  const map = [
    ['TITOL', 'TÍTOL'], ['TITOL DE LA SITUACIO D APRENENTATGE', 'TÍTOL'],
    ['CURS', 'CURS'], ['NIVELL', 'CURS'], ['NIVELL EDUCATIU', 'CURS'],
    ['MATERIA', 'MATÈRIA'], ['AREA MATERIA O AMBIT', 'MATÈRIA'], ['AREA MATERIA AMBIT', 'MATÈRIA'],
    ['DURADA', 'DURADA'], ['TEMPORITZACIO', 'DURADA'],
    ['CONTEXT', 'CONTEXT'], ['DESCRIPCIO', 'CONTEXT'], ['DESCRIPCIO I CONTEXT', 'CONTEXT'],
    ['REPTE', 'REPTE'], ['PREGUNTA REPTE', 'REPTE'],
    ['JUSTIFICACIO', 'JUSTIFICACIÓ'], ['PRODUCTE FINAL', 'PRODUCTE FINAL'],
    ['COMPETENCIES ESPECIFIQUES', 'COMPETÈNCIES ESPECÍFIQUES'], ['COMPETENCIA ESPECIFICA', 'COMPETÈNCIES ESPECÍFIQUES'], ['CE', 'COMPETÈNCIES ESPECÍFIQUES'],
    ['CRITERIS D AVALUACIO', 'CRITERIS D’AVALUACIÓ'], ['CRITERIS AVALUACIO', 'CRITERIS D’AVALUACIÓ'], ['CA', 'CRITERIS D’AVALUACIÓ'],
    ['OBJECTIUS D APRENENTATGE', 'OBJECTIUS D’APRENENTATGE'], ['OBJECTIUS', 'OBJECTIUS D’APRENENTATGE'],
    ['BLOCS DE SABERS', 'BLOCS DE SABERS'], ['BLOCS', 'BLOCS DE SABERS'], ['SABERS', 'SABERS CONCRETS'], ['SABERS CONCRETS', 'SABERS CONCRETS'], ['CONTINGUTS', 'SABERS CONCRETS'],
    ['METODOLOGIA', 'METODOLOGIA'], ['ORGANITZACIO DE L AULA', 'ORGANITZACIÓ DE L’AULA'], ['ORGANITZACIO', 'ORGANITZACIÓ DE L’AULA'], ['RECURSOS', 'RECURSOS'], ['MATERIALS I EINES', 'RECURSOS'],
    ['INICIALS', 'INICIALS'], ['ACTIVITATS INICIALS', 'INICIALS'], ['QUE EN SABEM', 'INICIALS'],
    ['DESENVOLUPAMENT', 'DESENVOLUPAMENT'], ['ACTIVITATS DE DESENVOLUPAMENT', 'DESENVOLUPAMENT'],
    ['ESTRUCTURACIO', 'ESTRUCTURACIÓ'], ['ACTIVITATS D ESTRUCTURACIO', 'ESTRUCTURACIÓ'], ['QUE HEM APRES', 'ESTRUCTURACIÓ'],
    ['APLICACIO', 'APLICACIÓ'], ['ACTIVITATS D APLICACIO', 'APLICACIÓ'], ['APLIQUEM EL QUE HEM APRES', 'APLICACIÓ'],
    ['MESURES I SUPORTS', 'MESURES I SUPORTS'], ['MESURES UNIVERSALS', 'MESURES I SUPORTS'], ['SUPORTS', 'MESURES I SUPORTS'],
    ['ADAPTACIONS TDAH', 'ADAPTACIONS TDAH'], ['TDAH', 'ADAPTACIONS TDAH'],
    ['ADAPTACIONS TEA', 'ADAPTACIONS TEA'], ['TEA', 'ADAPTACIONS TEA'],
    ['ADAPTACIONS DISLEXIA', 'ADAPTACIONS DISLÈXIA'], ['DISLEXIA', 'ADAPTACIONS DISLÈXIA'],
    ['ADAPTACIONS TDL', 'ADAPTACIONS TDL'], ['TDL', 'ADAPTACIONS TDL'],
    ['EVIDENCIES', 'EVIDÈNCIES'], ['EVIDENCIES D APRENENTATGE', 'EVIDÈNCIES'],
    ['INSTRUMENTS', 'INSTRUMENTS'], ['INSTRUMENTS D AVALUACIO', 'INSTRUMENTS'],
    ['RETORN I MILLORA', 'RETORN I MILLORA'], ['FEEDBACK I MILLORA', 'RETORN I MILLORA'],
    ['VECTORS', 'VECTORS'], ['VECTORS DEL CURRICULUM', 'VECTORS'],
    ['RUBRICA', 'RÚBRICA'], ['RUBRICA D AVALUACIO', 'RÚBRICA']
  ];
  for (const [key, value] of map) {
    if (n === key || n.startsWith(key + ' ')) return value;
  }
  return '';
}

function splitDraftIntoSections(text) {
  const normalized = normalizeDraftForParsing(text);
  const lines = normalized.split('\n');
  const sections = {};
  let current = '';
  const push = (label, value) => {
    if (!label) return;
    const clean = cleanImportedValue(value);
    if (!clean) return;
    sections[label] = sections[label] ? sections[label] + '\n\n' + clean : clean;
  };
  for (let line of lines) {
    const trimmed = line.trim();
    if (!trimmed) {
      if (current) sections[current] = (sections[current] || '') + '\n';
      continue;
    }
    let inline = trimmed.match(/^(.{2,90}?)[\s]*[:：][\s]*(.+)$/);
    if (inline) {
      const label = canonicalDraftLabel(inline[1]);
      if (label) {
        current = label;
        push(current, inline[2]);
        continue;
      }
    }
    const label = canonicalDraftLabel(trimmed);
    if (label) {
      current = label;
      if (!sections[current]) sections[current] = '';
      continue;
    }
    if (current) sections[current] = (sections[current] || '') + line + '\n';
  }
  Object.keys(sections).forEach(k => { sections[k] = cleanImportedValue(sections[k]); });
  return sections;
}

function getSection(sections, label) {
  return cleanImportedValue(sections[label] || '');
}

function mapImportedTemplateText(text) {
  const sections = splitDraftIntoSections(text);
  const title = getSection(sections, 'TÍTOL');
  const level = normalizeLevel(getSection(sections, 'CURS'));
  const subject = getSection(sections, 'MATÈRIA');
  const duration = getSection(sections, 'DURADA');
  const context = getSection(sections, 'CONTEXT');
  const repte = getSection(sections, 'REPTE');
  const justificacio = getSection(sections, 'JUSTIFICACIÓ');
  const producte = getSection(sections, 'PRODUCTE FINAL');
  const ce = getSection(sections, 'COMPETÈNCIES ESPECÍFIQUES');
  const ca = getSection(sections, 'CRITERIS D’AVALUACIÓ');
  const objectius = getSection(sections, 'OBJECTIUS D’APRENENTATGE');
  const blocs = getSection(sections, 'BLOCS DE SABERS');
  const sabers = getSection(sections, 'SABERS CONCRETS');
  const metodologia = getSection(sections, 'METODOLOGIA');
  const organitzacio = getSection(sections, 'ORGANITZACIÓ DE L’AULA');
  const recursos = getSection(sections, 'RECURSOS');
  const inicials = getSection(sections, 'INICIALS');
  const desenvolupament = getSection(sections, 'DESENVOLUPAMENT');
  const estructuracio = getSection(sections, 'ESTRUCTURACIÓ');
  const aplicacio = getSection(sections, 'APLICACIÓ');
  const mesures = getSection(sections, 'MESURES I SUPORTS');
  const tdah = getSection(sections, 'ADAPTACIONS TDAH');
  const tea = getSection(sections, 'ADAPTACIONS TEA');
  const dislexia = getSection(sections, 'ADAPTACIONS DISLÈXIA');
  const tdl = getSection(sections, 'ADAPTACIONS TDL');
  const evidencies = getSection(sections, 'EVIDÈNCIES');
  const instruments = getSection(sections, 'INSTRUMENTS');
  const retorn = getSection(sections, 'RETORN I MILLORA');
  const vectors = getSection(sections, 'VECTORS');
  const rubrica = getSection(sections, 'RÚBRICA');
  return {
    title, level, subject, duration,
    challenge: joinNonEmpty([context && `Context: ${context}`, repte && `Repte: ${repte}`, justificacio && `Justificació: ${justificacio}`, producte && `Producte final: ${producte}`]),
    competences: joinNonEmpty([ce && `Competències específiques: ${ce}`, ca && `Criteris d’avaluació: ${ca}`, objectius && `Objectius d’aprenentatge: ${objectius}`]),
    knowledge: joinNonEmpty([blocs && `Blocs de sabers: ${blocs}`, sabers && `Sabers concrets: ${sabers}`]),
    sequence: joinNonEmpty([metodologia && `Metodologia: ${metodologia}`, organitzacio && `Organització de l’aula: ${organitzacio}`, recursos && `Recursos: ${recursos}`, inicials && `Inicials: ${inicials}`, desenvolupament && `Desenvolupament: ${desenvolupament}`, estructuracio && `Estructuració: ${estructuracio}`, aplicacio && `Aplicació: ${aplicacio}`]),
    inclusion: joinNonEmpty([mesures && `Mesures i suports: ${mesures}`, tdah && `TDAH: ${tdah}`, tea && `TEA: ${tea}`, dislexia && `Dislèxia: ${dislexia}`, tdl && `TDL: ${tdl}`]),
    assessment: joinNonEmpty([evidencies && `Evidències: ${evidencies}`, instruments && `Instruments: ${instruments}`, retorn && `Retorn i millora: ${retorn}`, vectors && `Vectors: ${vectors}`, rubrica && `Rúbrica: ${rubrica}`])
  };
}

function applyImportedText(filename, text, kind) {
  const mapped = mapImportedTemplateText(text);
  const isAi = String(kind || '').toLowerCase().includes('ia');
  const detected = Object.values(mapped).filter(Boolean).length;
  const isPartialAi = isAi && !mapped.title && !mapped.challenge && (mapped.knowledge || mapped.inclusion || mapped.assessment || mapped.competences);
  if (mapped.title) els.title.value = mapped.title;
  else if (!isAi && filename) els.title.value = filename.replace(/\.[^.]+$/, '');
  if (mapped.level) els.level.value = mapped.level;
  if (mapped.subject) els.subject.value = mapped.subject;
  if (mapped.duration) els.duration.value = mapped.duration;
  if (mapped.challenge) els.challenge.value = mapped.challenge;
  if (mapped.competences) els.competences.value = isPartialAi && els.competences.value.trim() ? joinNonEmpty([els.competences.value, mapped.competences]) : mapped.competences;
  if (mapped.knowledge) els.knowledge.value = mapped.knowledge;
  if (mapped.sequence) els.sequence.value = mapped.sequence;
  if (mapped.inclusion) els.inclusion.value = mapped.inclusion;
  if (mapped.assessment) els.assessment.value = isPartialAi && els.assessment.value.trim() && !/evid[eè]nc|instrument|retorn/i.test(mapped.assessment) ? joinNonEmpty([els.assessment.value, mapped.assessment]) : mapped.assessment;
  if (isAi && detected < 2 && text) {
    const existing = els.challenge.value.trim();
    els.challenge.value = joinNonEmpty([existing, `Esborrany IA complet pendent de mapatge automàtic:\n\n${text.slice(0, 12000)}`]);
  } else if (!mapped.challenge && text && !isPartialAi && !isAi) {
    els.challenge.value = `${kind} importat: ${filename}\n\n${text.slice(0, 5000)}`;
  }
  if (els.importStatus) {
    const msg = `${kind} importat: ${filename}. Text recuperat: ${String(text || '').length.toLocaleString('ca-ES')} caràcters. Camps detectats: ${detected}.`;
    els.importStatus.textContent = isAi && detected < 2 ? msg + ' He enganxat l’esborrany complet al camp del repte perquè no es perdi.' : msg;
  }
  renderReport(getFormData());
  renderAiValidation(validateSaQuality(getFormData()));
}

function applyAiDraftToForm() {
  const text = els.aiOutput.textContent.trim();
  if (!text || text === 'Encara no hi ha cap esborrany.') return alert('Primer genera o enganxa un esborrany.');
  applyImportedText('esborrany-ia.txt', text, els.aiProvider.value === 'google' ? 'IA Google' : 'IA local');
  const result = validateSaQuality(getFormData());
  renderAiValidation(result);
  if (result.missing.length && els.importStatus) {
    els.importStatus.textContent += ` Validació parcial: falten o són febles ${result.missing.map(m => m.label).join(', ')}.`;
  }
  try { document.getElementById('reportPreview')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); } catch {}
}

function buildAiPrompt() {
  const data = getFormData();
  const guided = buildGuidedInstructionText();
  const manualContext = els.aiContext.value.trim();
  const context = manualContext || guided;
  return `Ets un assistent docent expert en currículum LOMLOE a Catalunya. Escriu en català formal, clar i útil per a docents d’ESO.

Objectiu: generar una situació d’aprenentatge completa, coherent i importable per DocentKit. Desenvolupa tots els apartats amb detall suficient per portar-la a l’aula.

Dades del formulari actual:
Tipus: ${data.type}
Títol provisional: ${data.title}
Nivell: ${data.level}
Matèria: ${data.subject || 'pendent'}
Durada: ${data.duration || 'pendent'}

Instruccions guiades de l’usuari:
${context}

Instruccions de format obligatòries:
- No facis servir Markdown en els títols dels apartats.
- Escriu cada etiqueta exactament en una línia independent, sense numeració ni dos punts.
- Després de cada etiqueta, escriu el contingut corresponent.
- No deixis cap apartat buit.
- Les adaptacions per TDAH, TEA, dislèxia i TDL han d’anar en apartats separats.
- La rúbrica ha de tenir com a mínim 6 files amb aquest format: criteri LOMLOE | ítem d’avaluació | NA | AS | AN | AE.

Etiquetes exactes, en aquest ordre:
TÍTOL
CURS
MATÈRIA
DURADA
CONTEXT
REPTE
JUSTIFICACIÓ
PRODUCTE FINAL
COMPETÈNCIES ESPECÍFIQUES
CRITERIS D’AVALUACIÓ
OBJECTIUS D’APRENENTATGE
BLOCS DE SABERS
SABERS CONCRETS
METODOLOGIA
ORGANITZACIÓ DE L’AULA
RECURSOS
INICIALS
DESENVOLUPAMENT
ESTRUCTURACIÓ
APLICACIÓ
MESURES I SUPORTS
ADAPTACIONS TDAH
ADAPTACIONS TEA
ADAPTACIONS DISLÈXIA
ADAPTACIONS TDL
EVIDÈNCIES
INSTRUMENTS
RETORN I MILLORA
VECTORS
RÚBRICA`;
}


// ===== v1.4: importacio TXT/IA per seccions sense duplicar tot el document =====
function canonicalDraftLabel(line) {
  const raw = String(line || '').trim()
    .replace(/^[-*•]\s*/, '')
    .replace(/^\d+(?:\.\d+)*[).:-]?\s*/, '')
    .replace(/^\*\*|\*\*$/g, '')
    .replace(/[:：]\s*$/, '')
    .trim();
  const n = stripHeadingDecoration(raw);
  const exact = new Map([
    ['SITUACIO D APRENENTATGE', 'TÍTOL'],
    ['TITOL', 'TÍTOL'], ['TITOL DE LA SITUACIO D APRENENTATGE', 'TÍTOL'],
    ['CURS', 'CURS'], ['NIVELL', 'CURS'], ['NIVELL EDUCATIU', 'CURS'],
    ['MATERIA', 'MATÈRIA'], ['AREA MATERIA O AMBIT', 'MATÈRIA'], ['AREA MATERIA AMBIT', 'MATÈRIA'],
    ['DURADA', 'DURADA'], ['TEMPORITZACIO', 'DURADA'],
    ['CONTEXT', 'CONTEXT'], ['DESCRIPCIO', 'CONTEXT'], ['DESCRIPCIO I CONTEXT', 'CONTEXT'],
    ['REPTE', 'REPTE'], ['PREGUNTA REPTE', 'REPTE'],
    ['JUSTIFICACIO', 'JUSTIFICACIÓ'], ['PRODUCTE FINAL', 'PRODUCTE FINAL'],
    ['COMPETENCIES CLAU I ESPECIFIQUES LOMLOE', 'COMPETÈNCIES ESPECÍFIQUES'],
    ['COMPETENCIES CLAU I ESPECIFIQUES', 'COMPETÈNCIES ESPECÍFIQUES'],
    ['COMPETENCIES ESPECIFIQUES', 'COMPETÈNCIES ESPECÍFIQUES'], ['COMPETENCIA ESPECIFICA', 'COMPETÈNCIES ESPECÍFIQUES'], ['CE', 'COMPETÈNCIES ESPECÍFIQUES'],
    ['CRITERIS D AVALUACIO', 'CRITERIS D’AVALUACIÓ'], ['CRITERIS AVALUACIO', 'CRITERIS D’AVALUACIÓ'], ['CA', 'CRITERIS D’AVALUACIÓ'],
    ['OBJECTIUS D APRENENTATGE', 'OBJECTIUS D’APRENENTATGE'], ['OBJECTIUS', 'OBJECTIUS D’APRENENTATGE'],
    ['BLOCS DE SABERS', 'BLOCS DE SABERS'], ['BLOCS', 'BLOCS DE SABERS'],
    ['SABERS', 'SABERS CONCRETS'], ['SABERS CONCRETS', 'SABERS CONCRETS'], ['CONTINGUTS', 'SABERS CONCRETS'], ['SABERS CONTINGUTS', 'SABERS CONCRETS'],
    ['METODOLOGIA', 'METODOLOGIA'], ['ORGANITZACIO DE L AULA', 'ORGANITZACIÓ DE L’AULA'], ['ORGANITZACIO', 'ORGANITZACIÓ DE L’AULA'], ['RECURSOS', 'RECURSOS'], ['MATERIALS I EINES', 'RECURSOS'],
    ['SEQÜENCIA D ACTIVITATS', 'SEQÜÈNCIA D’ACTIVITATS'], ['SEQUENCIA D ACTIVITATS', 'SEQÜÈNCIA D’ACTIVITATS'], ['SEQÜENCIA D ACTIVITATS D APRENENTATGE', 'SEQÜÈNCIA D’ACTIVITATS'], ['SEQUENCIA D ACTIVITATS D APRENENTATGE', 'SEQÜÈNCIA D’ACTIVITATS'],
    ['INICIALS', 'INICIALS'], ['ACTIVITATS INICIALS', 'INICIALS'], ['QUE EN SABEM', 'INICIALS'],
    ['DESENVOLUPAMENT', 'DESENVOLUPAMENT'], ['ACTIVITATS DE DESENVOLUPAMENT', 'DESENVOLUPAMENT'],
    ['ESTRUCTURACIO', 'ESTRUCTURACIÓ'], ['ACTIVITATS D ESTRUCTURACIO', 'ESTRUCTURACIÓ'], ['QUE HEM APRES', 'ESTRUCTURACIÓ'],
    ['APLICACIO', 'APLICACIÓ'], ['ACTIVITATS D APLICACIO', 'APLICACIÓ'], ['APLIQUEM EL QUE HEM APRES', 'APLICACIÓ'],
    ['MESURES I SUPORTS', 'MESURES I SUPORTS'], ['MESURES UNIVERSALS', 'MESURES I SUPORTS'], ['SUPORTS', 'MESURES I SUPORTS'],
    ['MESURES I SUPORTS PER A L ATENCIO A LA DIVERSITAT', 'MESURES I SUPORTS'], ['ATENCIO A LA DIVERSITAT', 'MESURES I SUPORTS'],
    ['ADAPTACIONS TDAH', 'ADAPTACIONS TDAH'], ['TDAH', 'ADAPTACIONS TDAH'],
    ['ADAPTACIONS TEA', 'ADAPTACIONS TEA'], ['TEA', 'ADAPTACIONS TEA'],
    ['ADAPTACIONS DISLEXIA', 'ADAPTACIONS DISLÈXIA'], ['DISLEXIA', 'ADAPTACIONS DISLÈXIA'],
    ['ADAPTACIONS TDL', 'ADAPTACIONS TDL'], ['TDL', 'ADAPTACIONS TDL'],
    ['EVIDENCIES', 'EVIDÈNCIES'], ['EVIDENCIES D APRENENTATGE', 'EVIDÈNCIES'],
    ['INSTRUMENTS', 'INSTRUMENTS'], ['INSTRUMENTS D AVALUACIO', 'INSTRUMENTS'],
    ['RETORN I MILLORA', 'RETORN I MILLORA'], ['FEEDBACK I MILLORA', 'RETORN I MILLORA'],
    ['VECTORS', 'VECTORS'], ['VECTORS DEL CURRICULUM', 'VECTORS'],
    ['RUBRICA', 'RÚBRICA'], ['RUBRICA D AVALUACIO', 'RÚBRICA'], ['RUBRICA D AVALUACIO DE LA SITUACIO D APRENENTATGE', 'RÚBRICA']
  ]);
  if (exact.has(n)) return exact.get(n);
  if (n.startsWith('SITUACIO D APRENENTATGE')) return 'TÍTOL';
  if (n.startsWith('COMPETENCIES CLAU I ESPECIFIQUES')) return 'COMPETÈNCIES ESPECÍFIQUES';
  if (n.startsWith('SABERS CONTINGUTS') || n.startsWith('SABERS I CONTINGUTS')) return 'SABERS CONCRETS';
  if (n.startsWith('SEQÜENCIA D ACTIVITATS') || n.startsWith('SEQUENCIA D ACTIVITATS')) return 'SEQÜÈNCIA D’ACTIVITATS';
  if (n.startsWith('MESURES I SUPORTS')) return 'MESURES I SUPORTS';
  if (n.startsWith('RUBRICA D AVALUACIO')) return 'RÚBRICA';
  if (n.startsWith('VECTORS DEL CURRICULUM')) return 'VECTORS';
  return '';
}

function splitDraftIntoSections(text) {
  const normalized = normalizeDraftForParsing(text);
  const lines = normalized.split('\n');
  const sections = {};
  let current = '';
  const add = (label, value) => {
    if (!label) return;
    const clean = cleanImportedValue(value);
    if (!clean) return;
    sections[label] = sections[label] ? `${sections[label]}\n${clean}` : clean;
  };
  const setCurrent = (label) => {
    current = label;
    if (!sections[current]) sections[current] = '';
  };

  for (let line of lines) {
    const trimmed = line.trim();
    if (!trimmed) {
      if (current && sections[current] && !sections[current].endsWith('\n')) sections[current] += '\n';
      continue;
    }

    const inline = trimmed.match(/^([^:：]{2,120})[:：]\s*(.*)$/);
    if (inline) {
      const label = canonicalDraftLabel(inline[1]);
      if (label) {
        setCurrent(label);
        if (inline[2].trim()) add(label, inline[2]);
        continue;
      }
    }

    const label = canonicalDraftLabel(trimmed);
    if (label) {
      setCurrent(label);
      continue;
    }

    if (current) add(current, line);
  }
  Object.keys(sections).forEach(k => { sections[k] = cleanImportedValue(sections[k]); });
  return sections;
}

function mapImportedTemplateText(text) {
  const sections = splitDraftIntoSections(text);
  const title = getSection(sections, 'TÍTOL');
  const level = normalizeLevel(getSection(sections, 'CURS')) || normalizeLevel((getSection(sections, 'MATÈRIA').match(/\(([^)]*ESO)\)/i) || [])[1] || '');
  let subject = getSection(sections, 'MATÈRIA').replace(/\s*\([^)]*\)\s*/g, '').trim();
  const duration = getSection(sections, 'DURADA');
  const context = getSection(sections, 'CONTEXT');
  const repte = getSection(sections, 'REPTE');
  const justificacio = getSection(sections, 'JUSTIFICACIÓ');
  const producte = getSection(sections, 'PRODUCTE FINAL');
  const ce = getSection(sections, 'COMPETÈNCIES ESPECÍFIQUES');
  const ca = getSection(sections, 'CRITERIS D’AVALUACIÓ');
  const objectius = getSection(sections, 'OBJECTIUS D’APRENENTATGE');
  const blocs = getSection(sections, 'BLOCS DE SABERS');
  const sabers = getSection(sections, 'SABERS CONCRETS');
  const metodologia = getSection(sections, 'METODOLOGIA');
  const organitzacio = getSection(sections, 'ORGANITZACIÓ DE L’AULA');
  const recursos = getSection(sections, 'RECURSOS');
  const sequenciaGlobal = getSection(sections, 'SEQÜÈNCIA D’ACTIVITATS');
  const inicials = getSection(sections, 'INICIALS');
  const desenvolupament = getSection(sections, 'DESENVOLUPAMENT');
  const estructuracio = getSection(sections, 'ESTRUCTURACIÓ');
  const aplicacio = getSection(sections, 'APLICACIÓ');
  const mesures = getSection(sections, 'MESURES I SUPORTS');
  const tdah = getSection(sections, 'ADAPTACIONS TDAH');
  const tea = getSection(sections, 'ADAPTACIONS TEA');
  const dislexia = getSection(sections, 'ADAPTACIONS DISLÈXIA');
  const tdl = getSection(sections, 'ADAPTACIONS TDL');
  const evidencies = getSection(sections, 'EVIDÈNCIES');
  const instruments = getSection(sections, 'INSTRUMENTS');
  const retorn = getSection(sections, 'RETORN I MILLORA');
  const vectors = getSection(sections, 'VECTORS');
  const rubrica = getSection(sections, 'RÚBRICA');
  return {
    title, level, subject, duration,
    challenge: joinNonEmpty([context && `Context: ${context}`, repte && `Repte: ${repte}`, justificacio && `Justificació: ${justificacio}`, producte && `Producte final: ${producte}`]),
    competences: joinNonEmpty([ce && `Competències específiques i clau: ${ce}`, ca && `Criteris d’avaluació: ${ca}`, objectius && `Objectius d’aprenentatge: ${objectius}`]),
    knowledge: joinNonEmpty([blocs && `Blocs de sabers: ${blocs}`, sabers && `Sabers / continguts: ${sabers}`]),
    sequence: joinNonEmpty([metodologia && `Metodologia: ${metodologia}`, organitzacio && `Organització de l’aula: ${organitzacio}`, recursos && `Recursos: ${recursos}`, sequenciaGlobal && `Seqüència d’activitats: ${sequenciaGlobal}`, inicials && `Inicials: ${inicials}`, desenvolupament && `Desenvolupament: ${desenvolupament}`, estructuracio && `Estructuració: ${estructuracio}`, aplicacio && `Aplicació: ${aplicacio}`]),
    inclusion: joinNonEmpty([mesures && `Mesures i suports: ${mesures}`, tdah && `TDAH: ${tdah}`, tea && `TEA: ${tea}`, dislexia && `Dislèxia: ${dislexia}`, tdl && `TDL: ${tdl}`]),
    assessment: joinNonEmpty([evidencies && `Evidències: ${evidencies}`, instruments && `Instruments: ${instruments}`, retorn && `Retorn i millora: ${retorn}`, vectors && `Vectors: ${vectors}`, rubrica && `Rúbrica: ${rubrica}`])
  };
}

function applyImportedText(filename, text, kind) {
  const mapped = mapImportedTemplateText(text);
  const isAi = String(kind || '').toLowerCase().includes('ia');
  const detected = Object.entries(mapped).filter(([k, v]) => k !== 'duration' && v).length;
  const isPartialAi = isAi && !mapped.title && !mapped.challenge && (mapped.knowledge || mapped.inclusion || mapped.assessment || mapped.competences);

  if (mapped.title) els.title.value = mapped.title;
  else if (!isAi && filename && detected < 2) els.title.value = filename.replace(/\.[^.]+$/, '');
  if (mapped.level) els.level.value = mapped.level;
  if (mapped.subject) els.subject.value = mapped.subject;
  if (mapped.duration) els.duration.value = mapped.duration;
  if (mapped.challenge) els.challenge.value = mapped.challenge;
  if (mapped.competences) els.competences.value = isPartialAi && els.competences.value.trim() ? joinNonEmpty([els.competences.value, mapped.competences]) : mapped.competences;
  if (mapped.knowledge) els.knowledge.value = mapped.knowledge;
  if (mapped.sequence) els.sequence.value = mapped.sequence;
  if (mapped.inclusion) els.inclusion.value = mapped.inclusion;
  if (mapped.assessment) els.assessment.value = isPartialAi && els.assessment.value.trim() && !/evid[eè]nc|instrument|retorn/i.test(mapped.assessment) ? joinNonEmpty([els.assessment.value, mapped.assessment]) : mapped.assessment;

  if (isAi && detected < 2 && text) {
    const existing = els.challenge.value.trim();
    els.challenge.value = joinNonEmpty([existing, `Esborrany IA complet pendent de mapatge automàtic:\n\n${text.slice(0, 12000)}`]);
  } else if (!isAi && detected < 2 && text) {
    els.challenge.value = `${kind} importat: ${filename}\n\n${text.slice(0, 5000)}`;
  }

  if (els.importStatus) {
    const msg = `${kind} importat: ${filename}. Text recuperat: ${String(text || '').length.toLocaleString('ca-ES')} caràcters. Camps detectats: ${detected}.`;
    els.importStatus.textContent = detected < 2 ? msg + ' No he pogut separar prou apartats; he conservat el text complet al repte.' : msg + ' Importació per seccions aplicada.';
  }
  renderReport(getFormData());
  renderAiValidation(validateSaQuality(getFormData()));
}



// ===== v1.5: importacio TXT robusta per SA completes =====
function stripInlineMarkup(value) {
  return String(value || '')
    .replace(/^\s*[-*•]\s*/, '')
    .replace(/^\s*\d+(?:\.\d+)*[).:-]?\s*/, '')
    .replace(/^\s*\*\*|\*\*\s*$/g, '')
    .replace(/^\s*__|__\s*$/g, '')
    .trim();
}

function normalizeHeaderForImport(value) {
  return stripHeadingDecoration(stripInlineMarkup(value))
    .replace(/\bDE LA SITUACIO D APRENENTATGE\b/g, '')
    .replace(/\bDE L APRENENTATGE\b/g, '')
    .replace(/\bLOMLOE\b/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function canonicalDraftLabel(line) {
  const cleaned = stripInlineMarkup(line).replace(/[:：]\s*$/, '').trim();
  const n = normalizeHeaderForImport(cleaned);
  const pairs = [
    ['SITUACIO D APRENENTATGE', 'TÍTOL'], ['TITOL', 'TÍTOL'],
    ['CURS', 'CURS'], ['NIVELL', 'CURS'], ['NIVELL EDUCATIU', 'CURS'],
    ['MATERIA', 'MATÈRIA'], ['AREA MATERIA O AMBIT', 'MATÈRIA'], ['AMBIT MATERIA', 'MATÈRIA'],
    ['DURADA', 'DURADA'], ['TEMPORITZACIO', 'DURADA'],
    ['CONTEXT', 'CONTEXT'], ['DESCRIPCIO CONTEXT I REPTE', 'CONTEXT'], ['DESCRIPCIO', 'CONTEXT'],
    ['JUSTIFICACIO', 'JUSTIFICACIÓ'], ['REPTE', 'REPTE'], ['PRODUCTE FINAL', 'PRODUCTE FINAL'],
    ['OBJECTIUS D APRENENTATGE', 'OBJECTIUS D’APRENENTATGE'], ['OBJECTIUS', 'OBJECTIUS D’APRENENTATGE'],
    ['COMPETENCIES CLAU I ESPECIFIQUES', 'COMPETÈNCIES ESPECÍFIQUES'], ['COMPETENCIES ESPECIFIQUES', 'COMPETÈNCIES ESPECÍFIQUES'], ['COMPETENCIES CLAU', 'COMPETÈNCIES ESPECÍFIQUES'], ['CE', 'COMPETÈNCIES ESPECÍFIQUES'],
    ['CRITERIS D AVALUACIO', 'CRITERIS D’AVALUACIÓ'], ['CRITERIS AVALUACIO', 'CRITERIS D’AVALUACIÓ'], ['CA', 'CRITERIS D’AVALUACIÓ'],
    ['SABERS CONTINGUTS', 'SABERS CONCRETS'], ['SABERS I CONTINGUTS', 'SABERS CONCRETS'], ['SABERS', 'SABERS CONCRETS'], ['CONTINGUTS', 'SABERS CONCRETS'], ['SABERS CONCRETS', 'SABERS CONCRETS'], ['BLOCS DE SABERS', 'BLOCS DE SABERS'], ['BLOCS', 'BLOCS DE SABERS'],
    ['METODOLOGIA', 'METODOLOGIA'], ['ORGANITZACIO DE L AULA', 'ORGANITZACIÓ DE L’AULA'], ['ORGANITZACIO', 'ORGANITZACIÓ DE L’AULA'], ['RECURSOS', 'RECURSOS'], ['MATERIALS I EINES', 'RECURSOS'],
    ['SEQUENCIA D ACTIVITATS', 'SEQÜÈNCIA D’ACTIVITATS'], ['SEQUENCIA D ACTIVITATS D APRENENTATGE I D AVALUACIO', 'SEQÜÈNCIA D’ACTIVITATS'], ['ACTIVITATS D APRENENTATGE I D AVALUACIO', 'SEQÜÈNCIA D’ACTIVITATS'],
    ['FASE 1', 'SEQÜÈNCIA D’ACTIVITATS'], ['FASE 2', 'SEQÜÈNCIA D’ACTIVITATS'], ['FASE 3', 'SEQÜÈNCIA D’ACTIVITATS'], ['FASE 4', 'SEQÜÈNCIA D’ACTIVITATS'],
    ['INICIALS', 'INICIALS'], ['ACTIVITATS INICIALS', 'INICIALS'], ['QUE EN SABEM', 'INICIALS'],
    ['DESENVOLUPAMENT', 'DESENVOLUPAMENT'], ['ACTIVITATS DE DESENVOLUPAMENT', 'DESENVOLUPAMENT'],
    ['ESTRUCTURACIO', 'ESTRUCTURACIÓ'], ['QUE HEM APRES', 'ESTRUCTURACIÓ'],
    ['APLICACIO', 'APLICACIÓ'], ['APLIQUEM EL QUE HEM APRES', 'APLICACIÓ'],
    ['MESURES I SUPORTS PER A L ATENCIO A LA DIVERSITAT', 'MESURES I SUPORTS'], ['MESURES I SUPORTS', 'MESURES I SUPORTS'], ['ATENCIO A LA DIVERSITAT', 'MESURES I SUPORTS'], ['MESURES UNIVERSALS', 'MESURES I SUPORTS'],
    ['ADAPTACIONS TDAH', 'ADAPTACIONS TDAH'], ['TDAH', 'ADAPTACIONS TDAH'], ['ADAPTACIONS TEA', 'ADAPTACIONS TEA'], ['TEA', 'ADAPTACIONS TEA'], ['ADAPTACIONS DISLEXIA', 'ADAPTACIONS DISLÈXIA'], ['DISLEXIA', 'ADAPTACIONS DISLÈXIA'], ['ADAPTACIONS TDL', 'ADAPTACIONS TDL'], ['TDL', 'ADAPTACIONS TDL'],
    ['EVIDENCIES D APRENENTATGE', 'EVIDÈNCIES'], ['EVIDENCIES', 'EVIDÈNCIES'], ['INSTRUMENTS D AVALUACIO', 'INSTRUMENTS'], ['INSTRUMENTS', 'INSTRUMENTS'], ['RETORN I MILLORA', 'RETORN I MILLORA'], ['FEEDBACK I MILLORA', 'RETORN I MILLORA'],
    ['VECTORS DEL CURRICULUM', 'VECTORS'], ['VECTORS', 'VECTORS'],
    ['RUBRICA D AVALUACIO', 'RÚBRICA'], ['RUBRICA', 'RÚBRICA']
  ];
  for (const [key, val] of pairs) {
    if (n === key) return val;
    if (key.length > 14 && n.startsWith(key + ' ')) return val;
  }
  return '';
}

function splitDraftIntoSections(text) {
  const normalized = normalizeDraftForParsing(text).replace(/\r/g, '');
  const lines = normalized.split('\n');
  const sections = {};
  let current = '';
  const add = (label, value) => {
    const clean = cleanImportedValue(value);
    if (!label || !clean) return;
    sections[label] = sections[label] ? `${sections[label]}\n${clean}` : clean;
  };
  const setCurrent = (label) => {
    current = label;
    if (!sections[current]) sections[current] = '';
  };

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) {
      if (current && sections[current] && !sections[current].endsWith('\n')) sections[current] += '\n';
      continue;
    }

    const inline = trimmed.match(/^([^:：]{2,140})[:：]\s*(.*)$/);
    if (inline) {
      const label = canonicalDraftLabel(inline[1]);
      if (label) {
        setCurrent(label);
        if (inline[2].trim()) add(label, inline[2]);
        continue;
      }
    }

    const label = canonicalDraftLabel(trimmed);
    if (label) {
      setCurrent(label);
      continue;
    }

    if (current) add(current, line);
  }

  Object.keys(sections).forEach(k => { sections[k] = cleanImportedValue(sections[k]); });
  return sections;
}

function detectLevelFromText(text) {
  const raw = String(text || '');
  const candidates = [
    raw.match(/\b([1234][rnrt])\s*(?:d['’]?\s*)?ESO\b/i),
    raw.match(/\bESO\s*([1234])\b/i),
    raw.match(/\beso([1234])\b/i)
  ];
  for (const m of candidates) {
    if (!m) continue;
    const v = m[1].toLowerCase();
    if (v === '1' || v === '1r') return '1r ESO';
    if (v === '2' || v === '2n') return '2n ESO';
    if (v === '3' || v === '3r') return '3r ESO';
    if (v === '4' || v === '4t') return '4t ESO';
  }
  return '';
}

function detectSubjectFromText(text, sections) {
  const materia = getSection(sections, 'MATÈRIA');
  if (materia) return materia.split('\n')[0].replace(/\s*\([^)]*ESO[^)]*\)\s*/i, '').trim();
  const m = String(text || '').match(/^\s*Mat[eè]ria\s*[:：]\s*([^\n(]+)(?:\s*\([^)]*\))?/im);
  return m ? cleanImportedValue(m[1]) : '';
}

function extractImportedTitle(text, sections) {
  const fromSection = getSection(sections, 'TÍTOL');
  if (fromSection) return cleanImportedValue(fromSection.split('\n')[0]);
  const m = String(text || '').match(/^\s*SITUACI[ÓO]\s+D['’]?APRENENTATGE\s*[:：]\s*(.+)$/im);
  return m ? cleanImportedValue(m[1]) : '';
}

function extractSequencePhases(value) {
  const txt = cleanImportedValue(value);
  if (!txt) return {};
  const phaseRegex = /^\s*-?\s*(Fase\s*\d+\s*[:：][^\n]*)\n?/gim;
  const matches = [...txt.matchAll(phaseRegex)];
  if (!matches.length) return { global: txt };
  const out = {};
  for (let i = 0; i < matches.length; i++) {
    const start = matches[i].index;
    const end = i + 1 < matches.length ? matches[i + 1].index : txt.length;
    const block = cleanImportedValue(txt.slice(start, end));
    const idx = i === 0 ? 'inicials' : i === 1 ? 'desenvolupament' : i === 2 ? 'estructuracio' : 'aplicacio';
    out[idx] = block;
  }
  return out;
}

function mapImportedTemplateText(text) {
  const sections = splitDraftIntoSections(text);
  const title = extractImportedTitle(text, sections);
  const level = normalizeLevel(getSection(sections, 'CURS')) || detectLevelFromText(getSection(sections, 'MATÈRIA')) || detectLevelFromText(text);
  const subject = detectSubjectFromText(text, sections);
  const duration = getSection(sections, 'DURADA');
  const context = getSection(sections, 'CONTEXT');
  const repte = getSection(sections, 'REPTE');
  const justificacio = getSection(sections, 'JUSTIFICACIÓ');
  const producte = getSection(sections, 'PRODUCTE FINAL');
  const ce = getSection(sections, 'COMPETÈNCIES ESPECÍFIQUES');
  const ca = getSection(sections, 'CRITERIS D’AVALUACIÓ');
  const objectius = getSection(sections, 'OBJECTIUS D’APRENENTATGE');
  const blocs = getSection(sections, 'BLOCS DE SABERS');
  const sabers = getSection(sections, 'SABERS CONCRETS');
  const metodologia = getSection(sections, 'METODOLOGIA');
  const organitzacio = getSection(sections, 'ORGANITZACIÓ DE L’AULA');
  const recursos = getSection(sections, 'RECURSOS');
  const sequenciaGlobal = getSection(sections, 'SEQÜÈNCIA D’ACTIVITATS');
  const phases = extractSequencePhases(sequenciaGlobal);
  const inicials = getSection(sections, 'INICIALS') || phases.inicials || '';
  const desenvolupament = getSection(sections, 'DESENVOLUPAMENT') || phases.desenvolupament || '';
  const estructuracio = getSection(sections, 'ESTRUCTURACIÓ') || phases.estructuracio || '';
  const aplicacio = getSection(sections, 'APLICACIÓ') || phases.aplicacio || '';
  const measures = getSection(sections, 'MESURES I SUPORTS');
  const tdah = getSection(sections, 'ADAPTACIONS TDAH');
  const tea = getSection(sections, 'ADAPTACIONS TEA');
  const dislexia = getSection(sections, 'ADAPTACIONS DISLÈXIA');
  const tdl = getSection(sections, 'ADAPTACIONS TDL');
  const evidencies = getSection(sections, 'EVIDÈNCIES');
  const instruments = getSection(sections, 'INSTRUMENTS');
  const retorn = getSection(sections, 'RETORN I MILLORA');
  const vectors = getSection(sections, 'VECTORS');
  const rubrica = getSection(sections, 'RÚBRICA');

  return {
    title, level, subject, duration,
    challenge: joinNonEmpty([context && `Context: ${context}`, repte && `Repte: ${repte}`, justificacio && `Justificació: ${justificacio}`, producte && `Producte final: ${producte}`]),
    competences: joinNonEmpty([ce && `Competències específiques i clau: ${ce}`, ca && `Criteris d’avaluació: ${ca}`, objectius && `Objectius d’aprenentatge: ${objectius}`]),
    knowledge: joinNonEmpty([blocs && `Blocs de sabers: ${blocs}`, sabers && `Sabers / continguts: ${sabers}`]),
    sequence: joinNonEmpty([metodologia && `Metodologia: ${metodologia}`, organitzacio && `Organització de l’aula: ${organitzacio}`, recursos && `Recursos: ${recursos}`, phases.global && `Seqüència d’activitats: ${phases.global}`, inicials && `Inicials: ${inicials}`, desenvolupament && `Desenvolupament: ${desenvolupament}`, estructuracio && `Estructuració: ${estructuracio}`, aplicacio && `Aplicació: ${aplicacio}`]),
    inclusion: joinNonEmpty([measures && `Mesures i suports: ${measures}`, tdah && `TDAH: ${tdah}`, tea && `TEA: ${tea}`, dislexia && `Dislèxia: ${dislexia}`, tdl && `TDL: ${tdl}`]),
    assessment: joinNonEmpty([evidencies && `Evidències: ${evidencies}`, instruments && `Instruments: ${instruments}`, retorn && `Retorn i millora: ${retorn}`, vectors && `Vectors: ${vectors}`, rubrica && `Rúbrica: ${rubrica}`])
  };
}

function parseRubricRowsFromAssessment(text) {
  const src = String(text || '');
  const rubricStart = src.search(/R[úu]brica\s*:/i);
  const rubricText = rubricStart >= 0 ? src.slice(rubricStart) : src;
  const blocks = rubricText.split(/(?=CRITERI\s+LOMLOE\s*[:：])/i).filter(b => /CRITERI\s+LOMLOE/i.test(b));
  const rows = [];
  for (const block of blocks) {
    const criteri = cleanImportedValue((block.match(/CRITERI\s+LOMLOE\s*[:：]\s*([^\n]+)/i) || [,''])[1]);
    const item = cleanImportedValue((block.match(/[ÍI]TEM\s*[:：]\s*([^\n]+)/i) || [,''])[1]);
    const pick = (label) => {
      const re = new RegExp('(?:No\\s+Assolit\\s*\\(NA\\)|Assolit\\s+Satisfactori\\s*\\(AS\\)|Assolit\\s+Notable\\s*\\(AN\\)|Assolit\\s+Excel[·l\\.]*lent\\s*\\(AE\\)|' + label + ')\\s*[:：]\\s*([\\s\\S]*?)(?=\\n\\s*-?\\s*(?:No\\s+Assolit\\s*\\(NA\\)|Assolit\\s+Satisfactori\\s*\\(AS\\)|Assolit\\s+Notable\\s*\\(AN\\)|Assolit\\s+Excel[·l\\.]*lent\\s*\\(AE\\)|CRITERI\\s+LOMLOE|ÍTEM|ITEM)\\s*[:：]|$)', 'i');
      const m = block.match(re);
      return cleanImportedValue(m ? m[1].replace(/^[-*]\s*/, '') : '');
    };
    let na = '', as = '', an = '', ae = '';
    const lines = block.split('\n');
    for (const line of lines) {
      const l = line.trim().replace(/^[-*]\s*/, '');
      if (/^No\s+Assolit\s*\(NA\)\s*[:：]/i.test(l)) na = cleanImportedValue(l.replace(/^No\s+Assolit\s*\(NA\)\s*[:：]\s*/i, ''));
      if (/^Assolit\s+Satisfactori\s*\(AS\)\s*[:：]/i.test(l)) as = cleanImportedValue(l.replace(/^Assolit\s+Satisfactori\s*\(AS\)\s*[:：]\s*/i, ''));
      if (/^Assolit\s+Notable\s*\(AN\)\s*[:：]/i.test(l)) an = cleanImportedValue(l.replace(/^Assolit\s+Notable\s*\(AN\)\s*[:：]\s*/i, ''));
      if (/^Assolit\s+Excel[·l\.]*lent\s*\(AE\)\s*[:：]/i.test(l)) ae = cleanImportedValue(l.replace(/^Assolit\s+Excel[·l\.]*lent\s*\(AE\)\s*[:：]\s*/i, ''));
    }
    if (!na) na = pick('NA');
    if (!as) as = pick('AS');
    if (!an) an = pick('AN');
    if (!ae) ae = pick('AE');
    if (criteri || item || na || as || an || ae) rows.push({ criteri: criteri || '—', item: item || 'Ítem d’avaluació', na, as, an, ae });
  }
  return rows;
}

function buildRubricRows(data, criteriaCodes) {
  const imported = parseRubricRowsFromAssessment(data && data.assessment);
  if (imported.length) return imported;
  const codes = criteriaCodes && criteriaCodes.length ? criteriaCodes : ['1.1', '2.1', '3.1', '4.1', '5.1', '6.1'];
  const base = [
    ['Comprensió del repte', 'identifica parcialment el problema i necessita molta guia', 'identifica els elements bàsics del repte', 'analitza el repte i justifica decisions amb evidències', 'analitza amb profunditat, transfereix i proposa millores'],
    ['Aplicació de sabers', 'aplica sabers de manera incompleta o amb errors importants', 'aplica procediments bàsics amb suport', 'aplica sabers de manera coherent i força autònoma', 'aplica sabers amb autonomia, precisió i criteri'],
    ['Planificació i procés', 'planifica poc i registra poques evidències', 'segueix una planificació bàsica', 'organitza el procés, revisa i millora', 'planifica amb rigor i anticipa riscos o alternatives'],
    ['Producte final', 'el producte és incomplet o poc funcional', 'el producte respon parcialment al repte', 'el producte és funcional i ben justificat', 'el producte és funcional, creatiu i molt ben optimitzat'],
    ['Comunicació', 'comunica amb poca claredat i vocabulari limitat', 'explica les idees principals', 'comunica amb estructura, evidències i vocabulari adequat', 'comunica amb rigor, fluïdesa i llenguatge tècnic ric'],
    ['Reflexió i millora', 'identifica poques millores', 'accepta retorn i fa algun ajust', 'usa el retorn per millorar el procés i el producte', 'integra retorn, autoavaluació i proposta de transferència']
  ];
  return base.map((row, i) => ({ criteri: codes[i] || codes[codes.length - 1] || '—', item: row[0], na: row[1], as: row[2], an: row[3], ae: row[4] }));
}



// ===== v1.6: importacio TXT amb tall estricte d'apartats, durada inferida i rubrica separada =====
function normalizeImportKeyV16(value) {
  return String(value || '')
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[’']/g, ' ')
    .replace(/\([^)]*\)/g, ' ')
    .replace(/[^A-Za-z0-9]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .toUpperCase();
}

function canonicalHeaderV16(label) {
  const k = normalizeImportKeyV16(label);
  if (!k) return '';
  const tests = [
    [/^SITUACIO D APRENENTATGE$/, 'TÍTOL'], [/^TITOL$/, 'TÍTOL'],
    [/^(CURS|NIVELL|NIVELL EDUCATIU)$/, 'CURS'],
    [/^(MATERIA|AREA MATERIA AMBIT|AREA MATERIA O AMBIT|AMBIT MATERIA)$/, 'MATÈRIA'],
    [/^(DURADA|TEMPORITZACIO|TEMPORALITZACIO)$/, 'DURADA'],
    [/^(CONTEXT|DESCRIPCIO|DESCRIPCIO CONTEXT I REPTE)$/, 'CONTEXT'],
    [/^JUSTIFICACIO$/, 'JUSTIFICACIÓ'], [/^REPTE$/, 'REPTE'], [/^PRODUCTE FINAL$/, 'PRODUCTE FINAL'],
    [/^(OBJECTIUS|OBJECTIUS D APRENENTATGE)$/, 'OBJECTIUS D’APRENENTATGE'],
    [/^(COMPETENCIES CLAU I ESPECIFIQUES|COMPETENCIES ESPECIFIQUES|COMPETENCIES CLAU|CE)$/, 'COMPETÈNCIES ESPECÍFIQUES'],
    [/^(CRITERIS D AVALUACIO|CRITERIS AVALUACIO|CA)$/, 'CRITERIS D’AVALUACIÓ'],
    [/^(SABERS CONTINGUTS|SABERS I CONTINGUTS|SABERS|CONTINGUTS|SABERS CONCRETS)$/, 'SABERS CONCRETS'],
    [/^(BLOCS DE SABERS|BLOCS)$/, 'BLOCS DE SABERS'],
    [/^METODOLOGIA$/, 'METODOLOGIA'],
    [/^(ORGANITZACIO|ORGANITZACIO DE L AULA)$/, 'ORGANITZACIÓ DE L’AULA'],
    [/^(RECURSOS|MATERIALS I EINES|MATERIALS|EINES)$/, 'RECURSOS'],
    [/^(SEQUENCIA D ACTIVITATS|SEQUENCIA D ACTIVITATS D APRENENTATGE I D AVALUACIO|ACTIVITATS D APRENENTATGE I D AVALUACIO)$/, 'SEQÜÈNCIA D’ACTIVITATS'],
    [/^(ACTIVITATS INICIALS|INICIALS|QUE EN SABEM)$/, 'INICIALS'],
    [/^(ACTIVITATS DE DESENVOLUPAMENT|DESENVOLUPAMENT|APRENEM NOUS CONTINGUTS)$/, 'DESENVOLUPAMENT'],
    [/^(ESTRUCTURACIO|ACTIVITATS D ESTRUCTURACIO|QUE HEM APRES)$/, 'ESTRUCTURACIÓ'],
    [/^(APLICACIO|ACTIVITATS D APLICACIO|APLIQUEM EL QUE HEM APRES)$/, 'APLICACIÓ'],
    [/^(MESURES I SUPORTS PER A L ATENCIO A LA DIVERSITAT|MESURES I SUPORTS|ATENCIO A LA DIVERSITAT|MESURES UNIVERSALS)$/, 'MESURES I SUPORTS'],
    [/^(ADAPTACIONS TDAH|TDAH)$/, 'ADAPTACIONS TDAH'], [/^(ADAPTACIONS TEA|TEA)$/, 'ADAPTACIONS TEA'],
    [/^(ADAPTACIONS DISLEXIA|DISLEXIA)$/, 'ADAPTACIONS DISLÈXIA'], [/^(ADAPTACIONS TDL|TDL)$/, 'ADAPTACIONS TDL'],
    [/^(EVIDENCIES D APRENENTATGE|EVIDENCIES)$/, 'EVIDÈNCIES'],
    [/^(INSTRUMENTS D AVALUACIO|INSTRUMENTS)$/, 'INSTRUMENTS'],
    [/^(RETORN I MILLORA|FEEDBACK I MILLORA|RETORN)$/, 'RETORN I MILLORA'],
    [/^(VECTORS DEL CURRICULUM|VECTORS)$/, 'VECTORS'],
    [/^(RUBRICA D AVALUACIO|RUBRICA D AVALUACIO DE LA SITUACIO D APRENENTATGE|RUBRICA)$/, 'RÚBRICA']
  ];
  for (const [re, labelOut] of tests) if (re.test(k)) return labelOut;
  return '';
}

function splitDraftIntoSections(text) {
  const raw = String(text || '').replace(/\r/g, '');
  const lines = raw.split('\n');
  const sections = {};
  let current = '';
  const commit = (label, value) => {
    const clean = cleanImportedValue(value);
    if (!label || !clean) return;
    sections[label] = sections[label] ? `${sections[label]}\n${clean}` : clean;
  };
  const switchTo = (label) => { current = label; if (!sections[current]) sections[current] = ''; };

  for (const originalLine of lines) {
    const line = originalLine.trim();
    if (!line) { if (current && sections[current] && !sections[current].endsWith('\n')) sections[current] += '\n'; continue; }

    const inline = line.match(/^([^:：]{2,150})[:：]\s*(.*)$/);
    if (inline) {
      const header = canonicalHeaderV16(inline[1]);
      if (header) {
        switchTo(header);
        if (inline[2].trim()) commit(header, inline[2]);
        continue;
      }
    }

    const standalone = canonicalHeaderV16(line.replace(/[:：]\s*$/, ''));
    if (standalone) { switchTo(standalone); continue; }

    // Les entrades de rubrica amb dos punts no son nous apartats; es conserven dins de la rubrica.
    if (current) commit(current, originalLine);
  }
  Object.keys(sections).forEach(k => { sections[k] = cleanImportedValue(sections[k]); });
  return sections;
}

function detectSubjectFromText(text, sections) {
  const rawLine = String(text || '').match(/^\s*Mat[eè]ria\s*[:：]\s*([^\n]+)/im);
  if (rawLine) {
    return cleanImportedValue(rawLine[1]
      .replace(/\([^)]*ESO[^)]*\)/ig, '')
      .replace(/\bAlineat\s+amb\s+la\s+LOMLOE\b/ig, '')
      .trim());
  }
  const materia = getSection(sections, 'MATÈRIA');
  if (materia) {
    return cleanImportedValue(materia.split('\n')[0]
      .replace(/\([^)]*ESO[^)]*\)/ig, '')
      .replace(/\bAlineat\s+amb\s+la\s+LOMLOE\b/ig, '')
      .trim());
  }
  return '';
}

function inferDurationFromTextV16(text) {
  const explicit = String(text || '').match(/^\s*DURADA\s*[:：]\s*([^\n]+)/im);
  if (explicit) return cleanImportedValue(explicit[1]);
  let total = 0;
  const seen = [];
  const re = /\b(?:Fase\s*\d+[^\n]*?[(:-]\s*)?(\d+)\s*hores?\b/gi;
  let m;
  while ((m = re.exec(String(text || ''))) !== null) {
    const before = String(text || '').slice(Math.max(0, m.index - 40), m.index);
    if (/durada\s*[:：]\s*$/i.test(before)) continue;
    const n = Number(m[1]);
    if (Number.isFinite(n) && n > 0 && n < 60) { total += n; seen.push(n); }
  }
  return total > 0 ? `${total} hores${seen.length > 1 ? `, distribuïdes en ${seen.length} fases` : ''}` : '';
}

function inferInstrumentsV16(evidencies, rubrica) {
  const e = String(evidencies || '');
  const items = [];
  if (/dossier|bit[aà]cola/i.test(e)) items.push('Dossier d’aula i llibre de bitàcola');
  if (/pl[aà]nol|croquis/i.test(e)) items.push('Revisió de croquis i plànols tècnics');
  if (/prototip|maqueta|producte/i.test(e)) items.push('Observació del prototip i prova funcional');
  if (/presentaci[oó]|oral|exposici[oó]/i.test(e)) items.push('Presentació oral amb pauta d’observació');
  if (/coavaluaci[oó]/i.test(String(rubrica || '') + e)) items.push('Coavaluació entre equips');
  items.push('Quadre NA/AS/AN/AE vinculat als criteris LOMLOE');
  return [...new Set(items)].join('\n');
}

function inferRetornV16(sequence, evidencies) {
  return joinNonEmpty([
    'Feedback formatiu durant el disseny i la construcció.',
    /test|prova|rectificar|millora/i.test(String(sequence || '') + String(evidencies || '')) ? 'Revisió del prototip després dels testos de funcionament i millora iterativa.' : '',
    'Coavaluació entre grups i revisió final abans de la presentació.',
    'Autoavaluació breu sobre el procés, el rol dins l’equip i les millores aplicades.'
  ]);
}

function removeRubricAndVectorsFromEvidencesV16(value) {
  return cleanImportedValue(String(value || '')
    .replace(/\n?\s*VECTORS\s+DEL\s+CURR[ÍI]CULUM\s*[:：]?[\s\S]*$/i, '')
    .replace(/\n?\s*R[ÚU]BRICA\s+D['’]?AVALUACI[ÓO][\s\S]*$/i, '')
    .replace(/\n?\s*CRITERI\s+LOMLOE\s*[:：][\s\S]*$/i, '')
  );
}

function mapImportedTemplateText(text) {
  const sections = splitDraftIntoSections(text);
  const title = extractImportedTitle(text, sections);
  const level = normalizeLevel(getSection(sections, 'CURS')) || detectLevelFromText(getSection(sections, 'MATÈRIA')) || detectLevelFromText(text);
  const subject = detectSubjectFromText(text, sections);
  const duration = getSection(sections, 'DURADA') || inferDurationFromTextV16(text);
  const context = getSection(sections, 'CONTEXT');
  const repte = getSection(sections, 'REPTE');
  const justificacio = getSection(sections, 'JUSTIFICACIÓ');
  const producte = getSection(sections, 'PRODUCTE FINAL');
  const ce = getSection(sections, 'COMPETÈNCIES ESPECÍFIQUES');
  const ca = getSection(sections, 'CRITERIS D’AVALUACIÓ');
  const objectius = getSection(sections, 'OBJECTIUS D’APRENENTATGE');
  const blocs = getSection(sections, 'BLOCS DE SABERS');
  const sabers = getSection(sections, 'SABERS CONCRETS');
  const metodologia = getSection(sections, 'METODOLOGIA');
  const organitzacio = getSection(sections, 'ORGANITZACIÓ DE L’AULA');
  const recursos = getSection(sections, 'RECURSOS');
  const sequenciaGlobal = getSection(sections, 'SEQÜÈNCIA D’ACTIVITATS');
  const phases = extractSequencePhases(sequenciaGlobal);
  const inicials = getSection(sections, 'INICIALS') || phases.inicials || '';
  const desenvolupament = getSection(sections, 'DESENVOLUPAMENT') || phases.desenvolupament || '';
  const estructuracio = getSection(sections, 'ESTRUCTURACIÓ') || phases.estructuracio || '';
  const aplicacio = getSection(sections, 'APLICACIÓ') || phases.aplicacio || '';
  const measures = getSection(sections, 'MESURES I SUPORTS');
  const tdah = getSection(sections, 'ADAPTACIONS TDAH');
  const tea = getSection(sections, 'ADAPTACIONS TEA');
  const dislexia = getSection(sections, 'ADAPTACIONS DISLÈXIA');
  const tdl = getSection(sections, 'ADAPTACIONS TDL');
  const rawEvidencies = getSection(sections, 'EVIDÈNCIES');
  const vectors = getSection(sections, 'VECTORS');
  const rubrica = getSection(sections, 'RÚBRICA');
  const evidencies = removeRubricAndVectorsFromEvidencesV16(rawEvidencies);
  const instruments = getSection(sections, 'INSTRUMENTS') || inferInstrumentsV16(evidencies, rubrica);
  const retorn = getSection(sections, 'RETORN I MILLORA') || inferRetornV16(sequenciaGlobal, evidencies);

  return {
    title, level, subject, duration,
    challenge: joinNonEmpty([context && `Context: ${context}`, repte && `Repte: ${repte}`, justificacio && `Justificació: ${justificacio}`, producte && `Producte final: ${producte}`]),
    competences: joinNonEmpty([ce && `Competències específiques i clau: ${ce}`, ca && `Criteris d’avaluació: ${ca}`, objectius && `Objectius d’aprenentatge: ${objectius}`]),
    knowledge: joinNonEmpty([blocs && `Blocs de sabers: ${blocs}`, sabers && `Sabers / continguts: ${sabers}`]),
    sequence: joinNonEmpty([metodologia && `Metodologia: ${metodologia}`, organitzacio && `Organització de l’aula: ${organitzacio}`, recursos && `Recursos: ${recursos}`, phases.global && `Seqüència d’activitats: ${phases.global}`, inicials && `Inicials: ${inicials}`, desenvolupament && `Desenvolupament: ${desenvolupament}`, estructuracio && `Estructuració: ${estructuracio}`, aplicacio && `Aplicació: ${aplicacio}`]),
    inclusion: joinNonEmpty([measures && `Mesures i suports: ${measures}`, tdah && `TDAH: ${tdah}`, tea && `TEA: ${tea}`, dislexia && `Dislèxia: ${dislexia}`, tdl && `TDL: ${tdl}`]),
    assessment: joinNonEmpty([evidencies && `Evidències: ${evidencies}`, instruments && `Instruments: ${instruments}`, retorn && `Retorn i millora: ${retorn}`, rubrica && `Rúbrica: ${rubrica}`, vectors && `Vectors: ${vectors}`])
  };
}


function extractAssessmentParts(text) {
  return extractLabeled(text, {
    evidencies: ['Evidències', 'Evidencies'],
    instruments: ['Instruments'],
    retorn: ['Retorn i millora', 'Retorn'],
    rubrica: ['Rúbrica', 'Rubrica'],
    vectors: ['Vectors']
  });
}

// ===== v1.9: paquet local de plantilles Tecnologia i Digitalització 2n ESO =====
const LOCAL_TECH_2ESO_SA = [
  {
    schema: 'docentkit.sa.v1', tipus: 'situacio_aprenentatge', idioma: 'ca', normativa: 'LOMLOE',
    titol: 'Dibuix assistit per ordinador i impressió 3D', subtitol: 'Del model digital a l’objecte físic', etapa: 'ESO', curs: '2n ESO', materia: 'Tecnologia i Digitalització', ambit: 'Tecnologia',
    durada: { total: '16 hores', sessions: 8 },
    context: 'L’alumnat parteix d’objectes quotidians i del disseny digital per comprendre com una idea es pot transformar en un model 3D i posteriorment en una peça física. La situació connecta el CAD, la impressió 3D, l’accessibilitat del centre i la sostenibilitat dels processos de fabricació.',
    justificacio: 'El treball amb CAD i impressió 3D desenvolupa la visió espacial, el dibuix tècnic, el procés tecnològic i la fabricació digital. Permet abordar el disseny com a resposta a una necessitat real i fomenta l’ús responsable de tecnologies emergents.',
    repte: 'Com podem dissenyar un clauer personalitzat i fabricar-lo de manera eficient amb una impressora 3D?',
    producte_final: 'Clauer funcional fabricat amb impressió 3D, acompanyat del model digital, croquis, fitxa tècnica i una breu justificació del disseny.',
    competencies_especifiques: [
      { codi: 'CE2', materia: 'Tecnologia i Digitalització', descripcio: 'Abordar problemes tecnològics amb autonomia, treballant en equip en la recerca i disseny de solucions.' },
      { codi: 'CE3', materia: 'Tecnologia i Digitalització', descripcio: 'Dissenyar, construir i avaluar prototips aplicant coneixements tecnològics.' }
    ],
    criteris_avaluacio: [
      { codi: '2.1', competencia: 'CE2', descripcio: 'Identificar necessitats i proposar solucions creatives mitjançant tecnologies de disseny i fabricació.' },
      { codi: '3.1', competencia: 'CE3', descripcio: 'Dissenyar models, croquis, vistes i acotacions amb criteris tècnics.' },
      { codi: '3.2', competencia: 'CE3', descripcio: 'Construir o fabricar prototips utilitzant eines digitals de manera segura i eficient.' }
    ],
    objectius_aprenentatge: [
      { id: 'OA1', objectiu: 'Comprendre els fonaments del dibuix tècnic aplicats al CAD.', criteris_relacionats: ['3.1'] },
      { id: 'OA2', objectiu: 'Crear un model 3D imprimible respectant dimensions i requisits funcionals.', criteris_relacionats: ['3.1','3.2'] },
      { id: 'OA3', objectiu: 'Valorar aplicacions i impactes de la impressió 3D en contextos reals.', criteris_relacionats: ['2.1'] }
    ],
    sabers: { blocs: ['Dibuix tècnic i CAD', 'Fabricació digital', 'Procés tecnològic', 'Sostenibilitat'], continguts: ['Dibuix assistit per ordinador.', 'Fonaments del dibuix tècnic.', 'Disseny 3D: de la idea al model.', 'Introducció a la impressió 3D.', 'Del model digital a l’objecte.', 'Aplicacions i impacte de la impressió 3D.', 'Navegació pel World Wide Web.'] },
    sequencia_activitats: [
      { fase: 'Inicials', titol: 'Context i exploració', durada: '4 hores', activitats: ['Presentació del repte.', 'Anàlisi de clauers i peces impreses.', 'Recerca d’aplicacions d’impressió 3D i ODS.', 'Sopa de lletres o mapa mental de conceptes.'], evidencies: ['Fitxa d’anàlisi', 'Mapa mental inicial'] },
      { fase: 'Desenvolupament', titol: 'Disseny CAD', durada: '4 hores', activitats: ['Aprenentatge d’eines bàsiques CAD.', 'Croquis i acotació.', 'Modelatge del clauer.', 'Exportació STL.'], evidencies: ['Croquis acotat', 'Model 3D'] },
      { fase: 'Estructuració', titol: 'Preparació i impressió', durada: '4 hores', activitats: ['Laminat del model.', 'Revisió de paràmetres.', 'Impressió i control de qualitat.', 'Registre d’incidències.'], evidencies: ['G-code o configuració', 'Peça impresa'] },
      { fase: 'Aplicació', titol: 'Accessibilitat i millora', durada: '4 hores', activitats: ['Projecte “Un institut més accessible gràcies a la impressió 3D”.', 'DAFO del disseny.', 'Presentació del producte.', 'Autoavaluació i coavaluació.'], evidencies: ['Informe DAFO', 'Presentació final'] }
    ],
    mesures_i_suports: { universals: ['Guies visuals pas a pas.', 'Models d’exemple.', 'Checklists de seguretat.', 'Rols cooperatius.'], tdah: ['Tasques curtes i temporitzades.', 'Objectius visibles per sessió.'], tea: ['Anticipació de la interfície i del procés.', 'Mides i requisits molt explícits.'], dislexia: ['Icones i suport visual.', 'Possibilitat de vídeo explicatiu.'], tdl: ['Glossari visual de termes CAD.', 'Frases model per descriure el disseny.'] },
    avaluacio: { evidencies: ['Croquis acotat.', 'Model 3D.', 'Clauer imprès.', 'DAFO i presentació.'], instruments: ['Rúbrica de disseny 3D.', 'Llista de control de seguretat.', 'Autoavaluació i coavaluació.'], retorn_i_millora: ['Feedback durant el modelatge.', 'Revisió abans d’imprimir.', 'Millores després del primer prototip.'] },
    vectors: { aprenentatges_competencials: 'Resolució d’un repte real amb procés CAD/CAM.', perspectiva_genere: 'Ús equitatiu de programari i impressora.', universalitat_curriculum: 'Tasques graduades i suports visuals.', qualitat_llengues: 'Vocabulari tècnic i presentació oral.', ciutadania_democratica_consciencia_global: 'Disseny inclusiu i sostenibilitat.', benestar_emocional: 'Gestió de la frustració davant errors de disseny.' },
    rubrica: [
      { criteri_lomloe: '2.1', competencia: 'CE2', item: 'Investigació i proposta', NA: 'No identifica una necessitat ni proposa una solució viable.', AS: 'Proposa una solució simple amb ajuda.', AN: 'Proposa una solució adequada i justificada.', AE: 'Justifica una solució creativa, inclusiva i viable.' },
      { criteri_lomloe: '3.1', competencia: 'CE3', item: 'Disseny CAD', NA: 'No genera un model comprensible.', AS: 'Crea un model bàsic amb errors.', AN: 'Crea un model correcte i acotat.', AE: 'Crea un model optimitzat i molt ben documentat.' },
      { criteri_lomloe: '3.2', competencia: 'CE3', item: 'Fabricació 3D', NA: 'La peça no és imprimible o no respecta la seguretat.', AS: 'Imprimeix amb defectes importants.', AN: 'Obté una peça funcional.', AE: 'Optimitza material, temps i acabat.' }
    ]
  },
  {
    schema: 'docentkit.sa.v1', tipus: 'situacio_aprenentatge', idioma: 'ca', normativa: 'LOMLOE', titol: 'Podem fabricar d’una altra manera?', subtitol: 'Materials sostenibles i ecodisseny', etapa: 'ESO', curs: '2n ESO', materia: 'Tecnologia i Digitalització', ambit: 'Tecnologia', durada: { total: '12 hores', sessions: 6 },
    context: 'La crisi climàtica i l’ús intensiu de recursos obliguen a repensar els materials que fem servir i la manera com fabriquem objectes. L’alumnat analitza materials convencionals i sostenibles per proposar alternatives de menor impacte.', justificacio: 'El treball dels materials sostenibles connecta tecnologia, medi ambient, consum responsable i presa de decisions informada.', repte: 'Com podem redissenyar un objecte quotidià perquè sigui més sostenible durant tot el seu cicle de vida?', producte_final: 'Proposta d’ecodisseny d’un objecte amb fitxa tècnica, justificació de materials i prototip o maqueta.',
    competencies_especifiques: [{ codi:'CE2', materia:'Tecnologia i Digitalització', descripcio:'Abordar problemes tecnològics amb criteris de sostenibilitat.' }, { codi:'CE3', materia:'Tecnologia i Digitalització', descripcio:'Dissenyar, construir i avaluar productes o prototips.' }], criteris_avaluacio: [{ codi:'2.1', competencia:'CE2', descripcio:'Analitzar necessitats i proposar solucions sostenibles.' }, { codi:'3.1', competencia:'CE3', descripcio:'Planificar i documentar el disseny d’un producte.' }, { codi:'3.2', competencia:'CE3', descripcio:'Construir o representar prototips amb materials adequats.' }],
    objectius_aprenentatge: [{ id:'OA1', objectiu:'Comparar materials convencionals i sostenibles.', criteris_relacionats:['2.1'] }, { id:'OA2', objectiu:'Analitzar el cicle de vida d’un producte.', criteris_relacionats:['2.1'] }, { id:'OA3', objectiu:'Proposar una millora d’ecodisseny viable.', criteris_relacionats:['3.1','3.2'] }],
    sabers: { blocs:['Materials i sostenibilitat','Procés tecnològic','Impactes ambientals'], continguts:['Materials convencionals i sostenibles.', 'Cicle de vida dels materials.', 'Aplicacions i reptes dels materials sostenibles.', 'Impactes en el medi i la societat.', 'Política i normativa ambiental.', 'Cerca d’informació a internet.'] },
    sequencia_activitats: [{ fase:'Inicials', titol:'Materials del nostre entorn', durada:'3 hores', activitats:['Anàlisi d’objectes quotidians.', 'Debat sobre crisi climàtica i materials.', 'Cerca guiada d’informació.'], evidencies:['Fitxa d’anàlisi'] }, { fase:'Desenvolupament', titol:'Cicle de vida i ecodisseny', durada:'3 hores', activitats:['Comparació de materials.', 'Estudi del cicle de vida.', 'DAFO de materials sostenibles.'], evidencies:['DAFO i taula comparativa'] }, { fase:'Estructuració', titol:'Disseny de proposta', durada:'3 hores', activitats:['Croquis de redisseny.', 'Tria argumentada de materials.', 'Planificació del prototip.'], evidencies:['Croquis i fitxa tècnica'] }, { fase:'Aplicació', titol:'Presentació d’ecodisseny', durada:'3 hores', activitats:['Construcció de maqueta o prototip.', 'Presentació i coavaluació.', 'Reflexió final.'], evidencies:['Prototip i presentació'] }],
    mesures_i_suports: { universals:['Plantilles de comparació.', 'Exemples visuals de materials.', 'Rols cooperatius.'], tdah:['Tasques breus i checklist.', 'Rol manipulatiu.'], tea:['Anticipació de passos i criteris.', 'Models concrets.'], dislexia:['Text simplificat i esquemes.', 'Alternativa oral.'], tdl:['Glossari de materials.', 'Frases model per argumentar.'] },
    avaluacio: { evidencies:['Fitxa de materials.', 'DAFO.', 'Croquis.', 'Prototip o maqueta.', 'Presentació.'], instruments:['Rúbrica d’ecodisseny.', 'Llista de control.', 'Coavaluació.'], retorn_i_millora:['Feedback en la tria de materials.', 'Revisió del prototip.', 'Millora després de la coavaluació.'] }, vectors: { aprenentatges_competencials:'Aplicació de criteris de sostenibilitat a un objecte real.', perspectiva_genere:'Distribució equitativa de rols.', universalitat_curriculum:'Opcions de prototip de diferents complexitats.', qualitat_llengues:'Argumentació tècnica.', ciutadania_democratica_consciencia_global:'Consum responsable i ODS 12/13.', benestar_emocional:'Treball cooperatiu i presa de decisions compartida.' }, rubrica: [{ criteri_lomloe:'2.1', competencia:'CE2', item:'Anàlisi sostenible', NA:'No analitza l’impacte dels materials.', AS:'Identifica alguns impactes amb ajuda.', AN:'Compara materials de forma raonada.', AE:'Justifica amb profunditat una proposta sostenible.' }, { criteri_lomloe:'3.1', competencia:'CE3', item:'Disseny i planificació', NA:'No presenta disseny coherent.', AS:'Presenta una proposta bàsica.', AN:'Planifica una proposta viable.', AE:'Elabora un ecodisseny molt complet i justificat.' }, { criteri_lomloe:'3.2', competencia:'CE3', item:'Prototip i comunicació', NA:'No construeix ni comunica adequadament.', AS:'Presenta un prototip simple.', AN:'Presenta un prototip funcional.', AE:'Presenta una proposta molt ben acabada i comunicada.' }]
  },
  {
    schema:'docentkit.sa.v1', tipus:'situacio_aprenentatge', idioma:'ca', normativa:'LOMLOE', titol:'Són elèctricament dependents?', subtitol:'Electricitat i circuits elèctrics', etapa:'ESO', curs:'2n ESO', materia:'Tecnologia i Digitalització', ambit:'Tecnologia', durada:{ total:'16 hores', sessions:8 }, context:'L’alumnat utilitza dispositius elèctrics constantment, però sovint desconeix com funcionen els circuits que els fan possibles i quin impacte té el consum elèctric.', justificacio:'La comprensió dels circuits elèctrics és bàsica per interpretar sistemes tecnològics, actuar amb seguretat i prendre decisions de consum responsable.', repte:'Com podem analitzar i millorar una instal·lació elèctrica senzilla de l’institut perquè sigui segura i eficient?', producte_final:'Circuit elèctric funcional o maqueta d’instal·lació, esquema normalitzat, càlculs bàsics i proposta de millora energètica.', competencies_especifiques:[{codi:'CE2', materia:'Tecnologia i Digitalització', descripcio:'Analitzar problemes tecnològics de l’entorn i proposar solucions.'},{codi:'CE3', materia:'Tecnologia i Digitalització', descripcio:'Dissenyar, construir i avaluar prototips i circuits.'}], criteris_avaluacio:[{codi:'2.1', competencia:'CE2', descripcio:'Identificar necessitats i proposar solucions tècniques.'},{codi:'3.1', competencia:'CE3', descripcio:'Representar esquemes elèctrics amb simbologia adequada.'},{codi:'3.2', competencia:'CE3', descripcio:'Construir circuits de manera segura i eficient.'}], objectius_aprenentatge:[{id:'OA1', objectiu:'Comprendre corrent, tensió, resistència i consum.', criteris_relacionats:['2.1']},{id:'OA2', objectiu:'Representar i interpretar esquemes elèctrics.', criteris_relacionats:['3.1']},{id:'OA3', objectiu:'Muntar circuits amb seguretat.', criteris_relacionats:['3.2']}], sabers:{blocs:['Electricitat','Circuits','Seguretat i consum'], continguts:['Composició de la matèria i electricitat.', 'Corrent elèctric.', 'Circuit elèctric.', 'Esquemes elèctrics.', 'Components.', 'Magnituds elèctriques.', 'Consum elèctric i medi ambient.', 'Connexió de components.']}, sequencia_activitats:[{fase:'Inicials', titol:'Què fem servir que necessita electricitat?', durada:'4 hores', activitats:['Inventari de dispositius.', 'Debat sobre dependència energètica.', 'Introducció a magnituds.'], evidencies:['Inventari i preguntes inicials']},{fase:'Desenvolupament', titol:'Components i esquemes', durada:'4 hores', activitats:['Identificació de components.', 'Dibuix d’esquemes.', 'Pràctica amb simulador.'], evidencies:['Esquemes i simulacions']},{fase:'Estructuració', titol:'Muntatge i mesures', durada:'4 hores', activitats:['Muntatge de circuits.', 'Mesures bàsiques.', 'Anàlisi d’errors.'], evidencies:['Circuit funcional i registre']},{fase:'Aplicació', titol:'Instal·lació elèctrica de l’institut', durada:'4 hores', activitats:['Proposta de millora.', 'Presentació.', 'Coavaluació.'], evidencies:['Informe i presentació']}], mesures_i_suports:{universals:['Esquemes visuals.', 'Simuladors.', 'Normes de seguretat visibles.'], tdah:['Passos curts.', 'Rol de muntatge.'], tea:['Protocol fix de taller.', 'Reducció d’estímuls.'], dislexia:['Simbologia visual.', 'Text breu.'], tdl:['Glossari de magnituds.', 'Frases model per explicar el circuit.']}, avaluacio:{evidencies:['Esquemes.', 'Circuit.', 'Mesures.', 'Informe de millora.'], instruments:['Rúbrica de circuit.', 'Llista de seguretat.', 'Observació docent.'], retorn_i_millora:['Feedback durant muntatge.', 'Correcció d’errors.', 'Millora final.']}, vectors:{aprenentatges_competencials:'Aplicació de sabers elèctrics a un cas real.', perspectiva_genere:'Rols equitatius al taller.', universalitat_curriculum:'Simulació i muntatge amb diferents suports.', qualitat_llengues:'Explicació tècnica de circuits.', ciutadania_democratica_consciencia_global:'Consum energètic responsable.', benestar_emocional:'Seguretat i confiança al taller.'}, rubrica:[{criteri_lomloe:'3.1', competencia:'CE3', item:'Esquemes elèctrics', NA:'No representa el circuit.', AS:'Fa un esquema bàsic amb errors.', AN:'Fa un esquema correcte.', AE:'Fa un esquema rigorós i justificat.'},{criteri_lomloe:'3.2', competencia:'CE3', item:'Muntatge i seguretat', NA:'No munta el circuit o no respecta la seguretat.', AS:'Munta amb ajuda.', AN:'Munta correctament i segur.', AE:'Munta, comprova i millora amb autonomia.'}]
  }
];

LOCAL_TECH_2ESO_SA.push(
  { ...LOCAL_TECH_2ESO_SA[2], titol: 'Podem generar energia verda?', subtitol: 'Energia i tecnologia sostenible', repte: 'Com podem dissenyar i construir un aerogenerador escolar que expliqui la generació d’energia verda?', producte_final: 'Aerogenerador o maqueta funcional amb memòria tècnica i proposta d’ús d’energia verda al centre.', sabers: { blocs: ['Energia', 'Tecnologia sostenible', 'Procés tecnològic'], continguts: ['Fonts d’energia.', 'Energia elèctrica i centrals elèctriques.', 'Energies convencionals i medi ambient.', 'Desenvolupament sostenible.', 'Tecnologies sostenibles.', 'Disseny i construcció d’un aerogenerador.', 'Cerques i tractament d’informació digital.'] }, vectors: { ...LOCAL_TECH_2ESO_SA[2].vectors, ciutadania_democratica_consciencia_global: 'Reflexió sobre el futur energètic i les energies renovables.' } },
  { ...LOCAL_TECH_2ESO_SA[2], titol: 'La comunicació té límit?', subtitol: 'Xarxes, comunicacions i Arduino', repte: 'Com podem construir un sistema de comunicació senzill i entendre les xarxes que fan possible internet?', producte_final: 'Telègraf o sistema de comunicació amb Arduino, esquema, codi i demostració de transmissió de missatges.', sabers: { blocs: ['Sistemes de comunicació', 'Xarxes', 'Programació i Arduino'], continguts: ['La comunicació, les TIC i internet.', 'Tipus de senyals.', 'Comunicacions amb i sense fil.', 'Telefonia, ràdio i televisió.', 'Xarxes locals i internet.', 'Seguretat a la xarxa.', 'Internet de les coses.', 'Construcció d’un telègraf amb Arduino.', 'Impremta digital.'] } },
  { ...LOCAL_TECH_2ESO_SA[2], titol: 'Passem a conversar amb una màquina?', subtitol: 'Sistemes de control i intel·ligència artificial', repte: 'Com podem programar un assistent senzill que respongui a ordres o preguntes en un context escolar?', producte_final: 'Prototip d’assistent o chatbot amb App Inventor, documentació del flux de conversa i presentació.', sabers: { blocs: ['Tecnologies emergents', 'Sistemes de control', 'Programació', 'IA'], continguts: ['Tecnologies emergents.', 'Sistemes de control programat.', 'Aplicacions mòbils i programació.', 'App Inventor.', 'Instruccions d’un programa.', 'Assistents de veu i chatbots.', 'Programació d’un assistent de veu.', 'Emmagatzematge segur de la informació.'] } }
);

LOCAL_TECH_2ESO_SA.forEach((sa, index) => {
  const id = `sa_tec_2eso_${index + 1}`;
  if (!TEMPLATE_LIBRARY.some(t => t.id === id)) {
    TEMPLATE_LIBRARY.push({ id, module: 'sa', label: `SA${index + 1} · ${sa.titol}`, data: jsonSaToFormResource(sa) });
  }
});

init();
