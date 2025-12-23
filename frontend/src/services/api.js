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
};

export default api;