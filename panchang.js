// routes/panchang.js
const express = require('express');
const router = express.Router();
const { getPanchang } = require('../controllers/panchangController');

router.post('/', getPanchang);

module.exports = router;
