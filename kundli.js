const express = require('express');
const router = express.Router();
const { matchRashiKundli } = require('../controllers/kundliController');

router.post('/rashi', matchRashiKundli);

module.exports = router;
