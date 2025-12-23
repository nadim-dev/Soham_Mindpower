import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import PatientSideBar from '../Patient/PatientSideBar';

const AssessmentIntro = () => {
    const navigate = useNavigate();

    return (
        <div className="flex bg-gray-50 min-h-screen font-inter">
            <PatientSideBar />
            <div className="flex-1 ml-0 md:ml-64 p-6 lg:p-10 max-w-7xl mx-auto w-full flex flex-col">
                {/* Header */}
                <header className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => navigate(-1)}
                            className="p-2 hover:bg-white rounded-full transition-colors shadow-sm bg-white"
                        >
                            <ArrowLeft size={24} className="text-gray-900" />
                        </button>
                        <h1 className="text-xl font-bold text-[#1e40af] md:hidden">sohaam mindpower</h1>
                    </div>
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200">
                        <img
                            src="https://ui-avatars.com/api/?name=User&background=random"
                            alt="User Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </header>

                {/* Main Content Centered */}
                <div className="flex-1 flex flex-col items-center justify-center -mt-10">

                    {/* Illustration Container */}
                    <div className="w-64 h-64 md:w-80 md:h-80 mb-8 relative">
                        {/* Replaced with local image if available, otherwise placeholder */}
                        <img
                            src="/Images/assessment_intro_illustration.png"
                            alt="Assessment Illustration"
                            className="w-full h-full object-contain"
                            onError={(e) => {
                                e.target.src = 'https://img.freepik.com/free-vector/thoughtful-woman-with-laptop-looking-big-question-mark_1150-39362.jpg?w=740&t=st=1709123456~exp=1709124056~hmac=example'; // Fallback if local not found
                                e.target.style.opacity = '0.8';
                                e.target.style.borderRadius = '20px';
                            }}
                        />
                    </div>

                    {/* Quote */}
                    <h2 className="text-lg md:text-xl font-semibold text-center text-gray-900 max-w-md mb-12 leading-relaxed">
                        “These evaluations help us provide you with the right guidance and care.”
                    </h2>

                    {/* Begin Button */}
                    <button
                        onClick={() => navigate('/questions/begin-exam')}
                        className="w-full max-w-xs py-3 px-6 bg-[#FCD34D] hover:bg-[#fbbf24] text-gray-900 font-bold rounded-lg shadow-sm transition-all transform hover:scale-105"
                    >
                        Begin
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AssessmentIntro;
