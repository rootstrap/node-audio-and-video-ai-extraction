require('dotenv').config()
const {
    ChatPromptTemplate,
    MessagesPlaceholder,
} = require("@langchain/core/prompts");
const { ChatVertexAI } = require("@langchain/google-vertexai");
const { HumanMessage } = require("@langchain/core/messages");
const { fileToBase64 } = require('../utils/fileToBase64');
const prompts = require("./prompts");

// Version describes which POC is to be executed: "timeline" or "summary".
const version = process.env.VERSION

const mp4InBase64 = fileToBase64(`${version}.mp4`);

const model = new ChatVertexAI({
    model: "gemini-1.5-pro-001",
    location: "us-central1",
    temperature: 0,
})

const prompt = ChatPromptTemplate.fromMessages([
    new MessagesPlaceholder("video"),
]);

const vertexCall = async () => {
    const humanMessagePrompt = prompts[version]
    console.log("Vertex call started with action:", version)

    const chain = prompt.pipe(model);

    console.log("Starting request")

    const response = await chain.invoke({
        video: new HumanMessage({
            content: [
                {
                    type: "media",
                    mimeType: "video/mp4",
                    data: mp4InBase64,
                },
                {
                    type: "text",
                    text: humanMessagePrompt,
                },
            ],
        }),
    });

    console.log("Vertex AI call ended, this is the response: ", response.content);
}

vertexCall();