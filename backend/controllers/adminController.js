const pool = require('../config/db');
const bcrypt = require("bcryptjs");

const getAdminProfile = async (req, res) => {
    try {
        const [admins] = await pool.execute(
            'SELECT a.*, u.email FROM admins a JOIN users u ON a.user_id = u.id WHERE u.id = ?',
            [req.user.userId]
        );
        
        if (admins.length === 0) {
            return res.status(404).json({ message: 'Admin not found' });
        }
        
        res.json(admins[0]);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// POST /api/auth/admin/addpatient
const addPatient = async (req, res) => {
    console.log("add patient function is running");
    console.log("req.user.id",req.user.userId);
  const {
    full_name,
    email,
    contact_number,
    age,
    gender,
    location,
    mental_health_condition,
    past_treatments,
    current_medications,
    additional_notes,
    password
  } = req.body;

  console.log("req.body",req.body);

  if (!email || !password || !full_name) {
    return res.status(400).json({
      message: "Full name, email and password are required"
    });
  }

  const connection = await pool.getConnection();

  try {
    await connection.beginTransaction();

    // 1️⃣ Check if user already exists
    const [existing] = await connection.execute(
      "SELECT id FROM users WHERE email = ?",
      [email]
    );

    if (existing.length > 0) {
      await connection.rollback();
      return res.status(409).json({ message: "Patient already exists" });
    }

    // 2️⃣ Create user (AUTH)
    const hashedPassword = await bcrypt.hash(password, 10);

    const [userResult] = await connection.execute(
      `INSERT INTO users (name,email, password, role)
       VALUES (?,?, ?, 'patient')`,
      [full_name,email, hashedPassword]
    );
    console.log("userResult",userResult);
    const userId = userResult.insertId;
    console.log("uerId",userId);
    // 3️⃣ Create patient profile
    await connection.execute(
  `INSERT INTO patients (
    user_id,
    admin_id,
    full_name,
    email,
    contact_number,
    age,
    gender,
    location,
    mental_health_condition,
    past_treatments,
    current_medications,
    additional_notes
  ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
  [
    userId,
    req.user.userId,
    full_name,
    email,
    contact_number ?? null,
    age ?? null,
    gender ?? null,
    location ?? null,
    mental_health_condition ?? null,
    past_treatments ?? null,
    current_medications ?? null,
    additional_notes ?? null
  ]
);


    await connection.commit();

    res.status(201).json({
      message: "Patient created successfully",
    });

  } catch (err) {
    await connection.rollback();
    console.error(err);
    res.status(500).json({ message: "Server error" });
  } finally {
    connection.release();
  }
};


module.exports = { getAdminProfile,addPatient };