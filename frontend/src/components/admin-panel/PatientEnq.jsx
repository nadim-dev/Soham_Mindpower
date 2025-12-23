import React from 'react';
import SideBar from './SideBar';
import { Link } from 'react-router-dom';

const PatientEnq = () => {
    const stats = [
        { title: 'Unread Inquiries', count: 12 },
        { title: 'Pending Response', count: 5 },
        { title: 'Resolved', count: 28 },
    ];

    const inquiries = [
        { name: 'Chinaza Akachi', status: 'Scheduled', date: '09 Dec 2019', time: '05:18AM' },
        { name: 'Bernarr Dominik', status: 'Scheduled', date: '26 Feb 2019', time: '05:10AM' },
        { name: 'Beth Murphy', status: 'Scheduled', date: '16 Sep 2019', time: '00:37PM' },
        { name: 'Dameon Peterson', status: 'Scheduled', date: '08 Oct 2019', time: '05:11AM' },
    ];

    return (
        <div className="flex bg-gray-50 min-h-screen font-inter">
            <SideBar />

            <div className="flex-1 ml-0 md:ml-64 p-4 md:p-8">
                {/* Header */}
                <div className="flex justify-between items-start mb-8">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900 mb-1">Patient Inquiries</h1>

                    </div>
                    <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                        <img src="https://ui-avatars.com/api/?name=Admin+User" alt="Profile" className="w-full h-full object-cover" />
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                            <h3 className="text-gray-600 text-lg mb-4">{stat.title}</h3>
                            <p className="text-4xl font-bold text-gray-900">{stat.count}</p>
                        </div>
                    ))}
                </div>

                {/* Inquiries List (Responsive: Cards for Mobile, Table for Desktop) */}
                <div className="bg-white rounded-lg shadow-sm p-4 md:p-8 min-h-[500px] flex flex-col relative">

                    {/* Desktop Headers */}
                    <div className="hidden md:grid grid-cols-4 text-gray-400 text-sm mb-6 px-4">
                        <div>Name</div>
                        <div>Status</div>
                        <div>Date</div>
                        <div>Time</div>
                    </div>

                    <div className="space-y-4 md:space-y-8">
                        {inquiries.map((inquiry, index) => (
                            <div key={index} className="border md:border-none rounded-lg p-4 md:p-0 grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-0 text-gray-900 md:px-4 items-center bg-gray-50 md:bg-white shadow-sm md:shadow-none">
                                {/* Mobile Labels & Data */}
                                <div className="flex justify-between md:block">
                                    <span className="md:hidden text-gray-500 font-medium">Name:</span>
                                    <Link to={`/admin/patient-detail/${index}`} className="font-semibold md:font-normal text-blue-600 hover:underline">
                                        {inquiry.name}
                                    </Link>
                                </div>
                                <div className="flex justify-between md:block">
                                    <span className="md:hidden text-gray-500 font-medium">Status:</span>
                                    <span className={`px-2 py-1 rounded-full text-xs font-semibold 
                                    ${inquiry.status === 'Scheduled' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}
                                    md:bg-transparent md:text-inherit md:p-0 md:text-base md:font-normal`}>
                                        {inquiry.status}
                                    </span>
                                </div>
                                <div className="flex justify-between md:block">
                                    <span className="md:hidden text-gray-500 font-medium">Date:</span>
                                    <span>{inquiry.date}</span>
                                </div>
                                <div className="flex justify-between md:block">
                                    <span className="md:hidden text-gray-500 font-medium">Time:</span>
                                    <span>{inquiry.time}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="mt-auto pt-8 flex justify-between items-center text-sm text-gray-900">
                        <div className="px-4">4\30</div>
                        <div className="flex gap-4">
                            <button className="px-6 py-2 bg-gray-100 rounded text-gray-600 font-medium hover:bg-gray-200 transition-colors">PREVIOUS</button>
                            <button className="px-6 py-2 bg-[#FCD34D] rounded text-gray-900 font-medium hover:bg-[#fbbf24] transition-colors">NEXT</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default PatientEnq;