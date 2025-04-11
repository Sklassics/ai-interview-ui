import React from 'react'



const Hero = () => {
  return (
    <main className="container-main"> 
      <div className="text-left">
        <h1 className="text-line">
          The Conversational AI <br /> for Interviews and Assessments
        </h1>
        <p className="text">
          Sklassics helps you eliminate endless scheduling, repetitive questions, and inconsistent evaluations—so you can focus on connecting with top talent and developing your team.
        </p>
        <button className="main-button"><a href='/book-demo'>Book a demo</a></button>
      </div>

      <div className="main-image">
     
        <img 
          src="https://framerusercontent.com/images/MqQXb3NLm7DXYsHiGjTT1IUN26g.webp" 
          alt="AI Interview Assistant"
       
        />
        <div className="text-box">
          Hi, I'm Mila. Thank you for taking the time to interview today.
        </div>
        <div className="text-box">
          Please describe a challenging situation you faced?
        </div>
      </div>
    </main>
  )
}

export default Hero;
