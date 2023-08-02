const nilai = "F";

switch (nilai) {
  case "A":
    console.log(`Selamat Nilai anda ${nilai}`);
    break;
  case "B":
    console.log(`Selama anda lulus dengan Nilai ${nilai}`);
    break;
  case "C":
    console.log(`Selamat anda lulus dengan Nilau ${nilai}`);
    break;
  case "D":
    console.log(`Mohon maaf anda dinyatakan Tidak lulus dengan nilai ${nilai}`);
    break;
  default:
    console.log(`Anda tidak lulus & dikeluarkan`);
}
