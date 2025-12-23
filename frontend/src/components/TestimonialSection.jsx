import React from "react";
import "./Testimonial.css";  
import { ArrowLeft, ArrowRight } from "lucide-react";
import testimonialImg from "../images/testimonial-profile-img.png";

function TestimonialSection() {
  return (
    <section className="testimonial-section">
      <div className="testimonial-container">

        {/* HEADER */}
        <div className="testimonial-header">
          <h2 className="testimonial-title">
            "Healing Stories from the Hearts We've Served."
          </h2>

          <div className="testimonial-arrows">
            <button className="arrow-btn">
              <ArrowLeft size={20} />
            </button>
            <button className="arrow-btn dark">
              <ArrowRight size={20} color="white" />
            </button>
          </div>
        </div>

        {/* CARD */}
        <div className="testimonial-card">
          <div className="testimonial-image-wrapper">
            <img src={testimonialImg} className="testimonial-img" />
          </div>

          <div className="testimonial-text-area">
            <h3 className="testimonial-name">- Rohit Kulkarni, Software Engineer</h3>
            <p className="testimonial-text">
              "Dr. Potdar helped me overcome years of performance anxiety. His
              mind-training sessions gave me clarity, focus, and the confidence I had lost."
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="testimonial-footer">
          <button className="btn-outline-blue">View All</button>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
