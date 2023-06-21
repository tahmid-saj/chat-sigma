const { Configuration, OpenAIApi } = require("openai");
const axios = require("axios");

require("dotenv").config();

const openai = axios.create({
    baseURL: "https://api.openai.com/v1",
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
    }
});

async function createChatCompletion(messages, options = {}) {
    try {
        const response = await openai.post("/chat/completions", {
            model: options.model || "gpt-3.5-turbo",
            messages,
            ...options
        });

        return response.data.choices;
    } catch (error) {
        console.error("Failted to create chat completion: ", error);
    }
};

async function main() {
    const messages = [
        { role: "user", content: "Can you please help me manage my time better?" },
    ];

    const options = {
        temperature: 1,
        max_tokens: 4000
    };

    const choices = await createChatCompletion(messages, options);
    console.log(choices[0].message);
}

main();