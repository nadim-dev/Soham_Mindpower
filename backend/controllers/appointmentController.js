const pool = require("../config/db");
const { sendEmail } = require("../services/emailService");

const createAppointment = async (req, res) => {
  console.log("appointment functions are running");
  const { appointment_date, appointment_time } = req.body;

  if (!appointment_date || !appointment_time) {
    return res.status(400).json({
      message: "Date and time are required",
    });
  }

  try {
    // get patient info
    const [rows] = await pool.execute(
      "SELECT id, full_name FROM patients WHERE user_id = ?",
      [req.user.id]
    );

    if (rows.length === 0) {
      return res.status(404).json({ message: "Patient not found" });
    }

    const patient = rows[0];

    // save appointment
    await pool.execute(
      `INSERT INTO appointments 
       (patient_id,patient_name,appointment_date, appointment_time)
       VALUES (?, ?, ?)`,
      [patient.id,patient.full_name,appointment_date, appointment_time]
    ); 

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

 const getAllAppointments = async (req, res) => {
  try {
    
    const [appointments] = await pool.execute(`
      SELECT 
        a.id,
        a.patient_name,
        a.appointment_date,
        a.appointment_time,
        a.status,
        a.created_at
      FROM appointments a
      ORDER BY a.appointment_date DESC, a.appointment_time DESC
    `);

    res.status(200).json({
      success: true,
      total: appointments.length,
      appointments,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch appointments",
      error: error.message,
    });
  }
};


module.exports = { createAppointment,getAllAppointments };