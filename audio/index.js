const {
    ChatPromptTemplate,
    MessagesPlaceholder,
} = require("@langchain/core/prompts");

const { ChatVertexAI } = require("@langchain/google-vertexai");
const { HumanMessage } = require("@langchain/core/messages");
const { fileToBase64 } = require('../utils/fileToBase64')

const mp3File = "audio-test.mp3";
const mp3InBase64 = fileToBase64(mp3File);
const textPrompt = `The following audio is a song. Respond with a list of instruments you hear in the song.`;

const model = new ChatVertexAI({
    model: "gemini-1.5-pro-001",
    location: "us-central1",
    temperature: 0,
})

const prompt = ChatPromptTemplate.fromMessages([
    new MessagesPlaceholder("audio"),
]);

const vertexCall = async () => {
    const chain = prompt.pipe(model);
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
                    text: textPrompt
                },
            ],
        }),
    });

    console.log(response)
}

vertexCall()

