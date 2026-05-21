# DocentKit · Generador de situacions i recursos

Versió 0.3 de la PWA educativa en català per a docents.

## Novetats v0.3

- Nova línia independent de les PWA de Matemàtiques i Tecnologia.
- Botó **Crea des de plantilla** amb plantilla de situació d'aprenentatge de Tecnologia ESO integrada.
- Exportació a **PDF real descarregable** des del navegador, sense finestres emergents.
- Es manté la vista d'exportació neta, la impressió i l'exportació HTML.
- Biblioteca local amb `localStorage`.
- Exportació/importació JSON.
- Funcionament offline bàsic amb service worker `docentkit-v3`.

## Limitacions conegudes

- La lectura completa de DOCX/PDF encara no està activada. La importació accepta el fitxer com a base i en registra el nom, però per extreure contingut caldrà afegir una fase amb `mammoth.js` per DOCX i `pdf.js` per PDF.
- El PDF integrat és deliberadament simple i robust: genera text net en format A4 amb Helvetica. Manté millor la compatibilitat mòbil que `window.print()`, però no reprodueix tota la maquetació visual HTML.

## Publicació a GitHub Pages

Puja aquests fitxers a la branca configurada per Pages:

- `index.html`
- `styles.css`
- `app.js`
- `manifest.json`
- `sw.js`

Després obre la URL de GitHub Pages i força una recàrrega si el navegador conserva una versió antiga.
