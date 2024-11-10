import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Page/HomePage'; // Impor HomePage
import Login from './Page/Login';
import SignUp from './Page/SignUp';
import './App.css';
import AboutUs from './Components/AboutUs';

function App() {
  return (
    <Router>
      <Routes>
        {/* Route untuk halaman utama */}
        <Route path="/" element={<HomePage />} /> {/* Gunakan HomePage di sini */}
        <Route path="/AboutUs" element={<AboutUs />} />

        {/* Route untuk halaman login */}
        <Route path="/Login" element={<Login />} />

        {/* Route untuk halaman sign-up */}
        <Route path="/Signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
