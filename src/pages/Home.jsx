import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useMbti } from '../context/MbtiContext';
import styled from 'styled-components';

const HomeContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  margin-bottom: 3rem;
  text-align: center;
  opacity: 0.95;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;

const StartButton = styled.button`
  padding: 1rem 3rem;
  font-size: 1.25rem;
  font-weight: 600;
  background: white;
  color: #667eea;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    padding: 0.875rem 2rem;
    font-size: 1rem;
  }
`;

const Icon = styled.div`
  font-size: 5rem;
  margin-bottom: 1rem;
  animation: float 3s ease-in-out infinite;

  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-20px);
    }
  }
`;

function Home() {
  const navigate = useNavigate();
  const { startTest } = useMbti();

  const handleStart = () => {
    startTest();
    navigate('/quiz');
  };

  return (
    <HomeContainer>
      <Icon>🧩</Icon>
      <Title>MBTI 진단 테스트</Title>
      <Subtitle>
        간단한 질문을 통해 당신의 성격 유형을 알아보세요!
      </Subtitle>
      <StartButton onClick={handleStart}>
        MBTI 테스트 시작
      </StartButton>
    </HomeContainer>
  );
}

export default Home;

