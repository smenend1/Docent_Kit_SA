# DocentKit · Generador de situacions i recursos

Versió 0.6 de la PWA educativa en català per a docents.

## Novetats v0.6

- Exportació **PDF real** sense finestres emergents, amb estructura visual bàsica: portada, blocs, taules, seqüència i rúbrica.
- Sortida específica per a **situacions d’aprenentatge** amb estil d’informe de programació.
- Estructura d’impressió inspirada en la pauta de programació de SA: identificació, descripció, competències, objectius, sabers, desenvolupament, activitats, mesures, evidències, vectors i rúbrica.
- Rúbrica ampliada en format de **quadre** amb columnes: criteri LOMLOE, ítem d’avaluació, NA, AS, AN i AE.
- Detecció automàtica de codis de criteris com `1.1`, `2.1`, `4.2` per omplir la columna de criteris de la rúbrica.
- Importació DOCX activada amb extractor intern del text principal del document.
- Importació PDF bàsica per a documents amb text seleccionable.
- Exportació HTML neta i impressió des de la mateixa pàgina.
- Service worker actualitzat a `docentkit-v6`.

## Notes honestes

- El PDF descarregable ja no és només un bolcat textual: genera un document PDF amb blocs i taules. Tot i això, la vista HTML/impressió continua sent la més fidel si vols conservar exactament l’aspecte visual de pantalla.
- La importació DOCX llegeix el text principal de `word/document.xml`. Pot no conservar taules complexes, imatges, capçaleres o peus.
- La importació PDF funciona quan el PDF conté text seleccionable. Els PDF escanejats o amb text com a imatge necessitaran OCR o una integració posterior amb `pdf.js`.

## Publicació a GitHub Pages

Puja aquests fitxers a la branca configurada per Pages:

- `index.html`
- `styles.css`
- `app.js`
- `manifest.json`
- `sw.js`

Després obre la URL de GitHub Pages i força una recàrrega si el navegador conserva una versió antiga.
