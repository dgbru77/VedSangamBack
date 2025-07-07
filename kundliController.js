// Static lookup table (sample values; you can expand)
const gunaScores = {
  'Mesh-Vrishabh': 24,
  'Mesh-Mesh': 28,
  'Kark-Singh': 18,
  'Kanya-Meen': 32,
  'Tula-Vrishchik': 16,
  'Makar-Kumbh': 30,
  'Dhanu-Meen': 36,
  // Add more combinations
};

const getGunaScore = (rashi1, rashi2) => {
  const key1 = `${rashi1}-${rashi2}`;
  const key2 = `${rashi2}-${rashi1}`;
  return gunaScores[key1] || gunaScores[key2] || 0;
};

const matchRashiKundli = (req, res) => {
  const { rashi1, rashi2 } = req.body;

  if (!rashi1 || !rashi2) {
    return res.status(400).json({ error: 'Both rashis are required' });
  }

  const score = getGunaScore(rashi1, rashi2);

  let status = '❌ Poor Match';
  if (score >= 18) status = '⚠️ Average Match';
  if (score >= 24) status = '✅ Good Match';
  if (score >= 30) status = '💖 Excellent Match';

  res.json({
    rashi1,
    rashi2,
    gunaScore: score,
    compatibility: status
  });
};

module.exports = { matchRashiKundli };
