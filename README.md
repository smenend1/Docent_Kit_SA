# DocentKit · Generador de situacions i recursos

Versió 1.5 de la PWA educativa en català per a docents.

## Objectiu de la v1.6

Aquesta versió corregeix especialment la importació de situacions d’aprenentatge en TXT perquè el contingut no es copiï repetit a tots els apartats.

## Millores principals

- Detecció del curs dins línies com `Matèria: Tecnologia i Digitalització (2n d'ESO)`.
- Separació correcta de la matèria i el nivell.
- Reconeixement de `SITUACIÓ D'APRENENTATGE:` com a títol real de la SA.
- Mapatge de `SABERS / CONTINGUTS` cap al camp de sabers.
- Separació de `CRITERIS D'AVALUACIÓ` i `RÚBRICA D'AVALUACIÓ`.
- Evita que els descriptors NA, AS, AN i AE vagin al camp de competències.
- Conversió de rúbriques textuals amb `CRITERI LOMLOE`, `ÍTEM`, `NA`, `AS`, `AN` i `AE` a la taula de rúbrica de l’informe.
- Millor tractament de fases tipus `Fase 1`, `Fase 2`, `Fase 3` i `Fase 4`.
- Service worker actualitzat a `docentkit-v16`.

## Ús recomanat

1. Obre `Exportar / importar`.
2. Selecciona un fitxer `.txt` amb una SA estructurada.
3. Prem `Importa i interpreta`.
4. Ves a `Crear SA` i revisa els camps.
5. Genera l’informe i exporta a PDF o HTML.

Si la PWA ja estava instal·lada, fes una recàrrega forçada o esborra la memòria cau perquè el navegador no mantingui versions anteriors.
