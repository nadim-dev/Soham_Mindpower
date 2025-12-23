import React, { useState, useEffect } from 'react';
import TestimonialSection from './TestimonialSection';
//import doctorImage from '/Images/doctor-image.png'; // Ensure you have an image at this path
//C:\Prenaya-task\prenaya-fe-project-1\src\Images\doctor-image.png
const expertiseItems = [
    {
      title: "Life Coaching",
      description:
        "Partnership where a coach helps clients achieve personal and professional growth by clarifying goals, overcoming obstacles, and creating strategies for success.",
    },
    {
      title: "Hypnotherapy",
      description:
        "To treat a wide range of issues, including anxiety, phobias, and depression, as well as behavioral problems like smoking cessation and weight loss.",
    },
    {
      title: "Mind Training",
      description:
        "Any activity that strengthens mental skills like memory, focus, and problem-solving through structured, focused exercises.",
    },
    {
      title: "Acupressure",
      description:
        "Ancient Chinese therapy, similar to acupuncture but without needles, using gentle pressure on specific points on the body.",
    },
    {
      title: "Reflex logic",
      description:
        "Any activity that strengthens mental skills like memory, focus, and problem-solving through structured, focused exercises.",
    },
    {
      title: "Acupressure",
      description:
        "Ancient Chinese therapy, similar to acupuncture but without needles, using gentle pressure on specific points on the body.",
    },
    {
        title: "Life Coaching",
        description:
          "Partnership where a coach helps clients achieve personal and professional growth by clarifying goals, overcoming obstacles, and creating strategies for success.",
      },
      {
        title: "Hypnotherapy",
        description:
          "To treat a wide range of issues, including anxiety, phobias, and depression, as well as behavioral problems like smoking cessation and weight loss.",
      },
  ];
const Services = () => {
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
                        Our expertise in Mind & Wellness
                    </h1>

                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-50 font-light tracking-wide">
                        A brief introduction to holistic range of services designed to enhance mental clarity, emotional balance and overall well-being.
                    </p>

                    <div className="mt-6 sm:mt-8 flex items-center justify-center gap-3">
                        <div className="h-px w-12 sm:w-16 md:w-20 bg-gradient-to-r from-transparent to-white"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                        <div className="h-px w-12 sm:w-16 md:w-20 bg-gradient-to-l from-transparent to-white"></div>
                    </div>
                </div>
            </section>

            {/* ================= SERVICES SECTION ================= */}
            <section className="w-full bg-white py-20">
                <div className="max-w-[1200px] mx-auto px-6 flex flex-col items-center">
                    

                    <h2 className="text-[32px] md:text-[36px] font-semibold text-black mb-12 text-center">
                    Explore Our Services
                    </h2>

                
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
                    {expertiseItems.map((item) => (
                        <div
                        key={item.title}
                        className="bg-white rounded-xl shadow-[0_10px_25px_rgba(15,23,42,0.08)] px-6 py-8 flex flex-col text-center"
                        >
                        <h3 className="text-[18px] font-semibold text-black mb-4">
                            {item.title}
                        </h3>
                        <p className="text-[14px] leading-relaxed text-[#4B5563]">
                            {item.description}
                        </p>
                        </div>
                    ))}
                    </div>

                
                    <button className="border border-[#0057B8] text-[#0057B8] rounded-md px-6 py-2.5 text-[14px] font-medium hover:bg-[#0057B8] hover:text-white transition-colors">
                    See More
                    </button>
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
                            Contact Via What’sApp
                        </button>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Services;
