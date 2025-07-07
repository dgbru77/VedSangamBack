// controllers/panchangController.js
const getPanchang = async (req, res) => {
  const { location, date } = req.body;

  // 🔍 Validate input
  if (!location || !date) {
    return res.status(400).json({ error: "Date and place are required" });
  }

  try {
    // 🧪 Simulated Panchang data (replace with real logic later)
    const mockData = {
      tithi: "अष्टमी",
      nakshatra: "रोहिणी",
      yoga: "सिद्धि",
      karana: "गर",
      moonSign: "वृषभ"
    };

    console.log(`✅ Panchang generated for ${location} on ${date}`);
    return res.status(200).json(mockData);
  } catch (err) {
    console.error("❌ Panchang error:", err.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { getPanchang };
