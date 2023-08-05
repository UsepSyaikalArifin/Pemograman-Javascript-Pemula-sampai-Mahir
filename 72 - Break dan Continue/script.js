let counter = 1;
while (true) {
  console.log(`Pengulangan ke - ${counter}`);
  counter++;
  if (counter > 10) {
    break;
  }
}

for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(`${i}`);
}
