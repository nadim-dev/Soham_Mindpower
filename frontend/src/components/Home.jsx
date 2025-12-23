import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import heroImg from "../images/Home-Page-Top-Section.png";
import testimonialImg from "../images/testimonial-profile-img.png";
import memory1 from "../images/memory-1.png";
import memory2 from "../images/memory-2.png";
import memory3 from "../images/memory-3.png";
import memory4 from "../images/memory-4.png";
import memory5 from "../images/memory-5.png";

import DrProfile from "./DrProfile";
import OurExpertise from "./Expertise";
import TestimonialSection from "./TestimonialSection";



export default function Home() {
  const navigate = useNavigate();

  return (
    <main className="home-root">
      {/* HERO */}
      <section
        className="hero"
        style={{ backgroundImage: `url(${heroImg})` }}
        aria-label="Hero banner"
      >
        <div className="hero-inner container">
          <div className="hero-content">
            <h1 className="hero-title">Dr. Sachin Potdar</h1>
            <p className="hero-sub">
              Mind Trainer | Life Coach | Hypnotherapy Expert | Author
            </p>
            <p className="hero-quote">"Empowering Minds, Transforming Lives"</p>

            <div className="hero-ctas">
              <button className="btn btn-primary" onClick={() => navigate("/login")}>
                Book Session
              </button>
              <button className="btn btn-outline" onClick={() => navigate("/contact")}>
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </section>


      <DrProfile />
      <OurExpertise />
      <TestimonialSection />

      {/* MEMORIES */}
      <section className="memories container">
        <h2 className="memories-title">“Memories That Tell Our Story.”</h2>

        <div className="memories-grid" role="list" aria-label="Photo memories gallery">
          <div className="mem-card mem-card-large" role="listitem">
            <img src={memory1} alt="memory 1" loading="lazy" />
          </div>

          <div className="mem-card mem-card-tall" role="listitem">
            <img src={memory3} alt="memory 3" loading="lazy" />
          </div>

          <div className="mem-card mem-card-small" role="listitem">
            <img src={memory4} alt="memory 4" loading="lazy" />
          </div>

          <div className="mem-card mem-card-small" role="listitem">
            <img src={memory2} alt="memory 2" loading="lazy" />
          </div>

          <div className="mem-card mem-card-large" role="listitem">
            <img src={memory5} alt="memory 5" loading="lazy" />
          </div>
        </div>

        <div className="memories-cta">
          <button className="btn btn-outline" onClick={() => navigate("/gallery")}>
            View All
          </button>
        </div>
      </section>
    </main>
  );
}
