import { useRecoilState } from 'recoil';
import { AnimatePresence } from 'framer-motion';
import { currentQuestionState, answersState, quizProgressState } from '../recoil/quizState';
import { questions } from '../data/questions';
import QuestionCard from '../components/QuestionCard';
import ProgressBar from '../components/ProgressBar';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useRecoilState(currentQuestionState);
  const [answers, setAnswers] = useRecoilState(answersState);
  const [, setQuizProgress] = useRecoilState(quizProgressState);

  const handleCardSelect = (selectedCard) => {
    // 답변 저장
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = selectedCard;
    setAnswers(newAnswers);

    // 다음 질문으로 이동 또는 결과 페이지로
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizProgress('result');
    }
  };

  const currentQuestionData = questions[currentQuestion];

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      width: '100%',
      boxSizing: 'border-box'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '400px'
      }}>
        <ProgressBar current={currentQuestion + 1} total={questions.length} />
        
        <AnimatePresence mode="wait">
          <div key={currentQuestion}>
            {/* 질문 */}
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: 'white',
                marginBottom: '2rem',
                lineHeight: '1.5',
                wordBreak: 'keep-all'
              }}>
                {currentQuestionData.question}
              </h2>
            </div>

            {/* 카드 선택지들 */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {currentQuestionData.cards.map((card, index) => (
                <div
                  key={card.id}
                  onClick={() => handleCardSelect(card)}
                  style={{
                    background: 'rgba(255, 255, 255, 0.2)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    borderRadius: '1rem',
                    padding: '1.5rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    color: 'white'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(255, 255, 255, 0.3)';
                    e.target.style.transform = 'scale(1.02)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(255, 255, 255, 0.2)';
                    e.target.style.transform = 'scale(1)';
                  }}
                >
                  <p style={{
                    fontSize: '1.125rem',
                    fontWeight: '500',
                    textAlign: 'center',
                    lineHeight: '1.6',
                    margin: '0',
                    wordBreak: 'keep-all'
                  }}>
                    {card.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Quiz;