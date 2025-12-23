import React, { useState } from 'react';
import {
    LayoutDashboard,
    User,
    PlayCircle,
    Bell,
    CreditCard,
    LogOut,
    Menu,
    X,
    ClipboardList,
    Calendar // Added Calendar icon
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const PatientSideBar = () => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { name: 'Dashboard', icon: LayoutDashboard, path: '/patient/dashboard' },
        { name: 'My Videos', icon: PlayCircle, path: '/patient/video' },
        { name: 'Take Test', icon: ClipboardList, path: '/questions/intro' },
        { name: 'Payments', icon: CreditCard, path: '/patient/payments' },
        { name: 'Notifications', icon: Bell, path: '/patient/notifications' },
        { name: 'Book Appointment', icon: Calendar, path: '/patient/book-appointment' }, // New Item
        { name: 'My Profile', icon: User, path: '/patient-profile' }, // Kept original path as per analysis
    ];

    const toggleSidebar = () => setIsOpen(!isOpen);

    return (
        <>
            {/* Mobile Menu Button */}
            <button
                className="md:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-md shadow-md text-gray-700 hover:bg-gray-50 transition-colors"
                onClick={toggleSidebar}
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sidebar Container */}
            <div className={`w-64 h-screen bg-white shadow-lg flex flex-col fixed left-0 top-0 z-40 font-inter transition-transform duration-300 transform 
                ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
                md:translate-x-0`}>

                <div className="p-8 mt-12 md:mt-0">
                    <h1 className="text-xl font-bold text-[#1e40af]">sohaam mindpower</h1>
                </div>

                <nav className="flex-1 px-4 space-y-2 overflow-y-auto">
                    {menuItems.map((item) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <Link
                                key={item.name}
                                to={item.path}
                                onClick={() => setIsOpen(false)}
                                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${isActive
                                    ? 'bg-[#dbeafe] text-[#1e40af]' /* Blue tint for patient theme */
                                    : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                                    }`}
                            >
                                <item.icon size={20} />
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>

                <div className="p-4 mt-auto">
                    <Link to="/" className="flex items-center gap-3 px-4 py-3 text-red-500 text-sm font-medium hover:bg-red-50 rounded-lg w-full transition-colors">
                        <LogOut size={20} />
                        Log Out
                    </Link>
                </div>
            </div>
        </>
    );
};

export default PatientSideBar;
