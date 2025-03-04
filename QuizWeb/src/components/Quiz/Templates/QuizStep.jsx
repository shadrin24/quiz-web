import React from 'react';
import './QuizStep.css';

const QuizStep = ({ question, options, onSelect, selectedOption }) => {
  return (
    <div className="quiz-step">
      <div className="question-container">
        <h2 className="question-text">{question}</h2>
        
        <div className="options-container">
          {options.map((option, index) => (
            <button
              key={index}
              className={`option-button ${selectedOption === option ? 'selected' : ''}`}
              onClick={() => onSelect(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizStep; 