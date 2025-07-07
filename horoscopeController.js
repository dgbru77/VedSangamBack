const axios = require('axios');
require('dotenv').config();

const generateHoroscope = async (req, res) => {
  const { name, sign } = req.body;

  if (!name || !sign) {
    return res.status(400).json({ error: "Name and sign are required." });
  }

  try {
    const prompt = `Give me a detailed daily horoscope in Hindi for the zodiac sign ${sign}. Include spiritual advice and daily outlook. Make it unique and not too generic.`;

    const response = await axios.post(
      'https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent',
      {
        contents: [
          {
            parts: [{ text: prompt }]
          }
        ]
      },
      {
        headers: {
          'Content-Type': 'application/json'
        },
        params: {
          key: process.env.GEMINI_API_KEY
        }
      }
    );

    const horoscopeText = response.data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!horoscopeText) {
      return res.status(500).json({ error: "Failed to extract horoscope from response." });
    }

    return res.status(200).json({
      name,
      sign,
      horoscope: horoscopeText
    });

  } catch (error) {
    console.error("Gemini API error:", error?.response?.data || error.message);
    return res.status(500).json({
      error: "Failed to generate horoscope",
      details: error?.response?.data || error.message
    });
  }
};

module.exports = { generateHoroscope };
