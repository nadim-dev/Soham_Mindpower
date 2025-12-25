const pool = require('../config/db');


const sendMessage= async (req, res) => {
  try {
    console.log("send message is running ");
    const { senderId, senderName, message } = req.body;

    if (!senderName || !message.trim()) {
      return res.status(400).json({ message: "Invalid message" });
    }

    await pool.execute(
      `INSERT INTO messages (sender_id, sender_name, message)
       VALUES (?, ?, ?)`,
      [senderId, senderName, message]
    );

    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getMessage=async (req, res) => {
  try {
    const [rows] = await pool.execute(
      `SELECT * FROM messages ORDER BY created_at ASC`
    );

    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {sendMessage,getMessage};


