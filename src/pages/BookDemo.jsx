import React from 'react';


const BookDemo = () => {
  return (
    <div className="book-demo-container">
      <div className="left-text">
        <img src="https://sklassics.com/wp-content/uploads/2024/06/Sklassics.png" alt="log" />
        <h1>Interview your candidates 10x faster with AI video interviews</h1>
        <p>Schedule a 20-minute product demo with expert Q&A.</p>
      </div>
      <form className="demo-form">
        <input type="email" placeholder="Work Email" required />
        <input type="text" placeholder="Full Name" required />
        <input type="text" placeholder="Company Name" required />
        <input type="text" placeholder="Job Title" required />
        <input type="tel" placeholder="Phone Number" required />
        <select required>
          <option value="">How did you hear about us?</option>
          <option value="linkedin">LinkedIn</option>
          <option value="google">Google</option>
          <option value="friend">Referral</option>
        </select>
        <div>
          <input type="checkbox" required />
          <label> I'm not a robot</label>
        </div>
        <button type="submit">Book a Demo</button>
      </form>
    </div>
  );
};

export default BookDemo;
