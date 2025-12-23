const express = require('express');
const { authenticateToken,allowRoles } = require('../middleware/auth');
const { getAdminProfile,addPatient } = require('../controllers/adminController');

const router = express.Router();

router.get('/profile', authenticateToken, getAdminProfile);
router.post("/addpatient",authenticateToken,allowRoles("admin"),addPatient);

module.exports = router;