// src/config/gemini.js
import { GoogleGenAI } from "@google/genai";


async function runChat(prompt) {
    const ai = new GoogleGenAI({
    apiKey: "AIzaSyC78sSXVzvMDVlZaraAXYER7Nun15w00t8"
    });
  const config = {
    responseMimeType: 'text/plain',
  };
  const model = 'gemma-3n-e4b-it';
  const contents = [
    {
      role: 'user',
      parts: [
        {
          text: prompt,
        },
      ],
    },
  ];

  const response = await ai.models.generateContentStream({
    model,
    config,
    contents,
  });
//   let fileIndex = 0;
  let fullText = "";

  for await (const chunk of response) {
    fullText += chunk.text;
  }

//   console.log(fullText); // Now logs full sentence
  return fullText;
}

export default runChat;
