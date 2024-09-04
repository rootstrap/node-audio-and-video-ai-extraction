require('dotenv').config()
const {
    ChatPromptTemplate,
    MessagesPlaceholder,
} = require("@langchain/core/prompts");

const { ChatVertexAI } = require("@langchain/google-vertexai");
const { HumanMessage } = require("@langchain/core/messages");
const { fileToBase64 } = require('../utils/fileToBase64')
const prompts = require('./prompts')

// Version describes which POC is to be executed: "song" or "discussion".
const version = process.env.VERSION

const mp3File = `${version}.mp3`;
const mp3InBase64 = fileToBase64(mp3File);

const model = new ChatVertexAI({
    model: "gemini-1.5-pro-001",
    location: "us-central1",
    temperature: 0,
})

const prompt = ChatPromptTemplate.fromMessages([
    new MessagesPlaceholder("audio"),
]);

const vertexCall = async () => {
    console.log("Vertex call started with action:", version)

    const chain = prompt.pipe(model);

    console.log("Starting request");
    const response = await chain.invoke({
        audio: new HumanMessage({
            content: [
                {
                    type: "media",
                    mimeType: "audio/mp3",
                    data: mp3InBase64,
                },
                {
                    type: "text",
                    text: prompts[version]
                },
            ],
        }),
    });

    console.log("-----------------------------------------------------------\n");
    console.log("Content: ", response.content);
    console.log("Input tokens used: ", response.usage_metadata.input_tokens);
    console.log("Output tokens used: ", response.usage_metadata.output_tokens);
    console.log("Total tokens used: ", response.usage_metadata.total_tokens);
}

vertexCall()

