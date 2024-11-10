import './Footer.css';

function Footer() {
  return (
    <footer className="footer"data-aos="fade-up">
      <div className="footer-container">
        <div className="footer-section logo-section">
        <div className="logo-container">
        <img src="/Image/logo1.png" alt="Quiz App Logo" className="logo" />
        <h2 className="app-title">Quiz App</h2>
      </div>

          <p>Aplikasi Quiz Berbasis Web Soal Ujian Praktis dan Efesien</p>
        </div>

        <div className="footer-section important-menu">
          <h3>Important menu</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#paket"> About</a></li>
            <li><a href="#jenjang">Progress</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section important-menu">
          <h3>Suport</h3>
          <ul>
            <li><a href="#home">Contact</a></li>
            <li><a href="#paket">Terms</a></li>
            <li><a href="#jenjang">Privacy</a></li>
            <li><a href="#contact">Site Map</a></li>
          </ul>
        </div>

        <div className="footer-section payment">
          <h3>Payment</h3>
          <img src="/Image/bsi.png" alt="BSI Logo" className="payment-logo" />
          <img src="/Image/dana.png" alt="DANA Logo" className="payment-logo" />
          <img src="/Image/link aja.png" alt="Link Aja Logo" className="payment-logo" />
        </div>

        <div className="footer-section follow-us">
          <h3>Follow Us</h3>
          <div className="social-icons">
          <a href="https://instagram.com"><img src="/Image/instagram.png" alt="Instagram" className="social-icon" /></a>
          <a href="https://facebook.com"><img src="/Image/Facebook.png" alt="Facebook" className="social-icon" /></a>
          <a href="https://telegram.org"><img src="/Image/telegram.png" alt="Telegram" className="social-icon" /></a>
          <a href="https://twitter.com"><img src="/Image/twitter.png" alt="Twitter" className="social-icon" /></a>
        </div>
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
    </footer>
  );
}

export default Footer;
