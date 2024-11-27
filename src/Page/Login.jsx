import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  // Toggle untuk visibilitas password
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Callback untuk menangani respons login
  const handleLogin = (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Kirim username dan password ke backend untuk diverifikasi
    fetch("https://your-backend-domain.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Server response:", data);
        // Arahkan pengguna ke halaman quiz jika berhasil login
        if (data.success) {
          // Optionally store the authentication state
          localStorage.setItem('isLoggedIn', 'true'); // Set login state
          
          // Redirect to quiz page
          navigate('/quiz'); // Change to '/quiz' for quiz page
        } else {
          // Handle login error
          console.error("Login failed:", data.message);
          alert(data.message || "Login failed. Please try again."); // Show error message
        }
      })
      .catch((err) => {
        console.error("Error during login:", err);
        alert("An error occurred. Please try again."); // Show error message
      });
  };

  return (
    <div className="page-container" data-aos="fade-up">
      <div className="login-container">
        <div className="login-box">
          <h2>Sign in</h2>
          <p>Welcome back! Please enter your details</p>

          <form onSubmit={handleLogin}>
            <label>Username*</label>
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />

            <label>Password*</label>
            <div className="password-input">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
