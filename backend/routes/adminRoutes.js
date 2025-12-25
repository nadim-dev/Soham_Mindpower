const express = require('express');
const { authenticateToken,allowRoles } = require('../middleware/auth');
const { getAdminProfile,addPatient ,sendNotification, getNotification} = require('../controllers/adminController');

const router = express.Router();

router.get('/profile', authenticateToken, getAdminProfile);
router.post("/addpatient",authenticateToken,allowRoles("admin"),addPatient);
router.post("/notification",authenticateToken,allowRoles("admin"),sendNotification);
router.get("/notification",authenticateToken,getNotification);
module.exports = router;