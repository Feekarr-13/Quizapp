import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  // Toggle untuk visibilitas password
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Callback untuk menangani respons login Google
  const handleGoogleCallback = (response) => {
    if (response.credential) {
      console.log("Google Login Token:", response.credential);
      // Kirim token ke backend untuk diverifikasi
      // Contoh: Kirim ke server menggunakan fetch atau axios
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
          text: "signin_with",
          shape: "rectangular",
        }
      );
    } else {
      console.error("Google Sign-In library gagal dimuat.");
    }
  }, []);

  return (
    <div className="page-container" data-aos="fade-up">
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

            {/* Google Sign-In Button */}
            <div id="google-signin-container"></div>

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
