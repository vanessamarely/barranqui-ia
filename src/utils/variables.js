import { HarmBlockThreshold, HarmCategory } from "@google/generative-ai";

export const MODEL_NAME = "gemini-1.5-pro-latest";
export const API_KEY = import.meta.env.VITE_API_KEY;

  // safety settings for the model
export const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
];


// config model
export const generationConfig = {
  temperature: 2,
  topK: 32,
  topP: 0.4,
  maxOutputTokens: 8192,
};
