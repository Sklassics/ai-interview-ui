import React, { useState } from "react";

export default function HeroSection() {
  const blogItems = [
    {
      src: "https://cdn.prod.website-files.com/6769725c38196dbca0f8b3f9/67e65c5fb9a4b8e9c697ac2d_Panel%20Interview-p-500.webp",
      alt: "Panel Interview",
      title: "Panel Interview",
      summary:
        "What Is a Panel Interview? Advantages, Challenges, and Best Practices",
      description:
        "Discover what a panel interview is, its benefits, challenges, and best practices to streamline hiring and ensure fair evaluation.",
    },
    {
     src: "https://cdn.prod.website-files.com/6769725c38196dbca0f8b3f9/67e659cd13d81b1d5e17e908_Interview%20Scorecard-p-500.webp",  
      alt: "Interview Scorecard",
      title: "Interview Scorecard",
      summary: "The Ultimate Guide to Interview Scorecards (With Free Template)",
      description:
        "Learn how interview scorecards improve hiring by ensuring fair, consistent, and data-driven candidate evaluations. Free template!",
    },
    {
      src: "https://cdn.prod.website-files.com/6769725c38196dbca0f8b3f9/67e6597c045c1b3c8eb02892_Recruitment%20ROI-p-800.webp",
      alt: "Recruitment ROI",
      title: "Recruitment ROI",
      summary: "How to Measure and Improve Your Recruitment ROI",
      description:
        "Learn how to measure and improve recruitment ROI with key metrics, calculation methods, and strategies for better hiring results.",
    },
    {
      src: "https://cdn.prod.website-files.com/6769725c38196dbca0f8b3f9/67d907fe790ad3a6a51b57a5_Cost%20per%20Hire-p-500.webp",
      alt: "Cost pre Hire",
      title: "Cost pre Hire",
      summary: "Cost per Hire: Calculate, Compare Averages, and Improve Hiring",
      description:
        "Learn how to calculate cost per hire, compare industry averages, and optimize hiring expenses without compromising quality.",
    },
    {
      src: "https://cdn.prod.website-files.com/6769725c38196dbca0f8b3f9/67d9043e81cee468d2a4304a_Time%20to%20Hire-p-500.webp",
      alt: "Time to Hire",
      title: "Time to Hire",
      summary: "Time to Hire vs Time to Fill: Definition, Formula, and How to Improve Hiring Speed",
      description:
        "Learn the key differences between time to hire and time to fill, how to calculate them, and strategies to improve hiring speed.",
    },
    {
      src: "https://cdn.prod.website-files.com/6769725c38196dbca0f8b3f9/67d41d7921bd5e52bf98dbaf_Personality%20Interview-p-800.webp",
      alt: "Personality Interview Questions",
      title: "Personality Interview Questions",
      summary: "30+ Personality Interview Questions and What to Expect in Candidate’s Responses",
      description:
        "Discover 30+ personality interview questions to assess candidates beyond technical skills and identify the perfect cultural fit.",
    },
    {
      src: "https://cdn.prod.website-files.com/6769725c38196dbca0f8b3f9/67ce7d88d7c19909cc1705ca_KitaHQ%20-%20Cover%20Blog%20part%202-07-p-500.webp",
      alt: "How to Hire Employees",
      title: "How to Hire Employees",
      summary: "How to Hire Employees: A Step-by-Step Guide",
      description:
        "Learn a step-by-step guide to the best way to hire employees by defining roles, sourcing talent, evaluating, and making offers.",
    },
    {
      src: "https://cdn.prod.website-files.com/6769725c38196dbca0f8b3f9/67c8e8f60b58354b5fa16a3d_KitaHQ%20-%20Cover%20Blog%20part%202-08-p-500.webp",
      alt: "Interview Invitation Email",
      title: "Interview Invitation Email",
      summary: "15+ Interview Invitation Email Template to Improve Candidate Experience",
      description:
        "Explore our interview invitation email templates for various scenarios. Personalize them to match your brand voice and streamline your hiring process.",
    },
    {
      src: "https://cdn.prod.website-files.com/6769725c38196dbca0f8b3f9/67c668bad8b7dcdf2e0d9c24_KitaHQ%20-%20Cover%20Blog%20part%202-05-p-500.webp",
      alt: "Employee Engagement software",
      title: "Employee Engagement software",
      summary: "Top 20+ Employee Engagement Software to Enhance Workplace Productivity",
      description:
        "Discover the top employee engagement software to boost productivity, enhance morale, and create a positive workplace culture.",
    },
    {
      src: "https://cdn.prod.website-files.com/6769725c38196dbca0f8b3f9/67a427668f4c3819845acf7e_Informational%20Interview-p-800.webp",
      alt: "Informational Interview",
      title: "Informational Interview",
      summary: "Informational Interview: Definition, Benefits, and Key Questions to Ask",
      description:
      "Discover the power of informational interviews. Learn their benefits, key questions to ask, and how they can guide your career growth and networking success.",  
    },
    {
      src: "https://cdn.prod.website-files.com/6769725c38196dbca0f8b3f9/67a09f7676c337d94fbb740f_Hard%20Interview%20Questions-p-800.webp",
      alt: "Hard Interview Question",
      title: "Hard Interview Question",
      summary: "20 Hard Interview Questions to Ask Candidates (For Employers)",
      description:
      "Discover 20 effective hard interview questions to uncover deeper skills and qualities to ensure you find the best candidates who fit your organization’s needs.",
    },
    {
      src: "https://cdn.prod.website-files.com/6769725c38196dbca0f8b3f9/67a09ce810ddc06f4fc42ebc_Interviewing%20Techniques-p-800.webp",
      alt: "Interviewing Techniques",
      title: "Interviewing Techniques",
      summary: "10 Most Effective Interviewing Techniques for Employers",
      description:
       "Discover types of interviews and effective interview techniques along with question strategies to assess candidates and improve hiring decisions.",
    }
  ];
  const [viewAll, setViewAll] = useState(false);
  const [page, setPage] = useState(0);
  const cardsPerPage = 9;
  const totalPages = Math.ceil(blogItems.length / cardsPerPage);

  const handleViewAll = () => {
    setViewAll(true);
    setPage(0);
  };

  const handleNext = () => {
    if (page < totalPages - 1) setPage((prev) => prev + 1);
  };

  const handlePrevious = () => {
    if (page > 0) setPage((prev) => prev - 1);
  };

  let visibleCards = [];

  if (viewAll) {
    const startIndex = page * cardsPerPage;
    visibleCards = blogItems.slice(startIndex, startIndex + cardsPerPage);
  } else {
    visibleCards = blogItems.slice(0, 3);
  }

  return (
    <>
      

      <section className="info-section">
        {visibleCards.map((item, index) => (
          <div className="info-card" key={index}>
            <img src={item.src} alt={item.alt} />
            <h2>{item.title}</h2>
            <p className="summary">{item.summary}</p>
            <p className="description">{item.description}</p>
          </div>
        ))}
      </section>

      <div className="view-all">
        {!viewAll && (
          <button className="screen-btn" onClick={handleViewAll}>
            View All
          </button>
        )}

        {viewAll && (
          <div className="pagination-controls">
            {page > 0 && (
              <button className="screen-btn" onClick={handlePrevious}>
                Previous
              </button>
            )}
            {page < totalPages - 1 && (
              <button className="screen-btn" onClick={handleNext}>
                Next
              </button>
            )}
          </div>
        )}
      </div>
    </>
  );
}

