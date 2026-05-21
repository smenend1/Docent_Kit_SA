# DocentKit · Generador de situacions i recursos

Versió 0.5 de la PWA educativa en català per a docents.

## Novetats v0.5

- Sortida específica per a **situacions d’aprenentatge** amb estil d’informe de programació.
- Estructura d’impressió inspirada en la plantilla de suport de programació de SA: identificació, descripció, competències, objectius, sabers, desenvolupament, activitats, mesures, evidències, vectors i rúbrica.
- Rúbrica ampliada en format de **quadre** amb columnes: criteri LOMLOE, ítem d’avaluació, NA, AS, AN i AE.
- Detecció automàtica de codis de criteris com `1.1`, `2.1`, `4.2` per omplir la columna de criteris de la rúbrica.
- Millora de la vista d’impressió A4 amb `@page`, taules i blocs que eviten salts dolents quan és possible.
- Es manté l’exportació a **PDF real descarregable** sense finestres emergents.
- Es manté l’exportació HTML neta i la impressió des de la mateixa pàgina.
- Service worker actualitzat a `docentkit-v5`.

## Limitacions conegudes

- El botó **Descarrega PDF** genera un PDF textual robust i descarregable. La vista d’impressió/HTML és la que conserva millor la maquetació visual de plantilla.
- La lectura completa de DOCX/PDF encara no està activada. La importació accepta el fitxer com a base i en registra el nom, però per extreure contingut caldrà afegir una fase amb `mammoth.js` per DOCX i `pdf.js` per PDF.

## Publicació a GitHub Pages

Puja aquests fitxers a la branca configurada per Pages:

- `index.html`
- `styles.css`
- `app.js`
- `manifest.json`
- `sw.js`

Després obre la URL de GitHub Pages i força una recàrrega si el navegador conserva una versió antiga.
