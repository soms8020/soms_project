import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMbti } from '../context/MbtiContext';
import styled from 'styled-components';

const QuizContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
`;

const ProgressBar = styled.div`
  width: 100%;
  max-width: 600px;
  height: 8px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  margin-bottom: 2rem;
  overflow: hidden;
`;

const ProgressFill = styled.div`
  height: 100%;
  background: white;
  border-radius: 10px;
  transition: width 0.3s ease;
  width: ${props => props.progress}%;
`;

const QuestionNumber = styled.div`
  font-size: 1rem;
  margin-bottom: 1rem;
  opacity: 0.9;
`;

const QuestionText = styled.h2`
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 3rem;
  text-align: center;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
`;

const OptionsContainer = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const OptionButton = styled.button`
  padding: 1.5rem;
  font-size: 1.125rem;
  background: ${props => props.selected ? 'white' : 'rgba(255, 255, 255, 0.2)'};
  color: ${props => props.selected ? '#667eea' : 'white'};
  border: 2px solid ${props => props.selected ? 'white' : 'rgba(255, 255, 255, 0.5)'};
  border-radius: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: left;
  backdrop-filter: blur(10px);

  &:hover {
    background: ${props => props.selected ? 'white' : 'rgba(255, 255, 255, 0.3)'};
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    padding: 1.25rem;
    font-size: 1rem;
  }
`;

const NextButton = styled.button`
  margin-top: 2rem;
  padding: 1rem 3rem;
  font-size: 1.125rem;
  font-weight: 600;
  background: white;
  color: #667eea;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  opacity: ${props => props.disabled ? 0.5 : 1};
  pointer-events: ${props => props.disabled ? 'none' : 'auto'};

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }
`;

function Quiz() {
  const navigate = useNavigate();
  const {
    questions,
    currentQuestionIndex,
    answers,
    submitAnswer,
    nextQuestion,
    calculateResult,
    isTestStarted
  } = useMbti();

  useEffect(() => {
    if (!isTestStarted) {
      navigate('/');
    }
  }, [isTestStarted, navigate]);

  const currentQuestion = questions[currentQuestionIndex];
  const currentAnswer = answers[currentQuestion.id];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  const handleOptionClick = (answerType) => {
    submitAnswer(currentQuestion.id, answerType);
  };

  const handleNext = () => {
    if (currentAnswer) {
      if (isLastQuestion) {
        calculateResult();
        navigate('/result');
      } else {
        nextQuestion();
      }
    }
  };

  if (!currentQuestion) {
    return null;
  }

  return (
    <QuizContainer>
      <ProgressBar>
        <ProgressFill progress={progress} />
      </ProgressBar>
      <QuestionNumber>
        질문 {currentQuestionIndex + 1} / {questions.length}
      </QuestionNumber>
      <QuestionText>{currentQuestion.question}</QuestionText>
      <OptionsContainer>
        <OptionButton
          selected={currentAnswer === currentQuestion.optionA.type}
          onClick={() => handleOptionClick(currentQuestion.optionA.type)}
        >
          {currentQuestion.optionA.text}
        </OptionButton>
        <OptionButton
          selected={currentAnswer === currentQuestion.optionB.type}
          onClick={() => handleOptionClick(currentQuestion.optionB.type)}
        >
          {currentQuestion.optionB.text}
        </OptionButton>
      </OptionsContainer>
      <NextButton
        onClick={handleNext}
        disabled={!currentAnswer}
      >
        {isLastQuestion ? '결과 보기' : '다음'}
      </NextButton>
    </QuizContainer>
  );
}

export default Quiz;

