import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle, faChartBar, faChartLine, faTrophy } from '@fortawesome/free-solid-svg-icons';
import './ProgressSection.css';
const ProgressAndSuccess = () => {
  return (
    <div className="progress-container"data-aos="fade-up">
      <div className="progress-content">
        <h1>Progress and Success</h1>
        <p>
        Quizapp Merupakan platform kuis online yang menggabungkan kesenangan dengan pembelajaran. Kami percaya bahwa kuis adalah cara yang efektif untuk menguji pengetahuan, meningkatkan retensi informasi, dan membangun komunitas. Dengan budaya pop hingga olahraga, kami menyediakan pengalaman belajar yang menyenangkan dan interaksi bagi semua orang.
        </p>
      </div>
      <div className="progress-stats">
        <div className="stat-item">
          <div className="stat-icon">
            <FontAwesomeIcon icon={faQuestionCircle} />
          </div>
          <div className="stat-text">
            <h3>100+</h3>
            <p>Quizzes</p>
          </div>
        </div>
        <div className="stat-item">
          <div className="stat-icon">
            <FontAwesomeIcon icon={faChartBar} />
          </div>
          <div className="stat-text">
            <h3>300+</h3>
            <p>Players</p>
          </div>
        </div>
        <div className="stat-item">
          <div className="stat-icon">
            <FontAwesomeIcon icon={faChartLine} />
          </div>
          <div className="stat-text">
            <h3>80%</h3>
            <p>Engagement</p>
          </div>
        </div>
        <div className="stat-item">
          <div className="stat-icon">
            <FontAwesomeIcon icon={faTrophy} />
          </div>
          <div className="stat-text">
            <h3>60+</h3>
            <p>Challenge Winner</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressAndSuccess;
