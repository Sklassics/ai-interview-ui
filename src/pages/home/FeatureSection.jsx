import React from "react";

const FeatureSection = () => {
  return (
    <div className="feature-container">
      {/* Left Section */}
              <div className="feature-left">
        <h1 className="feature-number">10x</h1>
        <h2 className="feature-title">
          More Candidates Interviewed and Assessed
        </h2>
        <p className="feature-text">
          Never miss a top performer. Uncover skill gaps and build <br></br>
          a culture of accountability across your organization.
        </p>
        <button className="main-button"><a href='/book-demo'>Book a demo</a></button>

      </div>

      {/* Right Section */}
      <div className="feature-right">
        <div className="feature-stat">
          <h1 className="feature-number">10%</h1>
          <h2 className="feature-title">Interviews on Auto-Pilot</h2>
          <p className="feature-text">
            Drastically reduce the time spent on interviews and assessments
            while enhancing consistency and efficiency.
          </p>
       </div>

        {/* Image */}
        <img
          src="https://cdn.prod.website-files.com/676698cb172848529c42152b/677df7fd15bf23d9b84db0a9_Feature_Stats%20(1)%20(1)-p-800.png" // Replace with your image path
          alt="Interview Efficiency"
          className="feature-image"
        />
      </div>
    </div>
  );
};

export default FeatureSection;