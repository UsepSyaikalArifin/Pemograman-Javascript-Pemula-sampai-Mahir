let parameter;

let data = parameter;

if (data === undefined || data === null) {
  data = "Nilai Default";
}

console.log(data);

console.log((data = parameter ?? "Nilai Default"));
