import React from "react";
import "./Expertise.css"; 

const expertiseItems = [
  {
    title: "Life Coaching",
    description:
      "Partnership where a coach helps clients achieve personal and professional growth by clarifying goals and creating strategies.",
  },
  {
    title: "Hypnotherapy",
    description:
      "Used to address anxiety, phobias, and behavior patterns like smoking and stress.",
  },
  {
    title: "Mind Training",
    description:
      "Exercises that build memory, focus, and problem-solving skills.",
  },
  {
    title: "Acupressure",
    description:
      "Ancient therapy that uses pressure points for healing without needles.",
  },
];

function Expertise() {
  return (
    <section className="expertise-section">
      <div className="expertise-container">

        <h2 className="expertise-title">Our Expertise</h2>

        <div className="expertise-grid">
          {expertiseItems.map((item) => (
            <div key={item.title} className="expertise-card">
              <h3 className="card-title">{item.title}</h3>
              <p className="card-desc">{item.description}</p>
            </div>
          ))}
        </div>

        <button className="btn-outline-blue">See More</button>
      </div>
    </section>
  );
}

export default Expertise;
