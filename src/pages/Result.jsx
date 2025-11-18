import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMbti } from '../context/MbtiContext';
import { mbtiTypes } from '../data/mbtiTypes';
import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
  LineShareButton,
  LineIcon
} from 'react-share';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ResultContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: ${props => `linear-gradient(135deg, ${props.bgColor} 0%, ${props.bgColorDark || props.bgColor} 100%)`};
  color: white;
  animation: ${fadeIn} 0.6s ease-out;
`;

const ResultCard = styled.div`
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  padding: 3rem;
  max-width: 600px;
  width: 100%;
  text-align: center;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  color: #333;

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const TypeIcon = styled.div`
  font-size: 5rem;
  margin-bottom: 1rem;
`;

const TypeName = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: ${props => props.color};

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const TypeTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: ${props => props.color};

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const TypeDescription = styled.p`
  font-size: 1.125rem;
  line-height: 1.8;
  margin-bottom: 2rem;
  color: #555;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ShareSection = styled.div`
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

const ShareTitle = styled.h3`
  font-size: 1.125rem;
  margin-bottom: 1rem;
  color: #666;
`;

const ShareButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

const ShareButton = styled.div`
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const RestartButton = styled.button`
  padding: 1rem 2.5rem;
  font-size: 1.125rem;
  font-weight: 600;
  background: ${props => props.color};
  color: white;
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
`;

function Result() {
  const navigate = useNavigate();
  const { result, resetTest, isTestStarted } = useMbti();

  useEffect(() => {
    if (!result || !isTestStarted) {
      navigate('/');
    }
  }, [result, isTestStarted, navigate]);

  if (!result || !mbtiTypes[result]) {
    return null;
  }

  const mbtiData = mbtiTypes[result];
  const shareUrl = window.location.origin;
  const shareTitle = `나의 MBTI 유형은 ${result}! ${mbtiData.title}`;

  const handleRestart = () => {
    resetTest();
    navigate('/');
  };

  // 카카오톡 공유 함수 (간단한 구현)
  const handleKakaoShare = () => {
    if (window.Kakao) {
      window.Kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
          title: shareTitle,
          description: mbtiData.description,
          imageUrl: `${shareUrl}/og-image.png`,
          link: {
            mobileWebUrl: shareUrl,
            webUrl: shareUrl,
          },
        },
      });
    } else {
      alert('카카오톡 공유 기능을 사용하려면 카카오 SDK가 필요합니다.');
    }
  };

  return (
    <ResultContainer bgColor={mbtiData.color} bgColorDark={mbtiData.color}>
      <ResultCard>
        <TypeIcon>{mbtiData.icon}</TypeIcon>
        <TypeName color={mbtiData.color}>{mbtiData.name}</TypeName>
        <TypeTitle color={mbtiData.color}>{mbtiData.title}</TypeTitle>
        <TypeDescription>{mbtiData.description}</TypeDescription>

        <ShareSection>
          <ShareTitle>결과 공유하기</ShareTitle>
          <ShareButtons>
            <ShareButton>
              <FacebookShareButton url={shareUrl} quote={shareTitle}>
                <FacebookIcon size={40} round />
              </FacebookShareButton>
            </ShareButton>
            <ShareButton>
              <TwitterShareButton url={shareUrl} title={shareTitle}>
                <TwitterIcon size={40} round />
              </TwitterShareButton>
            </ShareButton>
            <ShareButton onClick={handleKakaoShare}>
              <div style={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                background: '#FEE500',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '12px',
                fontWeight: 'bold',
                color: '#000'
              }}>
                카카오
              </div>
            </ShareButton>
            <ShareButton>
              <LineShareButton url={shareUrl} title={shareTitle}>
                <LineIcon size={40} round />
              </LineShareButton>
            </ShareButton>
          </ShareButtons>
        </ShareSection>

        <RestartButton onClick={handleRestart} color={mbtiData.color}>
          다시 테스트하기
        </RestartButton>
      </ResultCard>
    </ResultContainer>
  );
}

export default Result;

