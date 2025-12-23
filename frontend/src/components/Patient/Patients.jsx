import React from 'react';
import { Search, PlusCircle, Edit, Trash2, ChevronLeft, ChevronRight } from 'lucide-react';
import SideBar from '../admin-panel/SideBar';
import { Link } from 'react-router-dom';

const Patients = () => {
    // Mock Data
    const patients = [
        { id: 1, name: 'Eleanor Pena', age: 34, latestTest: '2025-07-15', score: '85/100' },
        { id: 2, name: 'Cody Fisher', age: 45, latestTest: '2025-07-14', score: '72/100' },
        { id: 3, name: 'Jenny Wilson', age: 28, latestTest: '2025-07-13', score: '91/100' },
        { id: 4, name: 'Cameron Williamson', age: 52, latestTest: '2025-07-12', score: '64/100' },
        { id: 5, name: 'Brooklyn Simmons', age: 39, latestTest: '2025-07-11', score: '88/100' },
    ];

    return (
        <div className="flex bg-gray-50 min-h-screen font-inter">
            <SideBar />
            <div className="flex-1 ml-0 md:ml-64 p-4 md:p-10 max-w-7xl mx-auto w-full">

                {/* Top Actions: Search and Add Button */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 md:mb-8 gap-4">
                    <div className="relative w-full md:w-96">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Search size={18} className="text-gray-400" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search patients..."
                            className="pl-10 pr-4 py-2 w-full rounded-full bg-gray-100 border-none focus:ring-2 focus:ring-amber-200 focus:bg-white transition-all text-sm"
                        />
                    </div>

                    <Link to="/admin/add-patient" className="w-full md:w-auto flex items-center justify-center space-x-2 bg-amber-300 hover:bg-amber-400 text-gray-900 px-6 py-2.5 rounded-lg font-medium transition-colors shadow-sm">
                        <PlusCircle size={18} />
                        <span>Add new patients</span>
                    </Link>
                </div>

                {/* Page Title */}
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">Patient Management List</h1>

                {/* Patients List (Responsive: Cards for Mobile, Table for Desktop) */}
                <div className="bg-white rounded-xl mb-8 shadow-sm md:shadow-none border md:border-none border-gray-100 p-4 md:p-0">

                    {/* Desktop Table */}
                    <div className="hidden md:block overflow-x-auto bg-white rounded-xl">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-gray-100">
                                    <th className="text-left py-4 px-6 text-gray-400 font-medium text-lg">Name</th>
                                    <th className="text-center py-4 px-6 text-gray-400 font-medium text-lg">Age</th>
                                    <th className="text-center py-4 px-6 text-gray-400 font-medium text-lg">Latest test</th>
                                    <th className="text-center py-4 px-6 text-gray-400 font-medium text-lg">Score</th>
                                    <th className="text-center py-4 px-6 text-gray-400 font-medium text-lg">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {patients.map((patient) => (
                                    <tr key={patient.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="py-6 px-6 text-gray-800 font-medium">{patient.name}</td>
                                        <td className="py-6 px-6 text-center text-gray-600">{patient.age}</td>
                                        <td className="py-6 px-6 text-center text-gray-600">{patient.latestTest}</td>
                                        <td className="py-6 px-6 text-center text-gray-600">{patient.score}</td>
                                        <td className="py-6 px-6">
                                            <div className="flex items-center justify-center space-x-4">
                                                <button className="text-gray-400 hover:text-blue-600 transition-colors">
                                                    <Edit size={18} />
                                                </button>
                                                <button className="text-gray-400 hover:text-red-500 transition-colors">
                                                    <Trash2 size={18} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Mobile Cards */}
                    <div className="md:hidden space-y-4">
                        {patients.map((patient) => (
                            <div key={patient.id} className="bg-gray-50 rounded-lg p-4 flex flex-col gap-3 border border-gray-100">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <span className="font-semibold text-gray-900 block">{patient.name}</span>
                                        <span className="text-sm text-gray-500">Age: {patient.age}</span>
                                    </div>
                                    <div className="flex space-x-2">
                                        <button className="p-2 bg-white rounded-full text-gray-400 hover:text-blue-600 shadow-sm">
                                            <Edit size={16} />
                                        </button>
                                        <button className="p-2 bg-white rounded-full text-gray-400 hover:text-red-500 shadow-sm">
                                            <Trash2 size={16} />
                                        </button>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-2 text-sm pt-2 border-t border-gray-200">
                                    <div>
                                        <span className="text-gray-500 block text-xs uppercase tracking-wider">Latest Test</span>
                                        <span className="font-medium text-gray-700">{patient.latestTest}</span>
                                    </div>
                                    <div>
                                        <span className="text-gray-500 block text-xs uppercase tracking-wider">Score</span>
                                        <span className="font-medium text-gray-700">{patient.score}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Pagination */}
                <div className="flex justify-center items-center space-x-4 mb-10">
                    <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-500">
                        <ChevronLeft size={16} />
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center rounded-full bg-amber-100 text-amber-600 font-medium text-sm">
                        1
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-500 text-sm">
                        2
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-500 text-sm">
                        3
                    </button>
                    <span className="text-gray-400">...</span>
                    <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-500 text-sm">
                        12
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-500">
                        <ChevronRight size={16} />
                    </button>
                </div>

                {/* View Inquiries Button */}
                <div className="flex justify-center">
                    <button className="px-8 py-3 bg-white border border-gray-200 rounded-lg text-gray-600 font-medium hover:bg-gray-50 transition-colors shadow-sm">
                        view inquiries
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Patients;
