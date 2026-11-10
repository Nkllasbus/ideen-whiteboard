# Ideen-Whiteboard

Ein browserbasiertes Whiteboard, um gemeinsam die Entwicklung unserer App zu planen – mit Live-Sync für alle, die den Link haben.

**Online:** https://nkllasbus.github.io/ideen-whiteboard/

## Kartentypen

| Typ | Wofür |
| --- | --- |
| 💡 Idee | Einfälle, die wir noch prüfen wollen |
| 🎯 Ziel | Was wir erreichen wollen – zeigt Fortschritt an |
| ➜ Schritt | Konkrete Aufgabe auf dem Weg zu einem Ziel (abhakbar) |
| 🚩 Checkpoint | Meilenstein / Prüfpunkt (abhakbar) |
| 📝 Notiz | Alles andere |

## Bedienung

- Karten über die Leiste oben hinzufügen, am Kopf ziehen
- **⤳** auf einer Karte, dann eine andere Karte anklicken → Verbindung (z. B. Schritt → Ziel)
- Abgehakte Schritte und Checkpoints, die mit einem Ziel verbunden sind, füllen dessen Fortschrittsbalken
- Doppelklick auf freie Fläche → neue Notiz
- Freie Fläche ziehen → verschieben · Strg/⌘ + Mausrad oder Pinch → Zoom
- **Strg/⌘ gedrückt + Ziehen** auf freier Fläche → mehrere Karten markieren · Strg/⌘ + Klick auf eine Karte → zur Auswahl hinzufügen/entfernen · markierte Karten am Kopf ziehen → alle gemeinsam verschieben · Esc oder Klick auf freie Fläche → Auswahl aufheben
- Rechtsklick auf einen Typ-Button → diesen Typ ein-/ausblenden
- **🔗 Teilen** kopiert den Link zum aktuellen Board, **🗂 Board** öffnet ein anderes oder legt ein neues an (`?board=name`)
- **Export/Import** als JSON zum Sichern

## Gemeinsamer Speicher (Firebase Realtime Database) einrichten – einmalig

1. Auf https://console.firebase.google.com ein neues Projekt anlegen (Google Analytics kann aus bleiben).
2. **Build → Realtime Database → Datenbank erstellen** (Standort z. B. `europe-west1`, im *gesperrten Modus* starten).
3. Unter **Realtime Database → Regeln** den Inhalt von [`database.rules.json`](database.rules.json) einfügen und veröffentlichen.
4. **Build → Authentication → Jetzt starten → Anmeldeanbieter „Anonym“** aktivieren.
5. Unter **Authentication → Einstellungen → Autorisierte Domains** `nkllasbus.github.io` hinzufügen.
6. **Projekteinstellungen → Meine Apps → Web-App (`</>`)** hinzufügen und das `firebaseConfig`-Objekt in [`firebase-config.js`](firebase-config.js) eintragen (inkl. `databaseURL`).

Ohne Konfiguration funktioniert alles weiterhin, aber nur lokal im eigenen Browser.

> Hinweis: Jeder, der die Webseite öffnet, kann Boards lesen und bearbeiten. Für ein internes Team reicht das; für mehr Schutz kann später ein echter Login (z. B. Google-Anmeldung) ergänzt werden.
