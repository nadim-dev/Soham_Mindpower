import React from 'react';
import {
    PlusCircle,
    Upload,
    FileQuestion,
    Bell,
    MessageSquare,
    CheckCircle,
    PlayCircle,
    Calendar,
} from 'lucide-react';
import SideBar from './admin-panel/SideBar';

const DoctorDashboard = () => {
    return (
        <div className="flex bg-gray-50 min-h-screen font-inter">
            <SideBar />
            <div className="flex-1 ml-0 md:ml-64 p-6 lg:p-10 max-w-7xl mx-auto">
                {/* Header */}
                <header className="mb-10">
                    <h1 className="text-3xl font-medium text-gray-900">
                        Welcome, <span className="font-semibold">Dr. Sachin Potdar!</span>
                    </h1>
                </header>

                {/* Today's Overview */}
                <section className="mb-10">
                    <h2 className="text-xl font-bold text-gray-900 mb-6">Today's Overview</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <StatCard label="Total Patients" value="124" />
                        <StatCard label="Pending Reports" value="8" />
                        <StatCard label="Upcoming Appts." value="5" />
                    </div>
                </section>

                {/* Quick Tools */}
                <section className="mb-10">
                    <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Tools</h2>
                    <div className="flex flex-wrap gap-4">
                        <QuickToolBtn icon={<PlusCircle size={18} />} label="Add Reports" primary />
                        <QuickToolBtn icon={<Upload size={18} />} label="Upload Video" />
                        <QuickToolBtn icon={<FileQuestion size={18} />} label="Add Test Qs" />
                        <QuickToolBtn icon={<Bell size={18} />} label="Send Notification" />
                        <QuickToolBtn icon={<MessageSquare size={18} />} label="View Messages" />
                    </div>
                </section>

                {/* Recent Patient Activity */}
                <section>
                    <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Patient Activity</h2>
                    <div className="space-y-4">
                        <ActivityItem
                            icon={<CheckCircle size={20} />}
                            text="Rohan completed Mental Test"
                            time="2 mins ago"
                            iconColor="text-gray-700"
                            bgColor="bg-amber-50"
                        />
                        <ActivityItem
                            icon={<PlayCircle size={20} />}
                            text="Priya Viewed 'coping skill' video"
                            time="15 mins ago"
                            iconColor="text-gray-700"
                            bgColor="bg-amber-50"
                        />
                        <ActivityItem
                            icon={<Calendar size={20} />}
                            text="Anjali Scheduled a new appointment"
                            time="1 hr ago"
                            iconColor="text-gray-700"
                            bgColor="bg-amber-50"
                        />
                    </div>
                </section>
            </div>
        </div>
    );
};

// Subcomponent: Statistic Card
const StatCard = ({ label, value }) => {
    return (
        <div className="bg-amber-50 rounded-xl p-8 text-center flex flex-col items-center justify-center">
            <span className="text-sm text-gray-600 font-medium mb-2">{label}</span>
            <span className="text-4xl font-bold text-gray-900">{value}</span>
        </div>
    );
};

// Subcomponent: Quick Tool Button
const QuickToolBtn = ({ icon, label, primary }) => {
    return (
        <button className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-colors ${primary
            ? 'bg-amber-100 text-gray-900 hover:bg-amber-200'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}>
            {icon}
            <span className="text-sm">{label}</span>
        </button>
    );
};

// Subcomponent: Activity Item
const ActivityItem = ({ icon, text, time, bgColor }) => {
    return (
        <div className="flex items-center justify-between p-4 bg-white hover:bg-gray-50 rounded-xl border border-gray-50 transition-colors">
            <div className="flex items-center space-x-4">
                <div className={`p-2 rounded-lg ${bgColor} text-gray-800`}>
                    {icon}
                </div>
                <span className="text-gray-800 font-medium">{text}</span>
            </div>
            <span className="text-gray-400 text-sm whitespace-nowrap ml-4">{time}</span>
        </div>
    );
};

export default DoctorDashboard;
