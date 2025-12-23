import React from 'react';
import { Link } from 'react-router-dom';
import './TestCompletion.css';

import PatientSideBar from '../Patient/PatientSideBar';

const TestCompletion = () => {
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

                <div className="test-completion-container flex-1 overflow-y-auto w-full">
                    {/* Reuse existing styling classes but within the new layout */}

                    <div className="completion-card mx-auto">
                        <div className="illustration-container">
                            {/* Placeholder for the illustration - creating a simple SVG or reusing an image if available. 
                                For now, using a placeholder image logic or a simple SVG illustration similar to the design. */}
                            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
                                <circle cx="100" cy="80" r="30" fill="#FCD34D" opacity="0.8" />
                                <rect x="85" y="110" width="30" height="40" fill="#1F2937" rx="5" />
                                <rect x="90" y="150" width="8" height="30" fill="#FCD34D" />
                                <rect x="102" y="150" width="8" height="30" fill="#FCD34D" />
                                <circle cx="90" cy="75" r="3" fill="#1F2937" />
                                <circle cx="110" cy="75" r="3" fill="#1F2937" />
                                <path d="M95 90 Q100 95 105 90" stroke="#1F2937" strokeWidth="2" strokeLinecap="round" />
                                {/* Confetti */}
                                <path d="M60 60 L70 50" stroke="#EF4444" strokeWidth="3" strokeLinecap="round" />
                                <path d="M140 60 L130 50" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round" />
                                <path d="M100 40 L100 25" stroke="#10B981" strokeWidth="3" strokeLinecap="round" />
                                <circle cx="50" cy="100" r="4" fill="#6366F1" />
                                <circle cx="150" cy="100" r="4" fill="#F59E0B" />
                            </svg>
                        </div>

                        <div className="completion-text">
                            <p>
                                You've completed the test. You did well. Your results are ready whenever you feel ready to look at them.
                            </p>
                            <Link to="/patient/dashboard" className="view-result-link">
                                View Result
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestCompletion;
