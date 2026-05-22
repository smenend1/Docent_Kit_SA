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
