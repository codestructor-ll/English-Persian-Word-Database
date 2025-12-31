# Deutsch–Persische Wörterdatenbank

Dieses Projekt bietet eine quelloffene zweisprachige Wörterdatenbank des deutsch–persischen Wortschatzes - zunächst - im JSON-Format.
Es soll Lernende, Übersetzerinnen, Entwicklerinnen und Sprachmodell-Ersteller*innen unterstützen, die mit Deutsch-Persischen Daten arbeiten.

---

## 📘 Übersicht

Jeder Eintrag in der JSON-Datei enthält:

- *Uebersetzung* — Persische Entsprechung (in persischer Schrift).
- *Lautschrift* — Romanisierte Umschrift des Farsi für einfacheres Lesen.
- *Wortart* — Substantiv, Verb, Adjektiv usw.
- *Haeufigkeit* — Häufigkeit der Verwendung im typischen akademischen Kontext (Skala von 1–5).
- *definitionDeutsch* — Begriffsdefinition auf Deutsch.
- *definitionPersisch* — Begriffsdefinition auf Persisch.
- *BeispielDeutsch* — Beispielsatz auf Deutsch.
- *BeispielPersisch* — Beispielsatz auf Persisch.
- *Synonyme* — Verwandte Wörter.

### Beispiel-Eintrag
"universitaet": {
"uebersetzung": "دانشگاه",
"lautschrift": "daaneshgaah",
"wortart": "Nomen",
"haeufigkeit": 4,
"definitionDeutsch": "In mehrere Fachbereiche gegliederte [die Gesamtheit der Wissenschaften umfassende] Anstalt für wissenschaftliche Ausbildung und Forschung; Hochschule",
"definitionPersisch": "«دانشگاه» مؤسسه آموزش عالی است که در آن آموزش پیشرفته و پژوهش انجام می‌شود و مدارک دانشگاهی اعطا می‌گردد.",
"beispielDeutsch": "Sie studiert an der Universität.",
"beispielPersisch": "او در دانشگاه درس می‌خواند.",
"synonyme": ["Hochschule", "Institution"],
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

##🗂️ Dateistruktur

│
├── akademisches-batch.json # Lern-Datensatz (zweisprachig)
├── deutsch-farsi_datenbank.db # Kern-Datensatz im SQLite-Format (in entwicklung)
├── README.md # Projektbeschreibung und Nutzungshinweise
