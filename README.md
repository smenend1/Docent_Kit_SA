# DocentKit · Generador de situacions i recursos

Versió 1.1 de la PWA educativa en català per a docents.

## Objectiu de la v1.1

Aquesta versió fa un pas més en el mode d'IA assistida: l'usuari ja no ha d'escriure necessàriament una descripció llarga. L'app incorpora un assistent guiat que construeix automàticament unes instruccions completes per generar una situació d'aprenentatge sencera.

## Novetats v1.1

- Nou bloc **Assistent guiat** dins el mode IA.
- Camps específics per construir una SA completa:
  - curs;
  - matèria;
  - tema o repte;
  - producte final;
  - durada;
  - materials, eines i recursos;
  - sabers o continguts clau;
  - criteris LOMLOE o competències;
  - adaptacions per TDAH, TEA, dislèxia i TDL.
- Botó **Construeix instruccions**: crea automàticament un prompt complet a partir dels camps guiats.
- Botó **Genera SA completa assistida**: envia les instruccions a Gemini si hi ha API key o genera un esborrany local si no n'hi ha.
- Prompt de Gemini millorat per demanar una SA completa, amb objectius, criteris, sabers, seqüència, vectors, evidències i rúbrica.
- Rúbrica demanada en format: criteri LOMLOE | ítem d'avaluació | NA | AS | AN | AE.
- Més marge de resposta de Gemini (`maxOutputTokens` ampliat) per evitar esborranys massa curts.
- Es guarden localment les preferències de l'assistent guiat en aquest navegador.
- Service worker actualitzat a `docentkit-v11`.

## Es manté

- PWA instal·lable i preparada per GitHub Pages.
- Mode local sense API externa.
- Mode experimental Google API / Gemini.
- Selector de model Gemini.
- Prova de connexió API.
- Plantilles internes.
- Importació TXT, Markdown, JSON, DOCX i PDF amb text seleccionable.
- Exportació PDF visual descarregable sense pop-up.
- Vista HTML/impressió neta.
- Biblioteca local amb `localStorage`.
- Exportació/importació JSON.

## Notes honestes

- El mode Gemini depèn de la clau API, permisos, quota, restriccions de domini i models disponibles.
- La clau API es desa només al navegador amb `localStorage`; no s'ha de posar mai dins el codi del repositori.
- La importació PDF no fa OCR en documents escanejats.
- El PDF descarregable és real i estructurat, però no replica sempre exactament la maquetació HTML.

## Publicació a GitHub Pages

Puja aquests fitxers a la branca configurada per Pages:

- `index.html`
- `styles.css`
- `app.js`
- `manifest.json`
- `sw.js`

Després obre la URL de GitHub Pages i força una recàrrega o reinstal·la la PWA si el navegador conserva una versió antiga.
