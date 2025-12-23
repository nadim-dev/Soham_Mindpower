const express = require('express');
const cors = require('cors');
require('dotenv').config();
const path = require('path');

// Import routes
const authRoutes = require('./routes/authRoutes');
const adminRoutes = require('./routes/adminRoutes');
const doctorRoutes = require('./routes/doctorRoutes');
const patientRoutes = require('./routes/patientRoutes');
const enquiryRoutes = require('./routes/enquiryRoutes')
const videoRoutes=require('./routes/videoRoutes');
const appointmentRoutes=require("./routes/appointmentRoutes");

// Import database
const pool = require('./config/db');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// Test database connection
pool.getConnection()
    .then(connection => {
        console.log('Database connected successfully!');
        connection.release();
    })
    .catch(err => {
        console.error('Database connection failed:', err);
    });

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/doctor', doctorRoutes);
app.use('/api/patient', patientRoutes);
app.use('/api/enquiries', enquiryRoutes);
app.use('/api/video',videoRoutes);
app.use('/api/appointment',appointmentRoutes);


// Basic route
app.get('/', (req, res) => {
    res.json({ message: 'Soham Mindspace API is running!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});