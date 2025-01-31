import createQRCode from "../qr-code/create.js";
import createPassword from "../password/create.js";
import prompt from "prompt";
import promptSchemaMain from "../../prompts-schema/prompt-schema-main.js";

async function runPromptSchemaMain() {
    prompt.get(promptSchemaMain, async (err, choose) => {
        if (err) console.log(err);
    
        if (choose.select == 1) await createQRCode();
        if (choose.select == 2) await createPassword();
      });
    
      prompt.start();
}

export default runPromptSchemaMain;