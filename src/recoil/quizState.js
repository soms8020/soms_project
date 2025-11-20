import { atom, selector } from 'recoil';
import { calculateMBTI } from '../utils/calculateMBTI';

// 현재 질문 인덱스
export const currentQuestionState = atom({
  key: 'currentQuestionState',
  default: 0,
});

// 사용자 답변들
export const answersState = atom({
  key: 'answersState',
  default: [],
});

// 퀴즈 진행 상태
export const quizProgressState = atom({
  key: 'quizProgressState',
  default: 'home', // 'home', 'quiz', 'result'
});

// 선택된 카드 (애니메이션용)
export const selectedCardState = atom({
  key: 'selectedCardState',
  default: null,
});

// MBTI 결과 계산
export const mbtiResultState = selector({
  key: 'mbtiResultState',
  get: ({ get }) => {
    const answers = get(answersState);
    return calculateMBTI(answers);
  },
});