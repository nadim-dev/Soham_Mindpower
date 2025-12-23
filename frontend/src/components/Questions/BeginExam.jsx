
import React, { useState } from 'react';
import './BeginExam.css';

import PatientSideBar from '../Patient/PatientSideBar';
import { useNavigate } from 'react-router-dom';

const BeginExam = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const navigate = useNavigate();

    const options = [
        "Not at all",
        "A few days",
        "Most of the days",
        "Nearly every day"
    ];

    return (
        <div className="flex bg-gray-50 min-h-screen font-inter">
            <PatientSideBar />
            <div className="flex-1 ml-0 md:ml-64 p-6 lg:p-10 max-w-7xl mx-auto w-full flex flex-col h-screen">
                {/* Header */}
                <header className="flex items-center justify-between mb-8 shrink-0">
                    <div className="flex items-center gap-4">
                        <h1 className="text-xl font-bold text-[#1e40af] md:hidden">sohaam mindpower</h1>
                    </div>
                    <div className="user-avatar w-10 h-10 rounded-full overflow-hidden bg-gray-200">
                        <img
                            src="https://ui-avatars.com/api/?name=User&background=random"
                            alt="User Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </header>

                <div className="begin-exam-container flex-1 overflow-y-auto">
                    {/* Main Content */}
                    <div className="exam-content">
                        <h2 className="exam-prompt">
                            “Select the option that feels right to you.”
                        </h2>

                        <div className="exam-card">
                            <div className="que-count">Que 1/16</div>
                            <h3 className="que-text">Feeling Sad, Down, Depressed or Hopeless?</h3>

                            <div className="options-list">
                                {options.map((option, index) => (
                                    <div
                                        key={index}
                                        className={`option-row ${selectedOption === index ? 'selected' : ''}`}
                                        onClick={() => setSelectedOption(index)}
                                    >
                                        <div className="custom-radio">
                                            {selectedOption === index && (
                                                <div
                                                    style={{
                                                        width: '12px',
                                                        height: '12px',
                                                        backgroundColor: '#111827', // Blackish fill for selected
                                                        borderRadius: '50%'
                                                    }}
                                                />
                                            )}
                                        </div>
                                        <span className="option-text">{option}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="exam-footer">
                        <button className="next-btn" onClick={() => navigate('/questions/test-completion')}>
                            Next
                        </button>
                        <button className="end-exam-btn" onClick={() => navigate('/patient/dashboard')}>
                            End Exam
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BeginExam;
