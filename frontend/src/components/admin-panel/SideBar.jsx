import React, { useState } from 'react';
import {
    LayoutDashboard,
    Users,
    FileText,
    Calendar,
    FileEdit,
    CreditCard,
    Settings,
    LogOut,
    Menu,
    X
} from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const SideBar = () => {
    const location = useLocation();
    const [expandedMenu, setExpandedMenu] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const navigate=useNavigate();

    const toggleSubMenu = (menuName) => {
        setExpandedMenu(expandedMenu === menuName ? null : menuName);
    };

    const logout = () => {
    console.log("logout function is running");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
     navigate("/login");
   };


    const menuItems = [
        { name: 'Dashboard', icon: LayoutDashboard, path: '/admin/dashboard' },
        { name: 'Patients', icon: Users, path: '/admin/patients' },
        { name: 'Reports', icon: FileText, path: '/admin/reports' },
        { name: 'Appointments', icon: Calendar, path: '/admin/patient-enquiries' },
        {
            name: 'Content Management',
            icon: FileEdit,
            children: [
                { name: 'Add Questions', path: '/admin/add-qa' },
                { name: 'Add Videos', path: '/admin/videoform' }
            ]
        },
        { name: 'Payment', icon: CreditCard, path: '/admin/payments' },
        { name: 'Settings', icon: Settings, path: '/admin/settings' },
        // { name: 'Inquiries', icon: FileText, path: '/admin/patient-enquiries' },
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

                <div className="p-8 mt-12 md:mt-0"> {/* Margin top on mobile for close button space if needed, or just standard padding */}
                    <h1 className="text-xl font-bold text-[#1e40af]">sohaam mindpower</h1>
                </div>

                <nav className="flex-1 px-4 space-y-2 overflow-y-auto">
                    {menuItems.map((item) => {
                        const hasChildren = item.children && item.children.length > 0;
                        const isExpanded = expandedMenu === item.name;
                        // For parent items with children, we don't use a single path for active state check generally,
                        // unless we want it active if any child is active.
                        const isActive = item.path ? location.pathname === item.path : false;

                        return (
                            <div key={item.name}>
                                {hasChildren ? (
                                    <button
                                        onClick={() => toggleSubMenu(item.name)}
                                        className={`flex items-center justify-between w-full px-4 py-3 rounded-lg text-sm font-medium transition-colors ${isExpanded ? 'bg-gray-50 text-gray-900' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                                            }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <item.icon size={20} />
                                            {item.name}
                                        </div>
                                        {/* Simple arrow indicator */}
                                        <svg
                                            className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                                            fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                ) : (
                                    <Link
                                        to={item.path}
                                        onClick={() => setIsOpen(false)}
                                        className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${isActive
                                            ? 'bg-[#FEF3C7] text-gray-900'
                                            : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                                            }`}
                                    >
                                        <item.icon size={20} />
                                        {item.name}
                                    </Link>
                                )}

                                {/* Render Children */}
                                {hasChildren && isExpanded && (
                                    <div className="ml-9 mt-1 space-y-1">
                                        {item.children.map((child) => {
                                            const isChildActive = location.pathname === child.path;
                                            return (
                                                <Link
                                                    key={child.name}
                                                    to={child.path}
                                                    onClick={() => setIsOpen(false)}
                                                    className={`block px-4 py-2 rounded-lg text-sm font-medium transition-colors ${isChildActive
                                                            ? 'text-[#1e40af] bg-blue-50'
                                                            : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                                                        }`}
                                                >
                                                    {child.name}
                                                </Link>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </nav>

                <div className="p-4 mt-auto">
                    <div
                    type='button'
                    onClick={logout}
                    className="flex items-center gap-3 px-4 py-3 text-red-500 text-sm font-medium hover:bg-red-50 rounded-lg w-full transition-colors">
                        <LogOut size={20} />
                        Log Out
                    </div>
                </div>
            </div>
        </>
    );
};

export default SideBar;
