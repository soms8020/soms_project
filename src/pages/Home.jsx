import { motion } from 'framer-motion';
import { useRecoilState } from 'recoil';
import { quizProgressState } from '../recoil/quizState';

const Home = () => {
  const [, setQuizProgress] = useRecoilState(quizProgressState);

  const handleStart = () => {
    setQuizProgress('quiz');
  };

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
        maxWidth: '400px',
        textAlign: 'center'
      }}>
        {/* 메인 아이콘 */}
        <motion.div
          style={{ marginBottom: '2rem' }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '96px',
              height: '96px',
              marginBottom: '2rem'
            }}
            animate={{ 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              repeatDelay: 2 
            }}
          >
            {/* 퍼즐 아이콘 */}
            <div style={{ position: 'relative', width: '64px', height: '64px' }}>
              <div style={{
                position: 'absolute',
                width: '48px',
                height: '48px',
                backgroundColor: '#10b981',
                borderRadius: '8px',
                border: '2px solid #000',
                transform: 'rotate(12deg)'
              }}></div>
              <div style={{
                position: 'absolute',
                width: '48px',
                height: '48px',
                backgroundColor: 'white',
                borderRadius: '8px',
                border: '2px solid #000'
              }}></div>
            </div>
          </motion.div>
        </motion.div>

        {/* 제목 */}
        <motion.div
          style={{ marginBottom: '3rem' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '1rem',
            lineHeight: '1.2'
          }}>
            MBTI 진단 테스트
          </h1>
          <p style={{
            fontSize: '1.25rem',
            color: 'rgba(255, 255, 255, 0.9)',
            lineHeight: '1.6',
            margin: '0'
          }}>
            간단한 질문을 통해 당신의 성격 유형을 알아보세요!
          </p>
        </motion.div>

        {/* 시작 버튼 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <button
            onClick={handleStart}
            style={{
              width: '100%',
              padding: '1rem 2rem',
              fontSize: '1.25rem',
              fontWeight: 'bold',
              color: 'white',
              background: 'rgba(255, 255, 255, 0.2)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '9999px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.2)';
            }}
          >
            MBTI 테스트 시작
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;