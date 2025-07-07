const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// ✅ Initialize Express App
const app = express();

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch((err) => console.error("❌ MongoDB connection error:", err));

// ✅ Route Imports
const authRoutes = require('./routes/auth');
const horoscopeRoutes = require('./routes/horoscope');
const kundliRoutes = require('./routes/kundli');
const panchangRoutes = require('./routes/panchang');
const tarotRoutes = require('./routes/tarot');



// ✅ Register Routes
app.use('/api/auth', authRoutes);
app.use('/api/horoscope', horoscopeRoutes);
app.use('/api/kundli', kundliRoutes);
app.use('/api/panchang', panchangRoutes);
app.use('/api/tarot', tarotRoutes);

// ✅ Root Health Check (optional)
app.get('/', (req, res) => {
  res.send('🚀 Vedsangam Backend is Running');
});

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
