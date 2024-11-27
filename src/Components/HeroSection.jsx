import './HeroSection.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

function HeroSection() {
  const navigate = useNavigate(); // Hook for navigation

  // Function to check if the user is logged in
  const isAuthenticated = () => {
    // Replace this with your actual authentication check
    return localStorage.getItem('isLoggedIn') === 'true'; // Example check
  };

  // Function to navigate to the quiz page
  const startQuiz = () => {
    if (isAuthenticated()) {
      navigate('/quiz'); // Navigate to quiz page if authenticated
    } else {
      navigate('/login'); // Redirect to login page if not authenticated
    }
  };

  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Aplikasi Quiz Berbasis Web Soal Ujian Praktis dan Efisien</h1>
        <p>Uji Kompetensi siswa jadi lebih mudah dengan fitur khusus yang sesuai dengan kebutuhan sekolah.</p>
        <button className="start-quiz-btn" onClick={startQuiz}>Start Quiz</button>
      </div>
      <div className="hero-image">
        <img src="/Image/quiz.png" alt="Quiz Illustration" />
        <div className="bars">
          <div className="bar bar-1"></div>
          <div className="bar bar-2"></div>
          <div className="bar bar-3"></div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
