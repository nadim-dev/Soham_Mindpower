const express = require("express");
const router = express.Router();

const {createOrder,verifyPayment,getMyPayments,downloadReceipt} = require("../controllers/paymentController");
const { authenticateToken } = require('../middleware/auth');

// Create Razorpay order
router.post("/create-order",authenticateToken, createOrder);

// Verify payment
router.post("/verify", authenticateToken, verifyPayment);

// Get payment history
router.get("/my-transactions",authenticateToken, getMyPayments);

//receipt download

router.post("/receipt",authenticateToken,downloadReceipt);
module.exports = router;
