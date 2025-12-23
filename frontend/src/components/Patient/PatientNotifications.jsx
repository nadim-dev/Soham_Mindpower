import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './PatientNotifications.css';

import PatientSideBar from './PatientSideBar';

const PatientNotifications = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('All');

    // ... (logic) ...
    // Mock data based on design
    const allNotifications = [
        { id: 1, type: 'reminder', text: 'Please attend all scheduled sessions on time.', date: '2h ago', read: false },
        { id: 2, type: 'info', text: 'Remember, progress takes time — be patient with yourself.', date: '5h ago', read: true },
        { id: 3, type: 'appointment', text: 'Your appointment with Dr. Sachin Potdar is confirmed for tomorrow.', date: '1d ago', read: true },
    ];

    const tabs = ['All', 'Unread', 'Appointments', 'Reminders'];

    const getFilteredNotifications = () => {
        if (activeTab === 'All') return allNotifications;
        if (activeTab === 'Unread') return allNotifications.filter(n => !n.read);
        if (activeTab === 'Appointments') return allNotifications.filter(n => n.type === 'appointment');
        if (activeTab === 'Reminders') return allNotifications.filter(n => n.type === 'reminder');
        return allNotifications;
    };

    return (
        <div className="flex bg-gray-50 min-h-screen font-inter">
            <PatientSideBar />
            <div className="flex-1 ml-0 md:ml-64 p-6 lg:p-10 max-w-7xl mx-auto w-full">

                <header className="flex items-center gap-4 mb-8">
                    <button className="p-2 bg-white rounded-full shadow-sm hover:bg-gray-50" onClick={() => navigate(-1)}>
                        <ArrowLeft size={24} className="text-gray-700" />
                    </button>
                    <h1 className="text-2xl font-bold text-gray-900">Your Updates</h1>
                </header>

                <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
                    {tabs.map(tab => (
                        <button
                            key={tab}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === tab
                                    ? 'bg-[#1e40af] text-white'
                                    : 'bg-white text-gray-600 hover:bg-gray-100'
                                }`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <div className="space-y-4">
                    {getFilteredNotifications().map(note => (
                        <div key={note.id} className={`p-4 rounded-xl border ${note.read ? 'bg-white border-gray-100' : 'bg-blue-50 border-blue-100'} flex gap-4 items-start`}>
                            <div className={`w-2 h-2 mt-2 rounded-full flex-shrink-0 ${note.read ? 'bg-gray-300' : 'bg-blue-500'}`}></div>
                            <div className="flex-1">
                                <p className={`text-sm ${note.read ? 'text-gray-600' : 'text-gray-900 font-medium'}`}>{note.text}</p>
                                <span className="text-xs text-gray-400 mt-1 block">{note.date}</span>
                            </div>
                        </div>
                    ))}
                    {getFilteredNotifications().length === 0 && (
                        <div className="text-center py-10 text-gray-500">No updates in this category.</div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PatientNotifications;
