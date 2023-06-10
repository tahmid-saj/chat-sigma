const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
});
const openai = new OpenAIApi(configuration);

async function runCompletion() {
    const res = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "Can you please help me manage my time better?"
    });

    console.log(res.data.choices[0]);
}

runCompletion();