loopI: for (let i = 0; i <= 10; i++) {
  loopj: for (let j = 0; j <= 20; j++) {
    if (j > 10) {
      continue loopI;
    }
    console.log(`Loop i : ${i} - Loop j : ${j}`);
  }
}
