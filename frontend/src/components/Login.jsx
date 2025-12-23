import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { authAPI } from "../services/api";
import Footer from "./Footer";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("patient");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      console.log("Login function is running");
      const response = await authAPI.login({ email, password, role });
      
      // Store token and user data
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      
      // Redirect based on role
      if (response.data.user.role === 'patient') {
        navigate('/patient/dashboard');
      } 
    } catch (error) {
      alert('Login failed: ' + (error.response?.data?.message || 'Please check your credentials'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page-container">
      {/* Top Branding (Simple Text/Logo) */}
      <header className="login-header">
        <div className="header-content">
          <h2 className="brand-logo">sohaam mindpower</h2>
          <Link to="/" className="back-home-btn">← Back to Home</Link>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="login-main">
        <div className="login-card">
          <div className="card-header">
            <h3 className="card-brand">sohaam mindpower</h3>
            <h2 className="login-title">Sign In</h2>
            <p className="login-subtitle">Access your account</p>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                id="email"
                type="email"
                placeholder="Enter your Email"
                className="form-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <div className="label-row">
                <label htmlFor="password">PASSWORD</label>
              </div>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="form-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div className="forgot-password-link">
                <a href="#">Forgot Password?</a>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="role">Login as</label>
              <select
                id="role"
                className="form-input"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="patient">Patient</option>
                <option value="admin">Admin</option>
              </select>
            </div>

            <button 
              type="submit" 
              className="login-button"
              disabled={loading}
            >
              {loading ? 'Signing In...' : 'Sign In'}
            </button>
          </form>
        </div>
      </main>

      {/* Footer Reuse */}
      <Footer />
    </div>
  );
}

export default Login;








//Saif This your code just for backup 

/*import React, { useState } from "react";
import "./Login.css";
// Import AdminLogin.css instead if we want perfect share, but rewriting Login.css is cleaner separation as per plan status.
// Actually, to ensure they are identical as requested, I will use the same structure and classes.
import { Link } from "react-router-dom";
import Footer from "./Footer";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div className="login-page-container">
      // Top Branding (Simple Text/Logo) 
      <header className="login-header">
        <div className="header-content">
          <h2 className="brand-logo">sohaam mindpower</h2>
          <Link to="/" className="back-home-btn">← Back to Home</Link>
        </div>
      </header>

      // Main Content Area 
      <main className="login-main">
        <div className="login-card">
          <div className="card-header">
            <h3 className="card-brand">sohaam mindpower</h3>
            <h2 className="login-title">Sign In</h2>
            <p className="login-subtitle">Access your account</p>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                id="email"
                type="email"
                placeholder="Enter your Email"
                className="form-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <div className="label-row">
                <label htmlFor="password">PASSWORD</label>
              </div>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="form-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div className="forgot-password-link">
                <a href="#">Forgot Password?</a>
              </div>
            </div>

            <button type="submit" className="login-button">Sign In</button>
          </form>
        </div>
      </main>

      //Footer Reuse 
      <Footer />
    </div>
  );
}

export default Login;

*/
