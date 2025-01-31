import chalk from "chalk";
import handle from "./handle.js";
import { quantOfEachCharacters } from "./utils/permitted-characters.js";

async function allowPasswordCreation() {
  const quantEach = await quantOfEachCharacters();
  if (process.env.PASSWORD_LENGTH <= (quantEach.uppercase + quantEach.lowercase + quantEach.numbers + quantEach.special)) return true;
  return false;
}

async function createPassword() {
  console.log(chalk.green("Password:"));
  const password = await handle();
  console.log(password);
}

export {createPassword, allowPasswordCreation};
