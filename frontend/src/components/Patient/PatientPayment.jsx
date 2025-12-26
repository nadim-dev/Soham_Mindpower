import React, { useEffect, useState } from "react";
import { ArrowLeft, CheckCircle2, Download, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PatientSideBar from "./PatientSideBar";
import "./PatientPayment.css";
import { receiptAPI } from "../../services/api";


// 🔹 Import paymentAPI
import { paymentAPI } from "../../services/api";

const PatientPayment = () => {
  const navigate = useNavigate();
  const [transactions, setTransactions] = useState([]);

  // 🔹 Load payment history on page load
  useEffect(() => {
    fetchPayments();
  }, []);

  const handleDownloadReceipt = async (paymentId) => {
  try {
    const res = await receiptAPI.downloadReceipt({
      paymentId,
    });

    const url = window.URL.createObjectURL(
      new Blob([res.data], { type: "application/pdf" })
    );

    const a = document.createElement("a");
    a.href = url;
    a.download = `receipt-${paymentId}.pdf`;
    document.body.appendChild(a);
    a.click();
    a.remove();

    window.URL.revokeObjectURL(url);
  } catch (err) {
    console.error("Receipt download failed", err);
    alert("Unable to download receipt");
  }
};


  // 🔹 Fetch payment history from backend
  const fetchPayments = async () => {
    try {
      const res = await paymentAPI.getMyPayments();
      setTransactions(res.data);
    } catch (err) {
      console.error("Failed to fetch payments", err);
    }
  };

  // 🔹 User clicks "Pay"
  const handleAddPayment = async () => {
    try {
      // 1️⃣ Create Razorpay order
      const res = await paymentAPI.createOrder({
        amount: 100, // ₹1 (rupees)
      });

      openRazorpay(res.data);
    } catch (err) {
      alert("Unable to start payment");
      console.error(err);
    }
  };

  // 🔹 Open Razorpay Checkout
  const openRazorpay = (order) => {
    const options = {
      key: order.keyId,
      amount: order.amount,
      currency: "INR",
      name: "Soham MindSpace",
      description: "Consultation Fee",
      order_id: order.orderId,

      handler: async function (response) {
        await verifyPayment(response);
      },

      prefill: {
        name: order.patientName,
        email: order.email,
      },

      theme: {
        color: "#4f46e5",
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  // 🔹 Verify payment on backend
  const verifyPayment = async (paymentData) => {
    try {
      const res = await paymentAPI.verifyPayment(paymentData);

      if (res.data.success) {
        alert("Payment Successful");
        fetchPayments(); // refresh UI
      } else {
        alert("Payment verification failed");
      }
    } catch (err) {
      console.error(err);
      alert("Payment verification error");
    }
  };

  return (
    <div className="flex bg-gray-50 min-h-screen">
      <PatientSideBar />

      <div className="flex-1 ml-0 md:ml-64 p-6 max-w-7xl mx-auto">
        {/* Header */}
        <header className="flex items-center gap-4 mb-8">
          <button onClick={() => navigate(-1)}>
            <ArrowLeft size={22} />
          </button>
          <h1 className="text-2xl font-bold">Payments & Billing</h1>
        </header>

        {/* Pay Button */}
        <button className="add-method-btn" onClick={handleAddPayment}>
          <Plus size={20} /> Pay Now
        </button>

        {/* Transaction History */}
        <section className="payment-section">
          <h2 className="section-title">Transaction History</h2>

          <div className="transactions-list">
            {transactions.map((tx) => (
              <div key={tx.id} className="transaction-item">
                <CheckCircle2 size={16} />
                <span>{tx.payment_date}</span>
                <span>₹{tx.amount}</span>
                <Download
                  size={16}
                  className="cursor-pointer text-indigo-600 hover:text-indigo-800"
                  onClick={() => handleDownloadReceipt(tx.id)}
                />

              </div>
            ))}

            {transactions.length === 0 && (
              <p>No transactions found</p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default PatientPayment;
