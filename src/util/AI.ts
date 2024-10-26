import { GoogleGenerativeAI } from "@google/generative-ai";

export const queryAI = async (about: string) => {
  try {
    const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({
      model: import.meta.env.VITE_GEMINI_MODEL,
    });
    const prompt = about;
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    console.error(error);
    return "An error occurred while querying the AI.";
  }
};

export const generateItinerary = async (data: any) => {
  try {
    const prompt = `Generate a 3-day itinerary for ${data.destination} starting on ${data.startDate} and ending on ${data.endDate} with a budget of ${data.budget}.`;
    return await queryAI(prompt);
  } catch (error) {
    console.error(error);
    return "An error occurred while generating the itinerary.";
  }
};
