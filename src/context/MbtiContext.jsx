import React, { createContext, useContext, useState, useCallback } from 'react';
import { questions } from '../data/questions';

const MbtiContext = createContext();

export const useMbti = () => {
  const context = useContext(MbtiContext);
  if (!context) {
    throw new Error('useMbti must be used within MbtiProvider');
  }
  return context;
};

export const MbtiProvider = ({ children }) => {
  const [answers, setAnswers] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [result, setResult] = useState(null);
  const [isTestStarted, setIsTestStarted] = useState(false);

  const startTest = useCallback(() => {
    setAnswers({});
    setCurrentQuestionIndex(0);
    setResult(null);
    setIsTestStarted(true);
  }, []);

  const submitAnswer = useCallback((questionId, answerType) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answerType
    }));
  }, []);

  const nextQuestion = useCallback(() => {
    setCurrentQuestionIndex(prev => prev + 1);
  }, []);

  const calculateResult = useCallback(() => {
    const scores = {
      E: 0, I: 0,
      N: 0, S: 0,
      F: 0, T: 0,
      J: 0, P: 0
    };

    // 각 답변을 바탕으로 점수 계산
    Object.values(answers).forEach(answerType => {
      if (answerType && scores[answerType] !== undefined) {
        scores[answerType]++;
      }
    });

    // MBTI 유형 결정
    const mbtiType = 
      (scores.E >= scores.I ? 'E' : 'I') +
      (scores.N >= scores.S ? 'N' : 'S') +
      (scores.F >= scores.T ? 'F' : 'T') +
      (scores.J >= scores.P ? 'J' : 'P');

    setResult(mbtiType);
    return mbtiType;
  }, [answers]);

  const resetTest = useCallback(() => {
    setAnswers({});
    setCurrentQuestionIndex(0);
    setResult(null);
    setIsTestStarted(false);
  }, []);

  const value = {
    questions,
    answers,
    currentQuestionIndex,
    result,
    isTestStarted,
    startTest,
    submitAnswer,
    nextQuestion,
    calculateResult,
    resetTest
  };

  return (
    <MbtiContext.Provider value={value}>
      {children}
    </MbtiContext.Provider>
  );
};

