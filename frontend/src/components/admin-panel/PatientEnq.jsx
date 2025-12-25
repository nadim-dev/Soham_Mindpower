import React, { useEffect, useState } from 'react';
import SideBar from './SideBar';
import { Link } from 'react-router-dom';
import { appointmentAPI } from '../../services/api';
import { Trash2 } from 'lucide-react';

const PatientEnq = () => {
  const [appointmentHist, setAppointmentHist] = useState([]);

  const stats = [
    { title: 'Unread Inquiries', count: 12 },
    { title: 'Pending Response', count: 5 },
    { title: 'Resolved', count: 28 },
  ];

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await appointmentAPI.getAllAppointments();
        setAppointmentHist(response.data);
      } catch (error) {
        console.error('Failed to fetch appointments', error.message);
      }
    };
    fetchAppointments();
  }, []);

  const handleDelete = async (id) => {
    try {
      await appointmentAPI.deleteAppointment(id);
      setAppointmentHist((prev) => prev.filter((appt) => appt.id !== id));
    } catch (error) {
      console.error('Delete failed', error.message);
    }
  };

  return (
    <div className="flex bg-gray-50 min-h-screen font-inter">
      <SideBar />

      <div className="flex-1 ml-0 md:ml-64 p-4 md:p-8">
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <h1 className="text-2xl font-bold text-gray-900">
            Patient Inquiries
          </h1>

          <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
            <img
              src="https://ui-avatars.com/api/?name=Admin+User"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm text-center"
            >
              <h3 className="text-gray-600 text-lg mb-4">{stat.title}</h3>
              <p className="text-4xl font-bold text-gray-900">
                {stat.count}
              </p>
            </div>
          ))}
        </div>

        {/* Inquiries Table */}
        <div className="bg-white rounded-lg shadow-sm p-4 md:p-8 min-h-[500px]">
          {/* Desktop Header */}
          <div className="hidden md:grid grid-cols-5 text-gray-400 text-sm mb-6 px-4">
            <div>Name</div>
            <div>Status</div>
            <div>Date</div>
            <div>Time</div>
            <div className="text-center">Action</div>
          </div>

          {/* Rows */}
          <div className="space-y-4 md:space-y-8">
            {appointmentHist.map((inquiry, index) => (
              <div
                key={inquiry.id}
                className="
                  border md:border-none
                  rounded-lg
                  p-4 md:p-0
                  grid grid-cols-1 md:grid-cols-5
                  gap-2 md:gap-0
                  items-center
                  text-gray-900
                  md:px-4
                  bg-gray-50 md:bg-white
                  shadow-sm md:shadow-none
                "
              >
                {/* Name */}
                <div className="flex justify-between md:block">
                  <span className="md:hidden text-gray-500 font-medium">
                    Name:
                  </span>
                  <Link
                    to={`/admin/patient-detail/${index}`}
                    className="text-blue-600 hover:underline font-medium"
                  >
                    {inquiry.patient_name}
                  </Link>
                </div>

                {/* Status */}
                <div className="flex justify-between md:block">
                  <span className="md:hidden text-gray-500 font-medium">
                    Status:
                  </span>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold
                      ${
                        inquiry.status === 'Scheduled'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-800'
                      }
                      md:bg-transparent md:text-inherit md:p-0 md:text-base md:font-normal
                    `}
                  >
                    {inquiry.status}
                  </span>
                </div>

                {/* Date */}
                <div className="flex justify-between md:block">
                  <span className="md:hidden text-gray-500 font-medium">
                    Date:
                  </span>
                  <span>{inquiry.appointment_date}</span>
                </div>

                {/* Time */}
                <div className="flex justify-between md:block">
                  <span className="md:hidden text-gray-500 font-medium">
                    Time:
                  </span>
                  <span>{inquiry.appointment_time}</span>
                </div>

                {/* Action */}
                <div className="flex justify-between md:justify-center items-center">
                  <span className="md:hidden text-gray-500 font-medium">
                    Action:
                  </span>
                  <button
                    onClick={() => handleDelete(inquiry.id)}
                    className="text-red-600 hover:text-red-800 transition-colors"
                    title="Delete appointment"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientEnq;
