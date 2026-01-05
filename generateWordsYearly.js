const fs = require("fs");

// ----- CONFIG -----
const YEAR = 2026;
const WORDS_SOURCE = [
  {
    wort: "Universität",
    id: 1,
    uebersetzung: "دانشگاه",
    wortart: "Substantiv",
    lautschrift: "/dɒːneʃˈɡɒːh/",
    definition_de: "Eine Universität ist eine Hochschule...",
    definition_per: "«دانشگاه» مؤسسه آموزش عالی است...",
    beispiel_de: "Sie studiert an der Universität.",
    beispiel_per: "او در دانشگاه درس می‌خواند.",
    synonyme: ["Hochschule", "Institution"],
    haeufigkeit: 4,
  },
  {
    wort: "Baum",
    id: 2,
    uebersetzung: "درخت",
    wortart: "Substantiv",
    lautschrift: "/baʊm/",
    definition_de: "Ein Baum ist eine Pflanze mit Stamm und Ästen.",
    definition_per: "یک درخت یک گیاه با تنه و شاخه‌ها است.",
    beispiel_de: "Der Baum steht im Garten.",
    beispiel_per: "درخت در باغ قرار دارد.",
    synonyme: ["Pflanze"],
    haeufigkeit: 3,
  },
  // ... add more words here
];

// ----- HELPERS -----
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function getDaysInYear(year) {
  return isLeapYear(year) ? 366 : 365;
}

function formatDateKey(date) {
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}

// ----- GENERATE -----
const totalDays = getDaysInYear(YEAR);
const result = {};

for (let day = 0; day < totalDays; day++) {
  const date = new Date(YEAR, 0, day + 1); // Jan 1 = day 0
  const key = formatDateKey(date);

  // Cycle through WORDS_SOURCE if fewer words than days
  const word = WORDS_SOURCE[day % WORDS_SOURCE.length];

  result[key] = word;
}

// ----- SAVE JSON -----
fs.writeFileSync(`words-${YEAR}.json`, JSON.stringify(result, null, 2));
console.log(`Generated words-${YEAR}.json with ${totalDays} entries.`);
