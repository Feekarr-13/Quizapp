import './HeroSection.css';
import { useNavigate } from 'react-router-dom'; // Mengimpor useNavigate untuk navigasi

function HeroSection() {
  const navigate = useNavigate(); // Hook untuk navigasi

  // Fungsi untuk mengarahkan ke halaman quiz
  const startQuiz = () => {
    navigate('/quiz'); // Arahkan ke halaman quiz
  };

  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Aplikasi Quiz Berbasis Web Soal Ujian Praktis dan Efesien</h1>
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
