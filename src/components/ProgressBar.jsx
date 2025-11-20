import { motion } from 'framer-motion';

const ProgressBar = ({ current, total }) => {
  const progress = (current / total) * 100;

  return (
    <div style={{
      width: '100%',
      maxWidth: '400px',
      margin: '0 auto 2rem auto'
    }}>
      <div style={{
        textAlign: 'center',
        color: 'white',
        marginBottom: '1rem'
      }}>
        <span style={{
          fontSize: '1.125rem',
          fontWeight: '500'
        }}>
          질문 {current} / {total}
        </span>
      </div>
      <div style={{
        width: '100%',
        height: '8px',
        background: 'rgba(255, 255, 255, 0.2)',
        borderRadius: '9999px',
        overflow: 'hidden'
      }}>
        <motion.div
          style={{
            height: '100%',
            background: 'white',
            borderRadius: '9999px'
          }}
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;