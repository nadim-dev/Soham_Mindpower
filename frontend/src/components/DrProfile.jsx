import React from "react";
import "./DrProfile.css";  
import dr_image from "../images/dr_image.jpg";

function DrProfile() {
  return (
    <section className="drprofile-section">
      <div className="drprofile-container">
        
        {/* IMAGE COLUMN */}
        <div className="drprofile-image-wrapper">
          <img src={dr_image} alt="Dr Sachin Potdar" className="drprofile-image" />
        </div>


        {/* TEXT COLUMN */}
        <div className="drprofile-text">
          <h2 className="drprofile-title">डॉ. सचिन श्रीधर पोतदार</h2>

          <p className="drprofile-para">
            डॉ. पोंतदार हे निसर्गोपचारातिन 2004 पासून विशेषज्ञ आहेत. त्यांनी दीर्घकाळ
            मन, भावना आणि ऊर्जा यांच्या अभ्यासात अनुभव घेतला आहे.
          </p>

          <p className="drprofile-para">
            Mind Transformation Specialist आहेत. अधिक जाणून घ्या Dr. Sachin Potdar बद्दल.
          </p>

          <button className="btn-outline-blue">See More</button>
        </div>

        

      </div>
    </section>
  );
}

export default DrProfile;
