
import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Login from './components/Login';
import AdminLogin from './components/AdminLogin';
import SignIn from './components/SignIn';
import PatientEnq from './components/admin-panel/PatientEnq';
import AddQA from './components/admin-panel/AddQA';
import DoctorDashboard from './components/DoctorDashboard';
import Patients from './components/Patient/Patients';
import PatientDetails from './components/Patient/PatientDetails';
import PatientProfile from './components/Patient/PatientProfile';
import AssessmentIntro from './components/Questions/AssessmentIntro';
import LanguagePreference from './components/Questions/LanguagePreference';
import BeginExam from './components/Questions/BeginExam';
import PatientDashboard from './components/Patient/PatientDashboard';
import PatientVideo from './components/Patient/PatientVideo';
import PatientPayment from './components/Patient/PatientPayment';
import PatientNotifications from './components/Patient/PatientNotifications';
import TestCompletion from './components/Questions/TestCompletion';
import AdminPayments from './components/admin-panel/AdminPayments';
import Settings from './components/admin-panel/Settings';
import PatientDetailAdmin from './components/admin-panel/PatientDetailAdmin';
import Appointment from './components/admin-panel/Appointment';
import VideoForm from './components/admin-panel/VideoForm';
import AddPatient from './components/admin-panel/AddPatient';
import BookAppointment from './components/Patient/BookAppointment';


function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');
  const isDashboardRoute = location.pathname === '/dashboard' || location.pathname === '/patients';
  const isQuestionRoute = location.pathname.startsWith('/questions');
  const isAuthRoute = location.pathname === '/login' || location.pathname === '/admin-login' || location.pathname === '/signin';
  const isPatientRoute = location.pathname.startsWith('/patient') || location.pathname === '/patient-profile';
  // Added patient profile explicitly since it's outside /patient prefix often
  const shouldHideNavbarFooter = isAdminRoute || isDashboardRoute || isQuestionRoute || isAuthRoute || isPatientRoute;

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="App bg-white text-black font-inter min-h-screen flex flex-col">
      {!shouldHideNavbarFooter && <Navbar />}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/signin" element={<SignIn />} /> {/* Kept if needed, otherwise can remove */}
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin/patient-enquiries" element={<PatientEnq />} />
          <Route path="/admin/dashboard" element={<DoctorDashboard />} />
          <Route path="/admin/patients" element={<Patients />} />
          <Route path="/admin/patient-details" element={<PatientDetails />} />
          <Route path="/admin/add-qa" element={<AddQA />} />
          <Route path="/admin/payments" element={<AdminPayments />} />
          <Route path="/admin/settings" element={<Settings />} />
          <Route path="/admin/patient-detail/:id" element={<PatientDetailAdmin />} />
          <Route path="/patient-profile" element={<PatientProfile />} />
          <Route path="/patient/dashboard" element={<PatientDashboard />} />
          <Route path="/patient/video" element={<PatientVideo />} />
          <Route path="/patient/payments" element={<PatientPayment />} />
          <Route path="/patient/notifications" element={<PatientNotifications />} />
          <Route path="/questions/test-completion" element={<TestCompletion />} />
          <Route path="/questions/language-preference" element={<LanguagePreference />} />
          <Route path="/questions/intro" element={<AssessmentIntro />} />
          <Route path="/questions/begin-exam" element={<BeginExam />} />
          <Route path="/patient/book-appointment" element={<BookAppointment />} />
          <Route path="/admin/appointment" element={<Appointment />} />
          <Route path="/admin/videoform" element={<VideoForm />} />
          <Route path="/admin/add-patient" element={<AddPatient />} />
        </Routes>
      </div>
      {!shouldHideNavbarFooter && <Footer />}
    </div>
  );
}

export default App;
