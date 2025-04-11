import axios from "axios";

const API_KEY = "your-openai-api-key"; // Replace with your actual API key

export const fetchAIResponse = async (message) => {
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4", // or gpt-3.5-turbo
        messages: [{ role: "user", content: message }],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );
    return response.data.choices[0].message.content;
  } catch (error) {
    console.error("Error fetching AI response:", error);
    return "Error: Unable to fetch response.";
  }
};