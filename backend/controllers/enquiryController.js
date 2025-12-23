const pool = require('../config/db');

// 1. create enquiry
 const createEnquiry = async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Required fields missing" });
  }

  await pool.execute(
    "INSERT INTO enquiries (name, email, phone, message) VALUES (?, ?, ?, ?)",
    [name, email, phone, message]
  );

  res.status(201).json({ message: "Enquiry submitted successfully" });
};

// admin will see all the enqueries
 const getAllEnquiries = async (req, res) => {
  const [rows] = await pool.execute(
    "SELECT * FROM enquiries ORDER BY created_at DESC"
  );

  res.json(rows);
};

module.exports = { getAllEnquiries,createEnquiry  };
