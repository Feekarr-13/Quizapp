import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
  const [agreeTerms, setAgreeTerms] = useState(false);
  const navigate = useNavigate();

  // Fungsi untuk meng-handle perubahan checkbox
  const handleCheckboxChange = () => {
    setAgreeTerms(!agreeTerms);
  };

  // Fungsi untuk redirect ke halaman Login
  const navigateToLogin = () => {
    navigate('/login');
  };

  // Fungsi untuk menangani respons dari Google Sign-In
  const handleGoogleCallback = (response) => {
    if (response.credential) {
      console.log("Google Sign-In Token:", response.credential);
      // Kirim token ke server backend Anda
      fetch("https://your-backend-domain.com/auth/google", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: response.credential }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Server response:", data);
          // Arahkan pengguna ke halaman berikutnya jika berhasil login
        })
        .catch((err) => console.error("Error verifying token:", err));
    } else {
      console.error("Google Sign-In gagal, tidak ada credential.");
    }
  };

  useEffect(() => {
    const clientId = "YOUR_GOOGLE_CLIENT_ID"; // Ganti dengan Client ID dari Google Cloud Console

    // Inisialisasi Google Sign-In
    if (window.google) {
      window.google.accounts.id.initialize({
        client_id: clientId,
        callback: handleGoogleCallback, // Callback untuk menangani respons
      });

      // Render tombol Google Sign-In
      window.google.accounts.id.renderButton(
        document.getElementById("google-signin-container"),
        {
          theme: "outline",
          size: "large",
          text: "signup_with",
          shape: "rectangular",
        }
      );
    } else {
      console.error("Google Sign-In library gagal dimuat.");
    }
  }, []);

  return (
    <>
      <div className="signup-container" data-aos="fade-up">
        <div className="signup-box">
          <h2>Create your account</h2>
          <p>Let&apos;s get started with your 30 days free trial</p>

          {/* Google Sign-In Button */}
          <div id="google-signin-container"></div>

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
