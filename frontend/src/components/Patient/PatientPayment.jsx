import React, { useState, useEffect } from 'react';
import { ArrowLeft, CheckCircle2, Download, Plus, CreditCard } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './PatientPayment.css';
import PatientSideBar from './PatientSideBar';

// Mock data initialization helper
const initializePaymentData = () => {
    const existing = localStorage.getItem('mock_transactions');
    if (!existing) {
        const initialData = [
            { id: 1, date: '8/10/25', amount: 50.00, status: 'Completed', description: 'Consultation Fee' },
            { id: 2, date: '1/10/25', amount: 50.00, status: 'Completed', description: 'Consultation Fee' },
            { id: 3, date: '9/10/25', amount: 50.00, status: 'Completed', description: 'Consultation Fee' },
        ];
        localStorage.setItem('mock_transactions', JSON.stringify(initialData));
        return initialData;
    }
    return JSON.parse(existing);
};

const PatientPayment = () => {
    const navigate = useNavigate();
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        setTransactions(initializePaymentData());
    }, []);

    const handleAddPayment = () => {
        // Simulate a new payment
        const newPayment = {
            id: Date.now(),
            date: new Date().toLocaleDateString('en-GB'), // DD/MM/YY
            amount: 75.00,
            status: 'Completed',
            description: 'New Session Booking'
        };

        const updated = [newPayment, ...transactions];
        setTransactions(updated);
        localStorage.setItem('mock_transactions', JSON.stringify(updated));
    };

    return (
        <div className="flex bg-gray-50 min-h-screen font-inter">
            <PatientSideBar />
            <div className="flex-1 ml-0 md:ml-64 p-6 lg:p-10 max-w-7xl mx-auto w-full">

                {/* Header */}
                <header className="flex items-center gap-4 mb-8">
                    <button className="p-2 bg-white rounded-full shadow-sm hover:bg-gray-50" onClick={() => navigate(-1)}>
                        <ArrowLeft size={24} className="text-gray-700" />
                    </button>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">Payments and Billing History</h1>
                    </div>
                </header>

                <div className="payment-grid">
                    {/* Payment Methods Section */}
                    <section className="payment-section">
                        <h2 className="section-title">Payments methods</h2>
                        <div className="methods-row">
                            <div className="card-visual">
                                <div className="card-chip"></div>
                                <div className="card-number">1234 5678 9000 0000</div>
                                <div className="card-details">
                                    <span>12/24</span>
                                    <span>John Doe</span>
                                </div>
                                <div className="card-logo">VISA</div>
                            </div>

                            <button className="add-method-btn" onClick={handleAddPayment}>
                                <div className="plus-icon-box">
                                    <Plus size={24} />
                                </div>
                                <span className="add-text">Add New Method / Pay</span>
                            </button>
                        </div>
                    </section>

                    {/* Transaction History Section */}
                    <section className="payment-section">
                        <h2 className="section-title">Transaction History</h2>
                        <div className="transactions-list">
                            {transactions.map((tx) => (
                                <div key={tx.id} className="transaction-item">
                                    <div className="tx-left">
                                        <div className="tx-icon-box">
                                            <CheckCircle2 size={16} />
                                        </div>
                                        <span className="tx-date">{tx.date}</span>
                                        <span className="tx-desc desktop-only">{tx.description}</span>
                                    </div>
                                    <div className="tx-right">
                                        <span className="tx-amount">${tx.amount.toFixed(2)}</span>
                                        <button className="download-btn">
                                            <Download size={16} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PatientPayment;
