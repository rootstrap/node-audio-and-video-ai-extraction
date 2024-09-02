const DESCRIBE_SONG_PROMPT = "Analyze this audio file to identify the instruments used in the song. Provide a list of instruments you hear in the song and a brief description of the song genre. The goal is to accurately identify the instruments and genre based on the audio content, including the melody, rhythm, and overall sound of the song."
const DESCRIBRE_DISCUSSION_PROMPT = "Analyze this audio file to create a detailed summary of the discussion. The summary should capture the key points, topics, and themes discussed in the audio, including important dialogues, arguments, and conclusions. Identify and highlight the main ideas and arguments presented in the discussion, ensuring that the summary reflects the overall message and important details effectively."

module.exports = {
    "song": DESCRIBE_SONG_PROMPT,
    "discussion": DESCRIBRE_DISCUSSION_PROMPT,
}