import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Calendar,
    ChevronRight,
    CheckCircle2,
    Bell,
    Search
} from 'lucide-react';
import './PatientDashboard.css';

import PatientSideBar from './PatientSideBar';

const PatientDashboard = () => {
    const navigate = useNavigate();
    const [habits, setHabits] = useState([
        { id: 1, name: '10min of meditation', completed: false },
        { id: 2, name: 'Go to Dental Walk', completed: false },
        { id: 3, name: 'Drink 6 Glass of Water', completed: false },
        { id: 4, name: 'Write in your Journal', completed: false },
    ]);

    const toggleHabit = (id) => {
        setHabits(habits.map(h => h.id === id ? { ...h, completed: !h.completed } : h));
    };

    return (
        <div className="flex bg-gray-50 min-h-screen font-inter">
            <PatientSideBar />
            <div className="flex-1 ml-0 md:ml-64 p-6 lg:p-10 max-w-7xl mx-auto w-full"> {/* Layout wrapper */}

                {/* Header */}
                <header className="dashboard-header mb-8">
                    {/* ... (Header content kept mostly same but adapted styling if needed) ... */}
                    <div className="welcome-text">
                        <h1 className="text-2xl font-bold text-gray-900">Welcome back, Patient!</h1>
                        <p className="text-gray-500">Let's check in on your progress today.</p>
                    </div>
                    <div className="header-actions flex gap-4 items-center">
                        <button className="icon-btn p-2 rounded-full hover:bg-gray-100">
                            <Search size={24} className="text-gray-600" />
                        </button>
                        <button className="icon-btn p-2 rounded-full hover:bg-gray-100 relative" onClick={() => navigate('/patient/notifications')}>
                            <Bell size={24} className="text-gray-600" />
                            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
                        </button>
                        <div className="profile-img w-10 h-10 rounded-full overflow-hidden">
                            <img src="https://ui-avatars.com/api/?name=Jane+Doe&background=random" alt="Profile" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </header>

                {/* Dashboard Grid Content - Reused logic but cleaned structure */}
                <div className="dashboard-grid">
                    {/* ... (Existing grid logic) ... */}

                    {/* Left Column */}
                    <div className="left-column">
                        {/* Stats Row */}
                        <div className="stats-row">
                            {/* Mind Power */}
                            <div className="card mind-power-card">
                                <h3 className="card-title">Mind Power Score</h3>
                                <div className="score-circle">
                                    <svg className="w-full h-full transform -rotate-90">
                                        <circle cx="64" cy="64" r="56" stroke="#f3f4f6" strokeWidth="12" fill="transparent" />
                                        <circle cx="64" cy="64" r="56" stroke="#22c55e" strokeWidth="12" fill="transparent" strokeDasharray={2 * Math.PI * 56} strokeDashoffset={2 * Math.PI * 56 * (1 - 0.67)} strokeLinecap="round" />
                                    </svg>
                                    <span className="score-value">67%</span>
                                </div>
                            </div>

                            {/* Quick Health */}
                            <div className="card">
                                <h3 className="card-title">Quick Health Status</h3>
                                <div className="health-status-list">
                                    <div className="health-status-item">
                                        <div className="status-label">
                                            <div className="status-icon-box bg-green-light"><CheckCircle2 size={16} /></div>
                                            <span className="text-gray-600">Mood</span>
                                        </div>
                                        <span className="status-value">Positive</span>
                                    </div>
                                    <div className="health-status-item">
                                        <div className="status-label">
                                            <div className="status-icon-box bg-orange-light"><CheckCircle2 size={16} /></div>
                                            <span className="text-gray-600">Stress</span>
                                        </div>
                                        <span className="status-value">Low</span>
                                    </div>
                                    <div className="health-status-item">
                                        <div className="status-label">
                                            <div className="status-icon-box bg-blue-light"><CheckCircle2 size={16} /></div>
                                            <span className="text-gray-600">Sleep</span>
                                        </div>
                                        <span className="status-value">7h 41m</span>
                                    </div>
                                    <div className="health-status-item">
                                        <div className="status-label">
                                            <div className="status-icon-box bg-purple-light"><CheckCircle2 size={16} /></div>
                                            <span className="text-gray-600">Medication</span>
                                        </div>
                                        <span className="status-value">Taken</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Habits & Other existing sections.. keeping them intact but inside new wrapper */}
                        <div className="card mt-6">
                            <h3 className="card-title">Daily Healing Habits</h3>
                            <div className="habits-list">
                                {habits.map((habit) => (
                                    <div key={habit.id} className={`habit-item ${habit.completed ? 'completed' : ''}`} onClick={() => toggleHabit(habit.id)}>
                                        <div className="checkbox">
                                            {habit.completed && <CheckCircle2 size={14} className="text-white" />}
                                        </div>
                                        <span className="habit-text">{habit.name}</span>
                                    </div>
                                ))}
                            </div>
                            <button className="submit-btn">Submit Healing Status</button>
                        </div>

                        {/* Videos */}
                        <div className="mt-8">
                            <h3 className="card-title mb-4">Healing Videos</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="relative rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group" onClick={() => navigate('/patient/video')}>
                                        <img src={`https://picsum.photos/seed/${i + 100}/400/300`} alt="Thumbnail" className="w-full h-40 object-cover" />
                                        <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                            <div className="bg-white p-2 rounded-full text-blue-600"><ChevronRight size={24} /></div>
                                            {/* Placeholder play icon replacement */}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* Right Column */}
                    <div className="right-column">
                        {/* Keeping existing right column content */}
                        <div className="card">
                            <h3 className="card-title">Quick Actions</h3>
                            <div className="flex flex-col gap-3">
                                <button className="w-full py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">Book Appointment</button>
                                <button className="w-full py-2 border border-red-200 text-red-600 rounded-lg font-medium hover:bg-red-50 transition" >Chat with Doctor</button>
                                <button className="w-full py-2 bg-red-50 text-red-600 rounded-lg font-medium hover:bg-red-100 transition">Emergency Support</button>
                            </div>
                        </div>

                        {/* Next Appt */}
                        <div className="card mt-6">
                            <h3 className="card-title">Next Appointment</h3>
                            <div className="flex items-center gap-4 bg-blue-50 p-4 rounded-xl">
                                <div className="bg-white p-2 rounded-lg text-center min-w-[60px]">
                                    <div className="text-xs text-gray-500 uppercase font-bold">Oct</div>
                                    <div className="text-xl font-bold text-gray-900">24</div>
                                </div>
                                <div>
                                    <div className="font-semibold text-gray-900">Dr. Jordan</div>
                                    <div className="text-sm text-gray-600">10:00 am - 11:00 am</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default PatientDashboard;
