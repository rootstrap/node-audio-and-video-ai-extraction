# node-audio-and-video-ai-extraction
This project aims to create a Proof of Concept (PoC) in NodeJS  and LangChain that can read and process MP3 and MP4 files and produce structured output. The objective is to extract meaningful data from audio and video files, such as metadata, transcriptions, and other relevant information, and present it in an organized format.

# Getting Starded

## Google Cloud configuration

To use Vertex AI you need a service account with the role Vertex AI User and it’s key file in JSON format that you can get from 

APIs & Services -> Credentials -> {Your service account} -> Keys

Then, we need to set the environment variable GOOGLE_APPLICATION_CREDENTIALS to equal the keys file path.

```bash
export GOOGLE_APPLICATION_CREDENTIALS="./keys.json”
```

or copy .env.example and complete the env variables with the correct values
