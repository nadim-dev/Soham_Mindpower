import React, { useState, useEffect } from 'react';
import TestimonialSection from './TestimonialSection';
//import doctorImage from '/Images/doctor-image.png'; // Ensure you have an image at this path
//C:\Prenaya-task\prenaya-fe-project-1\src\Images\doctor-image.png
const AboutAndJourney = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="w-full">

            {/* ================= ABOUT SECTION ================= */}
            <section
                className="relative w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#436198] to-[#8699B9] px-4"
                style={{
                    height: '361px',
                    minHeight: '250px',
                    maxHeight: '450px'
                }}
            >
                {/* Background Pattern Overlay */}
                <div className="absolute inset-0 opacity-10">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                            backgroundSize: '40px 40px'
                        }}
                    ></div>
                </div>

                {/* Content */}
                <div
                    className={`relative z-10 w-full max-w-screen-xl mx-auto text-center transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                >
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 leading-tight">
                        About Dr. Sachin Potdar
                    </h1>

                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-50 font-light tracking-wide">
                        A visionary in Mind Training and Life Coaching
                    </p>

                    <div className="mt-6 sm:mt-8 flex items-center justify-center gap-3">
                        <div className="h-px w-12 sm:w-16 md:w-20 bg-gradient-to-r from-transparent to-white"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                        <div className="h-px w-12 sm:w-16 md:w-20 bg-gradient-to-l from-transparent to-white"></div>
                    </div>
                </div>
            </section>


            {/* ================= JOURNEY SECTION ================= */}
            <section
                className="relative w-full bg-white px-6 py-10 sm:px-8 sm:py-12 md:px-12 md:py-16"
                style={{ minHeight: '400px' }}
            >


                {/* Content Container */}
                <div className={`max-w-7xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'
                    }`}>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

                        {/* Left - Image */}
                        <div className="flex justify-center lg:justify-start">
                            <div className="relative w-full max-w-md">
                                <img
                                    src="/Images/doctor-image.png"
                                    alt="Dr. Sachin Potdar"
                                    className="w-full h-auto shadow-lg"
                                />


                            </div>
                        </div>

                        {/* Right - Content */}
                        <div className="space-y-4">
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 lg:mb-6">
                                A Journey of Transformation
                            </h2>

                            <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
                                डॉ. पोतदार हे निसर्गोपचारातील 2004 च्या निसर्गोपचारिक या क्षेत्रामध्ये  डॉक्टरेट पदवीपासून मन, भावना आणि ऊर्जा यांचा सखोल अभ्यास करणारे अनुभवी Mind Transformation Specialist आहेत.
                            </p>

                            <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
                                गेल्या 20 वर्षांत त्यांनी हजारो लोकांना मानसिक, भावनिक आणि वैयक्तिक विकासाची दिशा देत उल्लेखनीय परिणाम साधले आहेत. त्यांच्या कार्याला अनेक प्रतिष्ठित National Awards मिळाले आहेत.
                            </p>

                            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                                Dr. Potdar is an experienced Mind Transformation Specialist who has been deeply studying the mind, emotions, and energy since earning his Doctorate in Naturopathy in 2004.
                            </p>

                            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                                Over the past 20 years, he has guided thousands of people toward inner peace, emotional, and personal growth, achieving remarkable results. His work has been honored with several prestigious national awards.
                            </p>

                            {/* Special Expertise */}
                            <div className="pt-4">
                                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                                    Special Expertise
                                </h3>
                                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                                    Mind Training, Life Coaching, Hypnotherapy, Acupressure, Acupuncture, Reiki, Panic Healing, Reflex Logic, Dowsing, Vaastu, Numerology and Astrology.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ================= NEW TWO-CARD SECTION ================= */}
            <section className="w-full bg-gradient-to-b from-[#436198] to-[#8699B9] py-16 px-4">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Card 1 */}
                    <div className="bg-white rounded-lg shadow-xl p-8 text-center">
                        <h3 className="text-xl font-bold mb-4">मार्गदर्शन केलेले क्षेत्र</h3>
                        <p className="text-sm text-gray-700 leading-relaxed">
                            शासकीय क्लासवन क्लास टू  अधिकारी, पोलीस अधिकारी, डॉक्टर, वकील, उद्योजक, बिल्डर्स, राजकीय नेते, समाजसेवक तसेच विविध कॉलेज, आयटी कंपन्या आणि औद्योगिक संस्थांमधील विद्यार्थी व कर्मचारी.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-lg shadow-xl p-8 text-center">
                        <h3 className="text-xl font-bold mb-4">कार्यदृष्टिकोन</h3>
                        <p className="text-sm text-gray-700 leading-relaxed mb-4">
                            डॉ. पोतदार यांची कार्यपद्धती चार स्तंभांवर आधारित आहे—
                            Mind Awareness, Emotional Healing, Mental Reprogramming आणि Life Alignment.
                            त्यांचा विश्वास एकच —
                        </p>
                        <p className="text-sm font-semibold italic text-gray-900">
                            “मन बदललं तर आयुष्य बदलतं.”
                        </p>
                    </div>

                </div>
            </section>

            {/* ================= TESTIMONIAL SECTION ================= */}
            <TestimonialSection />

            {/* ================= UPCOMING BOOK SECTION ================= */}
            <section className="w-full bg-gradient-to-r from-[#445b8f] to-[#6f87b3] py-20 px-4">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Left Image */}
                    <div className="flex justify-center md:justify-start">
                        <img
                            src="/Images/Book-image.png"
                            alt="Upcoming Book"
                            className="w-full max-w-sm rounded-2xl shadow-2xl"
                        />
                    </div>

                    {/* Right Content */}
                    <div className="text-white space-y-4">
                        <h2 className="text-2xl md:text-3xl font-bold">
                            Upcoming Book- “मनसंवाद”
                        </h2>
                        <p className="text-sm md:text-base text-blue-100 leading-relaxed">
                            Dr. Potdar’s upcoming book is on the way, bringing wisdom, clarity, and practical mind-training tools.
                            Launch announcement coming soon!
                        </p>
                    </div>

                </div>
            </section>

            {/* ================= CTA SECTION (Exact 1440 x 385) ================= */}
            <section className="w-full flex justify-center items-center bg-gray-100 py-16">
                <div
                    className="rounded-2xl bg-gradient-to-br from-[#445b8f] to-[#7f93b8] flex flex-col items-center justify-center text-center shadow-xl"
                    style={{ width: '90%', height: '300px', maxWidth: '1440px' }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Ready to Begin Your Transformation?
                    </h2>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="bg-sky-400 hover:bg-sky-500 text-white px-6 py-3 rounded-md text-sm font-semibold transition">
                            Book a session now
                        </button>

                        <button className="bg-white hover:bg-gray-100 text-[#445b8f] px-6 py-3 rounded-md text-sm font-semibold transition border border-white">
                            Contact Via WhatsApp
                        </button>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default AboutAndJourney;
