const person = {};
const person2 = {
  address: "Babakansari Bantarujeg Majalengka",
};
const person3 = {
  address: {
    country: "Indonesia",
  },
};

console.log(person?.address?.country);
console.log(person2?.address);
console.log(person2?.address?.country);
console.log(person3?.address);
console.log(person3?.address?.country);
