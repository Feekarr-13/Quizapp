import React, { useState } from 'react'; // Pastikan useState diimpor
import logo from '/Image/Logo.png'; // Menggunakan import untuk gambar
import './Header.css';

function Header() {
  const [selectedPaket, setSelectedPaket] = useState('');
  const [selectedJenjang, setSelectedJenjang] = useState('');

  const handlePaketChange = (event) => {
    setSelectedPaket(event.target.value);
  };

  const handleJenjangChange = (event) => {
    setSelectedJenjang(event.target.value);
  };

  return (
    <React.Fragment>
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Quiz App Logo" />
        <span className="app-name">Quiz App</span>
      </div>
      <nav className="nav">
        <a href="#home">Home</a>
        <div className="dropdown">
          <select value={selectedPaket} onChange={handlePaketChange}>
            <option value="">Paket</option>
            <option value="2x-tes">2x Tes</option>
            <option value="3x-tes">3x Tes</option>
            <option value="4x-tes">4x Tes</option>
          </select>
        </div>
        <div className="dropdown">
          <select value={selectedJenjang} onChange={handleJenjangChange}>
            <option value="">Jenjang</option>
            <option value="sd">SD</option>
            <option value="smp">SMP</option>
            <option value="sma">SMA</option>
          </select>
        </div>
        <a href="#contact">Contact</a>
      </nav>
      <div className="auth-buttons">
        <button>Login</button>
        <button>Sign In</button>
      </div>
    </header>
    </React.Fragment>
  );
}

export default Header;
