const Razorpay = require("razorpay");
const crypto = require("crypto");
const pool = require("../config/db");
const PDFDocument = require("pdfkit");

// 🔹 Initialize Razorpay (ONLY PLACE WHERE KEYS ARE USED)
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

/**
 * ============================
 * CREATE ORDER
 * ============================
 */
exports.createOrder = async (req, res) => {
  try {
    console.log("Creating order function is running")
    const { amount } = req.body; // 7500

    // Create Razorpay order
    const order = await razorpay.orders.create({
      amount,
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    });

    // Send required data to frontend
    res.json({
      orderId: order.id,
      amount: order.amount,
      keyId: process.env.RAZORPAY_KEY_ID, // public key
      email: req.user.email,
    });
  } catch (error) {
    console.error("Create order error:", error);
    res.status(500).json({ message: "Failed to create order" });
  }
};

/**
 * ============================
 * VERIFY PAYMENT
 * ============================
 */
exports.verifyPayment = async (req, res) => {
  try {
    console.log("verifying payment");
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    } = req.body;

    // Create signature
    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(body)
      .digest("hex");

    // Compare signatures
    if (expectedSignature !== razorpay_signature) {
      return res.status(400).json({ success: false });
    }

    // Save payment in DB
    await pool.execute(
      `INSERT INTO payments 
       (user_id, amount, razorpay_payment_id,razorpay_order_id, status)
       VALUES (?, ?, ?, ?, ?)`,
      [
        req.user.userId,
        75, // ₹75 (simple for now)
        razorpay_payment_id,
        razorpay_order_id,
        "SUCCESS",
      ]
    );

    res.json({ success: true });
  } catch (error) {
    console.error("Verify payment error:", error);
    res.status(500).json({ success: false });
  }
};

/**
 * ============================
 * GET PAYMENT HISTORY
 * ============================
 */
exports.getMyPayments = async (req, res) => {
    console.log("userId",req.user.userId);
  try {
    const [payments] = await pool.execute(
      `SELECT 
         id,
         amount,
         razorpay_payment_id,
         status,
         created_at AS payment_date
       FROM payments
       WHERE user_id = ?
       ORDER BY created_at DESC`,
      [req.user.userId]
    );

    res.json(payments);
  } catch (error) {
    console.error("Fetch payments error:", error);
    res.status(500).json({ message: "Failed to fetch payments" });
  }
};

//receipt download



exports.downloadReceipt = async (req, res) => {
  try {
    const { paymentId } = req.body;

    if (!paymentId) {
      return res.status(400).json({ message: "paymentId is required" });
    }

    const [rows] = await pool.execute(
      `SELECT id, amount, created_at, razorpay_payment_id
       FROM payments
       WHERE id = ? AND user_id = ?`,
      [paymentId, req.user.userId]
    );

    if (rows.length === 0) {
      return res.status(404).json({ message: "Payment not found" });
    }

    const payment = rows[0];

    const PDFDocument = require("pdfkit");
    const doc = new PDFDocument({ size: "A4", margin: 50 });

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename=receipt-${payment.id}.pdf`
    );

    doc.pipe(res);

    doc.fontSize(20).text("Payment Receipt", { align: "center" });
    doc.moveDown(2);

    doc.fontSize(12);
    doc.text(`Receipt ID: ${payment.id}`);
    doc.text(`Payment ID: ${payment.razorpay_payment_id}`);
    doc.text(`Amount Paid: ₹${payment.amount}`);
    doc.text(
      `Payment Date: ${new Date(payment.created_at).toLocaleDateString()}`
    );

    doc.moveDown(2);
    doc.text("Thank you for your payment.", { align: "center" });

    doc.end();
  } catch (err) {
    console.error("Receipt error:", err);
    res.status(500).json({ message: "Unable to download receipt" });
  }
};


