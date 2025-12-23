const pool = require('../config/db');

const getDoctorProfile = async (req, res) => {
    try {
        const [doctors] = await pool.execute(
            'SELECT d.*, u.email FROM doctors d JOIN users u ON d.user_id = u.id WHERE u.id = ?',
            [req.user.userId]
        );
        
        if (doctors.length === 0) {
            return res.status(404).json({ message: 'Doctor not found' });
        }
        
        res.json(doctors[0]);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getDoctorProfile };