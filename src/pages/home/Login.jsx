import React, { useState } from "react";

import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-container">
      <div className="login-left">
        <h2 className="login-title">Login</h2>
        <p className="login-subtitle">Enter your email below to login to your account.</p>

        <div className="login-form">
          <label>Email</label>
          <input type="email" placeholder="email@example.com" />

          <div className="password-wrapper">
            <label>Password</label>
            <div className="password-field">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
              />
              <span
                className="toggle-icon"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <div className="forgot-link">Forgot your password?</div>
          </div>

          <button className="login-button">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
