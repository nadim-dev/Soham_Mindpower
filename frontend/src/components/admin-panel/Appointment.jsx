import React, { useState } from 'react';
import SideBar from './SideBar'; // 
import './Appointment.css'; 
const mockAppointment = [
  { id: 1, name: "Chinaza Akachi", status: "Scheduled", date: "09 Dec 2019", time: "05:18AM" },
  { id: 2, name: "Bernard Dominik", status: "Scheduled", date: "26 Feb 2019", time: "05:18AM" },
  { id: 3, name: "Beth Murphy", status: "Scheduled", date: "16 Sep 2019", time: "02:37PM" },
  { id: 4, name: "Isaiah", status: "Scheduled", date: "Statfield", time: "" },
  { id: 5, name: "Dameon Peterson", status: "Scheduled", date: "08 Oct 2019", time: "05:11AM" },
];

const Appointment = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 8;

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <SideBar />

      <main className="flex-1 ml-64 p-6">
        {/* Page Header */}
        <div className="mb-6">
          <span className="text-sm text-gray-500 uppercase">appoints</span>
          <div className="flex items-center justify-between mt-2">
            <h1 className="text-2xl font-bold">Appointments</h1>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center">
              <span className="mr-2 text-xl">+</span> Add new Appointment
            </button>
          </div>
          <p className="text-gray-600 mt-1">Manage and schedule patient visits.</p>
        </div>

        {/* Appointment List */}
        <div className="bg-white shadow rounded p-4">
          <h2 className="text-lg font-semibold mb-2">Appointment List</h2>
          <p className="text-sm text-gray-500 mb-4">Manage and schedule patient visits.</p>

          {/* Table Header */}
          <div className="grid grid-cols-4 font-semibold border-b pb-2">
            <div>Name</div>
            <div>Status</div>
            <div>Date</div>
            <div>Time</div>
          </div>

          {/* Table Rows */}
          {mockAppointment.map((app, index) => (
            <div key={app.id} className={`grid grid-cols-4 py-2 ${index % 2 === 0 ? 'bg-gray-100' : ''}`}>
              <div>{app.name}</div>
              <div className="text-green-600">{app.status}</div>
              <div>{app.date}</div>
              <div>{app.time}</div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-6">
          <span className="text-sm text-gray-600">{mockAppointment.length}/30</span>
          <div className="space-x-2">
            <button
              onClick={handlePrevious}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
            >
              PREVIOUS
            </button>
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
            >
              NEXT
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Appointment;

           

      
      