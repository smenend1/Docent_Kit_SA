# DocentKit · Generador de situacions i recursos

Versió 1.3 de la PWA educativa en català per a docents.

## Objectiu de la v1.3

Aquesta versió se centra en el flux crític **esborrany IA → formulari → informe SA**. La millora principal és que l'app interpreta millor l'esborrany generat per Gemini encara que el model retorni títols amb Markdown, numeració, dos punts o variants d'etiquetes.

## Novetats v1.3

- Parser d'esborrany IA més robust.
- Reconeixement de títols amb `##`, negreta, numeració o dos punts.
- Millor detecció de camps com:
  - títol;
  - curs;
  - matèria;
  - context, repte, justificació i producte final;
  - competències i criteris LOMLOE;
  - objectius;
  - blocs de sabers i sabers concrets;
  - metodologia, organització, recursos i seqüència;
  - mesures i suports;
  - adaptacions TDAH, TEA, dislèxia i TDL;
  - evidències, instruments, retorn, vectors i rúbrica.
- El botó **Aplica l'esborrany al formulari** ara actualitza l'informe i fa validació de qualitat.
- Si l'esborrany no es pot mapar bé, l'app no el perd: l'enganxa al camp del repte com a esborrany complet pendent de revisió.
- Prompt de Gemini ajustat perquè retorni etiquetes exactes en línies independents i sense Markdown.
- Service worker actualitzat a `docentkit-v13`.

## Es manté

- PWA instal·lable i preparada per GitHub Pages.
- Mode local sense API externa.
- Mode experimental Google API / Gemini.
- Assistent guiat per generar una SA completa.
- Control de qualitat amb validació de camps obligatoris.
- Botons per completar camps buits, sabers, adaptacions i rúbrica.
- Exportació HTML, impressió i PDF visual descarregable.
- Biblioteca local amb `localStorage`.
- Importació/exportació JSON.

## Fitxers

- `index.html`
- `styles.css`
- `app.js`
- `manifest.json`
- `sw.js`

## Ús recomanat

1. Obre l'app.
2. Ves al mode IA assistida.
3. Omple l'assistent guiat.
4. Prem **Construeix instruccions**.
5. Prem **Genera SA completa assistida**.
6. Prem **Aplica l'esborrany al formulari**.
7. Revisa el control de qualitat.
8. Si falta algun bloc, usa **Completa camps buits** o els botons parcials.
9. Genera l'informe i exporta'l.
