import React from 'react';
import './QuizOutro.css';
import { generateDeepLink, openAndroidApp } from '../../../utils/deepLink';

const QuizOutro = ({ onPress, answers }) => {
  const handleClaimAndDownload = () => {
    const deepLink = generateDeepLink(answers);
    openAndroidApp(deepLink);
    onPress?.();
  };

  return (
    <div className="outro-container">
      <div className="outro-content">
        <h2 className="outro-title">
          Thanks for taking the survey!
        </h2>
        
        <p className="outro-text">
          Before we start, here's a special offer just for today, only for you:
        </p>
        
        <p className="outro-offer">
          <span className="outro-highlight">Get 50% off</span> TradeGenius and access all our top stock picks.
        </p>
      </div>

      <button 
        className="outro-button"
        onClick={handleClaimAndDownload}
      >
        Claim & Download App
      </button>
    </div>
  );
};

export default QuizOutro; 