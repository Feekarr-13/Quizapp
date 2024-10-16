import './FeatureSection.css';

const quizzes = [
  {
    image: '/Image/quiz-1.png', // Correct image path with extension
    title: 'TO-UTBK',
    description: 'Start Now',
  },
  {
    image: '/Image/quiz-2.png', // Correct image path with extension
    title: 'Quiz SMP',
    description: 'Start Now',
  },
  {
    image: '/Image/quiz-3.png', // Correct image path with extension
    title: 'Quiz SD',
    description: 'Start Now',
  },
];


const FeatureSection = () => {
  return (
    <div className="feature-section-container">
      <div className="feature-box">
        {quizzes.map((quiz, index) => (
          <div className={`quiz-card ${index === 1 ? 'middle-card' : `card-${index + 1}`}`} key={index}>
            <img src={quiz.image} alt={quiz.title} className="quiz-image" />
            <h3>{quiz.title}</h3>
            <p>{quiz.description} <span>→</span></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
