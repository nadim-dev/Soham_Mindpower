// import React, { useState } from 'react';
// import { ArrowLeft, Save, X } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';
// import SideBar from './SideBar';
// import './AddPatient.css';
// import { adminAPI } from '../../services/api';

// const AddPatient = () => {
//     const navigate = useNavigate();

//     const [formData, setFormData] = useState({
//         fullName: '',
//         location: '',
//         email: '',
//         password:"",
//         age: '',
//         gender: '',
//         contactNumber: '',
//         condition: '',
//         pastTreatments: '',
//         currentMedications: '',
//         notes: ''
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prev => ({
//             ...prev,
//             [name]: value
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         // In a real app, you would submit data here
//         const response=await adminAPI.addPatient(formData);
//         console.log("response",response);
//         // Navigate back to patients list after submission
//         // navigate('/admin/patients');
//     };

//     return (
//         <div className="add-patient-container">
//             <SideBar />

//             <div className="add-patient-content">
//                 {/* Header with Back Button */}
//                 <div className="add-patient-header">
//                     <div className="flex items-center gap-4">
//                         <button
//                             onClick={() => navigate(-1)}
//                             className="p-2 hover:bg-gray-200 rounded-full transition-colors text-gray-500 hover:text-gray-900"
//                         >
//                             <ArrowLeft size={24} />
//                         </button>
//                         <div>
//                             <h1 className="add-patient-title">Add New Patient</h1>
//                             <p className="text-gray-500 text-sm mt-1">Create a new patient record in the system</p>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Form Card */}
//                 <div className="add-patient-form-card">
//                     <form onSubmit={handleSubmit} className="p-6 md:p-8">

//                         <div className="form-grid">

//                             {/* Personal Information Section */}
//                             <div className="md:col-span-2">
//                                 <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">Personal Information</h3>
//                             </div>

//                             <div className="form-group">
//                                 <label className="form-label">Full Name</label>
//                                 <input
//                                     type="text"
//                                     name="fullName"
//                                     value={formData.fullName}
//                                     onChange={handleChange}
//                                     placeholder="e.g. Chinaza Akachi"
//                                     required
//                                     className="form-input"
//                                 />
//                             </div>

//                             <div className="form-group">
//                                 <label className="form-label">Location</label>
//                                 <input
//                                     type="text"
//                                     name="location"
//                                     value={formData.location}
//                                     onChange={handleChange}
//                                     placeholder="e.g. Mumbai, Maharashtra"
//                                     className="form-input"
//                                 />
//                             </div>

//                             <div className="form-group">
//                                 <label className="form-label">Email Address</label>
//                                 <input
//                                     type="email"
//                                     name="email"
//                                     value={formData.email}
//                                     onChange={handleChange}
//                                     placeholder="e.g. chinaza@example.com"
//                                     required
//                                     className="form-input"
//                                 />
//                             </div>

//                             <div className="form-group">
//                                 <label className="form-label">Password</label>
//                                 <input
//                                     type="text"
//                                     name="password"
//                                     value={formData.password}
//                                     onChange={handleChange}
//                                     placeholder="e.g. chinaza@example.com"
//                                     required
//                                     className="form-input"
//                                 />
//                             </div>

//                             <div className="form-group">
//                                 <label className="form-label">Contact Number</label>
//                                 <input
//                                     type="tel"
//                                     name="contactNumber"
//                                     value={formData.contactNumber}
//                                     onChange={handleChange}
//                                     placeholder="e.g. +91 98765 43210"
//                                     required
//                                     className="form-input"
//                                 />
//                             </div>

//                             <div className="form-group">
//                                 <label className="form-label">Age</label>
//                                 <input
//                                     type="number"
//                                     name="age"
//                                     value={formData.age}
//                                     onChange={handleChange}
//                                     placeholder="e.g. 29"
//                                     className="form-input"
//                                 />
//                             </div>

//                             <div className="form-group">
//                                 <label className="form-label">Gender</label>
//                                 <select
//                                     name="gender"
//                                     value={formData.gender}
//                                     onChange={handleChange}
//                                     className="form-input"
//                                 >
//                                     <option value="">Select Gender</option>
//                                     <option value="Female">Female</option>
//                                     <option value="Male">Male</option>
//                                     <option value="Other">Other</option>
//                                 </select>
//                             </div>

//                             {/* Medical Information Section */}
//                             <div className="md:col-span-2 mt-4">
//                                 <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">Medical Information</h3>
//                             </div>

//                             <div className="form-group md:col-span-2">
//                                 <label className="form-label">Mental Health Condition</label>
//                                 <input
//                                     type="text"
//                                     name="condition"
//                                     value={formData.condition}
//                                     onChange={handleChange}
//                                     placeholder="e.g. Post-Traumatic Stress Disorder"
//                                     className="form-input"
//                                 />
//                             </div>

//                             <div className="form-group md:col-span-2">
//                                 <label className="form-label">Past Treatments</label>
//                                 <textarea
//                                     name="pastTreatments"
//                                     value={formData.pastTreatments}
//                                     onChange={handleChange}
//                                     rows="2"
//                                     placeholder="e.g. Group Therapy, EMDR"
//                                     className="form-textarea"
//                                 ></textarea>
//                             </div>

//                             <div className="form-group md:col-span-2">
//                                 <label className="form-label">Current Medications</label>
//                                 <textarea
//                                     name="currentMedications"
//                                     value={formData.currentMedications}
//                                     onChange={handleChange}
//                                     rows="2"
//                                     placeholder="e.g. Paroxetine 20mg"
//                                     className="form-textarea"
//                                 ></textarea>
//                             </div>

//                             <div className="form-group md:col-span-2">
//                                 <label className="form-label">Additional Notes</label>
//                                 <textarea
//                                     name="notes"
//                                     value={formData.notes}
//                                     onChange={handleChange}
//                                     rows="3"
//                                     placeholder="Any other relevant details..."
//                                     className="form-textarea"
//                                 ></textarea>
//                             </div>
//                         </div>

//                         {/* Actions */}
//                         <div className="form-actions">
//                             <button
//                                 type="button"
//                                 onClick={() => navigate(-1)}
//                                 className="btn-cancel"
//                             >
//                                 Cancel
//                             </button>
//                             <button
//                                 type="submit"
//                                 className="btn-submit flex items-center gap-2"
//                             >
//                                 <Save size={18} />
//                                 Save Patient
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AddPatient;


import React, { useState } from "react";
import { ArrowLeft, Save } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SideBar from "./SideBar";
import "./AddPatient.css";
import { adminAPI } from "../../services/api";

const AddPatient = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    password: "",
    contact_number: "",
    age: "",
    gender: "",
    location: "",
    mental_health_condition: "",
    past_treatments: "",
    current_medications: "",
    additional_notes: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await adminAPI.addPatient(formData);
      alert("Patient created successfully");
      navigate("/admin/patients"); // change if route differs
    } catch (err) {
      setError(
        err.response?.data?.message || "Failed to create patient"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-patient-container">
      <SideBar />

      <div className="add-patient-content">
        {/* Header */}
        <div className="add-patient-header">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate(-1)}
              className="p-2 hover:bg-gray-200 rounded-full"
            >
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="add-patient-title">Add New Patient</h1>
              <p className="text-gray-500 text-sm">
                Create a new patient record
              </p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="add-patient-form-card">
          <form onSubmit={handleSubmit} className="p-6 md:p-8">
            {error && (
              <p className="text-red-600 mb-4 font-medium">{error}</p>
            )}

            <div className="form-grid">
              {/* Personal Info */}
              <div className="md:col-span-2">
                <h3 className="section-title">Personal Information</h3>
              </div>

              <input
                type="text"
                name="full_name"
                placeholder="Full Name"
                value={formData.full_name}
                onChange={handleChange}
                required
                className="form-input"
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
              />

              <input
                type="text"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
                className="form-input"
              />

              <input
                type="tel"
                name="contact_number"
                placeholder="Contact Number"
                value={formData.contact_number}
                onChange={handleChange}
                className="form-input"
              />

              <input
                type="number"
                name="age"
                placeholder="Age"
                value={formData.age}
                onChange={handleChange}
                className="form-input"
              />

              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="form-input"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>

              <input
                type="text"
                name="location"
                placeholder="Location"
                value={formData.location}
                onChange={handleChange}
                className="form-input"
              />

              {/* Medical Info */}
              <div className="md:col-span-2 mt-6">
                <h3 className="section-title">Medical Information</h3>
              </div>

              <input
                type="text"
                name="mental_health_condition"
                placeholder="Mental Health Condition"
                value={formData.mental_health_condition}
                onChange={handleChange}
                className="form-input md:col-span-2"
              />

              <textarea
                name="past_treatments"
                placeholder="Past Treatments"
                value={formData.past_treatments}
                onChange={handleChange}
                rows="2"
                className="form-textarea md:col-span-2"
              />

              <textarea
                name="current_medications"
                placeholder="Current Medications"
                value={formData.current_medications}
                onChange={handleChange}
                rows="2"
                className="form-textarea md:col-span-2"
              />

              <textarea
                name="additional_notes"
                placeholder="Additional Notes"
                value={formData.additional_notes}
                onChange={handleChange}
                rows="3"
                className="form-textarea md:col-span-2"
              />
            </div>

            {/* Actions */}
            <div className="form-actions">
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="btn-cancel"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={loading}
                className="btn-submit flex items-center gap-2"
              >
                <Save size={18} />
                {loading ? "Saving..." : "Save Patient"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPatient;

