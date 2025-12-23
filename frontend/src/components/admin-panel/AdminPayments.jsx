import React, { useState, useEffect } from 'react';
import { Search, Download, Calendar, ArrowRight, TrendingUp, AlertCircle, Clock } from 'lucide-react';
import SideBar from './SideBar';
import './AdminPayments.css';

const AdminPayments = () => {
    const [transactions, setTransactions] = useState([]);

    // Load shared data
    useEffect(() => {
        try {
            const stored = localStorage.getItem('mock_transactions');
            if (stored) {
                const parsed = JSON.parse(stored);
                if (Array.isArray(parsed)) {
                    setTransactions(parsed);
                }
            }
        } catch (error) {
            console.error("Failed to load transactions", error);
        }
    }, []);

    // Calculate generic stats
    const totalRevenue = transactions.reduce((acc, curr) => acc + curr.amount, 45230); // 45k base
    const pendingAmount = 150.00; // Mock

    return (
        <div className="flex bg-gray-50 min-h-screen font-inter">
            <SideBar />
            <div className="flex-1 ml-0 md:ml-64 admin-payment-container">
                <header className="admin-header">
                    <div>
                        <h1>Financials & Payments</h1>
                       
                       
                    </div>
                    <button className="export-btn">
                        <Download size={16} /> Export Report
                    </button>
                </header>

                {/* Stats Grid */}
                <div className="stats-grid">
                    <div className="stat-card">
                        <div className="stat-label">Total Revenue (Month)</div>
                        <div className="stat-value-row">
                            <span className="stat-value">${totalRevenue.toLocaleString()}</span>
                            <span className="stat-badge positive"><TrendingUp size={12} /> 12%</span>
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-label">Total Outstanding</div>
                        <div className="stat-value-row">
                            <span className="stat-value">$12,450.00</span>
                            <span className="stat-badge positive"><TrendingUp size={12} /> 5%</span>
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-label">Pending Payments</div>
                        <div className="stat-value-row">
                            <span className="stat-value">8</span>
                            <span className="stat-badge warning"><AlertCircle size={12} /> 2%</span>
                        </div>
                    </div>
                </div>

                {/* Filters Row */}
                <div className="filters-row">
                    <div className="search-box">
                        <Search size={18} className="search-icon" />
                        <input type="text" placeholder="Search Patient Name or MRN..." />
                    </div>
                    <select className="filter-select">
                        <option>All Statuses</option>
                        <option>Paid</option>
                        <option>Pending</option>
                        <option>Overdue</option>
                    </select>
                    <div className="flex-grow"></div>
                    <button className="record-btn">+ Record Payment</button>
                </div>

                {/* Transactions Table */}
                {/* Transactions List (Responsive: Cards for Mobile, Table for Desktop) */}
                <div className="table-container">

                    {/* Desktop Table View */}
                    <table className="payments-table hidden md:table">
                        <thead>
                            <tr>
                                <th>Patient Name</th>
                                <th>Status</th>
                                <th>Amount Due</th>
                                <th>Amount Paid</th>
                                <th>Last Payment</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Demo static row */}
                            <tr>
                                <td>
                                    <div className="user-cell">
                                        <img src="https://ui-avatars.com/api/?name=John+Doe" alt="JD" />
                                        <div>
                                            <div className="u-name">John Doe</div>
                                            <div className="u-id">MRN-3021</div>
                                        </div>
                                    </div>
                                </td>
                                <td><span className="status-pill overdue">Overdue</span></td>
                                <td>$150.00</td>
                                <td>$50.00</td>
                                <td>Oct 12, 2023</td>
                                <td><button className="icon-action"><Download size={16} /></button></td>
                            </tr>

                            {transactions.map((tx) => (
                                <tr key={tx.id}>
                                    <td>
                                        <div className="user-cell">
                                            <img src="https://ui-avatars.com/api/?name=Current+User" alt="CU" />
                                            <div>
                                                <div className="u-name">Current User</div>
                                                <div className="u-id">MRN-9999</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td><span className="status-pill paid">Paid</span></td>
                                    <td>$0.00</td>
                                    <td>${tx.amount.toFixed(2)}</td>
                                    <td>{tx.date}</td>
                                    <td><button className="icon-action"><Download size={16} /></button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* Mobile Card View */}
                    <div className="md:hidden space-y-4">
                        {/* Demo Static Card */}
                        <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm flex flex-col gap-3">
                            <div className="flex justify-between items-start">
                                <div className="user-cell">
                                    <img src="https://ui-avatars.com/api/?name=John+Doe" alt="JD" />
                                    <div>
                                        <div className="u-name">John Doe</div>
                                        <div className="u-id">MRN-3021</div>
                                    </div>
                                </div>
                                <span className="status-pill overdue">Overdue</span>
                            </div>
                            <div className="grid grid-cols-2 gap-2 text-sm">
                                <div>
                                    <span className="text-gray-500 block">Amount Due</span>
                                    <span className="font-medium">$150.00</span>
                                </div>
                                <div>
                                    <span className="text-gray-500 block">Amount Paid</span>
                                    <span className="font-medium">$50.00</span>
                                </div>
                                <div className="col-span-2">
                                    <span className="text-gray-500 block">Last Payment</span>
                                    <span className="font-medium">Oct 12, 2023</span>
                                </div>
                            </div>
                            <div className="pt-2 border-t border-gray-50 flex justify-end">
                                <button className="icon-action flex items-center gap-2 text-sm text-gray-600">
                                    <Download size={16} /> Download Invoice
                                </button>
                            </div>
                        </div>

                        {transactions.map((tx) => (
                            <div key={tx.id} className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm flex flex-col gap-3">
                                <div className="flex justify-between items-start">
                                    <div className="user-cell">
                                        <img src="https://ui-avatars.com/api/?name=Current+User" alt="CU" />
                                        <div>
                                            <div className="u-name">Current User</div>
                                            <div className="u-id">MRN-9999</div>
                                        </div>
                                    </div>
                                    <span className="status-pill paid">Paid</span>
                                </div>
                                <div className="grid grid-cols-2 gap-2 text-sm">
                                    <div>
                                        <span className="text-gray-500 block">Amount Due</span>
                                        <span className="font-medium">$0.00</span>
                                    </div>
                                    <div>
                                        <span className="text-gray-500 block">Amount Paid</span>
                                        <span className="font-medium">${tx.amount.toFixed(2)}</span>
                                    </div>
                                    <div className="col-span-2">
                                        <span className="text-gray-500 block">Last Payment</span>
                                        <span className="font-medium">{tx.date}</span>
                                    </div>
                                </div>
                                <div className="pt-2 border-t border-gray-50 flex justify-end">
                                    <button className="icon-action flex items-center gap-2 text-sm text-gray-600">
                                        <Download size={16} /> Download Invoice
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Pagination */}
                <div className="pagination">
                    <span>Showing 1 to {transactions.length + 1} of {transactions.length + 24} results</span>
                    <div className="page-actions">
                        <button className="page-btn">Previous</button>
                        <button className="page-btn active">1</button>
                        <button className="page-btn">Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminPayments;
