# Deutsch–Persische Wörterdatenbank

Dieses Projekt bietet eine quelloffene zweisprachige Wörterdatenbank des deutsch–persischen Wortschatzes - zunächst - im JSON-Format.
Es soll Lernende, Übersetzerinnen, Entwicklerinnen und Sprachmodell-Ersteller*innen unterstützen, die mit Deutsch-Persischen Daten arbeiten.

---

## 📘 Übersicht

Jeder Eintrag in der JSON-Datei enthält:

- *Wort* — Deutsch-Persische Entsprechung.
- *Identifikationsnummer* - Eindeutige ID.
- *Lautschrift* — Romanisierte Umschrift des Farsi für einfacheres Lesen.
- *Wortart* — Substantiv, Verb, Adjektiv usw.
- *Haeufigkeit* — Häufigkeit der Verwendung im typischen akademischen Kontext (Skala von 1–5).
- *definitionDeutsch* — Begriffsdefinition auf Deutsch.
- *definitionPersisch* — Begriffsdefinition auf Persisch.
- *BeispielDeutsch* — Beispielsatz auf Deutsch.
- *BeispielPersisch* — Beispielsatz auf Persisch.
- *Synonyme* — Verwandte Wörter.

### Beispiel-Eintrag
"universitaet": {  <br />
"uebersetzung": "دانشگاه",  <br />
"lautschrift": "daaneshgaah", <br />
"wortart": "Nomen", <br />
"haeufigkeit": 4, <br />
"definitionDeutsch": "In mehrere Fachbereiche gegliederte [die Gesamtheit der Wissenschaften umfassende] Anstalt für wissenschaftliche Ausbildung und Forschung; Hochschule", <br />
"definitionPersisch": "«دانشگاه» مؤسسه آموزش عالی است که در آن آموزش پیشرفته و پژوهش انجام می‌شود و مدارک دانشگاهی اعطا می‌گردد.", <br />
"beispielDeutsch": "Sie studiert an der Universität.", <br />
"beispielPersisch": "او در دانشگاه درس می‌خواند.", <br />
"synonyme": ["Hochschule", "Institution"],__
}


---

## 🧠 Häufigkeitsskala

| Wert | Beschreibung | Beispiele |
|--------|--------------|-----------|
| **5** | Sehr häufiges Kernwort | Prüfung, Student, Forschung |
| **4** | Häufig; fachübergreifender Wortschatz | Universität, Professor |
| **3** | Spezifisch für akademische Kontexte | Thesis, Konferenz |
| **2** | Fachspezifisch oder technisch | Algorithmus, Experiment |
| **1** | Seltenes oder fortgeschrittenes Wort | Epistomologie, Morphologie |

---

## 🗂️ Dateistruktur

│
├── akademisches-batch.json # Lern-Datensatz (zweisprachig)
├── deutsch-farsi_datenbank.db # Kern-Datensatz im SQLite-Format (in entwicklung)
├── README.md # Projektbeschreibung und Nutzungshinweise

<!--
---

## 🤝 Beitrag

Dieses Projekt hat das Ziel, eine qualitativ hochwertige, frei verfügbare deutsch‑persische Wortdatenbank für Lernende, Lehrende und Entwickler bereitzustellen.
Damit die Datenbank wachsen und besser werden kann, ist Mitarbeit aus der Community ausdrücklich erwünscht.
Wie du beitragen kannst

- Neue Einträge (Deutsch–Persisch) nach dem bestehenden Schema hinzufügen.
- Definitionen, Beispielsätze oder Lautschrift ergänzen oder verbessern.
- Tippfehler, Inkonsistenzen oder Dubletten melden.
- Vorschläge für neue Kategorien, Felder oder Strukturen einbringen.
- Issues erstellen oder Pull Requests mit konkreten Änderungen einreichen.

Alle Beiträge – ob klein oder groß – helfen dabei, die Datenbank nützlicher und verlässlicher zu machen.
Gegenseitige Unterstützung

Als Dankeschön für die Unterstützung werde ich in der zugehörigen App einen Spenden‑Button integrieren.
Wer die Datenbank hilfreich findet, kann damit das Projekt finanziell unterstützen und so die weitere Entwicklung, Pflege und Erweiterung ermöglichen.
So legst du los

- Schau dir die vorhandene Datenstruktur im Repository an.
- Lies die Contributing‑Hinweise (Format, JSON‑Schema, Namenskonventionen).
- Erstelle ein Issue mit deinem Vorschlag oder schicke direkt einen Pull Request.

-->
