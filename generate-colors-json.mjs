import fs from "fs";

const variants = ["text", "bg", "hover:bg"];
const names = ["red", "blue", "green", "yellow"];
const values = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

const classNames = [];

for (let variant of variants) {
  for (let name of names) {
    for (let value of values) {
      classNames.push(`${variant}-${name}-${value}`);
    }
  }
}

const json = JSON.stringify(classNames);

fs.writeFileSync("./src/colors.json", json);
