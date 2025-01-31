import createQRCode from "../qr-code/create.js";
import {createPassword, allowPasswordCreation} from "../password/create.js";
import prompt from "prompt";
import promptSchemaMain from "../../prompts-schema/prompt-schema-main.js";
import chalk from "chalk";

async function runPromptSchemaMain() {
    if (await allowPasswordCreation()) {
        prompt.get(promptSchemaMain, async (err, choose) => {
            if (err) console.log(err);
        
            if (choose.select == 1) await createQRCode();
            if (choose.select == 2) await createPassword();
        });
        
        prompt.start();
    } else {
        console.log(chalk.red("The password length is greater than the sum of the characters allowed."));
    }
}

export default runPromptSchemaMain;