import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle, faChartBar, faChartLine, faTrophy } from '@fortawesome/free-solid-svg-icons';
import './progressSection.css';
const ProgressAndSuccess = () => {
  return (
    <div className="progress-container">
      <div className="progress-content">
        <h1>Progress and Success</h1>
        <p>
          ProProfs Quiz App adalah alat online komprehensif yang dirancang untuk
          membuat kuis, penilaian, dan ujian interaktif. Dengan antarmuka yang
          mudah digunakan, pengajar dapat membuat kuis yang menarik dan
          informatif, yang dapat memenuhi beragam gaya belajar.
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
