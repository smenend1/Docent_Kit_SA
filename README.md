# DocentKit · Generador de situacions i recursos

Nova PWA independent per a docents, en català, preparada per GitHub Pages.

## Fitxers

- `index.html`: estructura principal de la interfície.
- `styles.css`: disseny responsive i estils d'impressió/PDF.
- `app.js`: lògica de mòduls, plantilles, localStorage, import/export JSON i PWA install prompt.
- `manifest.json`: configuració PWA.
- `sw.js`: service worker per a funcionament offline bàsic.

## Arquitectura inicial

L'aplicació funciona com una eina local-first:

1. Formularis guiats per generar recursos docents.
2. Plantilles intel·ligents sense dependència d'IA externa.
3. Biblioteca local amb `localStorage`.
4. Exportació visual a PDF mitjançant `window.print()` i CSS específic d'impressió.
5. Importació/exportació JSON per moure recursos entre dispositius.
6. Preparació per incorporar lectura avançada de DOCX/PDF i mode IA assistida en fases posteriors.

## Publicació a GitHub Pages

1. Crea un repositori nou.
2. Puja aquests fitxers a l'arrel.
3. Activa GitHub Pages des de Settings > Pages.
4. Selecciona la branca principal i carpeta `/root`.

## Notes de versió

Versió 0.1: base funcional sense API externa. La importació DOCX/PDF queda només detectada i preparada; per llegir contingut real caldrà afegir llibreries com `mammoth.js` per DOCX i `pdf.js` per PDF.
