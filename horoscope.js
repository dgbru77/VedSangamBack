const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

router.post('/', async (req, res) => {
  const { name, sign } = req.body;

  if (!name || !sign) {
    return res.status(400).json({ error: 'Name and sign are required' });
  }

  try {
    const prompt = `आज का राशिफल '${sign}' राशि वालों के लिए हिन्दी में बताइये। इसे आध्यात्मिक, सारगर्भित और संक्षिप्त रखें।`;

    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash-002:generateContent?key=${GEMINI_API_KEY}`,
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
        }
      }
    );

    const result =
      response.data.candidates?.[0]?.content?.parts?.[0]?.text || 'No horoscope found';

    res.json({ name, sign, horoscope: result });

  } catch (error) {
    console.error('Gemini API error:', error.response?.data || error.message);
    res.status(500).json({
      error: 'Failed to get horoscope from Gemini API',
      details: error.response?.data || error.message
    });
  }
});

module.exports = router;
