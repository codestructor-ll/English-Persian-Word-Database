# Deutsch–Farsi Wortdatenbank

Dieses Projekt bietet ein quelloffenes zweisprachiges Wörterbuch des deutsch–farsi Wortschatzes - zunächst - im JSON-Format.
Es soll Lernende, Übersetzerinnen, Entwicklerinnen und Sprachmodell-Ersteller*innen unterstützen, die mit Farsi Daten arbeiten.

---

## 📘 Übersicht

Jeder Eintrag in der JSON-Datei enthält:

- *uebersetzung* — Persische Entsprechung (in persischer Schrift)
- *wortart* — Substantiv, Verb, Adjektiv usw.
- *aussprache* — Romanisierte Umschrift des Farsi für einfacheres Lesen
- *beispiel_de* — Beispielsatz auf Deutsch
- *beispiel_fa* — Beispielsatz auf Farsi
- *synonyme* — Verwandte Wörter
- *haeufigkeit* — Häufigkeit der Verwendung im typischen akademischen Kontext (Skala von 1–5)

### Beispiel-Eintrag
"universitaet": {
"uebersetzung": "دانشگاه",
"wortart": "Nomen",
"aussprache": "daaneshgaah",
"beispiel_de": "Sie studiert an der Universität.",
"beispiel_fa": "او در دانشگاه درس می‌خواند.",
"synonyme": ["Hochschule", "Institution"],
"haeufigkeit": 4
}


---

## 🧠 Häufigkeitsskala

| Wert | Beschreibung | Beispiele |
|--------|--------------|-----------|
| **5** | Sehr häufiges Kernwort | exam, student, research |
| **4** | Häufig; fachübergreifender Wortschatz | university, professor |
| **3** | Spezifisch für akademische Kontexte | thesis, conference |
| **2** | Fachspezifisch oder technisch | algorithm, experiment |
| **1** | Seltenes oder fortgeschrittenes akademisches Wort | epistemology, morphology |

---

##🗂️ Dateistruktur

│
├── akademisches-batch.json # Lern-Datensatz (zweisprachig)
├── deutsch-farsi_datenbank.db # Kern-Datensatz im SQLite-Format (zweisprachig)
├── README.md # Projektbeschreibung und Nutzungshinweise
