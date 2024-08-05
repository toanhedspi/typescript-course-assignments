const vaccines = ["J&J", "Pfizer", "Sputnik"];

vaccines.push("Covaxin");

for (const vaccine of vaccines) {
  console.log(vaccine);
}

const [vaccine1, vaccine2, vaccine3, vaccine4] = vaccines;

console.log(vaccine1, vaccine2, vaccine3, vaccine4);