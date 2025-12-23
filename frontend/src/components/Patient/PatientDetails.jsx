import React, { useState } from 'react';
import {
    Edit,
    Phone,
    Mail,
    MapPin,
    User,
    Calendar,
    ChevronLeft
} from 'lucide-react';
import SideBar from '../admin-panel/SideBar';
import { Link } from 'react-router-dom';

const PatientDetails = () => {
    const [activeTab, setActiveTab] = useState('Personal Details');

    const tabs = [
        'Personal Details',
        'Medical Info',
        'Reports',
        'Test Scores',
        'Appointments',
        'Voice Notes',
        'Healing Progress'
    ];

    return (
        <div className="flex bg-gray-50 min-h-screen font-inter">
            <SideBar />
            <div className="flex-1 ml-64 p-6 lg:p-10 max-w-7xl mx-auto">
                {/* Breadcrumb / Header */}
                <div className="flex items-center gap-2 mb-8 text-gray-500">
                    <span className="font-medium text-gray-900">Patients</span>
                    <span>/</span>
                    <span className="font-medium text-gray-900">Rohan Sharma</span>
                </div>

                {/* Profile Header Card */}
                <div className="bg-white rounded-xl p-6 mb-8 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200">
                            <img
                                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                                alt="Rohan Sharma"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-gray-900">Rohan Sharma</h1>
                            <p className="text-gray-500 text-sm">Patient ID: 73451</p>
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <button className="px-4 py-2 border border-gray-200 rounded-lg text-gray-600 font-medium hover:bg-gray-50 transition-colors">
                            Edit Details
                        </button>
                        <button className="px-6 py-2 bg-[#FCD34D] rounded-lg text-gray-900 font-medium hover:bg-[#fbbf24] transition-colors">
                            Contact
                        </button>
                    </div>
                </div>

                {/* Navigation Tabs */}
                <div className="bg-white rounded-xl p-2 mb-8 shadow-sm overflow-x-auto">
                    <div className="flex space-x-1 min-w-max">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === tab
                                        ? 'bg-[#FF8A65] text-white shadow-sm'
                                        : 'text-gray-600 hover:bg-gray-50'
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content Area - Personal Details */}
                {activeTab === 'Personal Details' && (
                    <div className="bg-white rounded-xl p-8 shadow-sm">
                        <div className="flex justify-between items-center mb-8">
                            <h2 className="text-xl font-bold text-gray-900">Personal Details</h2>
                            <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg text-gray-600 text-sm font-medium hover:bg-gray-200 transition-colors">
                                <Edit size={16} />
                                Edit
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                            <DetailField label="Full Name" value="Rohan Sharma" />
                            <DetailField label="Age" value="34" />
                            <DetailField label="Location" value="Mumbai, India" />
                            <DetailField label="Contact Number" value="+91 98765 43210" />
                            <DetailField label="Email Address" value="rohan.sharma@example.com" />
                            <DetailField label="Emergency Contact" value="Anita Sharma (+91 98765 43211)" />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

// Subcomponent: Detail Field
const DetailField = ({ label, value }) => {
    return (
        <div>
            <label className="block text-sm text-gray-500 mb-2 font-medium">{label}</label>
            <div className="bg-gray-100 rounded-lg px-4 py-3 text-gray-900 font-medium">
                {value}
            </div>
        </div>
    );
};

export default PatientDetails;
