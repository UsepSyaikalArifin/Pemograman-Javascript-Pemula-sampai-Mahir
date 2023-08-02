const examValue = 81;
const statusValue = examValue > 90 ? "Good Job" : "Not Yet";

console.log(statusValue);

if (examValue > 80) {
  console.log("Good Job");
} else {
  console.log("Not Enough");
}

if (examValue >= 90) {
  console.log("Perfect");
} else if (examValue >= 80 && examValue < 90) {
  console.log("Good Job");
} else if (examValue >= 70 && examValue < 50) {
  console.log("Enough");
} else {
  console.log("Try Again Next Year");
}
