import { Drug, Pharmacy } from "./pharmacy";
import fs from "fs";

const drugs = [
  new Drug("Doliprane", "T0", 1, 20, 30),
  new Drug("Herbal Tea", "T1", 1, 10, 5),
  new Drug("Fervex", "T2", 1, 5, 40),
  new Drug("Magic Pill", "T9", 1, 15, 40),
  new Drug("Dafalgan", "T0", 2, 15, 50)
];
const trial = new Pharmacy(drugs);

const log = [];

for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
  log.push(JSON.stringify(trial.updateBenefitValue()));
}

/* eslint-disable no-console */
fs.writeFile("output.txt", log.toString(), err => {
  if (err) {
    console.log("error");
  } else {
    console.log("success");
  }
});
/* eslint-enable no-console */
