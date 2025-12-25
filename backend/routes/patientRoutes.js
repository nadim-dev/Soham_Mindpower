const express = require('express');
const { authenticateToken } = require('../middleware/auth');
const {  getPatientProfile,getPatientAppointmentHistory } = require('../controllers/patientController');

const router = express.Router();

router.get('/profile/:id', authenticateToken, getPatientProfile);

router.get("/appointmenthistory/:id",authenticateToken,getPatientAppointmentHistory);

module.exports = router;