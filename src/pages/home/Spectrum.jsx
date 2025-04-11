import React from 'react';

const Spectrum = () => {
  return (
    <>
      <div className="slider-wrap">
        <div className="slider-heading">
          <h1 className="head-text">Full spectrum talent screening.</h1>
          <h3 className="card-header-center">
            Structured screening interviews and <br /> training assessments
          </h3>
          <div className="slider-description">
            <p>Help your team establish data-driven evaluation standards for rapid, high-volume hiring and assessments</p>
          </div>
        </div>
      </div>

      {/* Card Container (ROW LAYOUT) */}
      <div className="card-container">
        {/* First Card */}
        <div className="card">
          <div className="card-content">
            <h1 className="card-title">Screening Interviews</h1>
            <p className="card-paragraph">Campus recruitment, White-collar staff, Blue-collar staff</p>
            <div className="card-images">
              <img src="https://cdn.prod.website-files.com/676698cb172848529c42152b/67e68d99ba8f213a4befff96_KitaHQ%20Homepage%20Graphics%201-p-2000.png" className="card1" alt="Screening Interviews" />
            </div>
          </div>
        </div>

        {/* Second Card */}
        <div className="card">
          <div className="card-content">
            <h1 className="card-title">Training Assessments</h1>
            <p className="card-paragraph">Assess your employee, e.g., sales training, probation, and promotion evaluation</p>
            <div className="card-images">
              <img src="https://img.freepik.com/free-photo/daily-life-business-people-office_53876-47111.jpg" className="card2" alt="Training Assessments" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Spectrum;
