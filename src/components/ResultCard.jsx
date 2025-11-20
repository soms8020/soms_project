import { motion } from 'framer-motion';
import { mbtiResults } from '../utils/calculateMBTI';

const ResultCard = ({ mbtiType }) => {
  const result = mbtiResults[mbtiType];

  if (!result) return null;

  return (
    <motion.div
      id="result-card"
      className="result-card"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* 메인 결과 */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="text-6xl mb-4">{result.emoji}</div>
        <h2 className="text-2xl font-bold text-text-primary mb-2">{mbtiType}</h2>
        <h3 className="text-lg font-semibold text-text-accent mb-4">{result.title}</h3>
        <p className="text-text-secondary leading-relaxed">{result.summary}</p>
      </motion.div>

      {/* 특징 */}
      <motion.div
        className="mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h4 className="font-semibold text-text-primary mb-3">주요 특징</h4>
        <div className="space-y-2">
          {result.traits.map((trait, index) => (
            <motion.div
              key={index}
              className="flex items-center text-sm text-text-secondary"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
              {trait}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* 호환성 */}
      <motion.div
        className="mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <h4 className="font-semibold text-text-primary mb-3">나랑 잘 맞는 유형</h4>
        <div className="flex space-x-2">
          {result.compatible.map((type, index) => (
            <span
              key={index}
              className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
            >
              {type}
            </span>
          ))}
        </div>
      </motion.div>

      {/* 반대 유형 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <h4 className="font-semibold text-text-primary mb-3">나와 반대인 유형</h4>
        <div className="flex space-x-2">
          {result.opposite.map((type, index) => (
            <span
              key={index}
              className="bg-gray-100 text-text-secondary px-3 py-1 rounded-full text-sm font-medium"
            >
              {type}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ResultCard;