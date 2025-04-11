import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [showForm, setShowForm] = useState(false);

  const handleLoginClick = () => {
    setShowForm(true);
  };

  return (
    <div className="login-container">
      {showForm ? (
        <div className="login-form">
          <h2>Login</h2>
          <p>Enter your email below to login to your account.</p>
          <form>
            <label>Email</label>
            <input type="email" placeholder="email@example.com" />

            <div className="password-field">
              <label>Password</label>
              <a href="#" className="forgot-password">Forgot your password?</a>
            </div>
            <input type="password" placeholder="Enter password" />

            <button type="submit">Login</button>
          </form>
        </div>
      ) : (
        <div className="login-button-wrap">
          <button onClick={handleLoginClick} className="open-login-button">
            Click here to Login
          </button>
        </div>
      )}

      <div className="login-image" />
    </div>
  );
};

export default Login;
