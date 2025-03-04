import React from 'react';
import './QuizIntro.css';

const QuizIntro = ({ title, textBold, textRegular, buttonText = 'Continue', onPress, rowGap }) => {
  return (
    <div className="intro-container" style={{ gap: rowGap }}>
      <h2 className="intro-title">{title}</h2>
      
      {textBold && (
        <p className="intro-text-bold">{textBold}</p>
      )}
      
      {textRegular && (
        <p className="intro-text-regular">{textRegular}</p>
      )}

      <button 
        className="continue-button"
        onClick={onPress}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default QuizIntro; 