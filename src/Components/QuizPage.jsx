import React, { useState, useEffect } from 'react';
import questionsData from '../../data/questions.json'; // Mengimpor file JSON soal

const QuizPage = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    // Memuat soal dari file JSON
    setQuestions(questionsData);
  }, []);

  return (
    <div>
      <h1>Quiz</h1>
      {questions.length > 0 ? (
        <div>
          {questions.map((question, index) => (
            <div key={index}>
              <p>{question.question}</p>
              <ul>
                {question.options.map((option, idx) => (
                  <li key={idx}>{option}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading questions...</p>
      )}
    </div>
  );
};

export default QuizPage;
