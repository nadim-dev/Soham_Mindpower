import React, { useState } from 'react';
import {
    LayoutDashboard,
    Users,
    FileText,
    Calendar,
    FolderOpen,
    CreditCard,
    Settings,
    LogOut,
    Menu,
    X
} from 'lucide-react';
import { Link } from 'react-router-dom';

const DashboardLayout = ({ children, activePage }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Toggle sidebar for mobile
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex h-screen bg-white font-inter overflow-hidden">
            {/* Mobile Sidebar Overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 z-20 bg-black bg-opacity-50 lg:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                ></div>
            )}

            {/* Sidebar */}
            <aside
                className={`fixed lg:static inset-y-0 left-0 z-30 w-64 bg-white border-r border-gray-100 transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
                    }`}
            >
                <div className="p-6">
                    <h1 className="text-2xl font-bold text-blue-600 mb-8">sohaam mindpower</h1>

                    <nav className="space-y-2">
                        <Link to="/dashboard">
                            <SidebarItem icon={<LayoutDashboard size={20} />} label="Dashboard" active={activePage === 'Dashboard'} />
                        </Link>
                        <Link to="/patients">
                            <SidebarItem icon={<Users size={20} />} label="Patients" active={activePage === 'Patients'} />
                        </Link>
                        <SidebarItem icon={<FileText size={20} />} label="Reports" active={activePage === 'Reports'} />
                        <SidebarItem icon={<Calendar size={20} />} label="Appointments" active={activePage === 'Appointments'} />
                        <SidebarItem icon={<FolderOpen size={20} />} label="Content Mgmt" active={activePage === 'Content Mgmt'} />
                        <SidebarItem icon={<CreditCard size={20} />} label="Payment" active={activePage === 'Payment'} />
                        <SidebarItem icon={<Settings size={20} />} label="Settings" active={activePage === 'Settings'} />
                    </nav>
                </div>

                <div className="absolute bottom-0 w-full p-6">
                    <button className="flex items-center space-x-3 text-red-500 hover:bg-red-50 w-full p-3 rounded-lg transition-colors">
                        <LogOut size={20} />
                        <span className="font-medium">Log Out</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto bg-white relative">
                {/* Mobile Header */}
                <div className="lg:hidden p-4 flex items-center justify-between border-b border-gray-100">
                    <h1 className="text-xl font-bold text-blue-600">sohaam mindpower</h1>
                    <button onClick={toggleSidebar} className="p-2 text-gray-600">
                        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {children}
            </main>
        </div>
    );
};

// Subcomponent: Sidebar Item
const SidebarItem = ({ icon, label, active }) => {
    return (
        <div
            className={`flex items-center space-x-3 px-4 py-3 rounded-lg cursor-pointer transition-colors ${active
                ? 'bg-amber-100 text-gray-900 font-medium'
                : 'text-gray-600 hover:bg-gray-50'
                }`}
        >
            <div className={active ? 'text-gray-900' : 'text-gray-500'}>
                {icon}
            </div>
            <span>{label}</span>
        </div>
    );
};

export default DashboardLayout;
