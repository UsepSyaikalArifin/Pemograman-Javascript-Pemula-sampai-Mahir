console.info("hello" || "");
console.info("" || []);
console.info("0" || "NOL");
console.info(0 || "NOL");
console.info(null || "NULL");
console.info(undefined || "UNDEFINED");
console.info(0 || false);

const person = {
  firstName: "",
  lastName: "Usep Syaikal",
};

const nama = person?.firstName || person;

console.info("hello" && "");
console.info("" && []);
console.info("0" && "NOL");
console.info(0 && "NOL");
console.info(null && "NULL");
console.info(undefined && "undefined");
console.info("undefined" && "null");
