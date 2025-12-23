import React, { useState } from 'react';
import { Calendar, Clock, CheckCircle, ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PatientSideBar from './PatientSideBar';
import './BookAppointment.css';

const BookAppointment = () => {
    const navigate = useNavigate();
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState(null);
    const [isBooked, setIsBooked] = useState(false);

    // Generate time slots from 10 AM to 6 PM
    const generateTimeSlots = () => {
        const slots = [];
        for (let i = 10; i <= 18; i++) { // 10 to 18 (6 PM)
            const hour = i > 12 ? i - 12 : i;
            const period = i >= 12 ? 'PM' : 'AM';
            slots.push(`${hour}:00 ${period}`);
            if (i !== 18) { // Don't add 6:30 PM if 6 PM is the limit, or adjust as needed. 
                // Let's assume hourly slots for simplicity based on "between 10am to 6pm"
                // Adding half-hour slots adds flexibility
                slots.push(`${hour}:30 ${period}`);
            }
        }
        return slots;
    };

    const timeSlots = generateTimeSlots();

    // Mock functionality to handle booking
    const handleBookAppointment = () => {
        if (!selectedDate || !selectedTime) return;

        // Simulating API call
        setIsBooked(true);
        setTimeout(() => {
            // navigate('/patient/dashboard'); // Optional: redirect after some time
        }, 2000);
    };

    // Get today's date for min attribute in date picker
    const today = new Date().toISOString().split('T')[0];

    return (
        <div className="book-appointment-container">
            <PatientSideBar />

            <div className="appointment-main-content ml-0 md:ml-64 w-full">

                {/* Back Button for mobile/easy navigation */}
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 text-gray-500 hover:text-gray-900 mb-6 transition-colors"
                >
                    <ChevronLeft size={20} />
                    <span>Back</span>
                </button>

                <div className="appointment-header">
                    <h1 className="appointment-title">Book an Appointment</h1>
                    <p className="appointment-subtitle">Schedule a consultation with our expert doctors</p>
                </div>

                <div className="appointment-card">

                    {isBooked ? (
                        <div className="text-center py-12">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                                <CheckCircle size={40} className="text-green-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">Appointment Booked!</h2>
                            <p className="text-gray-600 mb-6">
                                Your appointment for <strong>{selectedDate}</strong> at <strong>{selectedTime}</strong> has been confirmed.
                            </p>
                            <button
                                onClick={() => navigate('/patient/dashboard')}
                                className="book-btn bg-gray-900 hover:bg-gray-800"
                            >
                                Go to Dashboard
                            </button>
                        </div>
                    ) : (
                        <>
                            {/* Date Selection */}
                            <div className="form-group">
                                <label className="form-label flex items-center gap-2">
                                    <Calendar size={18} className="text-blue-600" />
                                    Select Date
                                </label>
                                <div className="date-input-wrapper">
                                    <input
                                        type="date"
                                        className="date-input"
                                        min={today}
                                        value={selectedDate}
                                        onChange={(e) => {
                                            setSelectedDate(e.target.value);
                                            setSelectedTime(null); // Reset time when date changes
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Time Selection */}
                            <div className="form-group">
                                <label className="form-label flex items-center gap-2">
                                    <Clock size={18} className="text-blue-600" />
                                    Select Time (10:00 AM - 6:00 PM)
                                </label>

                                {!selectedDate ? (
                                    <p className="text-gray-400 text-sm italic text-center py-4">Please select a date first to see available slots.</p>
                                ) : (
                                    <div className="time-slots-grid">
                                        {timeSlots.map((time) => (
                                            <button
                                                key={time}
                                                className={`time-slot-btn ${selectedTime === time ? 'selected' : ''}`}
                                                onClick={() => setSelectedTime(time)}
                                            >
                                                {time}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Submit Button */}
                            <div className="appointment-actions">
                                <button
                                    className="book-btn"
                                    disabled={!selectedDate || !selectedTime}
                                    onClick={handleBookAppointment}
                                >
                                    Confirm Appointment
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BookAppointment;
