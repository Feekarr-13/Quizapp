import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="page-container"data-aos="fade-up">
      <div className="login-container">
        <div className="login-box">
          <h2>Sign in</h2>
          <p>Welcome back! Please enter your details</p>
          
          <form>
            <label>Email*</label>
            <input type="email" placeholder="Enter your email" required />

            <label>Password*</label>
            <div className="password-input">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              required
            />
            <span onClick={togglePasswordVisibility} className="password-toggle">
              {showPassword ? '🙈' : '👁️'}
            </span>
          </div>

            <div className="remember-forgot">
              <label>
                <input type="checkbox" />
                Remember for 30 Days
              </label>
              <a href="#">Forgot password</a>
            </div>

            <button type="submit" className="login-button">Login</button>

            <div className="or">or</div>

            <button type="button" className="google-signup">
              <img src="/Image/Google.png" alt="Google" /> Sign up with Google
            </button>

            <p className="signup-text">
              Don’t have an account? <Link to="/signup">Sign Up</Link>
            </p>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>@ 2024 - QuizApp - All rights reserved</p>
        <div className="footer-links">
          <a href="#terms">Terms</a>
          <a href="#privacy">Privacy</a>
          <a href="#sitemap">Site Map</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
