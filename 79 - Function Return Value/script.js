function sayHello(firstName, lastName) {
  const say = `Hello ${firstName} ${lastName} are u Ok ? `;
  return say;
}

function getFinalValue(value) {
  return value > 90
    ? "A"
    : value > 80
    ? "B"
    : value > 70
    ? "C"
    : value > 60
    ? "D"
    : "E";
}

function isContains(array, searchValue) {
  for (element of array) {
    if (element === searchValue) {
      return element;
    }
  }
  return false;
}

const arrayAngka = [1, 2, 3, 4, 5, 6, 7, 8];

const say = sayHello("Usep Syaikal", "Arifin");
const value = getFinalValue(80);
const searchValue = isContains(arrayAngka, 5);

console.log(say);
console.log(value);
console.log(searchValue);
