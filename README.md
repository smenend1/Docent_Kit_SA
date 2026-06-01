# DocentKit v2.5.8 · Derivacions actives des de SA

## Correcció v2.5.8

- El botó **Crea fitxa des de la SA** ja no arrossega metodologia, organització, seguretat, CE/CA o objectius com si fossin passos de l’alumnat.
- Les fitxes es construeixen amb una estructura pròpia: objectiu, consigna, lliurable, materials, passos, checklist, suports i avaluació.
- El bloc **Activitats pas a pas** mostra instruccions d’alumnat i no blocs sencers de SA.
- El bloc **Checklist de qualitat** mostra ítems breus i observables, no llistes llargues de competències.
- Cache actualitzada a `docentkit-v2-5-7`.

# DocentKit v2.5.8 · Derivacions netes i exportació sense manteniment

## Correcció v2.5.8

- Les derivacions des d’una SA cap a fitxa, sessió, projecte, rúbrica, prova i adaptació netegen placeholders de plantilla abans de generar el nou recurs.
- Les fitxes i la resta de recursos ja no haurien d’arrossegar textos genèrics entre claudàtors, com `[exemple resolt...]`, `[lliurable...]` o `[instrument...]`.
- Les exportacions i la impressió amaguen completament el bloc de diagnòstic/manteniment.
- El document exportat passa per un sanejament de sortida per evitar textos interns, placeholders i camps buits disfressats de contingut.
- Cache actualitzada a `docentkit-v2-5-7`.

# DocentKit v2.5.8 · Plantilles actives, derivacions netes i exportació sense manteniment

Aquesta versió integra plantilles neutres per a cada mòdul: situació d’aprenentatge, fitxa d’activitat, sessió, prova competencial, rúbrica, projecte i adaptació/inclusió.


## Correcció v2.5.8

- Quan es tria una opció del menú lateral (SA, projecte, sessió, rúbrica, prova, fitxa o adaptació), ara es carrega automàticament la plantilla neutra corresponent.
- El selector de plantilla també aplica la plantilla en canviar d'opció, no només quan es prem el botó.
- Això evita que només canviï el nom del tipus mentre els camps continuen amb l'estructura anterior.

## Canvis principals

- La plantilla general ja no força cap curs, matèria ni nivell concret.
- Cada tipus de recurs té una estructura pròpia, inspirada en plantilles docents competencials editables.
- Les fitxes d’activitat se centren en objectiu, consigna, materials, lliurable, passos, checklist i criteris d’èxit.
- Les sessions separen inici, desenvolupament, tancament, accions del docent, accions de l’alumnat, temps i evidència de sortida.
- Les proves competencials inclouen context, estímul, sabers mobilitzats, preguntes, puntuació i pauta de correcció.
- Les rúbriques mantenen criteri, ítem observable, NA, AS, AN, AE i evidència/instrument.
- Els projectes inclouen repte, condicions, materials, producte final, documentació, fases i avaluació.
- Les adaptacions/inclusió separen barreres, mesures universals, suports, opcions de resposta, ajustos d’accés i seguiment.
- Cache actualitzada a `docentkit-v2-5-7`.

## Ús recomanat

1. Tria el mòdul que necessites.
2. Selecciona la plantilla neutra corresponent.
3. Substitueix els camps entre claudàtors o genera amb IA a partir d’aquest esquelet.
4. Revisa el recurs abans d’exportar-lo.

---

# DocentKit · Generador de situacions i recursos

Versió 1.9 de la PWA educativa en català per a docents.

## Objectiu de la v1.9.1

Aquesta versió busca deixar una base més estable per a Tecnologia i Digitalització: importació JSON DocentKit fiable, plantilles locals de SA de Tecnologia i informe net per exportar.

## Millores principals

- Importació JSON DocentKit més directa i robusta.
- Reconeixement de `schema: "docentkit.sa.v1"` i `tipus: "situacio_aprenentatge"`.
- Suport per paquets JSON amb arrays a `recursos`, `resources`, `situacions`, `items`, `plantilles` o `templates`.
- Càrrega directa del JSON al formulari de Crear SA.
- Desa també la SA importada a la biblioteca local.
- Actualització immediata de l’informe després d’importar.
- Plantilles locals SA1-SA6 de Tecnologia i Digitalització 2n ESO:
  - SA1 · Dibuix assistit per ordinador i impressió 3D
  - SA2 · Podem fabricar d’una altra manera?
  - SA3 · Són elèctricament dependents?
  - SA4 · Podem generar energia verda?
  - SA5 · La comunicació té límit?
  - SA6 · Passem a conversar amb una màquina?
- Service worker actualitzat a `docentkit-v19`.

## Ús recomanat

1. Obre la PWA.
2. Per usar una plantilla local, ves a Crear SA i tria una SA del desplegable Plantilla.
3. Per importar una SA, ves a Exportar / importar, selecciona un JSON DocentKit i prem Importa i interpreta.
4. Revisa el formulari de Crear SA.
5. Genera l’informe i exporta a PDF o HTML.

## Nota

Si després d’actualitzar encara veus una versió antiga, cal recarregar forçadament o esborrar la cache de la PWA.


## Canvi v1.9.1

- S'ha aclarit el selector del mode IA: ara diferencia entre “Mode local · sense API externa” i “Mode Gemini · usa la meva API key”.
- S'ha afegit una nota per evitar confondre el mode de generació amb el selector de plantilles de SA.
- Cache actualitzada a `docentkit-v191`.


## v2.0

- Biblioteca local millorada amb filtre per tipus.
- Botons per afegir les 6 SA locals de Tecnologia i Digitalització a la biblioteca.
- Exportació del paquet local de Tecnologia 2n ESO en JSON.
- Exportació de tota la biblioteca local en JSON.
- Importació de paquets de biblioteca JSON.
- Accions noves per recurs: duplicar i exportar JSON individual.
- Cache actualitzada a `docentkit-v20`.


## v2.1.5

Afegeix un validador pedagògic específic per a situacions d’aprenentatge de Tecnologia i Digitalització.

Novetats:
- Botó **Revisa coherència pedagògica** dins del control de qualitat.
- Comprovació de repte contextualitzat, producte final observable, alineació criteris-rúbrica, seqüència didàctica, evidències, retorn formatiu, inclusió, seguretat de taller i durada.
- Puntuació global 0-100 amb recomanacions prioritàries.
- Cache actualitzada a `docentkit-v21`.

## v2.1.5.2

- Afegit un panell propi i visible de **Resultat de la revisió pedagògica**.
- La puntuació global surt amb barra de progrés i nivell.
- La revisió mostra targetes separades per repte, producte final, criteris-rúbrica, seqüència, avaluació, inclusió, taller i durada.
- Les recomanacions prioritàries ja no queden amagades dins la sortida de la IA.
- Cache actualitzada a `docentkit-v211`.


## v2.1.5
- Millora visual dels avisos del validador pedagògic: ambre per a avisos revisables.
- Botons de correcció automàtica local en les targetes del validador.
- Correcció semiautomàtica de rúbrica, inclusió, avaluació, durada, seqüència i seguretat de taller.
- Botons de millora amb IA per a apartats compatibles.
- Textos més llegibles en mòbil.


## v2.1.5

- Recupera botons visibles de sortida a la vista d’informe: Genera informe, Obre vista d’impressió, Descarrega PDF i Imprimeix/desa.
- Millora la barra d’exportació en mòbil i evita que la sortida quedi amagada dins el mode IA.
- Ajusta l’estil visual de l’informe de SA perquè sigui més clar i atractiu.
- Service worker actualitzat a docentkit-v214.


## v2.2 · Estabilització tècnica

Aquesta versió afegeix un panell de manteniment amb diagnòstic, proves bàsiques, exportació/importació de còpia local i descàrrega de l'especificació JSON `docentkit.sa.v1`. L'objectiu és facilitar la recuperació de dades, la reconstrucció tècnica i el control de cache/service worker.


## Versió 2.2.1

Aquesta revisió afegeix interoperabilitat directa amb la futura PWA **Programació LOMLOE · Matèries i Situacions d’Aprenentatge**.

Novetats:

- Nou botó **Exporta per Programació LOMLOE** al formulari principal.
- L’exportació JSON principal passa a prioritzar l’esquema `docentkit.sa.v1` quan el recurs és una situació d’aprenentatge.
- El paquet exportat per programació usa `programacio.lomloe.sa.import.v1` i inclou la SA dins de `situacio`.
- Això permet que la futura PWA de programació anual pugui importar SA creades o millorades amb DocentKit sense perdre repte, sabers, seqüència, inclusió ni avaluació.

## v2.3.1 · Exportació cap a Programació LOMLOE

- Afegeix exportació directa de la SA actual amb el botó **Exporta per Programació LOMLOE**.
- Afegeix exportació compatible també des de cada recurs de la biblioteca amb **Prog. LOMLOE**.
- El JSON resultant és pla i compatible amb **Programació LOMLOE → Gestor de SA → Importa SA JSON**.
- Conserva també l’objecte original DocentKit dins de `docentkitOriginal` per no perdre informació.


Actualització recent:
- DocentKit v2.3.1: exportació Programació LOMLOE ampliada amb metadades de curs/matèria, rúbrica i avaluació quan existeixen.

## v2.3.1 · Revisió de qualitat de SA

- Afegit el botó **Revisa SA** al formulari principal.
- L'informe comprova títol, curs/matèria, durada, context i repte, producte final, sabers, CE/CA, seqüència d'activitats, inclusió/DUA, avaluació, instruments i rúbrica NA/AS/AN/AE.
- L'exportació **Exporta per Programació LOMLOE** incorpora una metadada `validacioDocentKit` amb puntuació, errors i avisos.
- L'exportació continua sent compatible amb **Programació LOMLOE → Gestor de SA → Importa SA JSON**.

## v2.3.1 · Rúbrica millorada NA/AS/AN/AE

Aquesta versió afegeix un taller específic de rúbrica dins del formulari principal:

- **Genera rúbrica criterial**: crea una rúbrica amb ítems i nivells NA, AS, AN i AE a partir dels criteris detectats.
- **Revisa rúbrica**: comprova si hi ha criteris, ítems i descriptors complets.
- **Afegeix a avaluació**: insereix la rúbrica estructurada dins del camp d’avaluació.
- **Exporta rúbrica JSON**: genera un fitxer de rúbrica reutilitzable.

L’exportació cap a **Programació LOMLOE** també envia la rúbrica normalitzada amb els camps `criteri_lomloe`, `item`, `NA`, `AS`, `AN` i `AE`.


## v2.3.1 · Correcció del taller de rúbrica

- Corregeix el generador de rúbrica criterial perquè no generi files buides amb `NA / AS / AN / AE`.
- El botó **Genera rúbrica criterial** crea descriptors complets i diferenciats.
- El botó **Revisa rúbrica** revisa la rúbrica generada en pantalla, no una plantilla antiga buida.
- El botó **Afegeix a avaluació** insereix una rúbrica textual estructurada compatible amb Programació LOMLOE.

## v2.4.1 · Importar projectes de Tecnologia i reptes

Aquesta versió connecta millor DocentKit amb **Tecnologia ESO · Projectes i reptes**.

Novetats:
- Nou botó **Importa projecte de Tecnologia/Reptes** dins d'Importació avançada.
- Accepta JSON exportats des de Tecnologia ESO · Projectes i reptes.
- Converteix un projecte o repte tecnològic en una situació d'aprenentatge editable dins DocentKit.
- Carrega títol, curs, matèria, repte, producte final, sabers, CE, CA, seqüència, materials, evidències i rúbrica quan existeixin.
- Marca la SA com a **pendent de revisar** abans d'exportar-la a Programació LOMLOE.
- La importació JSON genèrica també intenta reconèixer paquets de Tecnologia/Reptes automàticament.

Flux recomanat:

```text
Tecnologia ESO · Projectes i reptes
→ Exporta projecte / SA JSON
→ DocentKit
→ Importa projecte de Tecnologia/Reptes
→ Revisa SA
→ Exporta per Programació LOMLOE
```

Aquesta versió no substitueix DocentKit com a generador de SA: Tecnologia/Reptes continua fent de banc de projectes i idees tècniques.


## v2.4.1

- Els botons blaus de millora amb IA de la revisió pedagògica ara apliquen el text generat als camps del formulari.
- S'han afegit generacions específiques per repte/context, seqüència i avaluació.
- Els botons “Completa camps buits”, “Genera només sabers”, “Genera només adaptacions” i “Genera només rúbrica” també emplenen els camps corresponents.


## v2.4.6 · Neteja i reestructuració de SA

- Nou botó **Reestructura SA** dins el control de qualitat IA.
- Neteja camps generats per IA quan queden barrejats o repetits.
- Converteix el repte en una pregunta o missió clara.
- Separa context, repte, justificació i producte final.
- Reordena la seqüència didàctica en Inicials, Desenvolupament, Estructuració i Aplicació, evitant repeticions de metodologia i recursos.
- Separa evidències, instruments, retorn i rúbrica.
- Millora l’exportació cap a Programació LOMLOE perquè no arrossegui reptes fragmentats ni CE buides quan es pugui reconstruir.


## v2.4.6 · Neteja fina de camps IA

- Corregeix camps barrejats quan es crea una SA amb IA.
- El producte final ja no arrossega rúbriques ni textos interns.
- Els objectius no incorporen fragments de rúbrica.
- Les competències específiques es desenvolupen quan només apareixen codis genèrics CE1, CE2, CE3.
- Afegeix competències transversals quan falten.
- Garanteix instruments d’avaluació i retorna normes de taller clares en projectes de construcció o prototipatge.
- La plantilla general competencial ja no força 2n ESO ni una matèria concreta.


## v2.4.6 · Seguretat de taller automàtica

- El botó **Afegeix seguretat de taller** genera normes adaptades segons curs/edat, eines, materials i tipus de projecte.
- Detecta riscos de tall, calor/silicona, electricitat, pneumàtica, mecanismes, fabricació digital i materials.
- Afegeix riscos específics, normes d’ús, organització de l’espai, rols i mesures de protecció.
- En projectes de construcció, `Reestructura SA` també pot afegir automàticament aquest bloc si falta.


## v2.4.6 · Diagnòstic de Gemini

- Afegeix el botó **Prova generació curta** per comprovar generateContent real, no només la connexió curta.
- Millora els missatges d'error de Gemini: quota, model no disponible, restriccions de clau, timeout, bloqueig de seguretat i resposta buida.
- La generació completa informa de la mida aproximada del prompt i manté un esborrany local si l'API falla.
- El check de clau queda explicat com a prova curta; no garanteix que una SA llarga es pugui generar.


## v2.4.11 · Control de quota Gemini

- Afegeix pausa automàtica quan Gemini retorna error 429 de quota o límit temporal.
- Desactiva temporalment els botons de prova i generació mentre dura la pausa.
- Mostra un comptador de segons i recomana continuar amb mode local.
- Afegeix el botó “Mode local ara”.
- Evita repetir intents que poden consumir quota o allargar el bloqueig.


## v2.4.11 · Gemini i referer null

- Detecta quan DocentKit s'obre com a fitxer local, `file://`, `content://` o amb origen `null`.
- Evita fer peticions a Gemini en aquest mode, perquè les claus amb restricció de domini poden retornar `Requests from referer null are blocked`.
- Mostra un missatge clar: per usar Gemini cal obrir la PWA des de GitHub Pages/HTTPS o usar mode local.
- Neteja missatges antics d'error 403/429 que podien quedar visibles només obrir l'app.
- Manté el mode local com a alternativa segura quan no hi ha origen HTTPS.

## v2.4.11 · Sanejament de camps IA

Aquesta versió reforça la neteja de les SA generades amb IA abans de renderitzar, exportar o portar a Programació LOMLOE.

Correccions principals:
- elimina textos interns com "IA assistida" o "Esborrany IA complet pendent de mapatge automàtic";
- evita que fragments de rúbrica o CE/CA apareguin dins de producte final o objectius;
- completa les sessions que falten en el resum de desenvolupament quan la durada indica 12 sessions;
- omple mesures específiques de TDAH, TEA, dislèxia i TDL si quedaven buides;
- omple instruments d’avaluació quan quedaven en blanc;
- manté la fitxa vertical de DocentKit, però amb camps més nets per exportar a Programació LOMLOE.

Flux recomanat:
1. Genera la SA amb IA.
2. Aplica l’esborrany.
3. Prem **Reestructura SA**.
4. Revisa coherència pedagògica.
5. Exporta per Programació LOMLOE.


## v2.5.2 · Poliment final de camps IA

- Sanejament més estricte de camps generats amb IA.
- Evita que fragments llargs o descripcions completes acabin dins del camp de durada.
- Completa i reescriu frases tallades en repte, producte final, competències transversals i objectius.
- Neteja fragments de rúbrica, CE/CA o apartats interns que puguin contaminar producte final o objectius.
- Omple instruments i mesures específiques quan queden buides o amb marcadors provisionals.
- Reestructura SA aplica també aquest sanejament final.


## v2.5.2 · Mòduls en paral·lel i fitxes des de SA

- Les opcions del menú lateral generen documents diferenciats: SA, projecte, sessió, rúbrica, prova competencial, fitxa d’activitats i adaptació inclusiva.
- S’afegeixen botons per crear una fitxa, una sessió o una prova a partir de la SA actual.
- Les fitxes d’activitat aprofiten repte, producte final, sabers, seqüència, instruments, mesures i rúbrica de la SA.
- Aquesta versió separa millor el format de cada recurs i evita que tots els recursos surtin com una SA.


## v2.5.2 · Fitxes des de SA millorades

- Millora el botó **Crea fitxa des de la SA**.
- Llegeix millor repte, producte final, materials, seqüència, criteris, instruments i mesures.
- Evita que la fitxa agafi només fragments genèrics o camps equivocats de la SA.
- Genera una fitxa amb passos per a l’alumnat, checklist, evidències i instruments d’avaluació.


## v2.5.2 · Derivacions completes des de SA

Aquesta versió activa i reforça totes les derivacions principals a partir d'una SA revisada:

- Crea fitxa des de la SA.
- Crea sessió des de la SA.
- Crea projecte des de la SA.
- Crea rúbrica des de la SA.
- Crea prova competencial des de la SA.
- Crea adaptació inclusiva des de la SA.

Cada derivació intenta llegir repte, producte final, sabers, seqüència, criteris, instruments i mesures, i genera un recurs amb estructura pròpia.


## Correcció v2.5.8

- El selector **Tipus** ara canvia de mòdul i aplica la plantilla corresponent.
- Els camps del formulari ja no mantenen sempre els mateixos noms genèrics: canvien segons si el recurs és SA, projecte, sessió, rúbrica, prova, fitxa o adaptació.
- Els menús laterals continuen aplicant plantilles, però ara també actualitzen les etiquetes i placeholders dels camps.
- Això evita que una sessió, fitxa o prova sembli una SA amb suggeriments diferents.

## v2.5.8 · Derivacions actives des de SA

Corregeix els botons de derivació perquè generin recursos diferenciats a partir de la SA actual o de l'última SA completa detectada: fitxa, sessió, projecte, rúbrica, prova competencial i adaptació. També afegeix informes específics per tipus de recurs i evita informes buits o amb placeholders.
