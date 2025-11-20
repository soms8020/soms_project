import { motion } from 'framer-motion';
import { useRecoilState, useRecoilValue } from 'recoil';
import { 
  quizProgressState, 
  currentQuestionState, 
  answersState, 
  mbtiResultState 
} from '../recoil/quizState';
import { mbtiResults } from '../utils/calculateMBTI';
import { 
  shareToFacebook, 
  shareToTwitter, 
  shareToKakao, 
  shareToLine, 
  shareToInstagram,
  shareViaWebAPI 
} from '../utils/shareUtils';

const Result = () => {
  const [, setQuizProgress] = useRecoilState(quizProgressState);
  const [, setCurrentQuestion] = useRecoilState(currentQuestionState);
  const [, setAnswers] = useRecoilState(answersState);
  const mbtiType = useRecoilValue(mbtiResultState);
  const result = mbtiResults[mbtiType];

  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setQuizProgress('home');
  };

  if (!result) return null;

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      background: 'linear-gradient(135deg, #4ECDC4 0%, #44A08D 100%)',
      width: '100%',
      boxSizing: 'border-box'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '400px'
      }}>
        <motion.div
          style={{
            background: 'white',
            borderRadius: '1.5rem',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            padding: '2rem',
            textAlign: 'center',
            width: '100%'
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* 메인 아이콘 */}
          <motion.div
            className="text-center mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 mb-4">
              {/* 하트 아이콘 */}
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center border-2 border-black">
                <div className="text-white text-2xl">💚</div>
              </div>
            </div>
          </motion.div>

          {/* MBTI 결과 */}
          <motion.div
            style={{ textAlign: 'center', marginBottom: '1.5rem' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 style={{
              fontSize: '3rem',
              fontWeight: 'bold',
              color: '#14b8a6',
              marginBottom: '1rem'
            }}>
              {mbtiType}
            </h2>
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: 'bold',
              color: '#1f2937',
              marginBottom: '1rem'
            }}>
              {result.title}
            </h3>
            <p style={{
              color: '#6b7280',
              lineHeight: '1.6',
              fontSize: '0.875rem',
              margin: '0'
            }}>
              {result.summary}
            </p>
          </motion.div>

          {/* 공유 섹션 */}
          <motion.div
            style={{
              borderTop: '1px solid #e5e7eb',
              paddingTop: '1.5rem'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h4 style={{
              textAlign: 'center',
              fontWeight: 'bold',
              color: '#1f2937',
              marginBottom: '1rem'
            }}>
              결과 공유하기
            </h4>
            
            {/* SNS 공유 버튼들 */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
              marginBottom: '1.5rem'
            }}>
              {/* Facebook */}
              <button
                onClick={() => shareToFacebook(mbtiType, result.title)}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  backgroundColor: '#1877f2',
                  color: 'white',
                  border: 'none',
                  borderRadius: '0.5rem',
                  fontSize: '0.875rem',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#166fe5';
                  e.target.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#1877f2';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                <span style={{ fontSize: '1rem' }}>📘</span>
                Facebook으로 공유하기
              </button>

              {/* Twitter */}
              <button
                onClick={() => shareToTwitter(mbtiType, result.title)}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  backgroundColor: '#1da1f2',
                  color: 'white',
                  border: 'none',
                  borderRadius: '0.5rem',
                  fontSize: '0.875rem',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#1991db';
                  e.target.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#1da1f2';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                <span style={{ fontSize: '1rem' }}>🐦</span>
                Twitter로 공유하기
              </button>

              {/* KakaoTalk */}
              <button
                onClick={() => shareToKakao(mbtiType, result.title)}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  backgroundColor: '#fee500',
                  color: '#3c1e1e',
                  border: 'none',
                  borderRadius: '0.5rem',
                  fontSize: '0.875rem',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#fdd835';
                  e.target.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#fee500';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                <span style={{ fontSize: '1rem' }}>💬</span>
                KakaoTalk으로 공유하기
              </button>

              {/* Line */}
              <button
                onClick={() => shareToLine(mbtiType, result.title)}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  backgroundColor: '#00c300',
                  color: 'white',
                  border: 'none',
                  borderRadius: '0.5rem',
                  fontSize: '0.875rem',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#00b300';
                  e.target.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#00c300';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                <span style={{ fontSize: '1rem' }}>💚</span>
                Line으로 공유하기
              </button>

              {/* Instagram */}
              <button
                onClick={() => shareToInstagram(mbtiType, result.title)}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  background: 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '0.5rem',
                  fontSize: '0.875rem',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-1px)';
                  e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                <span style={{ fontSize: '1rem' }}>📷</span>
                Instagram 스토리 공유
              </button>

              {/* 기타 공유 (Web Share API) */}
              <button
                onClick={() => shareViaWebAPI(mbtiType, result.title)}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  backgroundColor: '#6b7280',
                  color: 'white',
                  border: 'none',
                  borderRadius: '0.5rem',
                  fontSize: '0.875rem',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#4b5563';
                  e.target.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#6b7280';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                <span style={{ fontSize: '1rem' }}>📤</span>
                기타 앱으로 공유하기
              </button>
            </div>

            {/* 다시 테스트 버튼 */}
            <button
              onClick={handleRestart}
              style={{
                width: '100%',
                padding: '1rem 2rem',
                fontSize: '1.125rem',
                fontWeight: 'bold',
                color: '#1f2937',
                backgroundColor: 'white',
                border: '1px solid #d1d5db',
                borderRadius: '9999px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#f9fafb';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'white';
              }}
            >
              다시 테스트하기
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Result;