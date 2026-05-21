# DocentKit · Generador de situacions i recursos

Versió 0.7 de la PWA educativa en català per a docents.

## Objectiu de la v1.0

Aquesta versió deixa l'app preparada per evolucionar cap a una eina més completa amb més plantilles, importació documental millorada i mode d'IA assistida, sense fer obligatòria cap API externa.

## Novetats v1.0

- Selector de plantilles integrat.
- Biblioteca inicial de plantilles ampliada:
  - SA de Tecnologia ESO.
  - SA de Matemàtiques ESO basada en dades reals.
  - SA general competencial.
  - Projecte base.
  - Projecte STEAM amb prototip.
  - Sessió guiada.
  - Rúbrica NA/AS/AN/AE.
  - Prova competencial base.
  - Prova LOMLOE amb estímul.
  - Fitxa d'activitats.
  - Adaptació inclusiva per TDAH, TEA, dislèxia i TDL.
- Importació avançada de documents:
  - TXT i Markdown.
  - JSON.
  - DOCX amb lectura de paràgrafs, taules, notes i text principal.
  - PDF amb text seleccionable.
- Estat d'importació amb recompte de caràcters i camps detectats.
- Mode IA assistida preparat:
  - Mode local amb plantilles intel·ligents sense enviar dades fora del navegador.
  - Mode experimental amb Google API / Gemini si s'introdueix una API key.
  - Aplicació de l'esborrany generat directament al formulari.
- Exportació PDF visual sense pop-up.
- Vista HTML/impressió de SA amb estructura d'informe de programació.
- Rúbrica de SA en quadre amb criteri LOMLOE, ítem, NA, AS, AN i AE.
- Service worker actualitzat a `docentkit-v7`.

## Notes honestes

- El mode IA externa és experimental i depèn de la disponibilitat, permisos i model associats a la clau de Google API. El mode local continua funcionant sense connexió.
- La importació DOCX ha millorat, però no interpreta imatges, formes, comentaris ni maquetació complexa.
- La importació PDF recupera text seleccionable. Els PDF escanejats continuen necessitant OCR.
- La vista HTML/impressió és la sortida més fidel visualment. El PDF descarregable és real i estructurat, però no és una còpia exacta píxel a píxel de l'HTML.

## Publicació a GitHub Pages

Puja aquests fitxers a la branca configurada per Pages:

- `index.html`
- `styles.css`
- `app.js`
- `manifest.json`
- `sw.js`

Després obre la URL de GitHub Pages i força una recàrrega o reinstal·la la PWA si el navegador conserva una versió antiga.


## v1.0
- Correcció del selector de plantilles: ara es carreguen correctament les opcions del desplegable.
- Preparada la configuració IA amb camp de clau API local al navegador.
- Cache actualitzada a docentkit-v8.


## Correcció v1.0
- Estat visual del mode IA corregit: el badge canvia de Mode local a Mode Gemini / Google API quan es tria el proveïdor Google.
- Vinculació dels camps aiModeStatus, aiContext i aiOutput corregida.


## v1.0
- Mode IA Gemini amb selector de model.
- Botó de prova de connexió API.
- Errors de Gemini visibles en pantalla amb causes probables.
- Model recomanat per defecte: gemini-2.5-flash.
