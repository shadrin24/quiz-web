import React from 'react';
import './QuizStart.css';

const QuizStart = ({ onPress }) => {
  return (
    <div className="start-container">
      <div className="start-content">
        <div className="laurel-left">
          <img src="/assets/images/Vector.svg" alt="" />
        </div>
        
        <div className="start-text-content">
          <div className="badge">
            <span>#1 AI Trading Assistant</span>
            <span className="trades">500,000+ profitable trades daily</span>
          </div>

          <h1 className="main-title">
            Join 15+ Million Investors with Unlimited TradeGenius Access
          </h1>

          <p className="description">
            Unlock winning stock recommendations that outperform competitors by 300% and elevate your portfolio
          </p>
        </div>

        <div className="laurel-right">
          <img src="/assets/images/Vector.svg" alt="" />
        </div>
      </div>

      <button 
        className="start-button"
        onClick={onPress}
      >
        Continue
      </button>
    </div>
  );
};

export default QuizStart; 