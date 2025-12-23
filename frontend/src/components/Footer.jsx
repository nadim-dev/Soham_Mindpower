import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo" aria-label="Site footer">
      {/* ================= DESKTOP FOOTER ================= */}
      <div className="desktop-footer">
        <div className="footer-inner container">

          {/*Contact */}
          <div className="footer-left">
            <div className="brand-name">sohaam mindpower</div>

            <div className="contact-block">
              <div className="contact-line">
                <div className="contact-label">डॉ. सचिन श्रीधर पोतदार</div>
              </div>

              <div className="contact-line">
                <div className="contact-sub">Sohaam Mindpower Training Center</div>
              </div>

              <div className="contact-row">
                <div className="contact-icon">✉️</div>
                <div className="contact-meta">
                  <div className="contact-key">Email:</div>
                  <div className="contact-value">contact@sohammind.com</div>
                </div>
              </div>

              <div className="contact-row">
                <div className="contact-icon">📞</div>
                <div className="contact-meta">
                  <div className="contact-key">Phone:</div>
                  <div className="contact-value">+91 7083666699</div>
                </div>
              </div>

              <div className="contact-row">
                <div className="contact-icon">📍</div>
                <div className="contact-meta">
                  <div className="contact-key">Location:</div>
                  <div className="contact-value">FQ6P+39V Moll, Nanded City, Nanded, Pune, Maharashtra 411068</div>
                </div>
              </div>
            </div>
          </div>

          {/*Quick links */}
          <div className="footer-middle" aria-label="Quick links">
            <h4 className="col-title">Quick links</h4>
            <nav className="quicklinks" aria-label="Footer navigation">
              <Link to="/" className="footer-link">Home</Link>
              <Link to="/about" className="footer-link">About us</Link>
              <Link to="/services" className="footer-link">Services</Link>
              <Link to="/gallery" className="footer-link">Gallery</Link>
              <Link to="/contact" className="footer-link">Contact us</Link>
            </nav>
          </div>

          {/* Social Media*/}
          <div className="footer-right" aria-label="Follow us">
            <h4 className="col-title">Follow Us</h4>

            <div className="social-list">
              <a href="#" onClick={(e) => e.preventDefault()} className="social-item">
                <span className="social-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M22 12.07C22 6.48 17.52 2 11.93 2S2.86 6.48 2.86 12.07c0 4.99 3.65 9.13 8.43 9.89v-7H8.1v-2.9h3.2V9.01c0-3.17 1.88-4.9 4.77-4.9 1.38 0 2.83.25 2.83.25v3.1h-1.58c-1.56 0-2.04.96-2.04 1.95v2.16h3.46l-.55 2.9h-2.91v7c4.78-.76 8.43-4.9 8.43-9.89z" fill="#0F172A" /></svg></span>
                <span className="social-label">Facebook</span>
              </a>

              <a href="#" onClick={(e) => e.preventDefault()} className="social-item">
                <span className="social-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10c0-5.52-4.48-10-10-10zM18.4 8.6c.06.13.06.28.06.42 0 3.26-2.49 7.03-7.03 7.03-1.4 0-2.71-.42-3.82-1.13.2 0 .4.06.61.06 1.17 0 2.25-.4 3.11-1.07-1.09 0-2.01-.74-2.33-1.72.16.03.32.05.49.05.23 0 .47-.03.69-.09-1.14-.23-2-1.22-2-2.41v-.03c.33.18.7.3 1.1.31-.66-.44-1.09-1.18-1.09-2.02 0-.44.12-.85.33-1.2 1.22 1.5 3.05 2.48 5.12 2.58-.04-.17-.06-.34-.06-.53 0-1.3 1.05-2.35 2.35-2.35.68 0 1.29.28 1.72.74.54-.11 1.06-.3 1.52-.57-.18.56-.56 1.03-1.07 1.33.48-.06.94-.18 1.37-.36-.32.48-.73.9-1.2 1.24z" fill="#0F172A" /></svg></span>
                <span className="social-label">Instagram</span>
              </a>

              <a href="#" onClick={(e) => e.preventDefault()} className="social-item">
                <span className="social-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M22 5.92c-.7.31-1.45.52-2.24.62.81-.48 1.43-1.27 1.72-2.2-.76.45-1.6.78-2.49.96C18.26 4.37 17.1 4 15.86 4c-2.06 0-3.53 1.78-3.53 3.95 0 .31.03.61.1.9C9.8 8.69 7.07 7.4 5.12 5.02c-.34.61-.53 1.3-.53 2.05 0 1.42.68 2.68 1.71 3.42-.63-.02-1.23-.2-1.74-.49v.05c0 1.98 1.41 3.64 3.28 4.01-.35.1-.72.16-1.1.16-.26 0-.52-.02-.77-.07.52 1.68 2.03 2.9 3.82 2.94-1.39 1.1-3.14 1.77-5.03 1.77-.33 0-.66-.02-.98-.06 1.82 1.16 3.99 1.84 6.32 1.84 7.59 0 11.75-6.3 11.75-11.76 0-.18-.01-.36-.02-.54.8-.58 1.49-1.3 2.04-2.12-.73.33-1.52.56-2.34.66z" fill="#0F172A" /></svg></span>
                <span className="social-label">Twitter</span>
              </a>

              <a href="#" onClick={(e) => e.preventDefault()} className="social-item">
                <span className="social-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M20.45 20.45h-3.56v-4.05c0-.97-.02-2.22-1.35-2.22-1.35 0-1.55 1.05-1.55 2.14v4.13h-3.56V9h3.42v1.56h.05c.48-.9 1.65-1.85 3.4-1.85 3.63 0 4.3 2.39 4.3 5.49v6.8zM5.34 7.43c-1.14 0-2.06-.93-2.06-2.07 0-1.14.92-2.07 2.06-2.07 1.14 0 2.06.93 2.06 2.07 0 1.14-.92 2.07-2.06 2.07zM7.11 20.45H3.56V9h3.55v11.45z" fill="#0F172A" /></svg></span>
                <span className="social-label">LinkedIn</span>
              </a>

              <a href="#" onClick={(e) => e.preventDefault()} className="social-item">
                <span className="social-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M10 15l6-3-6-3v6z" fill="#0F172A" /></svg></span>
                <span className="social-label">YouTube</span>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom container">
          <div className="footer-bottom-inner">
            <div>© {new Date().getFullYear()} Sohaam Mindpower. All rights reserved.</div>
            <div className="small-links">
              <a href="#" onClick={(e) => e.preventDefault()}>Privacy</a>
              <a href="#" onClick={(e) => e.preventDefault()}>Terms</a>
            </div>
          </div>
        </div>
      </div>

      {/* ================= MOBILE FOOTER ================= */}
      <div className="mobile-footer">
        <div className="mobile-footer-inner container">

          {/* Top Row: Brand & Socials */}
          <div className="mf-header">
            <div className="brand-name-mobile">SOHAM MINDPOWER</div>
            <div className="mf-socials">
              {/* Simplified Social Icons row for mobile */}
              <a href="#" className="mf-social-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M22 12.07C22 6.48 17.52 2 11.93 2S2.86 6.48 2.86 12.07c0 4.99 3.65 9.13 8.43 9.89v-7H8.1v-2.9h3.2V9.01c0-3.17 1.88-4.9 4.77-4.9 1.38 0 2.83.25 2.83.25v3.1h-1.58c-1.56 0-2.04.96-2.04 1.95v2.16h3.46l-.55 2.9h-2.91v7c4.78-.76 8.43-4.9 8.43-9.89z" fill="currentColor" /></svg></a>
              <a href="#" className="mf-social-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10c0-5.52-4.48-10-10-10zM18.4 8.6c.06.13.06.28.06.42 0 3.26-2.49 7.03-7.03 7.03-1.4 0-2.71-.42-3.82-1.13.2 0 .4.06.61.06 1.17 0 2.25-.4 3.11-1.07-1.09 0-2.01-.74-2.33-1.72.16.03.32.05.49.05.23 0 .47-.03.69-.09-1.14-.23-2-1.22-2-2.41v-.03c.33.18.7.3 1.1.31-.66-.44-1.09-1.18-1.09-2.02 0-.44.12-.85.33-1.2 1.22 1.5 3.05 2.48 5.12 2.58-.04-.17-.06-.34-.06-.53 0-1.3 1.05-2.35 2.35-2.35.68 0 1.29.28 1.72.74.54-.11 1.06-.3 1.52-.57-.18.56-.56 1.03-1.07 1.33.48-.06.94-.18 1.37-.36-.32.48-.73.9-1.2 1.24z" fill="currentColor" /></svg></a>
              <a href="#" className="mf-social-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M10 15l6-3-6-3v6z" fill="currentColor" /></svg></a>
            </div>
          </div>

          {/* Links Grid */}
          <div className="mf-grid">
            <div className="mf-col">
              <h4 className="mf-col-title">CONTACT</h4>
              <div className="mf-contact-row">
                <span className="mf-contact-icon">✉️</span>
                <a href="mailto:contact@sohammind.com" className="mf-link">contact@sohammind.com</a>
              </div>
              <div className="mf-contact-row">
                <span className="mf-contact-icon">📞</span>
                <span className="mf-link">+91 7083666699</span>
              </div>
              <div className="mf-contact-row">
                <span className="mf-contact-icon">📍</span>
                <span className="mf-link">FG06+93V Mall, Nanded City, Pune 411068</span>
              </div>
            </div>

            <div className="mf-col">
              <h4 className="mf-col-title">LINKS</h4>
              <Link to="/" className="mf-link">Home</Link>
              <Link to="/about" className="mf-link">About</Link>
              <Link to="/contact" className="mf-link">Contact</Link>
              <Link to="/gallery" className="mf-link">Gallery</Link>
            </div>
          </div>



          {/* Bottom */}
          <div className="mf-bottom-icons">
            <span className="text-xs opacity-50">© 2024 Sohaam Mindpower</span>
          </div>

        </div>
      </div>
    </footer>
  );
}
