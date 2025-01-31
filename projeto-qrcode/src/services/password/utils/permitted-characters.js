const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const specialCharacters = "!@#$%^&*()-_";

//extract method
async function permittedCharacters() {
  let permitted = [];

  if (process.env.UPPERCASE_LETTERS === "true")
    permitted.push(...uppercaseLetters);

  if (process.env.LOWERCASE_LETTERS === "true")
    permitted.push(...lowercaseLetters);

  if (process.env.NUMBERS === "true") permitted.push(...numbers);

  if (process.env.SPECIAL_CHARACTERS === "true")
    permitted.push(...specialCharacters);

  return permitted;
}

async function quantOfEachCharacters() {
  return {
    uppercase: process.env.UPPERCASE_LETTERS === "true" ? parseInt(process.env.UPPERCASE_LETTERS_LIMIT) : 0,
    lowercase: process.env.LOWERCASE_LETTERS === "true" ? parseInt(process.env.LOWERCASE_LETTERS_LIMIT) : 0,
    numbers: process.env.NUMBERS === "true" ? parseInt(process.env.NUMBERS_LIMIT) : 0,
    special: process.env.SPECIAL_CHARACTERS === "true" ? parseInt(process.env.SPECIAL_CHARACTERS_LIMIT) : 0,
  };
}

export { permittedCharacters, quantOfEachCharacters, uppercaseLetters, lowercaseLetters, numbers, specialCharacters };
