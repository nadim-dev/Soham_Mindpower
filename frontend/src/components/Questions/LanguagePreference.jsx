
import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import PatientSideBar from '../Patient/PatientSideBar';

const LanguagePreference = () => {
    const navigate = useNavigate();
    const [selectedLanguage, setSelectedLanguage] = useState(null);

    const languages = [
        'English',
        'Hindi',
        'Kannada',
        'Malayalam',
        'Marathi',
        'Tamil',
        'Telugu',
    ];

    return (
        <div className="flex bg-gray-50 min-h-screen font-inter">
            <PatientSideBar />
            <div className="flex-1 ml-0 md:ml-64 p-6 lg:p-10 max-w-7xl mx-auto w-full flex flex-col h-screen"> {/* h-screen to keep similar layout behavior */}
                {/* Header */}
                <header className="flex items-center justify-between mb-8 shrink-0">
                    <div className="flex items-center gap-4">
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

                <div className="flex-1 flex flex-col items-center justify-center relative min-h-0">

                    {/* Back Arrow */}
                    <button
                        onClick={() => navigate(-1)}
                        className="absolute top-0 left-0 md:top-0 md:left-0 p-2 hover:bg-white rounded-full transition-colors shadow-sm bg-white"
                        aria-label="Go back"
                    >
                        <ArrowLeft size={24} className="text-gray-900" />
                    </button>

                    {/* Main Card */}
                    <div className="bg-[#FFF8E7] w-full max-w-lg rounded-lg p-5 md:p-8 shadow-sm flex flex-col max-h-[80vh] overflow-y-auto mt-8">
                        <h2 className="text-xl md:text-2xl font-bold text-center text-[#FCC565] mb-1">
                            Language Preference
                        </h2>
                        <p className="text-center text-gray-700 mb-4 text-sm md:text-base font-medium">
                            Choose your preferred language for free assessment
                        </p>

                        <div className="space-y-2 overflow-y-auto custom-scrollbar">
                            {languages.map((language) => (
                                <button
                                    key={language}
                                    onClick={() => setSelectedLanguage(language)}
                                    className={`w-full py-2 px-4 rounded-md border text-center font-medium transition-all duration-200 text-sm md:text-base
                      ${selectedLanguage === language
                                            ? 'bg-white border-[#FCC565] shadow-md text-black'
                                            : 'bg-white border-gray-200 text-gray-700 hover:border-[#FCC565]'}
                    `}
                                >
                                    {language}
                                </button>
                            ))}
                        </div>

                        <div className="flex flex-col items-center mt-4 md:mt-6 shrink-0">
                            <button
                                className="bg-[#FCC565] text-black font-semibold py-2 px-12 md:py-3 md:px-16 rounded-lg hover:bg-[#fab845] transition-colors shadow-sm text-sm md:text-base"
                                onClick={() => {
                                    if (selectedLanguage) {
                                        // Navigate to next step or handle selection
                                        console.log('Selected:', selectedLanguage);
                                        navigate('/questions/begin-exam'); // Assuming this is the next step
                                    }
                                }}
                            >
                                Next
                            </button>

                            <button
                                onClick={() => navigate(-1)}
                                className="mt-2 text-xs md:text-sm text-gray-600 hover:underline"
                            >
                                Back
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Line (Visual Element from design) */}
                <div className="w-full max-w-4xl mx-auto h-[2px] bg-gray-300 mb-4 md:mb-8 rounded-full shrink-0 mt-8"></div>
            </div>
        </div>
    );
};

export default LanguagePreference;
