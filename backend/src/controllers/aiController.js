import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {

  console.log("GEMINI API KEY MISSING");

}

const genAI = new GoogleGenerativeAI(apiKey);


export const chatWithAI = async (req, res) => {

  try {

    const { message } = req.body;

    if (!message) {

      return res.status(400).json({
        success: false,
        message: "Message is required"
      });

    }

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash"
    });

    const prompt = `
    You are an AI emotional support assistant.

    Your role:
    - Help users emotionally
    - Speak kindly
    - Encourage positivity
    - Support mental wellness
    - Never give harmful advice

    User:
    ${message}
    `;

    const result = await model.generateContent(prompt);

    const response = await result.response;

    const text = response.text();

    res.status(200).json({
      success: true,
      reply: text
    });

  }

  catch (error) {

    console.log("AI ERROR:", error);

    res.status(500).json({
      success: false,
      message: "AI failed",
      error: error.message
    });

  }

};