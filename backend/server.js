const express = require('express');
const cors = require('cors');
require('dotenv').config();
const path = require('path');

/* 🔹 ADDED FOR SOCKET.IO */
const http = require("http");
const { Server } = require("socket.io");
/* 🔹 END */


// Import routes
const authRoutes = require('./routes/authRoutes');
const adminRoutes = require('./routes/adminRoutes');
const doctorRoutes = require('./routes/doctorRoutes');
const patientRoutes = require('./routes/patientRoutes');
const enquiryRoutes = require('./routes/enquiryRoutes');
const videoRoutes = require('./routes/videoRoutes');
const appointmentRoutes = require("./routes/appointmentRoutes");
const chatRoutes = require("./routes/chatRoutes");
const paymentRoutes=require("./routes/paymentRoutes")
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
app.use('/api/video', videoRoutes);
app.use('/api/appointment', appointmentRoutes);
app.use('/api/chat', chatRoutes);
app.use("/api/payments",paymentRoutes);

// Basic route
app.get('/', (req, res) => {
    res.json({ message: 'Soham Mindspace API is running!' });
});

/* ================= SOCKET.IO SETUP ================= */

// Create HTTP server from Express app
const server = http.createServer(app);

// Attach Socket.IO to server
const io = new Server(server, {
    cors: {
        origin: "*",        // frontend URL later
        methods: ["GET", "POST"]
    }
});

// Socket connection
io.on("connection", (socket) => {
    console.log("🟢 Socket connected:", socket.id);

    // Receive message from client
    socket.on("sendMessage", (messageData) => {
        // Broadcast message to all connected users
        io.emit("receiveMessage", messageData);
    });

    socket.on("disconnect", () => {
        console.log("🔴 Socket disconnected:", socket.id);
    });
});

/* ================= SERVER START ================= */

const PORT = process.env.PORT || 5000;


server.listen(PORT, () => {
  console.log(`Server + Socket.IO running on port ${PORT}`);
});