const person = {
  firstName: "Usep",
  middleName: "Syaikal",
  lastName: "Arifin",
};

const names = ["Usep", "Syaikal", "Arifn"];

for (const properti in person) {
  console.log(`${properti}: ${person?.[properti]}`);
}

for (const index in names) {
  console.log(`${index} : ${names[index]}`);
}
