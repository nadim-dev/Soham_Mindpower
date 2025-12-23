import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" }
  ];

  return (
    <header className="navbar-container">
      <div className="navbar-inner">

        {/* Logo */}
        <div className="navbar-logo" onClick={() => navigate("/")}>
          Sohaam Mindpower
        </div>

        {/* Desktop Menu */}
        <nav className="navbar-links">
          {navItems.map((item) => (
            <button
              key={item.href}
              className={`nav-link ${location.pathname === item.href ? "active" : ""
                }`}
              onClick={() => navigate(item.href)}
            >
              {item.label}
            </button>
          ))}

          <div className="navbar-cta">
            <button className="btn-outline" onClick={() => navigate("/login")}>
              Login
            </button>
            <button className="btn-primary" onClick={() => navigate("/admin-login")}>
              Admin Login
            </button>
          </div>
        </nav>

        {/* Mobile Icons (Login + Hamburger) */}
        <div className="navbar-mobile-icons">
          <button className="btn-outline-sm" onClick={() => navigate("/login")}>
            Login
          </button>
          <button className="btn-primary-sm" onClick={() => navigate("/admin-login")}>
            Admin
          </button>

          <button className="hamburger" onClick={() => setOpen(!open)}>
            {open ? "✖" : "☰"}
          </button>
        </div>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="mobile-menu">
          {navItems.map((item) => (
            <button
              key={item.href}
              className="mobile-link"
              onClick={() => {
                navigate(item.href);
                setOpen(false);
              }}
            >
              {item.label}
            </button>
          ))}

          <div className="mobile-cta">
            <button className="btn-outline" onClick={() => navigate("/login")}>
              Login
            </button>
            <button className="btn-primary" onClick={() => navigate("/admin-login")}>
              Admin Login
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
