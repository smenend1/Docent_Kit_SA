# DocentKit · Generador de situacions i recursos

Versió 1.2 de la PWA educativa en català per a docents.

## Objectiu de la v1.2

Aquesta versió millora la fiabilitat del mode d'IA assistida. Ja no depèn només d'una única resposta llarga de Gemini: incorpora validació de camps obligatoris i botons per completar apartats concrets quan han quedat buits o massa febles.

## Novetats v1.2

- Nou bloc **Control de qualitat** dins el mode IA.
- Botó **Valida camps obligatoris** per comprovar:
  - sabers;
  - criteris LOMLOE;
  - seqüència didàctica;
  - adaptacions TDAH, TEA, dislèxia i TDL;
  - avaluació;
  - rúbrica.
- Botó **Completa camps buits** per regenerar només els blocs febles.
- Botó **Genera només sabers**.
- Botó **Genera només adaptacions**.
- Botó **Genera només rúbrica**.
- Les generacions parcials responen amb etiquetes interpretables per l'app.
- El mapatge d'importació IA ara reconeix millor:
  - `BLOCS DE SABERS`;
  - `SABERS CONCRETS`;
  - `MESURES I SUPORTS`;
  - `ADAPTACIONS TDAH`;
  - `ADAPTACIONS TEA`;
  - `ADAPTACIONS DISLÈXIA`;
  - `ADAPTACIONS TDL`;
  - `RÚBRICA`.
- Quan s'aplica un esborrany parcial, l'app evita sobreescriure el títol i intenta conservar el contingut existent.
- Service worker actualitzat a `docentkit-v12`.

## Es manté

- PWA instal·lable i preparada per GitHub Pages.
- Mode local sense API externa.
- Mode experimental Google API / Gemini.
- Selector de model Gemini.
- Prova de connexió API.
- Assistent guiat per construir instruccions completes.
- Plantilles internes.
- Importació TXT, Markdown, JSON, DOCX i PDF amb text seleccionable.
- Exportació PDF visual descarregable sense pop-up.
- Vista HTML/impressió neta.
- Biblioteca local amb `localStorage`.
- Exportació/importació JSON.

## Notes honestes

- El validador no substitueix la revisió docent: detecta absències o apartats febles, però no garanteix que el contingut sigui curricularment perfecte.
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
