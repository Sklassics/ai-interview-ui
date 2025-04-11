import React from "react";
import FeatureSection from "./FeatureSection";

const Works = () => {
  return (
    <>
    <section className="how-it-works" id="howitworks"> 

    <div className="containersk">
        {/* Left Section */}
        
        <div className="left-section">
        <h2 className="how-it-works-heading">
    How it <span>works</span>
    </h2>
         <div className="imagesk">

          <img
            className="curve-img"
            src="https://pixelplex.io/wp-content/uploads/2021/01/examples-of-ai-throughout-industries-main-1600.jpg"
            alt="Curve"
          />
          </div>
          
        </div>


        {/* Right Section - Scrollable */}
        <div className="right-section">
          {[
            {
              number: "01",
              title: "Generate Relevant Questions Effortlessly",
              description:
                "Chat with our AI to generate role-specific questions that pinpoint what matters most.",
            },
            {
              number: "02",
              title: "Invite and Eliminate Endless Scheduling",
              description:
                "Our AI automates invitations and allows candidates to complete interviews or assessments at their convenience. No more scheduling headache.",
            },
            {
              number: "03",
              title: "Put Interviews and Assessments on Auto-pilot",
              description:
                "Our AI engages candidates in 15–30 minute conversations, capturing real-time responses so you can focus on selecting top talent.",
            },
            {
              number: "04",
              title: "Evaluate and Compare Candidates with Confidence",
              description:
                "Our AI assesses candidates against your custom criteria consistently and impartially. Plus, access video recordings for a comprehensive review.",
            },
          ].map((step, index) => (
            <div className="step" key={index}>
              <h3 className="step-number">{step.number}</h3>
              <h3 className="step-title">{step.title}</h3>
              <p>{step.description}</p>
              <button className="main-button"><a href='/book-demo'>Get Started</a></button>
            </div>
          ))}
        </div>
      </div>
    </section>
    <FeatureSection />
    </>
  );
};

export default Works;
