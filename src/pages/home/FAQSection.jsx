import React, { useState } from "react";
import {
  FaQuestionCircle,
  FaLock,
  FaRobot,
  FaUserShield,
  FaHeart,
} from "react-icons/fa";


const faqs = [
  {
    id: 1,
    icon: <FaQuestionCircle />,
    question: "How long does a typical AI interview or assessment take?",
    answer:
      "Our AI sessions typically run between 15 and 30 minutes. Whether it's a screening interview or a training/skill assessment, candidates can complete the session at a time that suits them—making the process both efficient and convenient.",
  },
  {
    id: 2,
    icon: <FaLock />,
    question: "Is it fair to evaluate candidates using AI?",
    answer:
      "Absolutely. Our AI enhances fairness by asking every candidate the same structured questions and evaluating them in a consistent manner. This minimizes unconscious bias while ensuring that your team makes the final decision based on objective, data-driven insights.",
  },
  {
    id: 3,
    icon: <FaRobot />,
    question: "What types of roles can benefit from this system?",
    answer:
      "Our AI solution is versatile and effective across a wide range of roles—from sales and customer service to campus recruitment, blue-collar positions, and technical roles. It also adapts seamlessly for training and skill assessments by customizing questions and evaluation criteria to suit your industry and job requirements.",
  },
  {
    id: 4,
    icon: <FaUserShield />,
    question: "How secure is the interview and assessment data?",
    answer:
      "We store your data in secure, enterprise-grade data centers with multiple layers of physical and virtual security controls. All data is encrypted at rest using AES-256 and in transit via TLS, ensuring confidentiality. Access is tightly controlled through role-based permissions and multi-factor authentication.",
  },
  {
    id: 5,
    icon: <FaHeart />,
    question: "What support do candidates receive during the process?",
    answer:
      "Candidates receive clear instructions from start to finish. The interface is intuitive and user-friendly, and we provide technical support if needed. Most candidates report finding the experience professional and comfortable.",
  },
];

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <>
    <div className="faq-container" style={{ display: "flex", flexWrap: "wrap", gap: "2rem", padding: "2rem" }}>
      {/* Left Side: FAQs */}
      <div className="left-container" style={{ flex: 1, minWidth: "300px" }}>
        <div className="faq-content" style={{ maxWidth: "600px" }}>
          <h1 className="faq-title" style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>
            Frequently Asked <span style={{ color: "#007bff" }}>Questions</span>
          </h1>

          <div className="faq-list" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className={`faq-item ${openFAQ === faq.id ? "open" : ""}`}
                onClick={() => toggleFAQ(faq.id)}
                style={{
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  padding: "1rem",
                  backgroundColor: openFAQ === faq.id ? "#e6f7ff" : "#f9f9f9",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                }}
              >
                <div className="faq-question" style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <span className="faq-icon" style={{ color: "#4B164C" }}>{faq.icon}</span>
                  <strong>{faq.question}</strong>
                </div>
                {openFAQ === faq.id && (
                  <p className="faq-answer" style={{ marginTop: "0.5rem" }}>{faq.answer}</p>
                )}
              </div>
            ))}
          </div>

          <button className="main-button" style={ {marginTop: "0.5rem"}}><a href='/book-demo'>Experience Smarter Hiring</a></button>

        </div>
      </div>

      {/* Right Side: Image */}
      <div className="right-container" style={{ flex: 1, minWidth: "450px" }}>
        <img
          src="	https://www.marcumllp.com/wp-content/uploads/insights-faq-cybersecurity-digital-forensics.jpg"
         alt="FAQ Illustration"
          style={{
            width: "100%",
            maxWidth: "600px",
            borderRadius: "12px",
            objectFit: "cover",
          }}
        />
      </div>
    </div>
          <section className="screen-container">
          <h1 className="screen-heading">
            Screen & Assess with Precision
            <br />
            <span>—Begin Your Digital Talent Journey</span>
          </h1>
          <p className="screen-para">
            Leverage AI-driven interviews and skill assessments for faster, more confident hiring and training. Evaluate candidate capabilities and skill in minutes.
          </p>
          <button className="main-button"><a href='/book-demo'>Book a demo</a></button>

        </section>
        </>
  );
};

export default FAQSection;
