const express = require('express');
const {createAppointment,getAllAppointments}=require("../controllers/appointmentController");
const { authenticateToken } = require('../middleware/auth');

const router=express.Router();

//patient will create appointment request
router.post("/",authenticateToken,createAppointment);

//admin can access all appointment request
router.get("/",authenticateToken,getAllAppointments);

module.exports=router;