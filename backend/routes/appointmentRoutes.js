const express = require('express');
const {createAppointment,getAllAppointmentsForAdmin,deleteAppointment }=require("../controllers/appointmentController");
const { authenticateToken } = require('../middleware/auth');

const router=express.Router();

//patient will create appointment request
router.post("/",authenticateToken,createAppointment);

//admin can access all appointment request
router.get("/",authenticateToken,getAllAppointmentsForAdmin );

//admin can delete appointment
router.delete("/:id",authenticateToken,deleteAppointment);



module.exports=router;