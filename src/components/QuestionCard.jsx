import { motion } from 'framer-motion';
import { useState } from 'react';

const QuestionCard = ({ question, onCardSelect }) => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (card) => {
    setSelectedCard(card.id);
    
    // 카드 선택 애니메이션 후 다음 질문으로
    setTimeout(() => {
      onCardSelect(card);
    }, 600);
  };

  return (
    <div className="main-container">
      <div className="w-full max-w-md">
        {/* 질문 */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-white mb-8 leading-relaxed">
            {question.question}
          </h2>
        </motion.div>

        {/* 카드 선택지들 */}
        <div className="space-y-6">
          {question.cards.map((card, index) => (
            <motion.div
              key={card.id}
              className={`question-card ${selectedCard === card.id ? 'selected' : ''}`}
              onClick={() => handleCardClick(card)}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
              whileHover={{ 
                scale: selectedCard ? 1 : 1.02,
                transition: { type: "spring", stiffness: 300 }
              }}
              whileTap={{ 
                scale: 0.98,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <p className="text-lg font-medium text-center leading-relaxed">
                {card.text}
              </p>
              
              {selectedCard === card.id && (
                <motion.div
                  className="absolute top-2 right-2"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 25 }}
                >
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* 다음 버튼 */}
        {selectedCard && (
          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button className="btn-primary px-12 py-3 text-lg font-bold">
              다음
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default QuestionCard;