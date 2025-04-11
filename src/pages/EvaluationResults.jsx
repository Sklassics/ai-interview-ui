import React from "react";
import "./EvaluationResults.css";

const EvaluationResults = () => {
  const scores = {
    grammar: 90,
    technical: 90,
    resume: 100,
    overall: 93,
  };

  const answers = [
    {
      question: "What is meant by the term 'Industry'?",
      yourAnswer:
        "Industry is referred to an economic activity related to production of goods...",
      correctAnswer:
        "Industry means an economic activity related to production of goods...",
    },
    {
      question: "Which are the main factors which influence the location of an industry?",
      yourAnswer:
        "The main factors which influence the location of an industry is given below...",
      correctAnswer:
        "Availability of raw materials, Transport and Communication...",
    },
    {
      question: "Which industry is often referred to as the backbone of the modern industry and why?",
      yourAnswer:
        "Iron and Steel industry is often referred to as the backbone...",
      correctAnswer:
        "Iron and steel industry is rightly referred to as the backbone...",
    },
    // Add more Q&A objects as needed
  ];

  return (
    <div className="evaluation-container">
      <h2>AI Interview & Evaluation</h2>

      <div className="score-section">
        {Object.entries(scores).map(([label, value]) => (
          <div className="score-circle" key={label}>
            <svg width="80" height="80" viewBox="0 0 36 36">
              <path
                className="circle-bg"
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="circle"
                strokeDasharray={`${value}, 100`}
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <text x="18" y="20.35" className="percentage">
                {value}%
              </text>
            </svg>
            <p>{label.replace(/^\w/, c => c.toUpperCase())} Score</p>
          </div>
        ))}
      </div>

      <div className="answers-section">
        {answers.map((item, idx) => (
          <div className="qa-block" key={idx}>
            <p><strong>Question:</strong> {item.question}</p>
            <p className="wrong-answer">
              <strong>Your Answer:</strong> {item.yourAnswer}
            </p>
            <p className="correct-answer">
              <strong>Correct Answer:</strong> {item.correctAnswer}
            </p>
          </div>
        ))}
      </div>

      <div className="button-group">
        <button className="btn-green">Download Results as PDF</button>
        <button className="btn-blue">Back</button>
      </div>
    </div>
  );
};

export default EvaluationResults;
