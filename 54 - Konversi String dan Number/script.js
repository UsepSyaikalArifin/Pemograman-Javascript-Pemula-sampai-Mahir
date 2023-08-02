const value1 = "1";
const value2 = 1;
const value3 = Number("a1.1");

const a = 1;
const b = 1;

console.log(`The result : ${Number(value1) + value2}`);
console.log(`${parseInt("1.1")}`);
console.log(`${parseFloat("1.1")}`);
console.log(`${Number("1.1")}`);
console.log(`${a.toString() + b.toString()}`);
console.log(`${parseInt("1.1log")}`);
console.log(`${parseFloat("1.1log")}`);
console.log(`${parseInt("a1.1log")}`);
console.log(`${parseFloat("a1.1log")}`);
console.log(`${Number("1.1log")}`);
console.log(`${Number("a1.1log")}`);
console.log(`${value2 + value3}`);
console.log(`${isNaN(value3)}`);
