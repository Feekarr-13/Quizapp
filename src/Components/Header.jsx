import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll'; // Import dari react-scroll
import logo from '/Image/Logo.png';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Quiz App Logo" />
        <span className="app-name">Quiz App</span>
      </div>
      <nav className="nav">
        {/* Scroll link untuk section yang ada di halaman yang sama */}
        <ScrollLink to="HomePage" smooth={true} duration={50}>
          Home
        </ScrollLink>
        <ScrollLink to="AboutUs" smooth={true} duration={50}>
          About
        </ScrollLink>
        <ScrollLink to="ProgressSection" smooth={true} duration={50}>
          Progress
        </ScrollLink>
        <ScrollLink to="JoinUs" smooth={true} duration={50}>
          JoinUs
        </ScrollLink>
        <ScrollLink to="ContactUs" smooth={true} duration={50}>
          Contact
        </ScrollLink>
      </nav>
      <div className="auth-buttons">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/signup">
          <button>Sign In</button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
