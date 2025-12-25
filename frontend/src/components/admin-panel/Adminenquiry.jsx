import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import { Mail, Phone } from "lucide-react";
import { inquiryAPI } from "../../services/api";

const AdminEnqueryList = () => {
  const [enquiries, setEnquiries] = useState([]);
  
  useEffect(() => {
    fetchEnquiries();
  }, []);

  const fetchEnquiries = async () => {
    try {
      const res = await inquiryAPI.getAllEnquiries();
      setEnquiries(res.data);
    } catch (err) {
      console.error("Failed to fetch enquiries", err.message);
    }
  };

  return (
    <div className="flex bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen font-inter">
      <SideBar />

      <div className="flex-1 ml-0 md:ml-64 p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-indigo-900">
            Patient Enquiries
          </h1>
          <img
            src="https://ui-avatars.com/api/?name=Admin"
            className="w-10 h-10 rounded-full ring-2 ring-indigo-200"
            alt="admin"
          />
        </div>

        {/* Empty State */}
        {enquiries.length === 0 && (
          <div className="bg-white rounded-xl p-12 text-center text-gray-500 shadow-sm">
            🎉 No enquiries yet
          </div>
        )}

        {/* Enquiries List */}
        <div className="space-y-6">
          {enquiries.map((e) => (
            <div
              key={e.id}
              className="
                bg-white rounded-2xl p-6
                border border-indigo-100
                shadow-sm
                hover:shadow-lg
                hover:border-indigo-300
                transition
              "
            >
              {/* Header */}
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-indigo-900 uppercase tracking-wide">
                    {e.name}
                  </h3>

                  <div className="flex items-center gap-4 text-sm text-indigo-600 mt-2">
                    <span className="flex items-center gap-1">
                      <Mail size={14} /> {e.email}
                    </span>
                    <span className="flex items-center gap-1">
                      <Phone size={14} /> {e.phone}
                    </span>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="mt-5 bg-indigo-50 border border-indigo-100 rounded-xl p-4">
                <p className="text-gray-700 leading-relaxed">
                  {e.message}
                </p>
              </div>

              {/* Footer */}
              <div className="mt-4 flex justify-between items-center text-xs text-gray-500">
                <span>
                  Received on{" "}
                  <span className="font-medium text-gray-600">
                    {new Date(e.created_at).toLocaleString()}
                  </span>
                </span>

                <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-800 font-semibold">
                  New
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminEnqueryList;
