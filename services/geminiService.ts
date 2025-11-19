import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

let aiClient: GoogleGenAI | null = null;

// Safe initialization
try {
  if (process.env.API_KEY) {
    aiClient = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
} catch (error) {
  console.error("Failed to initialize Gemini client:", error);
}

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!aiClient) {
    return "Lo siento, el servicio de IA no está configurado correctamente (Falta API Key).";
  }

  try {
    const model = "gemini-2.5-flash";
    
    const response = await aiClient.models.generateContent({
      model: model,
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        thinkingConfig: { thinkingBudget: 0 }, // Fast response
      },
    });

    return response.text || "No he podido generar una respuesta en este momento.";
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "Hubo un error al conectar con el asistente inteligente. Por favor, contacta a Josep directamente.";
  }
};
