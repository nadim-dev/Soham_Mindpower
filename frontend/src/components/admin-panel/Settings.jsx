import React, { useState } from 'react';
import SideBar from './SideBar';
import './Settings.css';
import { User, Bell, Lock, Shield, Save } from 'lucide-react';

const Settings = () => {
    return (
        <div className="flex bg-gray-50 min-h-screen font-inter">
            <SideBar />

            <div className="flex-1 ml-0 md:ml-64 p-4 md:p-8 settings-container">
                <header className="mb-8">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Settings</h1>
                </header>

                {/* Profile Section */}
                <div className="settings-section">
                    <h2 className="settings-title flex items-center gap-2">
                        <User size={20} /> Profile Information
                    </h2>

                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="profile-card">
                            <img
                                src="https://ui-avatars.com/api/?name=Admin+User&background=fcd34d&color=1f2937"
                                alt="Profile"
                                className="profile-avatar"
                            />
                            <div className="profile-info">
                                <button className="text-sm text-blue-600 font-medium hover:underline">Change Photo</button>
                            </div>
                        </div>

                        <div className="form-grid w-full">
                            <div className="form-group">
                                <label>Full Name</label>
                                <input type="text" defaultValue="Admin User" />
                            </div>
                            <div className="form-group">
                                <label>Email Address</label>
                                <input type="email" defaultValue="admin@sohammind.com" />
                            </div>
                            <div className="form-group">
                                <label>Role</label>
                                <input type="text" defaultValue="Administrator" disabled className="bg-gray-50 text-gray-500" />
                            </div>
                            <div className="form-group">
                                <label>Phone Number</label>
                                <input type="tel" defaultValue="+91 98765 43210" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Notifications Section */}
                <div className="settings-section">
                    <h2 className="settings-title flex items-center gap-2">
                        <Bell size={20} /> Notifications
                    </h2>

                    <div className="space-y-2">
                        <div className="toggle-row">
                            <div className="toggle-text">
                                <h4>New Appointment Alerts</h4>
                                <p>Get notified when a patient books a new appointment.</p>
                            </div>
                            <label className="switch">
                                <input type="checkbox" defaultChecked />
                                <span className="slider"></span>
                            </label>
                        </div>
                        <div className="toggle-row">
                            <div className="toggle-text">
                                <h4>Patient Inquiries</h4>
                                <p>Receive emails for new support messages.</p>
                            </div>
                            <label className="switch">
                                <input type="checkbox" defaultChecked />
                                <span className="slider"></span>
                            </label>
                        </div>
                        <div className="toggle-row">
                            <div className="toggle-text">
                                <h4>Payment Confirmations</h4>
                                <p>Get alerted when a payment is processed.</p>
                            </div>
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider"></span>
                            </label>
                        </div>
                    </div>
                </div>

                {/* Security Section */}
                <div className="settings-section">
                    <h2 className="settings-title flex items-center gap-2">
                        <Lock size={20} /> Security
                    </h2>

                    <div className="form-grid">
                        <div className="form-group">
                            <label>Current Password</label>
                            <input type="password" placeholder="••••••••" />
                        </div>
                        <div className="form-group">
                            <label>New Password</label>
                            <input type="password" placeholder="••••••••" />
                        </div>
                    </div>
                </div>

                {/* Actions */}
                <div className="settings-actions">
                    <button className="btn-secondary">Cancel</button>
                    <button className="btn-primary flex items-center gap-2">
                        <Save size={18} /> Save Changes
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Settings;
