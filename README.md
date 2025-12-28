# Deutsch–Farsi Wortdatenbank

Dieses Projekt bietet ein quelloffenes zweisprachiges Wörterbuch des deutsch–farsi Wortschatzes - zunächst - im JSON-Format.
Es soll Lernende, Übersetzerinnen, Entwicklerinnen und Sprachmodell-Ersteller*innen unterstützen, die mit Farsi Daten arbeiten.

---

## 📘 Übersicht

Jeder Eintrag in der JSON-Datei enthält:

- *Uebersetzung* — Persische Entsprechung (in persischer Schrift).
- *Lautschrift* — Romanisierte Umschrift des Farsi für einfacheres Lesen.
- *Wortart* — Substantiv, Verb, Adjektiv usw.
- *Haeufigkeit* — Häufigkeit der Verwendung im typischen akademischen Kontext (Skala von 1–5).
- *Definition* — Substantiv, Verb, Adjektiv usw.
- *Beispiel_de* — Beispielsatz auf Deutsch.
- *Beispiel_fa* — Beispielsatz auf Farsi.
- *Synonyme* — Verwandte Wörter.

### Beispiel-Eintrag
"universitaet": {
"uebersetzung": "دانشگاه",
"lautschrift": "daaneshgaah",
"wortart": "Nomen",
"haeufigkeit": 4
"definition": "in mehrere Fachbereiche gegliederte [die Gesamtheit der Wissenschaften umfassende] Anstalt für wissenschaftliche Ausbildung und Forschung; Hochschule"
"beispiel_de": "Sie studiert an der Universität.",
"beispiel_fa": "او در دانشگاه درس می‌خواند.",
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
├── deutsch-farsi_datenbank.db # Kern-Datensatz im SQLite-Format (zweisprachig)
├── README.md # Projektbeschreibung und Nutzungshinweise
