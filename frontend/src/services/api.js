import axios from 'axios';


const API_BASE_URL = 'http://localhost:5000/api';

const api = axios.create({
    baseURL: API_BASE_URL,
});

// Add auth token to requests
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export const authAPI = {
    register: (userData) => api.post('/auth/register', userData),
    login: (credentials) => api.post('/auth/login', credentials),
    create: (data) => api.post("/enquiries", data)
};

export const videoAPI = {
  getAll: () => api.get('/video'),
  getAdd: (data) => api.post('/video',data),
};

// ---------------- ADMIN ----------------
export const adminAPI = {
  addPatient: (data) => api.post("/admin/addpatient", data),
  sendNotification:(data)=> api.post("/admin/notification",data),
  getNotifications:()=>api.get("/admin/notification"),
  updatePassword:(data)=>api.post("/admin/profile",data),
};

// ----------- APPOINTMENT ----------------------

export const appointmentAPI={
   takeAppointment:(data)=> api.post("/appointment",data),
   getAllAppointments:()=>api.get("/appointment"),
   deleteAppointment: (id) => api.delete(`appointment/${id}`)
}

// --------- Chat APi --------------

export const chatApi={
   sendChat:(message)=>api.post("/chat",message),
   getChat:()=>api.get("/chat")
}


// -----------Enquiry Api ---------------

export const inquiryAPI={
  createInquery:(data)=>api.post("/enquiries",data),
  getAllEnquiries:()=>api.get("/enquiries")
}

// --------- Patient Profile --------

export const patientAPI = {
  getProfile: (id) => api.get(`/patient/profile/${id}`),
  getAppointments: (id) => api.get(`/patient/appointmenthistory/${id}`)
};


// ----------- PAYMENT API (Razorpay) ----------------

export const paymentAPI = {
  createOrder: (data) => api.post("/payments/create-order", data),
  verifyPayment: (data) => api.post("/payments/verify", data),
  getMyPayments: () => api.get("/payments/my-transactions"),
};

// ----------- RECEIPT API ----------------

export const receiptAPI = {
  downloadReceipt: (data) =>
    api.post("/payments/receipt", data, {
      responseType: "blob", // 🔴 VERY IMPORTANT
    }),
};


// ----------- QUESTION API ----------------

export const questionAPI = {
  // get all questions created by doctor
  getAll: () => api.get("/questions"),

  // create new question with options
  create: (data) => api.post("/questions", data),

  // delete question
  delete: (id) => api.delete(`/questions/${id}`),
};

// ----------- PATIENT QUESTION API ----------------

export const patientQuestionAPI = {
  // send selected questions to patient (BATCH)
  send: (data) => api.post("/patient-questions", data),
};




export default api;