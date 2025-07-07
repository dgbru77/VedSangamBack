const express = require('express');
const router = express.Router();

const tarotCards = [
  {
    name: "The Fool",
    meaning: "New beginnings, spontaneity, faith in the future",
    image: "https://upload.wikimedia.org/wikipedia/en/9/90/RWS_Tarot_00_Fool.jpg"
  },
  {
    name: "The Magician",
    meaning: "Skill, manifestation, willpower",
    image: "https://upload.wikimedia.org/wikipedia/en/d/de/RWS_Tarot_01_Magician.jpg"
  },
  {
    name: "The High Priestess",
    meaning: "Intuition, mystery, inner wisdom",
    image: "https://upload.wikimedia.org/wikipedia/en/8/88/RWS_Tarot_02_High_Priestess.jpg"
  },
  {
    name: "The Lovers",
    meaning: "Love, harmony, partnership",
    image: "https://upload.wikimedia.org/wikipedia/en/d/db/RWS_Tarot_06_Lovers.jpg"
  },
  {
    name: "The Tower",
    meaning: "Sudden upheaval, revelation, chaos",
    image: "https://upload.wikimedia.org/wikipedia/en/5/53/RWS_Tarot_16_Tower.jpg"
  },
  // Add more as you like
];

router.get('/', (req, res) => {
  const randomCard = tarotCards[Math.floor(Math.random() * tarotCards.length)];
  res.json(randomCard);
});

module.exports = router;
