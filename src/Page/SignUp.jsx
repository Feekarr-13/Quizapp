import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
  const [agreeTerms, setAgreeTerms] = useState(false);
  const navigate = useNavigate();

  const handleCheckboxChange = () => {
    setAgreeTerms(!agreeTerms);
  };

  const navigateToLogin = () => {
    navigate('/login');
  };

  return (
    <>
      <div className="signup-container" data-aos="fade-up">
        <div className="signup-box">
          <h2>Create your account</h2>
          <p>Let&apos;sget get started with your 30 days free trial</p>
          
          <button type="button" className="google-signup">
            <img src="/Image/Google.png" alt="Google" /> Login with Google
          </button>

          <div className="or">or</div>

          <form>
            <label>Name*</label>
            <input type="text" placeholder="Enter your name" required />

            <label>Email*</label>
            <input type="email" placeholder="Enter your email" required />

            <label>Password*</label>
            <input type="password" placeholder="Enter your password" required />

            <div className="terms-checkbox">
              <label>
                <input type="checkbox" checked={agreeTerms} onChange={handleCheckboxChange} />
                I agree to all Terms, Privacy Policy and Fees
              </label>
            </div>

            <button type="submit" className="signup-button" disabled={!agreeTerms}>Sign Up</button>
          </form>

          <p className="login-text">
            Already have an account? <span onClick={navigateToLogin} className="login-link">Log In</span>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 - QuizApp - All rights reserved</p>
        <div className="footer-links">
          <a href="#terms">Terms</a>
          <a href="#privacy">Privacy</a>
          <a href="#sitemap">Site Map</a>
        </div>
      </div>
    </>
  );
};

export default SignUp;
