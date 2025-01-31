import * as chars_utils from "./utils/permitted-characters.js";

async function handle() {
  let characters = [];
  let password = "";

  const passwordLength = process.env.PASSWORD_LENGTH;
  characters = chars_utils.permittedCharacters();
  let quantEach = chars_utils.quantOfEachCharacters();
  [characters, quantEach] = await Promise.all([characters, quantEach]); // permite que as duas funções executem em paralelo

  for (let i = 0; i < passwordLength; i++) {
    const index = Math.floor(Math.random() * characters.length);
    if (quantEach.uppercase > 0 && chars_utils.uppercaseLetters.includes(characters[index])) {
      quantEach.uppercase--;
    } else if (quantEach.lowercase > 0 && chars_utils.lowercaseLetters.includes(characters[index])) {
      quantEach.lowercase--;
    } else if (quantEach.numbers > 0 && chars_utils.numbers.includes(characters[index])) {
      quantEach.numbers--;
    } else if (quantEach.special > 0 && chars_utils.specialCharacters.includes(characters[index])) {
      quantEach.special--;
    } else {
      i--;
      continue;
    }
    password += characters[index];
  }

  return password;
}

export default handle;
