const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const pool = require('../config/db');


const login = async (req, res) => {
  console.log("Login fucntion is running");
  const { email, password, expectedRole } = req.body;
  // expectedRole = 'admin' or 'patient'

  try {
    // 1. Get user by email
    const [users] = await pool.execute(
      'SELECT * FROM users WHERE email = ?',
      [email]
    );

    if (users.length === 0) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const user = users[0];

    // 2. Role check 
    if (expectedRole && user.role !== expectedRole) {
      return res.status(403).json({
        message: `Access denied. You are not a ${expectedRole}`
      });
    }

    // 3. Password check
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // 4. Generate JWT
    const token = jwt.sign(
      { userId: user.id, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    // 5. Send response
    res.json({
      token,
      user: {
        id: user.id,
        email: user.email,
        role: user.role
      }
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { login };