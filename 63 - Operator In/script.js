const person = {
  firstName: "Usep Syaikal",
  lastName: "Arifin",
};

const person2 = {
  firstName: "Usep Syaikal",
  lastName: undefined,
};

const arrayNama = [0, "Usep", undefined];

const result = "firstName" in person;

console.log(result);
console.log("firstName" in person && "Yes");
console.log("lastName" in person && "Yes");
console.log(0 in arrayNama && "Yes");
