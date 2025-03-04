import React, { useState } from 'react';
import { quizQuestions } from './quizData';
import QuizStep from './Templates/QuizStep';
import QuizIntro from './Templates/QuizIntro';
import QuizOutro from './Templates/QuizOutro';
import QuizStart from './Templates/QuizStart';
import './Quiz.css';

const Quiz = () => {
  const [currentStep, setCurrentStep] = useState(-1); // -1 для стартового экрана
  const [answers, setAnswers] = useState({});

  const generateDeepLink = (answers) => {
    const answersString = Object.entries(answers)
      .map(([id, answer]) => `q${id}=${encodeURIComponent(answer)}`)
      .join('&');
    return `tradegenius://quiz-results?${answersString}`;
  };

  const handleAnswer = (option) => {
    if (currentStep === -1) {
      setCurrentStep(0);
      return;
    }

    const currentQuestion = quizQuestions[currentStep];
    const newAnswers = { ...answers, [currentQuestion.id]: option };
    setAnswers(newAnswers);

    if (currentStep < quizQuestions.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleOutroClick = () => {
    const deeplink = generateDeepLink(answers);
    window.location.href = deeplink;
  };

  if (currentStep === -1) {
    return (
      <div className="quiz-page">
        <div className="quiz-container">
          <QuizStart onPress={() => handleAnswer('start')} />
        </div>
      </div>
    );
  }

  const currentQuestion = quizQuestions[currentStep];
  const progress = ((currentStep + 1) / quizQuestions.length) * 100;

  if (!currentQuestion) return null;

  return (
    <div className="quiz-page">
      <div className="quiz-container">
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>

        {currentQuestion.type === 'outro' ? (
          <QuizOutro onPress={handleOutroClick} />
        ) : currentQuestion.type === 'intro' ? (
          <QuizIntro
            title={currentQuestion.question}
            textBold={currentQuestion.textBold}
            textRegular={currentQuestion.textRegular}
            buttonText="Continue"
            onPress={() => handleAnswer('continue')}
            rowGap={currentQuestion.rowGap}
          />
        ) : (
          <>
            <QuizStep
              question={currentQuestion.question}
              options={currentQuestion.options}
              onSelect={handleAnswer}
              selectedOption={answers[currentQuestion.id]}
            />
            <div className="question-counter">
              Question {currentStep + 1} of {quizQuestions.length - 1}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Quiz; 