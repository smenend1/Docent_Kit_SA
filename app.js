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
let reportMode = 'sa';
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
  aiValidationPanel: document.getElementById('aiValidationPanel'), pedagogicAuditPanel: document.getElementById('pedagogicAuditPanel'), importStatus: document.getElementById('importStatus'), saReviewPanel: document.getElementById('saReviewPanel')
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
  document.getElementById('generateBtn').addEventListener('click', () => { renderReport(getFormData()); scrollReportIntoView(); });
  document.getElementById('saveBtn').addEventListener('click', saveCurrentResource);
  document.getElementById('exportPdfBtn').addEventListener('click', openExportMode);
  document.getElementById('downloadPdfBtn').addEventListener('click', downloadCurrentPdf);
  document.getElementById('closeExportModeBtn').addEventListener('click', closeExportMode);
  document.getElementById('printSamePageBtn').addEventListener('click', printCurrentReport);
  document.getElementById('downloadHtmlBtn').addEventListener('click', downloadCurrentHtml);
  document.getElementById('exportJsonBtn').addEventListener('click', exportCurrentJson);
  const exportProgramacioBtn = document.getElementById('exportProgramacioBtn');
  if (exportProgramacioBtn) exportProgramacioBtn.addEventListener('click', exportCurrentForProgramacio);
  const reviewSaBtn = document.getElementById('reviewSaBtn');
  if (reviewSaBtn) reviewSaBtn.addEventListener('click', () => renderSaReview(validateSaForExport(getFormData()), true));
  document.getElementById('copyBtn').addEventListener('click', copyReportText);
  const updateReportBtn = document.getElementById('updateReportBtn');
  if (updateReportBtn) updateReportBtn.addEventListener('click', () => { renderReport(getFormData()); scrollReportIntoView(); });
  const openReportBtn = document.getElementById('openReportBtn');
  if (openReportBtn) openReportBtn.addEventListener('click', openExportMode);
  const quickPdfBtn = document.getElementById('quickPdfBtn');
  if (quickPdfBtn) quickPdfBtn.addEventListener('click', downloadCurrentPdf);
  const quickPrintBtn = document.getElementById('quickPrintBtn');
  if (quickPrintBtn) quickPrintBtn.addEventListener('click', printCurrentReport);
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
  if (els.pedagogicAuditPanel) {
    els.pedagogicAuditPanel.addEventListener('click', event => {
      const localBtn = event.target.closest('[data-auto-fix]');
      if (localBtn) autoFixPedagogicIssue(localBtn.dataset.autoFix);
      const aiBtn = event.target.closest('[data-ai-fix]');
      if (aiBtn) generateAiFixForIssue(aiBtn.dataset.aiFix);
    });
  }
  const aiCompleteMissingBtn = document.getElementById('aiCompleteMissingBtn');
  if (aiCompleteMissingBtn) aiCompleteMissingBtn.addEventListener('click', () => generatePartialAiDraft('missing', { apply: true }));
  const restructureSaBtn = document.getElementById('restructureSaBtn');
  if (restructureSaBtn) restructureSaBtn.addEventListener('click', () => window.restructureCurrentSa && window.restructureCurrentSa());
  const aiKnowledgeBtn = document.getElementById('aiKnowledgeBtn');
  if (aiKnowledgeBtn) aiKnowledgeBtn.addEventListener('click', () => generatePartialAiDraft('knowledge', { apply: true }));
  const aiInclusionBtn = document.getElementById('aiInclusionBtn');
  if (aiInclusionBtn) aiInclusionBtn.addEventListener('click', () => generatePartialAiDraft('inclusion', { apply: true }));
  const aiRubricBtn = document.getElementById('aiRubricBtn');
  if (aiRubricBtn) aiRubricBtn.addEventListener('click', () => generatePartialAiDraft('rubric', { apply: true }));
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

function setReportMode(mode) {
  reportMode = mode === 'brief' ? 'brief' : 'sa';
  document.getElementById('reportModeSaBtn')?.classList.toggle('primary', reportMode === 'sa');
  document.getElementById('reportModeSaBtn')?.classList.toggle('secondary', reportMode !== 'sa');
  document.getElementById('reportModeBriefBtn')?.classList.toggle('primary', reportMode === 'brief');
  document.getElementById('reportModeBriefBtn')?.classList.toggle('secondary', reportMode !== 'brief');
  renderReport(getFormData());
}

function renderReport(data) {
  els.report.innerHTML = buildReportHtml(data, reportMode);
}


function buildReportHtml(data, mode = 'sa') {
  if (isSituation(data) && mode !== 'brief') return buildSaReportHtml(data);
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
  const normalize = value => String(value || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const type = normalize(data.type || data.tipus);
  const schema = normalize(data.schema);
  const tags = Array.isArray(data.tags) ? normalize(data.tags.join(' ')) : '';
  const hasSaShape = !!(data.challenge || data.repte || data.knowledge || data.sabers || data.sequence || data.sequencia_activitats || data.rubrica || data.assessment);
  return type.includes('situacio') || type.includes('situacio_aprenentatge') || schema.includes('docentkit.sa') || tags.includes('docentkit.sa') || hasSaShape;
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
    const exportProgramacioItem = node.querySelector('.export-programacio-item');
    if (exportProgramacioItem) exportProgramacioItem.addEventListener('click', () => exportSingleForProgramacio(item.id));
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

function scrollReportIntoView() {
  const card = document.querySelector('.output-card');
  if (card) card.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function makeExportFileName(data, ext) {
  const title = (data && data.title ? data.title : 'situacio-aprenentatge');
  const level = data && data.level ? '-' + data.level : '';
  const clean = slugify(title + level) || 'situacio-aprenentatge';
  return clean + (ext || '');
}

function withPrintTitle(data, action) {
  const previousTitle = document.title;
  const suggested = makeExportFileName(data, '');
  document.title = suggested;
  try {
    action(suggested);
  } finally {
    setTimeout(() => { document.title = previousTitle; }, 1500);
  }
}

function printCurrentReport() {
  const data = getFormData();
  renderReport(data);
  document.body.classList.add('export-mode');
  withPrintTitle(data, (suggested) => {
    showTransientMessage('Nom suggerit per al PDF: ' + suggested + '.pdf');
    setTimeout(() => window.print(), 120);
  });
}

function scrollReportIntoView() {
  const card = document.querySelector('.output-card');
  if (card) card.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function printCurrentReport() {
  renderReport(getFormData());
  document.body.classList.add('export-mode');
  setTimeout(() => window.print(), 120);
}

function downloadCurrentPdf() {
  // En mòbil, la descàrrega PDF directa és irregular. Fem servir la via fiable:
  // vista SA visual + diàleg del sistema per imprimir o desar com a PDF.
  const data = getFormData();
  reportMode = 'sa';
  renderReport(data);
  document.body.classList.add('export-mode');
  withPrintTitle(data, (suggested) => {
    showTransientMessage('S’obre la vista neta. Nom suggerit: ' + suggested + '.pdf. Si el mòbil no deixa canviar-lo, aquest nom ajuda a no sobreescriure altres PDF.');
    setTimeout(() => window.print(), 220);
  });
}

function downloadCurrentHtml() {
  const data = getFormData();
  renderReport(data);
  const html = buildStandaloneHtml(data, els.report.innerHTML);
  downloadBlob(html, makeExportFileName(data, '.html'), 'text/html;charset=utf-8');
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
  try {
    const blob = content instanceof Blob ? content : new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.rel = 'noopener';
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 5000);
    return true;
  } catch (error) {
    console.warn('Descàrrega bloquejada:', error);
    return false;
  }
}

function showTransientMessage(message) {
  const output = document.getElementById('aiOutput');
  if (output) {
    output.textContent = message + '\n\n' + (output.textContent || '');
  }
}



// ===== DocentKit v2.2.4: revisio de qualitat de SA abans d'exportar =====
function validateSaForExport(data) {
  const d = data || {};
  const competenceParts = extractCompetenceParts(d.competences || d.competencies || '');
  const challengeParts = extractSaParts(d.challenge || d.repte || d.context || '');
  const sequenceParts = extractSequenceParts(d.sequence || d.sequencia || '');
  const assessmentParts = extractAssessmentParts(d.assessment || d.avaluacio || '');
  const inclusionParts = extractInclusionParts(d.inclusion || d.inclusio || '');
  const criteriaCodes = competenceParts.criteriaCodes || [];
  const rubrics = buildRubricRows(d, criteriaCodes);
  const checks = [];
  const add = (level, label, ok, message, fix='') => checks.push({ level, label, ok: !!ok, message, fix });

  const title = (d.title || d.titol || '').trim();
  const level = (d.level || d.curs || '').trim();
  const subject = (d.subject || d.materia || '').trim();
  const duration = (d.duration || d.durada || '').trim();
  const challengeText = [d.challenge, challengeParts.context, challengeParts.repte, challengeParts.producte, d.context].filter(Boolean).join('\n');
  const knowledgeText = String(d.knowledge || flattenSabers(d.sabers) || '').trim();
  const competencesText = String(d.competences || d.competencies || '').trim();
  const sequenceText = String(d.sequence || d.sequencia || '').trim();
  const inclusionText = String(d.inclusion || d.inclusio || '').trim();
  const assessmentText = String(d.assessment || d.avaluacio || '').trim();
  const instrumentsText = String(assessmentParts.instruments || assessmentText || '').trim();
  const product = (challengeParts.producte || d.producteFinal || d.producte_final || '').trim();
  const hasPhases = ['inicial','desenvolupament','estructuraci','aplicaci'].filter(x => sequenceText.toLowerCase().includes(x)).length;
  const hasDua = /DUA|representaci[oó]|expressi[oó]|implicaci[oó]|TDAH|TEA|disl[eè]xia|TDL|universal/i.test(inclusionText);
  const hasRubricLevels = /NA/i.test(assessmentText) && /AS/i.test(assessmentText) && /AN/i.test(assessmentText) && /AE/i.test(assessmentText);

  add('error', 'Títol', title.length > 4, 'Falta un títol clar de la situació d’aprenentatge.', 'Escriu un títol concret i reconeixible.');
  add('error', 'Curs i matèria', level && subject, 'Falta el curs o la matèria.', 'Indica curs i matèria per exportar-la bé cap a Programació LOMLOE.');
  add('warning', 'Durada', /\d+/.test(duration), 'La durada no està indicada o és massa ambigua.', 'Afegeix sessions, hores o setmanes.');
  add('error', 'Context i repte', challengeText.length > 120 && /repte|necessitat|problema|com podem|context|situaci/i.test(challengeText), 'Falta context o repte prou desenvolupat.', 'Formula un context proper i un repte tipus pregunta o necessitat.');
  add('warning', 'Producte final', product.length > 20 || /producte final|prototip|maqueta|document|presentaci|informe|circuit|robot|app|web/i.test(challengeText), 'El producte final no queda prou clar.', 'Especifica què lliurarà o mostrarà l’alumnat.');
  add('error', 'Sabers', knowledgeText.length > 100, 'Falten sabers o continguts clau prou concrets.', 'Afegeix blocs de sabers i continguts/procediments treballats.');
  add('error', 'CE i CA', competencesText.length > 80 && (/CE\d/i.test(competencesText) || criteriaCodes.length || /criteri|compet[eè]ncia/i.test(competencesText)), 'Falten competències específiques o criteris d’avaluació.', 'Inclou CE desenvolupades i CA/codis quan sigui possible.');
  add('error', 'Seqüència d’activitats', sequenceText.length > 180, 'La seqüència d’activitats és massa curta o buida.', 'Descriu activitats inicials, desenvolupament, estructuració i aplicació.');
  add('warning', 'Fases didàctiques', hasPhases >= 3, 'No es detecten prou fases didàctiques.', 'Inclou inicials, desenvolupament, estructuració i aplicació/transferència.');
  add('warning', 'Inclusió / DUA', inclusionText.length > 120 && hasDua, 'Les mesures d’inclusió o DUA són febles o inexistents.', 'Afegeix suports universals i adaptacions concretes.');
  add('error', 'Avaluació i evidències', assessmentText.length > 120 && /evid[eè]nc|instrument|rubric|rúbric|retorn|coavaluaci|autoavaluaci|prova|fitxa/i.test(assessmentText), 'Falten evidències, instruments o retorn d’avaluació.', 'Inclou instruments, evidències i moments de feedback.');
  add('warning', 'Instruments', instrumentsText.length > 30 && /rúbric|rubric|fitxa|observaci|prova|llista|portafoli|presentaci|document/i.test(instrumentsText), 'No es detecten instruments d’avaluació prou clars.', 'Concreta rúbrica, fitxa, observació, prova, checklist, portafoli, etc.');
  add('warning', 'Rúbrica NA/AS/AN/AE', rubrics.length >= 3 || hasRubricLevels, 'La rúbrica no sembla completa amb nivells NA/AS/AN/AE.', 'Afegeix una rúbrica amb criteris i descriptors NA, AS, AN i AE.');

  const errors = checks.filter(c => c.level === 'error' && !c.ok);
  const warnings = checks.filter(c => c.level === 'warning' && !c.ok);
  const ok = checks.filter(c => c.ok);
  const total = checks.length;
  const score = Math.round((ok.length / total) * 100);
  let status = 'Cal revisar';
  if (!errors.length && warnings.length <= 1) status = 'A punt per exportar';
  else if (!errors.length) status = 'Exportable amb avisos';
  else if (score >= 60) status = 'Bona base, però incompleta';
  return { checks, errors, warnings, ok, score, status };
}

function renderSaReview(result, scroll=false) {
  const target = els.saReviewPanel || els.aiValidationPanel;
  if (!target) return;
  const badgeClass = result.errors.length ? 'missing' : result.warnings.length ? 'warn' : 'ok';
  const summary = `<p class="${result.errors.length ? 'warn' : 'ok'}"><strong>${escapeHtml(result.status)}</strong> · ${result.score}/100 · ${result.errors.length} errors · ${result.warnings.length} avisos</p>`;
  const list = (items, title, cls) => items.length ? `<h4>${escapeHtml(title)}</h4><ul>${items.map(i => `<li><strong>${escapeHtml(i.label)}:</strong> ${escapeHtml(i.message)}${i.fix ? `<br><small>${escapeHtml(i.fix)}</small>` : ''}</li>`).join('')}</ul>` : '';
  const chips = result.checks.map(c => `<span class="validation-chip ${c.ok ? 'ok' : c.level === 'error' ? 'missing' : 'warn'}">${c.ok ? '✓' : c.level === 'error' ? '!' : '⚠'} ${escapeHtml(c.label)}</span>`).join('');
  target.innerHTML = `${summary}<div class="validation-chip-row">${chips}</div>${list(result.errors,'Errors a corregir','missing')}${list(result.warnings,'Avisos de millora','warn')}${result.errors.length || result.warnings.length ? '<p class="hint">Pots exportar igualment, però és recomanable revisar aquests punts abans d’enviar la SA a Programació LOMLOE.</p>' : '<p class="ok">La SA té els blocs essencials i és una bona candidata per exportar a Programació LOMLOE.</p>'}`;
  if (scroll && target.scrollIntoView) target.scrollIntoView({ behavior:'smooth', block:'nearest' });
}

function exportCurrentForProgramacio() {
  const form = getFormData();
  const validation = validateSaForExport(form);
  renderSaReview(validation, false);
  const payload = buildProgramacioLomloeExport(form);
  payload.validacioDocentKit = {
    status: validation.status,
    score: validation.score,
    errors: validation.errors.map(e => ({ camp: e.label, missatge: e.message })),
    avisos: validation.warnings.map(w => ({ camp: w.label, missatge: w.message }))
  };
  downloadJson(payload, `sa-programacio-lomloe-${slugify(payload.titol || form.title || 'situacio')}.json`);
  showTransientMessage(`S'ha exportat “${payload.titol || form.title}” en format compatible amb Programació LOMLOE. Validació: ${validation.status} (${validation.score}/100).`);
}

function exportSingleForProgramacio(id) {
  const item = resources.find(r => r.id === id);
  if (!item) return;
  const validation = validateSaForExport(item);
  const payload = buildProgramacioLomloeExport(item);
  payload.validacioDocentKit = {
    status: validation.status,
    score: validation.score,
    errors: validation.errors.map(e => ({ camp: e.label, missatge: e.message })),
    avisos: validation.warnings.map(w => ({ camp: w.label, missatge: w.message }))
  };
  downloadJson(payload, `sa-programacio-lomloe-${slugify(payload.titol || item.title || 'situacio')}.json`);
  showTransientMessage(`S'ha exportat “${payload.titol || item.title}” des de la biblioteca en format Programació LOMLOE. Validació: ${validation.status} (${validation.score}/100).`);
}

function buildProgramacioLomloeExport(item) {
  const data = item || {};
  const challengeParts = extractSaParts(data.challenge || data.repte || data.context || '');
  const competenceParts = extractCompetenceParts(data.competences || data.competencies || '');
  const sequenceParts = extractSequenceParts(data.sequence || data.sequencia || '');
  const assessmentParts = extractAssessmentParts(data.assessment || data.avaluacio || '');
  const inclusionParts = extractInclusionParts(data.inclusion || data.inclusio || '');
  const docentkit = formResourceToDocentKitJson(data);
  const title = data.title || data.titol || docentkit.titol || '';
  const sabers = textLines(data.knowledge || flattenSabers(docentkit.sabers));
  const competencies = textLines(competenceParts.competencies || data.competenciesEspecifiques || data.competencies || '');
  const criteris = textLines(competenceParts.criteria || data.criterisAvaluacio || data.criteris || '');
  const activitats = sequenceToLines(sequenceParts, data.sequence || data.sequencia || docentkit.sequencia_activitats);
  const instruments = textLines(assessmentParts.instruments || assessmentParts.evidencies || data.assessment || '');
  const dua = textLines(inclusionParts.universals || data.inclusion || '');
  return {
    type: 'situacio-aprenentatge',
    schema: 'programacio.lomloe.sa.import.v2',
    version: '1.1',
    source: 'DocentKit',
    target: 'ProgramacioLOMLOE',
    exportedAt: new Date().toISOString(),
    titol: title,
    etapa: docentkit.etapa || data.etapa || '',
    curs: docentkit.curs || data.level || data.curs || '',
    materia: docentkit.materia || data.subject || data.materia || '',
    trimestre: data.trimestre || '',
    durada: normalizeDurationForProgramacio(data.duration || data.durada || docentkit.durada),
    context: challengeParts.context || data.context || data.descripcio || data.challenge || docentkit.context || '',
    descripcio: challengeParts.context || data.descripcio || data.challenge || docentkit.context || '',
    repte: challengeParts.repte || data.repte || docentkit.repte || firstSentence(data.challenge || ''),
    producteFinal: challengeParts.producte || data.producteFinal || data.producte_final || docentkit.producte_final || '',
    sabers,
    competenciesEspecifiques: competencies,
    criterisAvaluacio: criteris,
    activitats,
    instruments,
    recursos: textLines(data.recursos || data.materials || docentkit.recursos || ''),
    dua,
    mesuresInclusives: docentkit.mesures_i_suports || data.mesures_i_suports || data.inclusion || data.inclusio || '',
    avaluacio: docentkit.avaluacio || data.avaluacio || {},
    rubrica: docentkit.rubrica || data.rubric || data.rubrica || [],
    objectius: docentkit.objectius_aprenentatge || data.objectius || [],
    observacions: 'Exportat des de DocentKit. Revisa i assigna el trimestre a Programació LOMLOE si cal.',
    docentkitOriginal: docentkit
  };
}

function textLines(value) {
  if (Array.isArray(value)) {
    return value.map(v => {
      if (typeof v === 'string') return v;
      if (!v || typeof v !== 'object') return '';
      if (v.codi || v.text) return [v.codi, v.text].filter(Boolean).join('. ');
      if (v.titol || v.activitats) return [v.titol, Array.isArray(v.activitats) ? v.activitats.join('; ') : v.activitats].filter(Boolean).join(': ');
      return JSON.stringify(v);
    }).map(v => String(v).trim()).filter(Boolean);
  }
  if (value && typeof value === 'object') return textLines(Object.values(value).flat());
  return String(value || '').split(/\n+/).map(v => v.replace(/^[-•]\s*/, '').trim()).filter(Boolean);
}

function flattenSabers(value) {
  if (!value) return [];
  if (Array.isArray(value)) return value;
  if (typeof value === 'object') {
    const out = [];
    if (Array.isArray(value.blocs)) out.push(...value.blocs);
    if (Array.isArray(value.continguts)) out.push(...value.continguts);
    return out;
  }
  return value;
}

function normalizeDurationForProgramacio(value) {
  if (!value) return '';
  if (typeof value === 'object') return value.total || value.sessions || '';
  return String(value);
}

function sequenceToLines(parts, original) {
  const collected = [];
  ['inicials', 'desenvolupament', 'estructuracio', 'aplicacio', 'metodologia'].forEach(key => {
    if (parts && parts[key]) collected.push(`${labelSequencePart(key)}: ${parts[key]}`);
  });
  if (collected.length) return collected;
  if (Array.isArray(original)) return textLines(original);
  return textLines(original);
}

function labelSequencePart(key) {
  return ({ inicials: 'Inicials', desenvolupament: 'Desenvolupament', estructuracio: 'Estructuració', aplicacio: 'Aplicació', metodologia: 'Metodologia' })[key] || key;
}

function exportCurrentJson() { const data = formResourceToDocentKitJson(getFormData()); downloadJson(data, slugify(data.titol || data.title || 'docentkit-sa') + '.json'); }
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
  const isSa = String(item.type || '').toLowerCase().includes('situació') || String(item.type || '').toLowerCase().includes('situacio') || item.challenge || item.knowledge || item.sequence;
  if (!isSa) return { ...item, schema: 'docentkit.resource.v1' };
  const lines = value => String(value || '').split(/\n+/).map(v => v.trim()).filter(Boolean);
  const duration = item.duration || '';
  return {
    schema: 'docentkit.sa.v1',
    tipus: 'situacio_aprenentatge',
    idioma: 'ca',
    normativa: 'LOMLOE',
    origen: 'DocentKit',
    titol: item.title || item.titol || '',
    subtitol: '',
    etapa: String(item.level || item.curs || '').includes('ESO') ? 'ESO' : '',
    curs: item.level || item.curs || '',
    materia: item.subject || item.materia || '',
    ambit: item.subject || item.materia || '',
    durada: { total: duration, sessions: null },
    context: '',
    justificacio: '',
    repte: item.challenge || '',
    producte_final: '',
    competencies_especifiques: [],
    criteris_avaluacio: [],
    objectius_aprenentatge: [],
    sabers: { blocs: [], continguts: lines(item.knowledge) },
    metodologia: { enfocament: '', organitzacio_aula: '', recursos: [] },
    sequencia_activitats: lines(item.sequence).map((text, index) => ({ fase: index === 0 ? 'Inicials' : index === 1 ? 'Desenvolupament' : index === 2 ? 'Estructuració' : 'Aplicació', titol: '', durada: '', activitats: [text], evidencies: [] })),
    mesures_i_suports: { universals: lines(item.inclusion), tdah: [], tea: [], dislexia: [], tdl: [] },
    avaluacio: { evidencies: lines(item.assessment), instruments: [], retorn_i_millora: [] },
    vectors: {},
    rubrica: buildRubricRows(item, []).map(row => ({ criteri_lomloe: row.criteri_lomloe || row.criteria || '', competencia: row.competencia || '', item: row.item || 'Ítem d’avaluació', NA: row.NA || row.levels?.NA || '', AS: row.AS || row.levels?.AS || '', AN: row.AN || row.levels?.AN || '', AE: row.AE || row.levels?.AE || '' })),
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
  const hasRubricLevels = rubricRows.length >= 3 && rubricRows.every(row => row.NA || row.na) && rubricRows.every(row => row.AS || row.as) && rubricRows.every(row => row.AN || row.an) && rubricRows.every(row => row.AE || row.ae);
  const validRubricCriteria = rubricRows.filter(row => {
    const c = String(row.criteri || row.criteri_lomloe || '').trim();
    return c && c !== '—' && /\d+\.\d+|CE\d|STEM\d/i.test(c);
  }).length;
  const hasCriteriaAlignment = criteriaCodes.length >= 2 && rubricRows.length >= Math.min(3, criteriaCodes.length) && validRubricCriteria >= Math.min(rubricRows.length, criteriaCodes.length);
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
  const target = els.pedagogicAuditPanel || els.aiValidationPanel;
  if (!target) return;

  const scoreClass = result.score >= 85 ? 'excellent' : result.score >= 65 ? 'good' : result.score >= 45 ? 'partial' : 'weak';
  const checkedCards = result.checks.map(c => {
    const statusClass = c.ok ? 'ok' : (c.critical ? 'critical' : 'warning');
    const icon = c.ok ? '✓' : (c.critical ? '!' : '⚠');
    const autoLabel = getAutoFixLabel(c.id);
    const aiLabel = getAiFixLabel(c.id);
    const actions = c.ok ? '' : `
      <div class="audit-actions">
        ${autoLabel ? `<button type="button" class="mini-btn" data-auto-fix="${escapeHtml(c.id)}">${escapeHtml(autoLabel)}</button>` : ''}
        ${aiLabel ? `<button type="button" class="mini-btn secondary" data-ai-fix="${escapeHtml(c.id)}">${escapeHtml(aiLabel)}</button>` : ''}
      </div>`;
    return `
      <article class="audit-card ${statusClass}">
        <div class="audit-card-title"><span>${icon}</span>${escapeHtml(c.label)}</div>
        <p>${escapeHtml(c.ok ? 'Correcte o prou desenvolupat.' : c.advice)}</p>
        ${actions}
      </article>`;
  }).join('');
  const recs = result.recommendations.length
    ? `<div class="audit-recommendations"><h4>Recomanacions prioritàries</h4><ol>${result.recommendations.map(r => `<li>${escapeHtml(r)}</li>`).join('')}</ol></div>`
    : '<div class="audit-recommendations ok"><h4>Resultat</h4><p>La SA és coherent i està prou alineada. Usa els botons ‘Genera informe’, ‘Obre vista d’impressió’ o ‘Descarrega PDF’ de la vista d’informe.</p></div>';

  target.innerHTML = `
    <div class="audit-summary ${scoreClass}">
      <div>
        <p class="eyebrow">Resultat de la revisió pedagògica</p>
        <h3>${result.score}/100 · ${escapeHtml(result.level)}</h3>
      </div>
      <div class="audit-meter" aria-label="Puntuació ${result.score} sobre 100">
        <span style="width:${Math.max(0, Math.min(100, result.score))}%"></span>
      </div>
    </div>
    <div class="audit-grid">${checkedCards}</div>
    ${recs}`;

  if (els.aiValidationPanel) {
    els.aiValidationPanel.innerHTML = `<p class="ok">Revisió pedagògica generada. Consulta el panell “Resultat de la revisió pedagògica” just a sota.</p>`;
  }
}

function getAutoFixLabel(issueId) {
  const labels = {
    alignment: 'Corregeix rúbrica automàticament',
    assessment: 'Completa avaluació bàsica',
    inclusion: 'Afegeix adaptacions base',
    workshop: 'Afegeix seguretat de taller',
    duration: 'Calcula durada',
    sequence: 'Afegeix estructura de fases',
    repte: 'Millora repte i context',
    producte: 'Afegeix producte final al repte'
  };
  return labels[issueId] || 'Corregeix automàticament';
}

function getAiFixLabel(issueId) {
  const labels = {
    alignment: 'Millora rúbrica amb IA',
    assessment: 'Millora avaluació amb IA',
    inclusion: 'Millora inclusió amb IA',
    sequence: 'Millora seqüència amb IA',
    repte: 'Millora repte/context amb IA',
    producte: 'Millora repte/producte amb IA'
  };
  return labels[issueId] || '';
}

function generateAiFixForIssue(issueId) {
  if (issueId === 'alignment') return generatePartialAiDraft('rubric', { apply: true, source: 'revisió pedagògica' });
  if (issueId === 'inclusion') return generatePartialAiDraft('inclusion', { apply: true, source: 'revisió pedagògica' });
  if (issueId === 'assessment') return generatePartialAiDraft('assessment', { apply: true, source: 'revisió pedagògica' });
  if (issueId === 'sequence') return generatePartialAiDraft('sequence', { apply: true, source: 'revisió pedagògica' });
  if (issueId === 'producte' || issueId === 'repte') return generatePartialAiDraft('challenge', { apply: true, source: 'revisió pedagògica' });
  return generatePartialAiDraft('missing', { apply: true, source: 'revisió pedagògica' });
}

function autoFixPedagogicIssue(issueId) {
  const data = getFormData();
  if (issueId === 'alignment') autoFixRubricAlignment(data);
  else if (issueId === 'assessment') autoFixAssessment(data);
  else if (issueId === 'inclusion') autoFixInclusion(data);
  else if (issueId === 'workshop') autoFixWorkshopSafety(data);
  else if (issueId === 'duration') autoFixDuration(data);
  else if (issueId === 'sequence') autoFixSequence(data);
  else if (issueId === 'repte') autoFixChallenge(data);
  else if (issueId === 'producte') autoFixProduct(data);
  else { showToast('No hi ha cap correcció automàtica definida per aquest apartat.'); return; }
  renderReport(getFormData());
  renderAiValidation(validateSaQuality(getFormData()));
  renderPedagogicAudit(validateSaPedagogy(getFormData()));
  showToast('Correcció aplicada. Revisa el formulari i el resultat de la revisió.');
}

function autoFixRubricAlignment(data) {
  const criteriaCodes = collectCriteriaCodes(data);
  const rows = buildRubricRows(data, criteriaCodes);
  const fixedRows = rows.map((row, index) => {
    const text = [row.item, row.na, row.as, row.an, row.ae].join(' ');
    const current = String(row.criteri || '').trim();
    const criteri = current && current !== '—' && /\d+\.\d+|CE\d|STEM\d/i.test(current) ? current : suggestCriterionForRubric(text, criteriaCodes, index);
    return {
      criteri,
      item: row.item || `Ítem ${index + 1}`,
      na: row.na || 'Mostra dificultats importants i necessita molta guia per evidenciar aquest aprenentatge.',
      as: row.as || 'Assoleix els aspectes bàsics amb suport o amb algunes mancances.',
      an: row.an || 'Assoleix l’aprenentatge de manera autònoma, coherent i amb poques errades.',
      ae: row.ae || 'Mostra domini avançat, justifica decisions i transfereix l’aprenentatge a noves situacions.'
    };
  });
  const withoutRubric = removeRubricBlock(data.assessment || '');
  els.assessment.value = joinNonEmpty([withoutRubric, formatRubricRowsForAssessment(fixedRows)]);
}

function collectCriteriaCodes(data) {
  const parts = extractCompetenceParts(data.competences || '');
  const found = new Set(parts.criteriaCodes || []);
  const text = [data.competences, data.assessment].join('\n');
  (text.match(/\b\d+\.\d+\b/g) || []).forEach(code => found.add(code));
  return Array.from(found);
}

function suggestCriterionForRubric(text, codes, index) {
  const src = String(text || '').toLowerCase();
  const has = code => codes.includes(code) ? code : null;
  if (/recerca|problema|investig|font|informaci|necessitat/.test(src)) return has('2.1') || codes[0] || '2.1';
  if (/disseny|croquis|pl[aà]nol|model|planific|esquema|acot/.test(src)) return has('3.1') || codes.find(c => /^3\.1$/.test(c)) || codes[index] || codes[0] || '3.1';
  if (/constru|prototip|taller|eina|fabric|program|codi|muntatge|funcion/.test(src)) return has('3.2') || codes.find(c => /^3\.2$/.test(c)) || codes[index] || codes[0] || '3.2';
  if (/comunic|presentaci|mem[oò]ria|document/.test(src)) return codes.find(c => /^3\.2$/.test(c)) || codes[index] || codes[0] || '3.2';
  return codes[index] || codes[codes.length - 1] || '2.1';
}

function removeRubricBlock(text) {
  return String(text || '')
    .replace(/\n?R[úu]brica\s*:[\s\S]*$/i, '')
    .replace(/\n?CRITERI\s+LOMLOE\s*:[\s\S]*$/i, '')
    .trim();
}

function formatRubricRowsForAssessment(rows) {
  return 'Rúbrica:\n' + rows.map(row => [
    `CRITERI LOMLOE: ${row.criteri}`,
    `ÍTEM: ${row.item}`,
    `No Assolit (NA): ${row.na}`,
    `Assolit Satisfactori (AS): ${row.as}`,
    `Assolit Notable (AN): ${row.an}`,
    `Assolit Excel·lent (AE): ${row.ae}`
  ].join('\n')).join('\n\n');
}

function autoFixAssessment(data) {
  const existing = data.assessment || '';
  const additions = [];
  if (!/Evid[eè]ncies\s*:/i.test(existing)) additions.push('Evidències: producte final, procés de treball, registre de proves, documentació tècnica i presentació oral.');
  if (!/Instruments\s*:/i.test(existing)) additions.push('Instruments: rúbrica criterial, llista de control, observació docent, autoavaluació i coavaluació.');
  if (!/Retorn i millora\s*:/i.test(existing)) additions.push('Retorn i millora: feedback durant el disseny, revisió abans del lliurament, temps de millora i comentaris finals de coavaluació.');
  els.assessment.value = joinNonEmpty([existing, ...additions]);
}

function autoFixInclusion(data) {
  const existing = data.inclusion || '';
  const additions = [
    'Mesures universals: instruccions seqüenciades, models visuals, rols cooperatius, glossari tècnic i opcions diverses d’expressió.',
    'TDAH: tasques fragmentades, temporitzadors visuals, objectius curts i rols actius.',
    'TEA: anticipació de la sessió, consignes literals, exemples acabats i reducció d’estímuls quan calgui.',
    'Dislèxia: lectura facilitada, suport visual, temps addicional i alternatives orals o visuals a textos llargs.',
    'TDL: vocabulari anticipat, frases model, comprovació de comprensió i suport visual en la comunicació.'
  ].filter(line => !existing.toLowerCase().includes(line.split(':')[0].toLowerCase()));
  els.inclusion.value = joinNonEmpty([existing, ...additions]);
}

function autoFixWorkshopSafety(data) {
  const existing = data.inclusion || '';
  const safety = 'Seguretat i taller: revisió prèvia d’eines i materials, normes d’ús segur, ordre de l’espai, recollida final, supervisió docent i registre d’incidències o riscos.';
  if (!/seguretat|taller|eina|risc|norma/i.test(existing)) els.inclusion.value = joinNonEmpty([existing, safety]);
}

function autoFixDuration(data) {
  if (data.duration && data.duration.trim()) return;
  const matches = String(data.sequence || '').match(/\b(\d+)\s*(?:h|hores|sessions)\b/gi) || [];
  let total = 0;
  matches.forEach(m => { const n = parseInt(m, 10); if (!Number.isNaN(n)) total += n; });
  els.duration.value = total ? `${total} hores, distribuïdes en ${matches.length} fases o sessions` : '8 sessions aproximades';
}

function autoFixSequence(data) {
  const existing = data.sequence || '';
  const additions = [];
  if (!/Inicials\s*:/i.test(existing)) additions.push('Inicials: presentació del repte, activació de coneixements previs i criteris d’èxit compartits.');
  if (!/Desenvolupament\s*:/i.test(existing)) additions.push('Desenvolupament: recerca, pràctica guiada, disseny, càlculs o programació segons el repte.');
  if (!/Estructuraci[oó]\s*:/i.test(existing)) additions.push('Estructuració: síntesi dels aprenentatges, revisió del procés i preparació de la documentació.');
  if (!/Aplicaci[oó]\s*:/i.test(existing)) additions.push('Aplicació: finalització del producte, presentació, avaluació i transferència a una situació propera.');
  els.sequence.value = joinNonEmpty([existing, ...additions]);
}


function autoFixChallenge(data) {
  const existing = String(data.challenge || '').trim();
  const title = data.title && data.title !== 'Recurs sense títol' ? data.title : 'la situació d’aprenentatge';
  const subject = data.subject || 'Tecnologia i Digitalització';
  const level = data.level || 'ESO';
  const additions = [];
  if (!/Context\s*:/i.test(existing)) {
    additions.push(`Context: L’alumnat de ${level} treballa ${subject} a partir d’un repte proper vinculat a ${title}, connectant sabers tecnològics amb una necessitat real del centre o de l’entorn.`);
  }
  if (!/Repte\s*:/i.test(existing) && !/Com podem/i.test(existing)) {
    additions.push('Repte: Com podem donar resposta a aquesta necessitat mitjançant una solució tecnològica viable, segura, sostenible i ben documentada?');
  }
  if (!/Justificaci[oó]\s*:/i.test(existing)) {
    additions.push('Justificació: La proposta permet aplicar el procés tecnològic, prendre decisions justificades, treballar cooperativament i comunicar resultats amb vocabulari tècnic.');
  }
  els.challenge.value = joinNonEmpty([existing, ...additions]);
}

function autoFixProduct(data) {
  const existing = data.challenge || '';
  if (/Producte final\s*:/i.test(existing)) return;
  const product = data.type && /r[úu]brica/i.test(data.type) ? 'Producte final: rúbrica criterial completa.' : 'Producte final: prototip, documentació tècnica i presentació del procés de treball.';
  els.challenge.value = joinNonEmpty([existing, product]);
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

  if (kind === 'challenge') return `${common}

Millora només el context, el repte i el producte final de la SA. Respon amb aquestes etiquetes exactes:
CONTEXT
REPTE
JUSTIFICACIÓ
PRODUCTE FINAL

El repte ha de ser una pregunta o missió clara, propera i accionable. El producte final ha de ser observable i avaluable.`;
  if (kind === 'sequence') return `${common}

Millora només la seqüència didàctica de la SA. Respon amb aquestes etiquetes exactes:
INICIALS
DESENVOLUPAMENT
ESTRUCTURACIÓ
APLICACIÓ

Inclou activitats concretes, no només fases genèriques.`;
  if (kind === 'assessment') return `${common}

Millora només l'avaluació de la SA. Respon amb aquestes etiquetes exactes:
EVIDÈNCIES
INSTRUMENTS
RETORN I MILLORA

Inclou evidències observables, instruments concrets i moments de feedback o millora.`;
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
  const title = data.title && data.title !== 'Recurs sense títol' ? data.title : 'la situació d’aprenentatge';
  if (kind === 'challenge') {
    return `CONTEXT
L’alumnat de ${data.level || 'ESO'} treballa ${subject} a partir d’una situació propera relacionada amb ${title}. La proposta connecta els sabers de la matèria amb una necessitat real de l’aula, del centre o de l’entorn, i demana prendre decisions justificades durant el procés.

REPTE
Com podem donar resposta a aquesta necessitat mitjançant una proposta o solució competencial, viable, ben documentada i comunicable?

JUSTIFICACIÓ
La situació permet aplicar sabers de ${subject}, treballar cooperativament, documentar el procés, revisar els resultats i transferir els aprenentatges a contextos propers.

PRODUCTE FINAL
Producte, prototip, documentació, presentació o evidència final que mostri el procés seguit, les decisions preses i el resultat obtingut.`;
  }
  if (kind === 'sequence') {
    return `INICIALS
- Presentació del context i del repte.
- Activació de coneixements previs i conversa guiada sobre criteris d’èxit.
- Anàlisi d’exemples o situacions semblants.

DESENVOLUPAMENT
- Recerca i selecció d’informació rellevant.
- Pràctica guiada dels sabers o procediments necessaris.
- Planificació del producte o solució i distribució de rols.
- Desenvolupament progressiu amb seguiment docent.

ESTRUCTURACIÓ
- Posada en comú de dificultats i aprenentatges.
- Revisió amb checklist, criteris d’èxit o rúbrica.
- Organització de les evidències i preparació de la comunicació final.

APLICACIÓ
- Finalització del producte final.
- Presentació o lliurament de l’evidència.
- Autoavaluació, coavaluació i proposta de millora o transferència.`;
  }
  if (kind === 'assessment') {
    return `EVIDÈNCIES
- Procés de treball documentat.
- Producte final o evidència competencial.
- Presentació, explicació o defensa del resultat.
- Reflexió final sobre aprenentatges, dificultats i millores.

INSTRUMENTS
- Rúbrica criterial NA/AS/AN/AE.
- Llista de control del procés.
- Observació docent.
- Autoavaluació i coavaluació.

RETORN I MILLORA
- Feedback docent durant el procés.
- Revisió entre iguals abans del lliurament final.
- Temps per incorporar millores justificades.
- Comentari final sobre què s’ha millorat i per què.`;
  }
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

async function generatePartialAiDraft(kind, options = {}) {
  renderAiValidation(validateSaQuality(getFormData()));
  const label = kind === 'knowledge' ? 'sabers' : kind === 'inclusion' ? 'adaptacions' : kind === 'rubric' ? 'rúbrica' : kind === 'challenge' ? 'repte/context' : kind === 'sequence' ? 'seqüència' : kind === 'assessment' ? 'avaluació' : 'camps buits o febles';
  els.aiOutput.textContent = `Generant ${label}...`;
  const provider = els.aiProvider.value;
  let text = '';
  if (provider !== 'google' || !els.aiKey.value.trim()) {
    text = buildLocalPartialDraft(kind);
  } else {
    try {
      text = await callGeminiText(buildPartialPrompt(kind));
    } catch (error) {
      console.error(error);
      text = `No he pogut obtenir resposta de la API per completar ${label}.

${error.message}

Et deixo una proposta local:

${buildLocalPartialDraft(kind)}`;
    }
  }
  els.aiOutput.textContent = text;
  if (options.apply) {
    applyPartialDraftToForm(kind, text, options.source || 'IA assistida');
  }
  return text;
}

function applyPartialDraftToForm(kind, text, source = 'IA assistida') {
  const before = getFormData();
  const clean = String(text || '').replace(/^No he pogut obtenir resposta[\s\S]*?Et deixo una proposta local:\s*/i, '').trim();
  applyImportedText(`millora-${kind}.txt`, clean || text, source);
  const after = getFormData();
  const changed = [];
  if ((before.challenge || '') !== (after.challenge || '')) changed.push('repte/context');
  if ((before.knowledge || '') !== (after.knowledge || '')) changed.push('sabers');
  if ((before.competences || '') !== (after.competences || '')) changed.push('criteris/CE');
  if ((before.sequence || '') !== (after.sequence || '')) changed.push('seqüència');
  if ((before.inclusion || '') !== (after.inclusion || '')) changed.push('inclusió');
  if ((before.assessment || '') !== (after.assessment || '')) changed.push('avaluació/rúbrica');
  renderReport(getFormData());
  renderAiValidation(validateSaQuality(getFormData()));
  renderPedagogicAudit(validateSaPedagogy(getFormData()));
  showToast(changed.length ? `Millora aplicada a: ${changed.join(', ')}.` : 'La IA ha generat text, però no he detectat camps nous. Revisa l’esborrany IA.');
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


/* DocentKit v2.2 · manteniment tècnic, còpies i especificació JSON */
(function(){
  const VERSION = '2.3.0';
  const PREFIX = 'docentkit.';
  const $ = id => document.getElementById(id);
  const out = () => $('dkMaintenanceOutput');
  function write(msg){ const box=out(); if(box) box.textContent = msg; }
  function downloadJson(name, data){
    const blob = new Blob([JSON.stringify(data, null, 2)], {type:'application/json'});
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = name; a.click();
    setTimeout(()=>URL.revokeObjectURL(a.href), 1000);
  }
  function localDocentKitKeys(){ return Object.keys(localStorage).filter(k => k.startsWith(PREFIX)).sort(); }
  function exportBackup(){
    const keys = localDocentKitKeys(); const data = {};
    keys.forEach(k => { data[k] = localStorage.getItem(k); });
    downloadJson(`docentkit-backup-v${VERSION}-${new Date().toISOString().slice(0,10)}.json`, { schema:'docentkit.backup.v1', app:'DocentKit', version:VERSION, exportedAt:new Date().toISOString(), keys:data });
    write(`Còpia exportada amb ${keys.length} claus locals. Recomanació: guarda aquest fitxer fora del navegador.`);
  }
  async function importBackup(file){
    if(!file) return; const data = JSON.parse(await file.text()); const keys = data.keys || data.localStorage || {};
    const names = Object.keys(keys).filter(k => k.startsWith(PREFIX));
    if(!names.length) { write('El fitxer no conté dades DocentKit reconegudes.'); return; }
    if(!confirm(`S'importaran ${names.length} claus locals de DocentKit. Vols continuar?`)) return;
    names.forEach(k => localStorage.setItem(k, String(keys[k])));
    write(`Còpia importada: ${names.length} claus. Recarrega la PWA per veure tots els canvis.`);
  }
  function schema(){
    downloadJson('docentkit-sa-schema-v1.json', {
      schema:'docentkit.sa.schema.v1', tipus:'situacio_aprenentatge', idioma:'ca', normativa:'LOMLOE',
      camps_obligatoris:['titol','curs','materia','context','repte','producte_final','criteris_avaluacio','sabers','sequencia_activitats','avaluacio','rubrica'],
      curs:'1r ESO | 2n ESO | 3r ESO | 4t ESO',
      durada:{ total:'16 hores', sessions:8 },
      sabers:{ blocs:['...'], continguts:['...'] },
      sequencia_activitats:[{ fase:'Inicials | Desenvolupament | Estructuració | Aplicació', titol:'', durada:'', activitats:['...'], evidencies:['...'] }],
      mesures_i_suports:{ universals:['...'], tdah:['...'], tea:['...'], dislexia:['...'], tdl:['...'] },
      avaluacio:{ evidencies:['...'], instruments:['...'], retorn_i_millora:['...'] },
      rubrica:[{ criteri_lomloe:'2.1', competencia:'CE2', item:'', NA:'', AS:'', AN:'', AE:'' }]
    });
    write('Especificació JSON descarregada. Serveix com a plantilla tècnica per reconstruir o importar SA.');
  }
  async function diagnostics(){
    const keys = localDocentKitKeys(); let cachesList = [];
    try { if('caches' in window) cachesList = await caches.keys(); } catch(e) {}
    let resources = 0; try { resources = JSON.parse(localStorage.getItem('docentkit.resources.v20')||'[]').length; } catch(e) {}
    write([
      'DocentKit · diagnòstic tècnic',
      `Versió declarada: ${VERSION}`,
      `URL: ${location.href}`,
      `Connexió: ${navigator.onLine ? 'en línia' : 'offline'}`,
      `Service worker actiu: ${navigator.serviceWorker?.controller ? 'sí' : 'pendent o no instal·lat'}`,
      `Caches detectades: ${cachesList.join(', ') || 'cap/pendent'}`,
      `Claus locals DocentKit: ${keys.length}`,
      `Recursos biblioteca: ${resources}`,
      `Espai local aproximat: ${Math.round(keys.reduce((n,k)=>n+(localStorage.getItem(k)||'').length,0)/1024)} KB`,
      'Consell: si veus una versió antiga, esborra dades del lloc o reinstal·la la PWA.'
    ].join('\n'));
  }
  function selfTest(){
    const checks = [
      ['Formulari principal', !!$('resourceForm')], ['Vista informe', !!$('reportPreview')], ['Importació', !!$('fileInput') && !!$('importBtn')], ['Biblioteca', !!$('libraryList')], ['Manteniment', !!$('dkMaintenanceOutput')], ['localStorage', (()=>{try{localStorage.setItem('__dk_test','1');localStorage.removeItem('__dk_test');return true}catch(e){return false}})()]
    ];
    write('Proves bàsiques DocentKit v2.2\n' + checks.map(([n,ok]) => `${ok?'✓':'✗'} ${n}`).join('\n'));
  }
  function bind(){
    $('dkDiagBtn')?.addEventListener('click', diagnostics);
    $('dkRunSelfTestBtn')?.addEventListener('click', selfTest);
    $('dkExportBackupBtn')?.addEventListener('click', exportBackup);
    $('dkSchemaBtn')?.addEventListener('click', schema);
    $('dkImportBackupInput')?.addEventListener('change', e => importBackup(e.target.files?.[0]));
  }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', bind); else bind();
})();

/* DocentKit v2.3.0 · Taller de rubrica NA/AS/AN/AE */
(function(){
  const VERSION = '2.3.0';
  const $ = id => document.getElementById(id);
  const previousBuildRubricRows = typeof buildRubricRows === 'function' ? buildRubricRows : null;
  const previousFormResourceToDocentKitJson = typeof formResourceToDocentKitJson === 'function' ? formResourceToDocentKitJson : null;

  function clean(value){ return String(value || '').replace(/\s+/g,' ').trim(); }
  function esc(value){ return typeof escapeHtml === 'function' ? escapeHtml(value) : String(value||'').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch])); }
  function splitLines(value){ return String(value || '').split(/\n+/).map(v => v.trim()).filter(Boolean); }
  function unique(values){ return [...new Set(values.map(v => clean(v)).filter(Boolean))]; }
  function getCriteriaCodesFromForm(data){
    const text = [data?.competences, data?.criteria, data?.criteris, data?.criterisAvaluacio].join('\n');
    if (typeof extractCriteriaCodes === 'function') return extractCriteriaCodes(text);
    return unique((text.match(/\b\d+\.\d+\b/g) || []));
  }
  function normalizeRubricRow(row, fallbackCode, index){
    const levels = row?.levels || row?.nivells || {};
    const criteri = clean(row?.criteri_lomloe || row?.criteri || row?.criteria || row?.codi || fallbackCode || '');
    const item = clean(row?.item || row?.descriptor || row?.evidencia || row?.evidència || `Ítem d'avaluació ${index + 1}`);
    return {
      criteri,
      criteri_lomloe: criteri,
      competencia: clean(row?.competencia || row?.competència || row?.ce || ''),
      item,
      na: clean(row?.na || row?.NA || levels.NA || levels.na || row?.noAssolit || row?.no_assolit || ''),
      as: clean(row?.as || row?.AS || levels.AS || levels.as || row?.assolitSatisfactori || row?.assolit_satisfactori || ''),
      an: clean(row?.an || row?.AN || levels.AN || levels.an || row?.assolitNotable || row?.assolit_notable || ''),
      ae: clean(row?.ae || row?.AE || levels.AE || levels.ae || row?.assolitExcellent || row?.assolit_excel_lent || row?.assolitExcel·lent || '')
    };
  }
  function parsePipeRubric(text){
    const rows = [];
    const lines = String(text || '').split('\n').map(l => l.trim()).filter(l => l.includes('|'));
    for (const line of lines) {
      if (/criteri\s*\|\s*[íi]tem/i.test(line) || /^[-|\s]+$/.test(line)) continue;
      const cells = line.split('|').map(c => clean(c)).filter(c => c && !/^[-:]+$/.test(c));
      if (cells.length >= 6) rows.push(normalizeRubricRow({ criteri: cells[0], item: cells[1], na: cells[2], as: cells[3], an: cells[4], ae: cells.slice(5).join(' ') }, '', rows.length));
    }
    return rows;
  }
  function parseLooseRubric(text){
    const src = String(text || '');
    const blocks = src.split(/(?=\n?\s*(?:CRITERI\s+LOMLOE|Criteri|CA|\d+\.\d+)\s*[:：])/i).filter(b => /NA|AS|AN|AE|No\s+Assolit|Satisfactori/i.test(b));
    const rows = [];
    for (const block of blocks) {
      const criteri = clean((block.match(/(?:CRITERI\s+LOMLOE|Criteri|CA)\s*[:：]\s*([^\n]+)/i)||[,''])[1]) || clean((block.match(/^\s*(\d+\.\d+[^\n]*)/m)||[,''])[1]);
      const item = clean((block.match(/(?:ÍTEM|ITEM|Item|Evid[eè]ncia)\s*[:：]\s*([^\n]+)/i)||[,''])[1]) || 'Ítem d’avaluació';
      const level = label => {
        const m = block.match(new RegExp('(?:'+label+'|'+(label==='NA'?'No\\s+Assolit':label==='AS'?'Assolit\\s+Satisfactori':label==='AN'?'Assolit\\s+Notable':'Assolit\\s+Excel[·l\\.]*lent')+')\\s*(?:\\([^)]*\\))?\\s*[:：-]\\s*([\\s\\S]*?)(?=\\n\\s*(?:NA|AS|AN|AE|No\\s+Assolit|Assolit\\s+Satisfactori|Assolit\\s+Notable|Assolit\\s+Excel|CRITERI|Criteri|ÍTEM|ITEM)\\b|$)', 'i'));
        return clean(m ? m[1] : '');
      };
      const row = normalizeRubricRow({ criteri, item, na: level('NA'), as: level('AS'), an: level('AN'), ae: level('AE') }, '', rows.length);
      if (row.criteri || row.na || row.as || row.an || row.ae) rows.push(row);
    }
    return rows;
  }
  function makeDefaultRubricRows(data, criteriaCodes){
    const codes = criteriaCodes && criteriaCodes.length ? criteriaCodes : ['1.1','2.1','3.1','4.1','5.1','6.1'];
    const subject = clean(data?.subject || data?.materia || 'la matèria');
    const product = clean((data?.challenge || '').match(/Producte\s+final\s*[:：]\s*([^\n]+)/i)?.[1] || 'el producte final');
    const base = [
      ['Comprensió del repte i del context', 'No identifica clarament el repte ni la necessitat.', 'Identifica el repte amb ajuda i en descriu alguns elements.', 'Analitza el repte i el relaciona amb els sabers treballats.', 'Analitza el repte amb profunditat, justifica decisions i proposa millores transferibles.'],
      ['Aplicació de sabers i procediments', 'Aplica els sabers de manera incompleta o amb errors importants.', 'Aplica procediments bàsics amb suport i corregeix alguns errors.', 'Aplica els sabers de manera coherent, ordenada i força autònoma.', 'Aplica els sabers amb autonomia, precisió i criteri tècnic.'],
      ['Planificació i procés de treball', 'Mostra poca planificació i registra poques evidències del procés.', 'Segueix una planificació bàsica i documenta algunes fases.', 'Organitza el procés, pren decisions justificades i incorpora millores.', 'Planifica amb rigor, anticipa dificultats i documenta decisions i millores.'],
      ['Producte final o evidència', `El ${product} és incomplet o no respon al repte.`, `El ${product} respon parcialment al repte i compleix els mínims.`, `El ${product} és funcional, coherent i ben justificat.`, `El ${product} és complet, creatiu, ben acabat i optimitzat segons criteris de ${subject}.`],
      ['Comunicació i documentació', 'Comunica el procés amb poca claredat i vocabulari limitat.', 'Explica les idees principals amb una estructura bàsica.', 'Documenta i comunica el procés amb claredat, evidències i vocabulari adequat.', 'Comunica amb rigor, evidències ben seleccionades i llenguatge tècnic ric.'],
      ['Reflexió, retorn i millora', 'Fa una reflexió molt simple i identifica poques millores.', 'Accepta el retorn i incorpora algun ajust.', 'Utilitza el retorn per millorar el procés i el resultat final.', 'Integra autoavaluació, coavaluació i retorn per justificar millores concretes.']
    ];
    return base.map((r,i)=>normalizeRubricRow({ criteri: codes[i] || codes[codes.length-1] || '', item: r[0], na: r[1], as: r[2], an: r[3], ae: r[4] }, '', i));
  }

  buildRubricRows = function(data, criteriaCodes){
    const d = data || {};
    const codes = criteriaCodes && criteriaCodes.length ? criteriaCodes : getCriteriaCodesFromForm(d);
    if (Array.isArray(d.rubrica) && d.rubrica.length) return d.rubrica.map((r,i)=>normalizeRubricRow(r, codes[i], i));
    if (Array.isArray(d.rubric) && d.rubric.length) return d.rubric.map((r,i)=>normalizeRubricRow(r, codes[i], i));
    const text = [d.assessment, d.avaluacio, d.rubricaText, d.rubricText].join('\n');
    const pipe = parsePipeRubric(text);
    if (pipe.length) return pipe;
    const loose = parseLooseRubric(text);
    if (loose.length) return loose;
    const previous = previousBuildRubricRows ? previousBuildRubricRows(d, codes) : [];
    if (previous && previous.length) return previous.map((r,i)=>normalizeRubricRow(r, codes[i], i));
    return makeDefaultRubricRows(d, codes);
  };

  function rubricRowsForCurrent(){ return buildRubricRows(typeof getFormData === 'function' ? getFormData() : {}, getCriteriaCodesFromForm(typeof getFormData === 'function' ? getFormData() : {})); }
  function reviewRows(rows){
    const warnings = [];
    if (rows.length < 4) warnings.push('La rúbrica té menys de 4 ítems. Per a una SA completa és recomanable tenir entre 4 i 6 ítems.');
    rows.forEach((r,i)=>{
      if (!r.criteri) warnings.push(`Fila ${i+1}: falta criteri LOMLOE.`);
      if (!r.item || r.item.length < 5) warnings.push(`Fila ${i+1}: falta ítem d’avaluació clar.`);
      ['na','as','an','ae'].forEach(level => { if (!r[level] || r[level].length < 18) warnings.push(`Fila ${i+1}: descriptor ${level.toUpperCase()} massa curt o buit.`); });
      const desc = [r.na,r.as,r.an,r.ae].map(v => v.toLowerCase());
      if (new Set(desc).size < 4) warnings.push(`Fila ${i+1}: els descriptors NA/AS/AN/AE són massa semblants.`);
    });
    return { ok: warnings.length === 0, warnings };
  }
  function rowsToAssessmentText(rows){
    return 'RÚBRICA NA/AS/AN/AE:\n\n' + rows.map(r => [
      `CRITERI LOMLOE: ${r.criteri || '—'}`,
      `ÍTEM: ${r.item || 'Ítem d’avaluació'}`,
      `NA: ${r.na}`,
      `AS: ${r.as}`,
      `AN: ${r.an}`,
      `AE: ${r.ae}`
    ].join('\n')).join('\n\n');
  }
  function renderRubricWorkshop(rows, doReview){
    const panel = $('rubricWorkshopPanel'); if (!panel) return;
    const review = doReview ? reviewRows(rows) : null;
    const summary = `<div class="rubric-summary"><span class="${review && !review.ok ? 'pill-warn':'pill-ok'}">${review && !review.ok ? '⚠ Revisió amb avisos':'✓ Rúbrica generada'}</span><span class="pill-ok">${rows.length} ítems</span></div>`;
    const table = `<table><thead><tr><th>Criteri</th><th>Ítem</th><th>NA</th><th>AS</th><th>AN</th><th>AE</th></tr></thead><tbody>${rows.map(r=>`<tr><td>${esc(r.criteri||'—')}</td><td>${esc(r.item)}</td><td>${esc(r.na)}</td><td>${esc(r.as)}</td><td>${esc(r.an)}</td><td>${esc(r.ae)}</td></tr>`).join('')}</tbody></table>`;
    const warnings = review && review.warnings.length ? `<p class="rubric-warn">Avisos:</p><ul>${review.warnings.map(w=>`<li>${esc(w)}</li>`).join('')}</ul>` : (review ? '<p class="rubric-ok">La rúbrica té criteris, ítems i descriptors NA/AS/AN/AE complets.</p>' : '<p class="hint">Pots afegir aquesta rúbrica al camp d’avaluació o exportar-la en JSON.</p>');
    panel.innerHTML = summary + table + warnings;
  }
  function buildRubric(){
    const data = typeof getFormData === 'function' ? getFormData() : {};
    const rows = makeDefaultRubricRows(data, getCriteriaCodesFromForm(data));
    renderRubricWorkshop(rows, false);
  }
  function reviewRubric(){ const rows = rubricRowsForCurrent(); renderRubricWorkshop(rows, true); }
  function applyRubric(){
    const rows = rubricRowsForCurrent();
    const text = rowsToAssessmentText(rows);
    const current = $('assessment')?.value || '';
    const cleaned = current.replace(/\n{0,2}R[úu]BRICA(?:\s+NA\/AS\/AN\/AE)?\s*[:：][\s\S]*$/i, '').trim();
    if ($('assessment')) $('assessment').value = (cleaned ? cleaned + '\n\n' : '') + text;
    renderRubricWorkshop(rows, true);
    if (typeof renderReport === 'function' && typeof getFormData === 'function') renderReport(getFormData());
    if (typeof showTransientMessage === 'function') showTransientMessage('Rúbrica NA/AS/AN/AE afegida al camp d’avaluació.');
  }
  function exportRubric(){
    const data = typeof getFormData === 'function' ? getFormData() : {};
    const rows = rubricRowsForCurrent();
    const payload = { schema:'docentkit.rubrica.v2', version: VERSION, exportedAt: new Date().toISOString(), titol: data.title || '', curs: data.level || '', materia: data.subject || '', rubrica: rows.map(r => ({ criteri_lomloe:r.criteri, item:r.item, NA:r.na, AS:r.as, AN:r.an, AE:r.ae })) };
    if (typeof downloadJson === 'function') downloadJson(payload, `rubrica-docentkit-${(typeof slugify==='function'?slugify(data.title||'sa'): 'sa')}.json`);
  }

  if (previousFormResourceToDocentKitJson) {
    formResourceToDocentKitJson = function(item){
      const out = previousFormResourceToDocentKitJson(item);
      const rows = buildRubricRows(item || {}, getCriteriaCodesFromForm(item || {}));
      out.rubrica = rows.map(r => ({ criteri_lomloe: r.criteri || r.criteri_lomloe || '', competencia: r.competencia || '', item: r.item || '', NA: r.na || r.NA || '', AS: r.as || r.AS || '', AN: r.an || r.AN || '', AE: r.ae || r.AE || '' }));
      return out;
    };
  }

  function bindRubricWorkshop(){
    $('rubricBuildBtn')?.addEventListener('click', buildRubric);
    $('rubricReviewBtn')?.addEventListener('click', reviewRubric);
    $('rubricApplyBtn')?.addEventListener('click', applyRubric);
    $('rubricExportBtn')?.addEventListener('click', exportRubric);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', bindRubricWorkshop); else bindRubricWorkshop();
})();

/* DocentKit v2.4.2 · Correcció rúbrica criterial robusta */
(function(){
  const VERSION = '2.4.0';
  const $ = id => document.getElementById(id);
  let workshopRows = [];

  function clean(value){ return String(value || '').replace(/\s+/g,' ').trim(); }
  function esc(value){ return typeof escapeHtml === 'function' ? escapeHtml(value) : String(value||'').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch])); }
  function unique(values){ return [...new Set(values.map(clean).filter(Boolean))]; }
  function getData(){ return typeof getFormData === 'function' ? getFormData() : {}; }
  function getCriteriaCodes(data){
    const text = [data?.competences, data?.criteria, data?.criteris, data?.criterisAvaluacio, data?.assessment].join('\n');
    const found = unique((text.match(/\b\d+\.\d+\b/g) || []));
    return found.length ? found : ['1.1','2.1','3.1','4.1','5.1','6.1'];
  }
  function productName(data){
    const text = [data?.challenge, data?.assessment, data?.sequence].join('\n');
    const m = text.match(/Producte\s+final\s*[:：]\s*([^\n]+)/i);
    return clean(m && m[1]) || clean(data?.title) || 'el producte final';
  }
  function inferItems(data){
    const title = clean(data?.title || 'la situació d’aprenentatge');
    const subject = clean(data?.subject || data?.materia || 'la matèria');
    const product = productName(data);
    const seq = String(data?.sequence || '').toLowerCase();
    const comp = String(data?.competences || '').toLowerCase();
    const items = [
      'Comprensió del repte i del context',
      'Aplicació dels sabers i procediments',
      'Planificació i procés de treball',
      `Qualitat del ${product}`,
      'Comunicació, documentació i ús del vocabulari tècnic',
      'Reflexió, retorn i millora'
    ];
    if (/equip|cooper|grup|rol/.test(seq + comp)) items.splice(5, 0, 'Treball cooperatiu i responsabilitat individual');
    if (/digital|tinkercad|floorplanner|simul|program|ordinador|dades/.test(seq + comp)) items.splice(3, 0, 'Ús d’eines digitals i comprovació de resultats');
    return unique(items).slice(0, 6);
  }
  function descriptorsFor(item, data){
    const subject = clean(data?.subject || data?.materia || 'la matèria');
    const lower = item.toLowerCase();
    if (/repte|context/.test(lower)) return [
      'Identifica parcialment el repte i necessita molta guia per comprendre la necessitat plantejada.',
      'Identifica el repte i en descriu els elements principals amb suport puntual.',
      'Analitza el repte, el relaciona amb el context i justifica decisions amb evidències.',
      'Analitza el repte amb profunditat, en valora condicionants i proposa millores transferibles.'
    ];
    if (/saber|procediment/.test(lower)) return [
      'Aplica els sabers de manera incompleta o amb errors importants que dificulten el resultat.',
      'Aplica procediments bàsics amb suport i corregeix alguns errors durant el procés.',
      'Aplica els sabers de manera coherent, ordenada i força autònoma en la resolució de la tasca.',
      'Aplica els sabers amb autonomia, precisió i criteri propi, fent connexions amb altres situacions.'
    ];
    if (/planific|procés|proces/.test(lower)) return [
      'Planifica poc, segueix el procés de manera irregular i registra poques evidències.',
      'Segueix una planificació bàsica i documenta algunes fases essencials del treball.',
      'Organitza el procés, pren decisions justificades i incorpora millores a partir de proves o retorn.',
      'Planifica amb rigor, anticipa dificultats, documenta decisions i optimitza el procés de treball.'
    ];
    if (/digital|eines/.test(lower)) return [
      'Utilitza l’eina digital amb dificultats i necessita ajuda freqüent per completar la tasca.',
      'Utilitza l’eina digital per resoldre la tasca bàsica i comparteix o desa el resultat amb suport.',
      'Utilitza l’eina digital correctament, comprova resultats i documenta el procés de manera clara.',
      'Utilitza l’eina digital amb autonomia, precisió i criteri, i justifica les decisions preses.'
    ];
    if (/qualitat|producte|evidència|evidencia/.test(lower)) return [
      'El producte és incomplet, poc funcional o no respon prou al repte plantejat.',
      'El producte respon parcialment al repte i compleix els requisits mínims establerts.',
      'El producte és funcional, coherent, ben presentat i justificat amb criteris de treball.',
      `El producte és complet, creatiu, ben acabat i optimitzat segons criteris de ${subject}.`
    ];
    if (/comunic|document|vocabulari/.test(lower)) return [
      'Comunica el procés amb poca claredat, desordre o vocabulari tècnic molt limitat.',
      'Explica les idees principals amb una estructura bàsica i vocabulari suficient.',
      'Documenta i comunica el procés amb claredat, evidències i vocabulari adequat.',
      'Comunica amb rigor, evidències ben seleccionades i llenguatge tècnic ric i precís.'
    ];
    if (/cooper|responsabilitat|equip/.test(lower)) return [
      'Participa poc o necessita molta guia per assumir responsabilitats dins l’equip.',
      'Participa en les tasques assignades i respecta els acords bàsics del grup.',
      'Col·labora activament, assumeix responsabilitats i ajuda a resoldre dificultats del grup.',
      'Impulsa el treball de l’equip, reparteix tasques amb criteri i contribueix a millorar el resultat final.'
    ];
    return [
      'Fa una reflexió molt simple i identifica poques dificultats o millores possibles.',
      'Accepta el retorn rebut i incorpora algun ajust en el procés o el producte.',
      'Utilitza el retorn per millorar el procés, el resultat final i la pròpia autonomia.',
      'Integra autoavaluació, coavaluació i retorn per justificar millores concretes i futures transferències.'
    ];
  }
  function makeRows(data){
    const codes = getCriteriaCodes(data);
    return inferItems(data).map((item, i) => {
      const d = descriptorsFor(item, data);
      const criteri = codes[i] || codes[codes.length - 1] || '';
      return { criteri, criteri_lomloe: criteri, item, na: d[0], as: d[1], an: d[2], ae: d[3] };
    });
  }
  function rowsFromAssessment(data){
    const text = String(data?.assessment || '');
    const rows = [];
    const blocks = text.split(/(?=\n?\s*CRITERI\s+LOMLOE\s*[:：])/i).filter(b => /CRITERI\s+LOMLOE/i.test(b));
    for (const b of blocks) {
      const pick = (re) => clean((b.match(re) || [,''])[1]);
      const row = {
        criteri: pick(/CRITERI\s+LOMLOE\s*[:：]\s*([^\n]+)/i),
        item: pick(/[ÍI]TEM\s*[:：]\s*([^\n]+)/i),
        na: pick(/(?:NA|No\s+Assolit(?:\s*\(NA\))?)\s*[:：]\s*([\s\S]*?)(?=\n\s*(?:AS|Assolit\s+Satisfactori|AN|Assolit\s+Notable|AE|Assolit\s+Excel|CRITERI|ÍTEM|ITEM)\b|$)/i),
        as: pick(/(?:AS|Assolit\s+Satisfactori(?:\s*\(AS\))?)\s*[:：]\s*([\s\S]*?)(?=\n\s*(?:AN|Assolit\s+Notable|AE|Assolit\s+Excel|CRITERI|ÍTEM|ITEM)\b|$)/i),
        an: pick(/(?:AN|Assolit\s+Notable(?:\s*\(AN\))?)\s*[:：]\s*([\s\S]*?)(?=\n\s*(?:AE|Assolit\s+Excel|CRITERI|ÍTEM|ITEM)\b|$)/i),
        ae: pick(/(?:AE|Assolit\s+Excel[·l.]*lent(?:\s*\(AE\))?)\s*[:：]\s*([\s\S]*?)(?=\n\s*(?:CRITERI|ÍTEM|ITEM)\b|$)/i)
      };
      if (row.criteri && row.item && row.na && row.as && row.an && row.ae && !/^NA\s*\/\s*AS/i.test(row.criteri)) rows.push(row);
    }
    return rows;
  }
  buildRubricRows = function(data, criteriaCodes){
    const d = data || {};
    if (Array.isArray(d.rubrica) && d.rubrica.length) return d.rubrica.map((r,i) => ({ criteri: clean(r.criteri_lomloe || r.criteri || r.criteria || r.codi || (criteriaCodes||[])[i]), item: clean(r.item || r.descriptor || `Ítem ${i+1}`), na: clean(r.NA || r.na), as: clean(r.AS || r.as), an: clean(r.AN || r.an), ae: clean(r.AE || r.ae) })).filter(r => r.item && r.na && r.as && r.an && r.ae);
    const parsed = rowsFromAssessment(d);
    if (parsed.length >= 3) return parsed;
    return makeRows(d);
  };
  function review(rows){
    const warnings = [];
    if (rows.length < 4) warnings.push('La rúbrica té menys de 4 ítems. És recomanable tenir entre 4 i 6 ítems.');
    rows.forEach((r,i) => {
      if (!r.criteri) warnings.push(`Fila ${i+1}: falta criteri LOMLOE.`);
      if (!r.item || r.item.length < 8) warnings.push(`Fila ${i+1}: falta un ítem d’avaluació clar.`);
      ['na','as','an','ae'].forEach(level => { if (!r[level] || r[level].length < 35) warnings.push(`Fila ${i+1}: descriptor ${level.toUpperCase()} massa curt.`); });
      const desc = [r.na,r.as,r.an,r.ae].map(v => v.toLowerCase());
      if (new Set(desc).size < 4) warnings.push(`Fila ${i+1}: els descriptors NA/AS/AN/AE són massa semblants.`);
    });
    return warnings;
  }
  function render(rows, withReview){
    workshopRows = rows;
    const panel = $('rubricWorkshopPanel'); if (!panel) return;
    const warnings = withReview ? review(rows) : [];
    const summary = `<div class="rubric-summary"><span class="${warnings.length ? 'pill-warn':'pill-ok'}">${warnings.length ? '⚠ Revisió amb avisos':'✓ Rúbrica criterial correcta'}</span><span class="pill-ok">${rows.length} ítems</span></div>`;
    const table = `<table><thead><tr><th>Criteri</th><th>Ítem</th><th>NA</th><th>AS</th><th>AN</th><th>AE</th></tr></thead><tbody>${rows.map(r=>`<tr><td>${esc(r.criteri)}</td><td>${esc(r.item)}</td><td>${esc(r.na)}</td><td>${esc(r.as)}</td><td>${esc(r.an)}</td><td>${esc(r.ae)}</td></tr>`).join('')}</tbody></table>`;
    const extra = withReview && warnings.length ? `<p class="rubric-warn">Avisos:</p><ul>${warnings.map(w=>`<li>${esc(w)}</li>`).join('')}</ul>` : '<p class="rubric-ok">Descriptors complets i diferenciats per NA, AS, AN i AE.</p>';
    panel.innerHTML = summary + table + extra;
  }
  function textForAssessment(rows){
    return 'RÚBRICA NA/AS/AN/AE:\n\n' + rows.map(r => [
      `CRITERI LOMLOE: ${r.criteri}`,
      `ÍTEM: ${r.item}`,
      `NA: ${r.na}`,
      `AS: ${r.as}`,
      `AN: ${r.an}`,
      `AE: ${r.ae}`
    ].join('\n')).join('\n\n');
  }
  function onBuild(e){ e.preventDefault(); e.stopImmediatePropagation(); render(makeRows(getData()), false); }
  function onReview(e){ e.preventDefault(); e.stopImmediatePropagation(); const rows = workshopRows.length ? workshopRows : buildRubricRows(getData(), getCriteriaCodes(getData())); render(rows, true); }
  function onApply(e){
    e.preventDefault(); e.stopImmediatePropagation();
    const rows = workshopRows.length ? workshopRows : makeRows(getData());
    const current = $('assessment')?.value || '';
    const cleaned = current.replace(/\n{0,2}R[ÚU]BRICA(?:\s+NA\/AS\/AN\/AE)?\s*[:：][\s\S]*$/i, '').trim();
    if ($('assessment')) $('assessment').value = (cleaned ? cleaned + '\n\n' : '') + textForAssessment(rows);
    render(rows, true);
    if (typeof renderReport === 'function' && typeof getFormData === 'function') renderReport(getFormData());
  }
  function onExport(e){
    e.preventDefault(); e.stopImmediatePropagation();
    const data = getData();
    const rows = workshopRows.length ? workshopRows : makeRows(data);
    const payload = { schema:'docentkit.rubrica.v2.4.2', version: VERSION, exportedAt: new Date().toISOString(), titol: data.title || '', curs: data.level || '', materia: data.subject || '', rubrica: rows.map(r => ({ criteri_lomloe:r.criteri, item:r.item, NA:r.na, AS:r.as, AN:r.an, AE:r.ae })) };
    if (typeof downloadJson === 'function') downloadJson(payload, `rubrica-docentkit-${(typeof slugify==='function'?slugify(data.title||'sa'):'sa')}.json`);
  }
  function bind(){
    $('rubricBuildBtn')?.addEventListener('click', onBuild, true);
    $('rubricReviewBtn')?.addEventListener('click', onReview, true);
    $('rubricApplyBtn')?.addEventListener('click', onApply, true);
    $('rubricExportBtn')?.addEventListener('click', onExport, true);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', bind); else bind();
})();

/* DocentKit v2.4.2 · Importar projectes de Tecnologia i reptes */
(function(){
  const VERSION = '2.4.0';
  const $ = (id) => document.getElementById(id);
  const clean = (v) => String(v ?? '').replace(/\s+/g,' ').trim();
  const asArray = (v) => {
    if (!v) return [];
    if (Array.isArray(v)) return v.filter(Boolean);
    if (typeof v === 'object') return Object.values(v).flat().filter(Boolean);
    return String(v).split(/\n|;|\s+·\s+|\s*\|\s*/).map(x=>x.replace(/^[-•]\s*/,'').trim()).filter(Boolean);
  };
  const join = (parts, sep='\n') => parts.filter(Boolean).map(x => typeof x === 'string' ? x : JSON.stringify(x)).join(sep);
  const courseLabel = (v) => {
    const t = clean(v).toLowerCase();
    if (/eso1|1\s*r|primer/.test(t)) return '1r ESO';
    if (/eso2|2\s*n|segon/.test(t)) return '2n ESO';
    if (/eso3|3\s*r|tercer/.test(t)) return '3r ESO';
    if (/eso4|4\s*t|quart/.test(t)) return '4t ESO';
    return clean(v) || '4t ESO';
  };
  const hasTechOrigin = (data) => {
    const text = [data?.app, data?.app_origen, data?.source, data?.origen, data?.schema, data?.compatibilitat].flat().join(' ').toLowerCase();
    return /tecnologia|projectes|reptes/.test(text);
  };
  function extractTechSituations(data){
    if (!data) return [];
    if (data.situacio) return [data.situacio];
    if (Array.isArray(data.situations)) return data.situations;
    if (data.situations && typeof data.situations === 'object') return Object.values(data.situations).flat();
    if (Array.isArray(data.projectes)) return data.projectes;
    if (Array.isArray(data.projects)) return data.projects;
    if (Array.isArray(data.items)) return data.items;
    if (Array.isArray(data.recursos)) return data.recursos;
    if (Array.isArray(data.resources)) return data.resources;
    if (data.title || data.titol || data.repte || data.challenge) return [data];
    return [];
  }
  function rubricRowsFromTech(raw, criteriaText){
    const rows = Array.isArray(raw?.rubric) ? raw.rubric : Array.isArray(raw?.rubrica) ? raw.rubrica : [];
    return rows.map((r,i)=>({
      criteri_lomloe: clean(r.criteri_lomloe || r.criteria || r.criteri || r.codi || criteriaText || ''),
      competencia: clean(r.competencia || r.competence || ''),
      item: clean(r.item || r.descriptor || r.title || `Ítem ${i+1}`),
      NA: clean(r.NA || r.na || r.levels?.NA || 'No identifica o no aplica els elements essencials del repte.'),
      AS: clean(r.AS || r.as || r.levels?.AS || 'Aplica els elements bàsics amb ajuda o amb algunes imprecisions.'),
      AN: clean(r.AN || r.an || r.levels?.AN || 'Aplica els elements de manera correcta i coherent.'),
      AE: clean(r.AE || r.ae || r.levels?.AE || 'Aplica els elements amb autonomia, precisió i justificació tècnica.')
    })).filter(r => r.item);
  }
  function techSituationToDocentKitResource(raw, idx=0){
    raw = raw || {};
    const title = clean(raw.titol || raw.title || raw.nom || raw.name) || `Projecte tecnològic importat ${idx+1}`;
    const level = courseLabel(raw.curs || raw.course || raw.level || raw.nivell);
    const subject = clean(raw.materia || raw.subject) || (level === '4t ESO' ? 'Tecnologia optativa' : 'Tecnologia i Digitalització');
    const criteriaList = asArray(raw.criteris_avaluacio || raw.criteria || raw.criteris || raw.ca).map(x => typeof x === 'object' ? [x.codi, x.descripcio || x.text].filter(Boolean).join('. ') : String(x));
    const ceList = asArray(raw.competencies_especifiques || raw.competencies || raw.competenciesEspecifiques || raw.ce).map(x => typeof x === 'object' ? [x.codi, x.descripcio || x.text].filter(Boolean).join('. ') : String(x));
    const knowledgeList = asArray(raw.sabers?.continguts || raw.sabers || raw.knowledge || raw.coneixements).map(x => typeof x === 'object' ? JSON.stringify(x) : String(x));
    const blocks = asArray(raw.sabers?.blocs || raw.blocks || raw.blocs).map(x=>String(x));
    const acts = raw.sequencia_activitats || raw.activities || raw.activitats || {};
    const seqLines = Array.isArray(acts) ? acts.map(a => typeof a === 'string' ? a : join([a.fase && `${a.fase}: ${a.titol || ''}`, Array.isArray(a.activitats) ? a.activitats.join('; ') : a.activitats, Array.isArray(a.evidencies) ? `Evidències: ${a.evidencies.join('; ')}` : ''], ' ')) : [
      acts.initial || acts.inicials ? `Inicials: ${acts.initial || acts.inicials}` : '',
      acts.development || acts.desenvolupament ? `Desenvolupament: ${acts.development || acts.desenvolupament}` : '',
      acts.structuring || acts.estructuracio ? `Estructuració: ${acts.structuring || acts.estructuracio}` : '',
      acts.application || acts.aplicacio ? `Aplicació: ${acts.application || acts.aplicacio}` : ''
    ].filter(Boolean);
    const evidence = asArray(raw.evidence || raw.evidencies || raw.avaluacio?.evidencies);
    const instruments = asArray(raw.instruments || raw.avaluacio?.instruments);
    const materials = asArray(raw.materials || raw.recursos || raw.materials_i_eines);
    const rubric = rubricRowsFromTech(raw, criteriaList.join('; '));
    const challenge = join([
      raw.short || raw.descripcio ? `Descripció: ${raw.short || raw.descripcio}` : '',
      raw.context ? `Context: ${raw.context}` : '',
      raw.justificacio ? `Justificació: ${raw.justificacio}` : '',
      raw.challenge || raw.repte ? `Repte: ${raw.challenge || raw.repte}` : '',
      raw.product || raw.producte || raw.producte_final || raw.producteFinal ? `Producte final: ${raw.product || raw.producte || raw.producte_final || raw.producteFinal}` : '',
      'Origen: importat des de Tecnologia ESO · Projectes i reptes. Revisa i completa la SA abans d’exportar-la a Programació LOMLOE.'
    ]);
    const resource = {
      ...(typeof getFormData === 'function' ? getFormData() : {}),
      id: `tech-${Date.now()}-${idx}-${(typeof slugify === 'function' ? slugify(title) : title.toLowerCase().replace(/\W+/g,'-'))}`,
      createdAt: new Date().toISOString(),
      type: 'Situació d’aprenentatge',
      title,
      level,
      subject,
      duration: clean(raw.durada?.total || raw.duration || raw.durada || ''),
      challenge,
      knowledge: join([blocks.length ? `Blocs de sabers: ${blocks.join('; ')}` : '', knowledgeList.length ? `Sabers / continguts: ${knowledgeList.join('\n')}` : '']),
      competences: join([ceList.length ? `Competències específiques:\n${ceList.join('\n')}` : '', criteriaList.length ? `Criteris d’avaluació:\n${criteriaList.join('\n')}` : '']),
      sequence: join([materials.length ? `Materials i recursos: ${materials.join('; ')}` : '', seqLines.length ? `Seqüència d’activitats:\n${seqLines.join('\n')}` : '']),
      inclusion: join([raw.mesures_i_suports ? (typeof raw.mesures_i_suports === 'string' ? raw.mesures_i_suports : JSON.stringify(raw.mesures_i_suports, null, 2)) : '', raw.teacher ? `Orientacions docents: ${raw.teacher}` : 'Mesures universals: instruccions pautades, model visual del producte, treball cooperatiu i diferents formes de presentar evidències.']),
      assessment: join([evidence.length ? `Evidències: ${evidence.join('; ')}` : '', instruments.length ? `Instruments: ${instruments.join('; ')}` : '', rubric.length ? 'RÚBRICA NA/AS/AN/AE:\n\n' + rubric.map(r => [`CRITERI LOMLOE: ${r.criteri_lomloe}`, `ÍTEM: ${r.item}`, `NA: ${r.NA}`, `AS: ${r.AS}`, `AN: ${r.AN}`, `AE: ${r.AE}`].join('\n')).join('\n\n') : '']),
      tags: ['tecnologia-reptes','importat','pendent-revisio'].concat(asArray(raw.tags || raw.blocks || raw.blocs).map(String)).slice(0,12),
      tecnologiaOriginal: raw,
      rubrica: rubric
    };
    return resource;
  }
  function applyTechImport(resourcesToAdd, filename){
    if (!resourcesToAdd.length) throw new Error('No he trobat cap projecte o situació reconeixible dins del JSON de Tecnologia/Reptes.');
    resources = [...resourcesToAdd, ...resources.filter(r => !resourcesToAdd.some(n => n.title === r.title && n.level === r.level))];
    if (typeof persistResources === 'function') persistResources();
    if (typeof renderLibrary === 'function') renderLibrary();
    const first = resourcesToAdd[0];
    if (typeof setModule === 'function') setModule('sa');
    const fieldMap = { title:first.title, level:first.level, subject:first.subject, duration:first.duration, type:first.type, challenge:first.challenge, knowledge:first.knowledge, competences:first.competences, sequence:first.sequence, inclusion:first.inclusion, assessment:first.assessment, tags:(first.tags||[]).join(', ') };
    Object.entries(fieldMap).forEach(([k,v]) => { const el = $(k); if (el) el.value = v || ''; });
    if (typeof renderReport === 'function' && typeof getFormData === 'function') renderReport(getFormData());
    if (typeof renderSaReview === 'function' && typeof validateSaForExport === 'function' && typeof getFormData === 'function') renderSaReview(validateSaForExport(getFormData()), false);
    const status = $('importStatus');
    if (status) status.innerHTML = `Projecte de Tecnologia/Reptes importat: <strong>${filename}</strong>. ${resourcesToAdd.length} recurs(os) carregat(s). Obert: ${first.title}. <span class="tech-import-badge">pendent de revisar</span>`;
    const formCard = document.querySelector('.form-card');
    if (formCard) formCard.scrollIntoView({ behavior:'smooth', block:'start' });
  }
  async function importTechProjectFile(file){
    const text = await file.text();
    const data = JSON.parse(text);
    const raws = extractTechSituations(data);
    const mapped = raws.map((raw,i) => techSituationToDocentKitResource(raw, i));
    applyTechImport(mapped, file.name);
  }
  function bindTechImport(){
    const input = $('techProjectInput');
    if (!input) return;
    input.addEventListener('change', async () => {
      const file = input.files && input.files[0];
      if (!file) return;
      try { await importTechProjectFile(file); }
      catch (err) { console.error(err); alert(err.message || 'No he pogut importar el projecte de Tecnologia/Reptes.'); }
      finally { input.value = ''; }
    });
  }
  // Millora també la importació JSON genèrica: els paquets de Tecnologia/Reptes es reconeixen automàticament.
  const oldExtract = typeof extractJsonSaItems === 'function' ? extractJsonSaItems : null;
  extractJsonSaItems = function(parsed){
    const base = oldExtract ? oldExtract(parsed) : [];
    const tech = (hasTechOrigin(parsed) || parsed?.situacio || parsed?.situations) ? extractTechSituations(parsed) : [];
    const merged = [...base, ...tech];
    const seen = new Set();
    return merged.filter(item => {
      const key = item.id || item.titol || item.title || JSON.stringify(item).slice(0,100);
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  };
  const oldJsonMap = typeof jsonSaToFormResource === 'function' ? jsonSaToFormResource : null;
  jsonSaToFormResource = function(item){
    if (item && (item.app_origen || item.course || item.product || item.blocks || item.rubric || item.technologyOriginal) && !item.schema?.includes?.('docentkit.sa')) {
      return techSituationToDocentKitResource(item, 0);
    }
    return oldJsonMap ? oldJsonMap(item) : techSituationToDocentKitResource(item, 0);
  };
  window.docentKitTechImport = { version: VERSION, extractTechSituations, techSituationToDocentKitResource };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', bindTechImport); else bindTechImport();
})();


/* DocentKit v2.4.2 · Neteja i reestructuració de SA generades amb IA */
(function(){
  const DK242_VERSION = '2.4.2';
  function $(id){ return document.getElementById(id); }
  function field(id){ const el=$(id); return el ? String(el.value || '') : ''; }
  function setField(id, value){ const el=$(id); if (el) el.value = value == null ? '' : String(value); }
  function lines(text){ return String(text || '').split(/\r?\n/).map(s=>s.trim()).filter(Boolean); }
  function stripBullets(s){ return String(s||'').replace(/^[-•*\d.)\s]+/,'').trim(); }
  function uniq(arr){ const seen=new Set(); return arr.map(x=>String(x||'').trim()).filter(x=>{ const k=x.toLowerCase(); if(!x||seen.has(k)) return false; seen.add(k); return true; }); }
  function cleanValue(text){
    return String(text || '')
      .replace(/\n{3,}/g,'\n\n')
      .replace(/[ \t]{2,}/g,' ')
      .replace(/\s+([,.;:])/g,'$1')
      .trim();
  }
  function labelBlock(label, value){ value=cleanValue(value); return value ? `${label}: ${value}` : ''; }
  function safeExtractSaParts(text){
    try { if (typeof extractSaParts === 'function') return extractSaParts(text) || {}; } catch(e){}
    return {};
  }
  function safeExtractLabeled(text, labels){
    try { if (typeof extractLabeled === 'function') return extractLabeled(text, labels) || {}; } catch(e){}
    return {};
  }
  function firstMeaningfulSentence(text){
    const t=String(text||'').replace(/\s+/g,' ').trim();
    const parts=t.split(/(?<=[.!?])\s+/).map(x=>x.trim()).filter(Boolean);
    return parts.find(p=>p.length>25) || parts[0] || '';
  }
  function isWeakChallenge(rep){
    const r=String(rep||'').trim();
    if (!r) return true;
    if (r.length < 35) return true;
    if (/^(d['’]enginyeria real|repte|pregunta|problema|necessitat)\.?$/i.test(r)) return true;
    if (!/[?¿]|com podem|com podríem|disseny|constru|resoldre|millorar|crear|elaborar|investigar/i.test(r)) return true;
    return false;
  }
  function inferProductShort(product, title){
    let p=String(product||'').trim() || String(title||'').trim();
    p=p.replace(/^(Maqueta|Projecte|Prototip|Producte final)\s+d['’]un\s*/i,'').trim();
    p=p.replace(/,\s*acompanyada[\s\S]*$/i,'').trim();
    p=p.replace(/\s+/g,' ');
    if (p.length>90) p=p.slice(0,90).replace(/\s+\S*$/,'')+'...';
    return p || 'producte final';
  }
  function buildGoodChallenge(data, parts){
    const title=data.title || 'la situació';
    const subject=data.subject || 'la matèria';
    const product=inferProductShort(parts.producte || '', title);
    if (/braç pneumàtic/i.test(title + ' ' + product)) {
      return 'Com podem dissenyar i construir un braç pneumàtic funcional amb materials senzills, aplicant principis de pneumàtica i justificant-ne el funcionament?';
    }
    if (/aut[oò]mat/i.test(title + ' ' + product)) {
      return 'Com podem construir un autòmat funcional i explicar tècnicament com transforma el moviment?';
    }
    return `Com podem dissenyar, construir i justificar ${product} aplicant sabers de ${subject} per donar resposta a un repte proper i real?`;
  }
  function restructureChallenge(data){
    const parts=safeExtractSaParts(data.challenge || '');
    let context=cleanValue(parts.context || '');
    let repte=cleanValue(parts.repte || '');
    let justificacio=cleanValue(parts.justificacio || '');
    let producte=cleanValue(parts.producte || '');
    const raw=data.challenge || '';
    if (!context) {
      const candidate=firstMeaningfulSentence(raw);
      if (candidate && !/^Repte\s*:/i.test(candidate) && candidate.length > 40) context=candidate;
    }
    if (!producte) {
      const m=raw.match(/producte final\s*:?\s*([^\n.]+(?:\.[^\n]*)?)/i);
      if (m) producte=cleanValue(m[1]);
    }
    if (isWeakChallenge(repte)) repte=buildGoodChallenge(data, {producte});
    if (!context) context=`L’alumnat de ${data.level || 'ESO'} treballa ${data.subject || 'la matèria'} a partir d’un repte pràctic i proper, connectant els sabers amb una situació real de disseny, construcció, anàlisi i comunicació.`;
    if (!justificacio) justificacio='La situació permet aplicar sabers de manera competencial, desenvolupar el procés tecnològic, treballar cooperativament, documentar decisions i comunicar evidències de l’aprenentatge.';
    if (!producte) producte='Producte final funcional o documentat, acompanyat d’evidències del procés, justificació tècnica i presentació o reflexió final.';
    return cleanValue([labelBlock('Context', context), labelBlock('Repte', repte), labelBlock('Justificació', justificacio), labelBlock('Producte final', producte)].filter(Boolean).join('\n\n'));
  }
  function extractUntilNext(label, text){
    const escaped=label.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
    const labels='Inicials|Desenvolupament|Estructuració|Estructuracio|Aplicació|Aplicacio|Metodologia|Organització de l.aula|Organitzacio de l.aula|Recursos|Espais';
    const re=new RegExp(`${escaped}\\s*:?\\s*([\\s\\S]*?)(?=\\n\\s*(?:${labels})\\s*:?|$)`,'i');
    const m=String(text||'').match(re);
    return m ? cleanValue(m[1]) : '';
  }
  function removeNoiseFromPhase(text){
    let t=String(text||'');
    t=t.replace(/\n\s*(Metodologia|Organització de l.aula|Organitzacio de l.aula|Recursos|Espais)\s*:[\s\S]*$/i,'');
    t=t.replace(/\n\s*(Inicials|Desenvolupament|Estructuració|Estructuracio|Aplicació|Aplicacio)\s*:[\s\S]*$/i,'');
    const l=uniq(lines(t).map(stripBullets)).filter(x=>x && !/^(Sessió|Sessio)\s*\d+\s*:?$/i.test(x));
    return l.slice(0,10).map(x=>`- ${x}`).join('\n');
  }
  function defaultPhase(title, product){
    const p=inferProductShort(product,title);
    return {
      inicials:`- Presentació del context i del repte.\n- Activació de coneixements previs i conversa sobre criteris d’èxit.\n- Organització dels equips i primera identificació de necessitats, materials i condicionants.`,
      desenvolupament:`- Recerca guiada i anàlisi d’exemples relacionats amb ${p}.\n- Disseny, planificació i elaboració d’esbossos o esquemes.\n- Construcció, simulació o desenvolupament del producte amb proves parcials.`,
      estructuracio:`- Organització de les evidències del procés.\n- Revisió dels sabers aplicats i del vocabulari tècnic.\n- Ajustos a partir de proves, errors detectats i retorn docent o entre iguals.`,
      aplicacio:`- Presentació o demostració del producte final.\n- Autoavaluació i coavaluació amb rúbrica.\n- Reflexió final sobre aprenentatges, dificultats i possibles millores.`
    };
  }
  function restructureSequence(data){
    const raw=data.sequence || '';
    const defaults=defaultPhase(data.title, safeExtractSaParts(data.challenge||'').producte);
    let inicials=removeNoiseFromPhase(extractUntilNext('Inicials', raw));
    let desenvolupament=removeNoiseFromPhase(extractUntilNext('Desenvolupament', raw));
    let estructuracio=removeNoiseFromPhase(extractUntilNext('Estructuració', raw) || extractUntilNext('Estructuracio', raw));
    let aplicacio=removeNoiseFromPhase(extractUntilNext('Aplicació', raw) || extractUntilNext('Aplicacio', raw));
    if (!inicials || inicials.length<40) inicials=defaults.inicials;
    if (!desenvolupament || desenvolupament.length<40) desenvolupament=defaults.desenvolupament;
    if (!estructuracio || estructuracio.length<40) estructuracio=defaults.estructuracio;
    if (!aplicacio || aplicacio.length<40) aplicacio=defaults.aplicacio;
    const metodologia=extractUntilNext('Metodologia', raw);
    const organitzacio=extractUntilNext('Organització de l’aula', raw) || extractUntilNext('Organitzacio de l’aula', raw);
    const recursos=extractUntilNext('Recursos', raw);
    return cleanValue([
      metodologia && labelBlock('Metodologia', metodologia),
      organitzacio && labelBlock('Organització de l’aula', organitzacio),
      recursos && labelBlock('Recursos', recursos),
      labelBlock('Inicials', inicials),
      labelBlock('Desenvolupament', desenvolupament),
      labelBlock('Estructuració', estructuracio),
      labelBlock('Aplicació', aplicacio)
    ].filter(Boolean).join('\n\n'));
  }
  function criteriaFromRubric(text){
    const codes=(String(text||'').match(/\b\d+\.\d+\b/g)||[]).filter(Boolean);
    return uniq(codes).slice(0,6);
  }
  function restructureCompetences(data){
    let c=cleanValue(data.competences || '');
    if (c && !/—|pendents? de concretar/i.test(c) && /\d+\.\d+|CE\d|Competències específiques|Criteris/i.test(c)) return c;
    const codes=criteriaFromRubric(data.assessment).length ? criteriaFromRubric(data.assessment) : ['1.1','2.1','3.1','4.1','5.1','6.1'];
    const subject=data.subject || 'Tecnologia';
    return cleanValue(`Competències específiques:\nCE1. Idear i planificar solucions tecnològiques a partir d’una necessitat o repte proper.\nCE2. Desenvolupar projectes aplicant el procés tecnològic: anàlisi, disseny, planificació, construcció, prova i millora.\nCE3. Utilitzar materials, eines, mecanismes, components o recursos digitals adequats al repte.\nCE4. Comunicar processos i solucions amb vocabulari tècnic, dibuixos, esquemes, documents o presentacions.\n\nCriteris d’avaluació:\n${codes.map(code=>`${code}. Criteri vinculat al desenvolupament del projecte i als sabers de ${subject}; cal revisar-ne la redacció exacta segons el currículum del curs.`).join('\n')}`);
  }
  function rubricRowsFromText(text){
    const rows=[];
    const src=String(text||'');
    const blocks=src.split(/(?=CRITERI LOMLOE\s*:|\n\s*\d+\.\d+\s*[|:])/i).map(x=>x.trim()).filter(Boolean);
    for (const b of blocks){
      const code=(b.match(/(?:CRITERI LOMLOE\s*:\s*)?(\d+\.\d+)/i)||[])[1] || '';
      const item=(b.match(/ÍTEM\s*:\s*([^\n]+)/i)||b.match(/\d+\.\d+\s*[|:]\s*([^|\n]+)/)||[])[1] || '';
      const na=(b.match(/(?:No Assolit \(NA\)|NA)\s*:\s*([\s\S]*?)(?=\n\s*(?:Assolit Satisfactori \(AS\)|AS)\s*:|$)/i)||[])[1] || '';
      const ass=(b.match(/(?:Assolit Satisfactori \(AS\)|AS)\s*:\s*([\s\S]*?)(?=\n\s*(?:Assolit Notable \(AN\)|AN)\s*:|$)/i)||[])[1] || '';
      const an=(b.match(/(?:Assolit Notable \(AN\)|AN)\s*:\s*([\s\S]*?)(?=\n\s*(?:Assolit Excel·lent \(AE\)|AE)\s*:|$)/i)||[])[1] || '';
      const ae=(b.match(/(?:Assolit Excel·lent \(AE\)|AE)\s*:\s*([\s\S]*?)(?=\n\s*(?:CRITERI LOMLOE\s*:|\d+\.\d+\s*[|:])|$)/i)||[])[1] || '';
      if (code || item || na || ass || an || ae) rows.push({code,item,na:cleanValue(na),as:cleanValue(ass),an:cleanValue(an),ae:cleanValue(ae)});
    }
    return rows;
  }
  function cleanRubricItem(item, product){
    let i=String(item||'').trim();
    if (/^Qualitat del/i.test(i) && i.length>80) return 'Qualitat del producte final';
    if (!i) return 'Ítem d’avaluació';
    return i;
  }
  function assessmentDefaults(data){
    const product=safeExtractSaParts(data.challenge||'').producte || data.title || 'producte final';
    return {
      evidencies:`- Producte final o prototip.\n- Esbossos, croquis, plànols o esquemes.\n- Quadern, memòria o documentació del procés.\n- Presentació oral o demostració.\n- Autoavaluació, coavaluació i reflexió final.`,
      instruments:`- Rúbrica NA/AS/AN/AE del procés i del producte.\n- Llista de control del treball de grup i de la documentació.\n- Observació docent durant el procés.\n- Retorn formatiu abans del lliurament final.`,
      retorn:`- Feedback durant el disseny i la construcció.\n- Revisió entre iguals a partir de criteris d’èxit.\n- Millora del producte o de la documentació abans de la presentació final.`
    };
  }
  function restructureAssessment(data){
    const raw=data.assessment || '';
    const parts=safeExtractLabeled(raw, {evidencies:['Evidències','Evidencies'], instruments:['Instruments'], retorn:['Retorn i millora','Retorn'], rubrica:['Rúbrica','Rubrica']});
    const defs=assessmentDefaults(data);
    let rub=parts.rubrica || raw;
    const rows=rubricRowsFromText(rub);
    const product=safeExtractSaParts(data.challenge||'').producte || '';
    let rubricText='';
    if (rows.length){
      rubricText=rows.slice(0,8).map(r=>[
        `CRITERI LOMLOE: ${r.code || 'pendent'}`,
        `ÍTEM: ${cleanRubricItem(r.item, product)}`,
        `NA: ${r.na || 'Mostra dificultats importants i necessita molta ajuda.'}`,
        `AS: ${r.as || 'Assoleix els elements bàsics amb suport puntual.'}`,
        `AN: ${r.an || 'Assoleix el criteri de manera coherent i força autònoma.'}`,
        `AE: ${r.ae || 'Assoleix el criteri amb autonomia, precisió i justificació.'}`
      ].join('\n')).join('\n\n');
    } else {
      rubricText='CRITERI LOMLOE: 1.1\nÍTEM: Comprensió del repte\nNA: Identifica parcialment el repte i necessita molta guia.\nAS: Identifica els elements bàsics del repte amb suport.\nAN: Analitza el repte i el relaciona amb el context.\nAE: Analitza el repte amb profunditat i proposa millores.\n\nCRITERI LOMLOE: 2.1\nÍTEM: Procés de treball i producte final\nNA: El procés és incomplet o poc funcional.\nAS: Compleix els requisits mínims amb suport.\nAN: Desenvolupa un producte coherent i ben justificat.\nAE: Desenvolupa un producte complet, creatiu i millorat.';
    }
    return cleanValue([
      labelBlock('Evidències', removeRubricLeak(parts.evidencies) || defs.evidencies),
      labelBlock('Instruments', removeRubricLeak(parts.instruments) || defs.instruments),
      labelBlock('Retorn i millora', removeRubricLeak(parts.retorn) || defs.retorn),
      labelBlock('Rúbrica', rubricText)
    ].join('\n\n'));
  }
  function removeRubricLeak(text){
    return cleanValue(String(text||'').replace(/CRITERI LOMLOE[\s\S]*$/i,'').replace(/Assolit Excel·lent[\s\S]*$/i,''));
  }
  function restructureKnowledge(data){
    const l=uniq(lines(data.knowledge).map(stripBullets)).filter(x=>x.length>3);
    if (l.length<=18) return data.knowledge;
    const keep=l.filter(x=>!/^(Sabers\s*\/|Sabers conceptuals|Sabers procedimentals|Sabers actitudinals)\s*:?$/i.test(x)).slice(0,22);
    return keep.map(x=>`- ${x}`).join('\n');
  }
  window.restructureCurrentSa = function(){
    const data=typeof getFormData==='function' ? getFormData() : {
      title:field('title'), level:field('level'), subject:field('subject'), duration:field('duration'), challenge:field('challenge'), knowledge:field('knowledge'), competences:field('competences'), sequence:field('sequence'), inclusion:field('inclusion'), assessment:field('assessment')
    };
    const cleaned={
      challenge:restructureChallenge(data),
      knowledge:cleanValue(restructureKnowledge(data)),
      competences:restructureCompetences(data),
      sequence:restructureSequence(data),
      assessment:restructureAssessment(data)
    };
    Object.entries(cleaned).forEach(([k,v])=>setField(k,v));
    if (typeof renderReport==='function' && typeof getFormData==='function') renderReport(getFormData());
    if (typeof renderAiValidation==='function' && typeof validateSaQuality==='function' && typeof getFormData==='function') renderAiValidation(validateSaQuality(getFormData()));
    if (typeof renderPedagogicAudit==='function' && typeof validateSaPedagogy==='function' && typeof getFormData==='function') renderPedagogicAudit(validateSaPedagogy(getFormData()));
    if (typeof renderSaReview==='function' && typeof validateSaForExport==='function' && typeof getFormData==='function') renderSaReview(validateSaForExport(getFormData()), false);
    const status=$('importStatus'); if (status) status.textContent='SA reestructurada: repte, seqüència, rúbrica, evidències i camps principals netejats.';
    if (typeof showToast==='function') showToast('SA reestructurada i camps principals actualitzats. Revisa CE/CA exactes abans d’exportar.');
  };
  const oldBuild = typeof buildProgramacioLomloeExport === 'function' ? buildProgramacioLomloeExport : null;
  if (oldBuild) {
    window.buildProgramacioLomloeExport = function(item){
      const base = oldBuild(item);
      const data = item || {};
      const cleanedChallenge = restructureChallenge(data);
      const p = safeExtractSaParts(cleanedChallenge);
      base.context = p.context || base.context;
      base.descripcio = p.context || base.descripcio;
      base.repte = p.repte || base.repte;
      base.producteFinal = p.producte || base.producteFinal;
      if (!base.competenciesEspecifiques || !base.competenciesEspecifiques.length || String(base.competenciesEspecifiques).includes('—')) {
        const cp = safeExtractLabeled(restructureCompetences(data), { competencies:['Competències específiques','Competencies especifiques'], criteria:['Criteris d’avaluació','Criteris'] });
        base.competenciesEspecifiques = lines(cp.competencies || '').filter(Boolean);
        if (!base.criterisAvaluacio || !base.criterisAvaluacio.length) base.criterisAvaluacio = lines(cp.criteria || '').filter(Boolean);
      }
      base.observacions = (base.observacions || '') + ' Exportació netejada amb DocentKit v2.4.2.';
      return base;
    };
  }
  function bind242(){
    const btn=$('restructureSaBtn');
    if (btn && !btn.dataset.dk242Bound){ btn.dataset.dk242Bound='1'; btn.addEventListener('click', window.restructureCurrentSa); }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', bind242); else bind242();
})();
