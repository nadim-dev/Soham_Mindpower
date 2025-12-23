import React, { useState } from 'react';
import { Bell, Calendar, ChevronRight, Edit2 } from 'lucide-react';

import PatientSideBar from './PatientSideBar';

const PatientProfile = () => {
    const [activeTab, setActiveTab] = useState('Personal & Medical');
    // ... (rest of state logic stays same) ...
    const patientData = {
        name: 'Jane Doe',
        location: 'Pune, Maharashtra',
        email: 'jane.doe@email.com',
        details: {
            fullName: 'Jane Doe',
            age: '34',
            gender: 'Female',
            contactNumber: '+1 123-456-7890',
            condition: 'Anxiety',
            pastTreatments: 'Cognitive Behavioral Therapy',
            currentMedications: 'Sertraline 50mg',
        },
        appointments: [
            {
                date: 'October 25, 2025',
                notes: 'Discussed coping mechanisms for treatment side-effects.',
                summary: 'Doctor\'s Summary: Patient is responding well to mindfulness exercises. Recommended continuing daily practice.',
                doctor: 'Dr. Sachin Potdar'
            },
            {
                date: 'September 15, 2025',
                notes: 'Follow-up on medication adjustments.',
                summary: 'Doctor\'s Summary: Patient reports reduced anxiety with the new dosage. No adverse effects noted.',
                doctor: 'Dr. Sachin Potdar'
            }
        ],
        milestones: {
            stage: 'Stage 2: Acceptance & Coping',
            percentage: 45
        }
    };

    return (
        <div className="flex bg-gray-50 min-h-screen font-inter">
            <PatientSideBar />
            <div className="flex-1 ml-0 md:ml-64 p-6 lg:p-10 max-w-7xl mx-auto w-full">

                {/* Main Content */}
                <div className="w-full">

                    {/* Header Section */}
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
                        {/* ... (Existing Content) ... */}
                        <div className="relative">
                            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-lg">
                                <img
                                    src="/Images/doctor-image.png"
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <button className="absolute bottom-2 right-2 p-1.5 bg-white rounded-full shadow-md text-gray-600 hover:text-blue-600">
                                <Edit2 size={16} />
                            </button>
                        </div>

                        <div className="text-center md:text-left pt-4">
                            <h1 className="text-3xl font-bold text-gray-900">{patientData.name}</h1>
                            <p className="text-gray-500 mt-1">{patientData.location}</p>
                            <p className="text-gray-400 text-sm mt-1">{patientData.email}</p>
                        </div>

                        <div className="ml-auto flex items-center gap-4">
                            {/* Additional header actions can go here */}
                        </div>
                    </div>

                    {/* Navigation Tabs */}
                    <div className="bg-white rounded-xl shadow-sm mb-8 overflow-hidden">
                        <div className="flex overflow-x-auto no-scrollbar border-b border-gray-100">
                            {['Personal & Medical', 'Appointments', 'Milestones'].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`whitespace-nowrap px-6 py-4 text-sm font-medium transition-colors relative flex-shrink-0 ${activeTab === tab
                                        ? 'text-orange-400'
                                        : 'text-gray-500 hover:text-gray-700'
                                        }`}
                                >
                                    {tab}
                                    {activeTab === tab && (
                                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-400 rounded-t-full" />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Tab Content */}
                    <div className="space-y-6">

                        {/* Personal & Medical Info */}
                        <div className={`transition-opacity duration-300 ${activeTab === 'Personal & Medical' ? 'block' : 'hidden'}`}>
                            <div className="bg-white rounded-xl shadow-sm p-5 md:p-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-6 md:gap-y-8 gap-x-8">
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Full Name</label>
                                        <p className="text-gray-900 font-semibold text-base md:text-lg">{patientData.details.fullName}</p>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Age</label>
                                        <p className="text-gray-900 font-semibold text-base md:text-lg">{patientData.details.age}</p>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Gender</label>
                                        <p className="text-gray-900 font-semibold text-base md:text-lg">{patientData.details.gender}</p>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Contact Number</label>
                                        <p className="text-gray-900 font-semibold text-base md:text-lg">{patientData.details.contactNumber}</p>
                                    </div>

                                    <div className="col-span-1 md:col-span-2 lg:col-span-2">
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Mental Health Condition</label>
                                        <p className="text-gray-900 font-semibold text-base md:text-lg">{patientData.details.condition}</p>
                                    </div>
                                    <div className="col-span-1 md:col-span-2 lg:col-span-2">
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Past Treatments</label>
                                        <p className="text-gray-900 font-semibold text-base md:text-lg">{patientData.details.pastTreatments}</p>
                                    </div>
                                    <div className="col-span-1 md:col-span-2 lg:col-span-4 border-t border-gray-100 pt-6 mt-2">
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Current Medications</label>
                                        <p className="text-gray-900 font-semibold text-base md:text-lg">{patientData.details.currentMedications}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Appointments History */}
                        <div className={`transition-opacity duration-300 ${activeTab === 'Appointments' || activeTab === 'Personal & Medical' ? 'block' : 'hidden'}`}>
                            <h2 className="text-2xl font-bold text-gray-400 mb-4 mt-8">Appointment History</h2>
                            <div className="space-y-4">
                                {patientData.appointments.map((appt, index) => (
                                    <div key={index} className="bg-white rounded-xl shadow-sm p-6 flex flex-col md:flex-row gap-6 hover:shadow-md transition-shadow">
                                        <div className="flex-shrink-0">
                                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-500">
                                                <Calendar size={24} />
                                            </div>
                                        </div>
                                        <div className="flex-grow">
                                            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                                                <h3 className="text-lg font-semibold text-gray-900">{appt.date}</h3>
                                                <span className="text-orange-400 text-sm font-medium mt-1 md:mt-0">{appt.doctor}</span>
                                            </div>
                                            <p className="text-gray-600 text-sm mb-2">{appt.notes}</p>
                                            <p className="text-gray-500 text-xs italic bg-gray-50 p-3 rounded-lg border border-gray-100">
                                                {appt.summary}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Progress Milestones */}
                        <div className={`transition-opacity duration-300 ${activeTab === 'Milestones' || activeTab === 'Personal & Medical' ? 'block' : 'hidden'}`}>
                            <h2 className="text-2xl font-bold text-gray-400 mb-4 mt-8">Progress Milestones</h2>
                            <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
                                <div className="bg-blue-50 rounded-xl p-6">
                                    <div className="mb-2">
                                        <span className="text-xs font-semibold text-gray-500 uppercase">Current Healing Stage</span>
                                        <h3 className="text-xl font-bold text-gray-900 mt-1">{patientData.milestones.stage}</h3>
                                    </div>

                                    <div className="mt-6">
                                        <div className="flex justify-between text-sm font-medium text-gray-600 mb-2">
                                            <span>Progress</span>
                                            <span>{patientData.milestones.percentage}% Complete</span>
                                        </div>
                                        <div className="w-full bg-blue-200 rounded-full h-3 overflow-hidden">
                                            <div
                                                className="bg-green-400 h-full rounded-full transition-all duration-1000 ease-out"
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

export default PatientProfile;
