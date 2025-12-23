const express = require('express');
const { authenticateToken } = require('../middleware/auth');
const { getDoctorProfile } = require('../controllers/doctorController');

const router = express.Router();

router.get('/profile', authenticateToken, getDoctorProfile);

module.exports = router;