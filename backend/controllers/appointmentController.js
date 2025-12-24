const pool = require("../config/db");
const { sendEmail } = require("../services/emailService");
const {convertTo24Hour}=require("../utils/convertTo24Hour");
const {convertTo12Hour}=require("../utils/convertTo12Hours");
const {formatAppointment}=require("../utils/formatAppointment");
const {formatDateReadable}=require("../utils/formatDate");


const createAppointment = async (req, res) => {
  console.log("appointment functions are running");
  console.log(req.body);
  console.log("userId",req.user.userId);
  const { selectedDate:appointment_date, selectedTime} = req.body;
  
  if (!appointment_date || !selectedTime) {
    return res.status(400).json({
      message: "Date and time are required",
    });
  }

  try {
    // get patient info
    const [rows] = await pool.execute(
      "SELECT id, full_name FROM patients WHERE user_id = ?",
      [req.user.userId]
    );

    if (rows.length === 0) {
      return res.status(404).json({ message: "Patient not found" });
    }

    const patient = rows[0];
    const appointment_time = convertTo24Hour(selectedTime);


    // save appointment
    const [data]=await pool.execute(
      `INSERT INTO appointments 
       (patient_id,patient_name,appointment_date, appointment_time,status)
       VALUES (?,?,?,?,?)`,
      [patient.id,patient.full_name,appointment_date, appointment_time,"confirmed"]
    ); 

    console.log("save appointment data",data);

    // send email to doctor
    await sendEmail({
      subject: "New Appointment Request",
      html: `
        <h3>New Appointment Request</h3>
        <p><strong>Patient:</strong> ${patient.full_name}</p>
        <p><strong>Date:</strong> ${appointment_date}</p>
        <p><strong>Time:</strong> ${appointment_time}</p>
        <p><strong>Requested at:</strong> ${new Date().toLocaleString()}</p>
      `,
    });

    res.status(201).json({
      message: "Appointment request sent successfully",
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

const getAllAppointmentsForAdmin = async (req, res) => {
  try {
    const [rows] = await pool.execute(
      `SELECT 
         id,
         patient_name,
         appointment_date,
         appointment_time,
         status
       FROM appointments
       ORDER BY appointment_date, appointment_time`
    );

    const formattedAppointments = rows.map(appt => ({
      id: appt.id,
      patient_name: appt.patient_name,
      appointment_date: formatDateReadable(appt.appointment_date),
      appointment_time: convertTo12Hour(appt.appointment_time),
      readable: formatAppointment(
        appt.appointment_date,
        appt.appointment_time
      ),
      status: appt.status
    }));

    res.json(formattedAppointments);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// DELETE /api/admin/appointments/:id
const deleteAppointment = async (req, res) => {
  console.log("delete appointment function is running");
  try{
  const { id } = req.params;

  await pool.execute(
    "DELETE FROM appointments WHERE id = ?",
    [id]
  );

  res.json({ message: "Appointment deleted successfully" });
}catch(err){
  return res.status(404).json({error:err.message});
}
};


module.exports = { createAppointment,getAllAppointmentsForAdmin,deleteAppointment };