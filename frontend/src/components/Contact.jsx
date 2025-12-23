import React, { useState, useEffect } from 'react';
import { authAPI } from "../services/api";

const ContactUs = () => {
    const [isVisible, setIsVisible] = useState(false);
     const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      message: "",
  });

    useEffect(() => {
        setIsVisible(true);
    }, []);


  //handleChange function will run when patient type enquiry form
    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
     ...prev,[name]: value,
     }));
  };

  // this function will run when user send submit form

  const handleSubmit = async (e) => {
  e.preventDefault(); // stop page reload
 

  try {
    await authAPI.create(formData);

    alert("Enquiry sent successfully ✅");

    // reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  } catch (error) {
    console.error(error);
    alert("Failed to send enquiry ❌");
  } 
};





    return (
        <div className="w-full bg-white font-sans text-gray-900">

            {/* ================= HERO SECTION ================= */}
            <section className="relative w-full bg-gradient-to-br from-blue-600 to-indigo-700 py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
                {/* Background Decor */}
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `radial-gradient(circle at 2px 2px, white 2px, transparent 0)`,
                            backgroundSize: '32px 32px'
                        }}
                    ></div>
                </div>

                {/* Content */}
                <div
                    className={`relative z-10 max-w-4xl mx-auto text-center transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
                        Get in Touch
                    </h1>
                    <p className="text-lg md:text-xl text-blue-100 font-light max-w-2xl mx-auto leading-relaxed">
                        We’re here to help you on your journey to a better mind. Reach out to us with any questions or to schedule a session.
                    </p>
                </div>
            </section>

            {/* ================= MAIN CONTENT ================= */}
            <section className="relative -mt-16 pb-24 px-4 md:px-8">
                <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2">

                        {/* ================= LEFT COLUMN: CONTACT INFO ================= */}
                        <div className="bg-gray-50 p-6 md:p-12 lg:p-16 flex flex-col justify-center">
                            <div className="mb-10">
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Information</h2>
                                <p className="text-gray-600 leading-relaxed">
                                    We are always ready to help you. There are many ways to contact us.
                                    You may drop us a line, give us a call or send an email, choose what suits you most.
                                </p>
                            </div>

                            <div className="space-y-8">
                                {/* Email */}
                                <div className="flex items-start gap-5">
                                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mt-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                        </svg>
                                    </div>
                                    <div>
                                        <a href="mailto:contact@sohammind.com" className="text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors break-all">
                                            contact@sohammind.com
                                        </a>
                                        <p className="text-sm text-gray-400">Mail Us</p>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex items-start gap-5">
                                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mt-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-lg font-medium text-gray-900">+91 7083666699</p>
                                        <p className="text-sm text-gray-400">Call Us</p>
                                    </div>
                                </div>

                                {/* Location */}
                                <div className="flex items-start gap-5">
                                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mt-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-lg font-medium text-gray-900 leading-snug">
                                            FG06+93V Mall, Nanded City,<br /> Pune, Maharashtra 411068
                                        </p>
                                        <p className="text-sm text-gray-400 mt-1">Visit Us</p>
                                    </div>
                                </div>

                                {/* Business Hours */}
                                <div className="flex items-start gap-5">
                                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mt-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-base text-gray-900 font-medium">Mon – Sat: 10:00 AM – 6:00 PM</p>
                                        <p className="text-base text-gray-500">Sunday: Closed</p>
                                        <p className="text-sm text-gray-400 mt-1">Business Hours</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ================= RIGHT COLUMN: FORM ================= */}
                        <div className="p-6 md:p-12 lg:p-16 bg-white">
                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Send us a Message</h3>
                                <p className="text-gray-500">Fill out the form below and we'll get back to you shortly.</p>
                            </div>

                            <form onSubmit={handleSubmit}  className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="Enter your full name"
                                        name="name"
                                        value={formData.name}
                                        required
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        required
                                        onChange={handleChange}
                                        placeholder="you@example.com"
                                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        required
                                        onChange={handleChange}
                                        placeholder="+91 XXXXX XXXXX"
                                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                    <textarea
                                        placeholder="How can we help you?"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="4"
                                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none resize-y"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg px-6 py-4 rounded-lg shadow-lg shadow-blue-600/30 hover:shadow-blue-600/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </section>

            {/* ================= CTA SECTION ================= */}
            <section className="py-16 px-4 md:px-8 bg-gray-50">
                <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-r from-slate-800 to-slate-900 overflow-hidden shadow-2xl relative">
                    {/* Decorative Circles */}
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-white opacity-5 mix-blend-overlay blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-white opacity-5 mix-blend-overlay blur-3xl"></div>

                    <div className="relative z-10 px-8 py-16 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 tracking-tight">
                            Ready to prioritize your mental health?
                        </h2>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <button className="min-w-[200px] bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-blue-500/30">
                                Book a Session
                            </button>
                            <button className="min-w-[200px] bg-transparent border-2 border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white px-8 py-4 rounded-xl font-bold text-lg transition-all">
                                WhatsApp Us
                            </button>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default ContactUs;