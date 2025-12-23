import React, { useState } from 'react';
import { Calendar, ArrowLeft, Mail, Phone, MessageSquare } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import SideBar from './SideBar';

const PatientDetailAdmin = () => {
    const navigate = useNavigate();
    const { id } = useParams(); // In a real app, use this ID to fetch data
    const [activeTab, setActiveTab] = useState('Personal & Medical');
     
    // Mock Data - In real app, fetch based on ID
    const patientData = {
        name: 'Chinaza Akachi', // Matching one from the list for demo
        location: 'Mumbai, Maharashtra',
        email: 'chinaza.akachi@email.com',
        image: 'https://ui-avatars.com/api/?name=Chinaza+Akachi&background=random',
        details: {
            fullName: 'Chinaza Akachi',
            age: '29',
            gender: 'Female',
            contactNumber: '+91 98765 43210',
            condition: 'Post-Traumatic Stress Disorder',
            pastTreatments: 'Group Therapy, EMDR',
            currentMedications: 'Paroxetine 20mg',
        },
        appointments: [
            {
                date: 'December 09, 2019',
                notes: 'Initial consultation and assessment.',
                summary: 'Doctor\'s Summary: Patient shows signs of severe anxiety. Recommended immediate intervention.',
                doctor: 'Dr. Sachin Potdar'
            },
            {
                date: 'November 20, 2019',
                notes: 'Follow-up on sleep patterns.',
                summary: 'Doctor\'s Summary: Sleep quality improved slightly. Continuing current medication plan.',
                doctor: 'Dr. Sachin Potdar'
            }
        ],
        milestones: {
            stage: 'Stage 1: Stabilization',
            percentage: 30
        }
    };

    const handleContact = () => {
        // Mock contact action
        window.location.href = `mailto:${patientData.email}`;
    };

    return (
        <div className="flex bg-gray-50 min-h-screen font-inter">
            <SideBar />
            <div className="flex-1 ml-0 md:ml-64 p-6 lg:p-10 max-w-7xl mx-auto w-full">

                {/* Back Button */}
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center text-gray-500 hover:text-gray-900 mb-6 transition-colors"
                >
                    <ArrowLeft size={20} className="mr-2" />
                    Back to Appointments
                </button>

                {/* Main Content */}
                <div className="w-full">

                    {/* Header Section */}
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8 bg-white p-6 rounded-xl shadow-sm">
                        <div className="relative">
                            <div className="w-32 h-32 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-gray-100 shadow-md">
                                <img
                                    src={patientData.image}
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        <div className="text-center md:text-left pt-2 flex-1">
                            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{patientData.name}</h1>
                            <p className="text-gray-500 mt-1">{patientData.location}</p>
                            <div className="flex items-center justify-center md:justify-start gap-4 mt-3">
                                <span className="flex items-center text-gray-600 text-sm">
                                    <Mail size={16} className="mr-1" /> {patientData.email}
                                </span>
                                <span className="flex items-center text-gray-600 text-sm">
                                    <Phone size={16} className="mr-1" /> {patientData.details.contactNumber}
                                </span>
                            </div>
                        </div>

                        <div className="ml-auto flex items-center gap-3 mt-4 md:mt-0">
                            <button
                                onClick={handleContact}
                                className="flex items-center gap-2 bg-[#0057B8] text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-[#004494] transition-colors shadow-sm"
                            >
                                <MessageSquare size={18} />
                                Contact Patient
                            </button>
                        </div>
                    </div>

                    {/* Navigation Tabs */}
                    <div className="bg-white rounded-xl shadow-sm mb-8 overflow-hidden border border-gray-100">
                        <div className="flex overflow-x-auto no-scrollbar border-b border-gray-100">
                            {['Personal & Medical', 'Appointments', 'Milestones'].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`whitespace-nowrap px-6 py-4 text-sm font-medium transition-colors relative flex-shrink-0 ${activeTab === tab
                                        ? 'text-[#0057B8] bg-blue-50'
                                        : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                                        }`}
                                >
                                    {tab}
                                    {activeTab === tab && (
                                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#0057B8]" />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Tab Content */}
                    <div className="space-y-6">

                        {/* Personal & Medical Info */}
                        <div className={`transition-opacity duration-300 ${activeTab === 'Personal & Medical' ? 'block' : 'hidden'}`}>
                            <div className="bg-white rounded-xl shadow-sm p-5 md:p-8 border border-gray-100">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-6 md:gap-y-8 gap-x-8">
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Full Name</label>
                                        <p className="text-gray-900 font-medium text-base md:text-lg">{patientData.details.fullName}</p>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Age</label>
                                        <p className="text-gray-900 font-medium text-base md:text-lg">{patientData.details.age}</p>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Gender</label>
                                        <p className="text-gray-900 font-medium text-base md:text-lg">{patientData.details.gender}</p>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Contact Number</label>
                                        <p className="text-gray-900 font-medium text-base md:text-lg">{patientData.details.contactNumber}</p>
                                    </div>

                                    <div className="col-span-1 md:col-span-2 lg:col-span-2">
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Mental Health Condition</label>
                                        <p className="text-gray-900 font-medium text-base md:text-lg">{patientData.details.condition}</p>
                                    </div>
                                    <div className="col-span-1 md:col-span-2 lg:col-span-2">
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Past Treatments</label>
                                        <p className="text-gray-900 font-medium text-base md:text-lg">{patientData.details.pastTreatments}</p>
                                    </div>
                                    <div className="col-span-1 md:col-span-2 lg:col-span-4 border-t border-gray-100 pt-6 mt-2">
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Current Medications</label>
                                        <p className="text-gray-900 font-medium text-base md:text-lg">{patientData.details.currentMedications}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Appointments History */}
                        <div className={`transition-opacity duration-300 ${activeTab === 'Appointments' || activeTab === 'Personal & Medical' ? 'block' : 'hidden'}`}>
                          
                            <div className="space-y-4">
                                {patientData.appointments.map((appt, index) => (
                                    <div key={index} className="bg-white rounded-xl shadow-sm p-6 flex flex-col md:flex-row gap-6 border border-gray-100">
                                        <div className="flex-shrink-0">
                                            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                                                <Calendar size={24} />
                                            </div>
                                        </div>
                                        <div className="flex-grow">
                                            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                                                <h3 className="text-lg font-semibold text-gray-900">{appt.date}</h3>
                                                <span className="text-[#0057B8] text-sm font-medium mt-1 md:mt-0">{appt.doctor}</span>
                                            </div>
                                            <p className="text-gray-600 text-sm mb-3">{appt.notes}</p>
                                            <p className="text-gray-600 text-xs italic bg-gray-50 p-3 rounded-lg border border-gray-200">
                                                {appt.summary}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Progress Milestones */}
                        <div className={`transition-opacity duration-300 ${activeTab === 'Milestones' || activeTab === 'Personal & Medical' ? 'block' : 'hidden'}`}>

                            <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 border border-gray-100">
                                <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                                    <div className="mb-2">
                                        <span className="text-xs font-semibold text-gray-600 uppercase">Current Healing Stage</span>
                                        <h3 className="text-xl font-bold text-[#0057B8] mt-1">{patientData.milestones.stage}</h3>
                                    </div>

                                    <div className="mt-6">
                                        <div className="flex justify-between text-sm font-medium text-gray-700 mb-2">
                                            <span>Progress</span>
                                            <span>{patientData.milestones.percentage}% Complete</span>
                                        </div>
                                        <div className="w-full bg-blue-200 rounded-full h-3 overflow-hidden">
                                            <div
                                                className="bg-green-500 h-full rounded-full transition-all duration-1000 ease-out"
                                                style={{ width: `${patientData.milestones.percentage}%` }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default PatientDetailAdmin;
