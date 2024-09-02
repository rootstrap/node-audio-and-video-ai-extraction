const TIMELINE_PROMPT = "Analyze this video file to create a detailed YouTube timeline based on its content. The timeline should highlight the key moments, chapters, and segments of the video, taking into account both the visual elements and the audio narrative. Identify and timestamp important topics, scenes. The goal is to generate a comprehensive and engaging timeline that can be used as a video description or chapter marker list on YouTube, making it easier for viewers to navigate and understand the video content."
const SUMMARIZE_PROMPT = "Analyze this video file and generate a comprehensive summary that captures the key points and essential content. The summary should take into account both the visual elements and the audio narrative, including important dialogues, changes in tone, background music, and any other significant auditory cues. Additionally, identify and highlight the main topics, themes, and scenes presented in the video, ensuring that the summary reflects the overall message and important details effectively."

module.exports = {
    "summarize": SUMMARIZE_PROMPT,
    "gen-timeline": TIMELINE_PROMPT,
}