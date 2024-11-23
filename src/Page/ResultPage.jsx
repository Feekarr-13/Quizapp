import "./ResultPage.css";
import PropTypes from 'prop-types'; // Correct import for PropTypes

const ResultPage = ({ totalQuestions, quizScore, workingTime, answeredQuestions, onBackToHome }) => {
  return (
    <div className="result-page">
      <h2 className="result-title">You have completed the quiz</h2>
      <p className="result-subtitle">Tes Potensi Skolastik</p>

      <div className="result-card">
        <div className="result-info">
          <div className="result-item">
            <i className="icon total-questions"></i>
            <div>
              <p className="result-value">{totalQuestions}</p>
              <p className="result-label">Total Questions</p>
            </div>
          </div>
          <div className="result-item">
            <i className="icon working-time"></i>
            <div>
              <p className="result-value">{workingTime} min</p>
              <p className="result-label">Working Time</p>
            </div>
          </div>
          <div className="result-item">
            <i className="icon quiz-score"></i>
            <div>
              <p className="result-value">{quizScore}</p>
              <p className="result-label">Quiz Score</p>
            </div>
          </div>
          <div className="result-item">
            <i className="icon answered-questions"></i>
            <div>
              <p className="result-value">{answeredQuestions}</p>
              <p className="result-label">Answered Questions</p>
            </div>
          </div>
        </div>
      </div>

      <button className="back-button" onClick={onBackToHome}>
        Back To Home
      </button>
    </div>
  );
}

// Correct PropTypes validation for the props
ResultPage.propTypes = {
  totalQuestions: PropTypes.number.isRequired,
  quizScore: PropTypes.number.isRequired,
  workingTime: PropTypes.number.isRequired,
  answeredQuestions: PropTypes.number.isRequired,
  onBackToHome: PropTypes.func.isRequired
};

export default ResultPage;
