# Temporäre statische Seite

## Deploy schnell starten

### Variante A: Netlify (Drag & Drop)

1. Ordner hier hochladen: https://app.netlify.com/drop
2. URL erscheint sofort; eigene Domain optional.

### Variante B: GitHub Pages

1. Repo erstellen, Dateien pushen.
2. Settings → Pages → Deploy from a branch → `main` /root.
3. Warten bis URL aktiv ist.

## Formular-E-Mails

- Ersetze in `index.html` den `action`-Wert durch Deinen Formspree/Formsubmit-Endpoint.
- Teste mit einer Einsendung und prüfe den Posteingang (Spam-Ordner beachten).

## Struktur

- HTML minimal, CSS in `assets/css`, JS in `assets/js`.
- Keine globalen Variablen, Guard Clauses, klare Benennungen.
