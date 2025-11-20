// SNS 공유 유틸리티 함수들

// 카카오 SDK 초기화 (실제 앱 키로 교체 필요)
const initKakao = () => {
  if (window.Kakao && !window.Kakao.isInitialized()) {
    // 실제 서비스에서는 본인의 카카오 앱 키를 사용해야 합니다
    window.Kakao.init('YOUR_KAKAO_APP_KEY'); // 실제 키로 교체 필요
  }
};

export const shareToFacebook = (mbtiType, title) => {
  const url = window.location.origin;
  const text = `🎯 내 MBTI는 ${mbtiType}! 
${title}

나와 같은 성격인지 테스트해보세요! 
#MBTI #성격테스트 #심리테스트`;
  const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(text)}`;
  window.open(shareUrl, '_blank', 'width=600,height=400');
};

export const shareToTwitter = (mbtiType, title) => {
  const url = window.location.origin;
  const text = `🎯 내 MBTI는 ${mbtiType}! 
${title}

너도 테스트해봐 👉`;
  const hashtags = 'MBTI,성격테스트,심리테스트,MZ세대,자기계발';
  const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}&hashtags=${hashtags}`;
  window.open(shareUrl, '_blank', 'width=600,height=400');
};

export const shareToKakao = (mbtiType, title) => {
  const url = window.location.origin;
  const text = `내 MBTI는 ${mbtiType}! ${title}`;
  
  // 카카오 SDK 초기화
  initKakao();
  
  // 카카오톡 공유 (웹 버전)
  if (window.Kakao && window.Kakao.Share) {
    try {
      window.Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: `MBTI 테스트 결과: ${mbtiType}`,
          description: text,
          imageUrl: `${url}/favicon.ico`, // 기본 파비콘 사용
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        },
        buttons: [
          {
            title: '나도 테스트하기',
            link: {
              mobileWebUrl: url,
              webUrl: url,
            },
          },
        ],
      });
    } catch (error) {
      console.error('카카오톡 공유 실패:', error);
      // 카카오톡 공유 실패시 카카오스토리로 대체
      const shareUrl = `https://story.kakao.com/share?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  } else {
    // 카카오톡이 없는 경우 카카오스토리로 대체
    const shareUrl = `https://story.kakao.com/share?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
    window.open(shareUrl, '_blank', 'width=600,height=400');
  }
};

export const shareToLine = (mbtiType, title) => {
  const url = window.location.origin;
  const text = `🎯 내 MBTI는 ${mbtiType}! 
${title}

너도 테스트해봐 👉`;
  const shareUrl = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
  window.open(shareUrl, '_blank', 'width=600,height=400');
};

export const shareToInstagram = (mbtiType, title) => {
  // 인스타그램은 직접 공유가 제한적이므로 클립보드 복사
  const text = `🎯 내 MBTI는 ${mbtiType}! 
${title}

너도 테스트해봐 👉 ${window.location.origin}

#MBTI #성격테스트 #심리테스트 #MZ세대 #자기계발 #인사이트 #성격분석 #심리분석`;
  
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => {
      alert('📋 인스타그램 공유용 텍스트가 클립보드에 복사되었습니다!\n\n인스타그램 스토리나 피드에 붙여넣기 해주세요 ✨');
    }).catch(() => {
      fallbackCopyToClipboard(text);
    });
  } else {
    fallbackCopyToClipboard(text);
  }
};

// 클립보드 복사 fallback 함수
const fallbackCopyToClipboard = (text) => {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.left = '-999999px';
  textArea.style.top = '-999999px';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  
  try {
    document.execCommand('copy');
    alert('📋 인스타그램 공유용 텍스트가 클립보드에 복사되었습니다!');
  } catch (err) {
    console.error('클립보드 복사 실패:', err);
    alert('클립보드 복사에 실패했습니다. 수동으로 복사해주세요.');
  }
  
  document.body.removeChild(textArea);
};

export const shareViaWebAPI = async (mbtiType, title) => {
  const shareData = {
    title: `🎯 MBTI 테스트 결과: ${mbtiType}`,
    text: `${title}\n\n나와 같은 성격인지 테스트해보세요!`,
    url: window.location.origin,
  };

  try {
    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      await navigator.share(shareData);
    } else {
      // Web Share API를 지원하지 않는 경우 클립보드 복사
      const text = `${shareData.title}
${shareData.text}

${shareData.url}

#MBTI #성격테스트 #심리테스트`;
      
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(text);
        alert('📋 공유 링크가 클립보드에 복사되었습니다!\n\n원하는 앱에 붙여넣기 해주세요 ✨');
      } else {
        fallbackCopyToClipboard(text);
      }
    }
  } catch (error) {
    if (error.name !== 'AbortError') {
      console.error('공유 실패:', error);
      // 공유 실패시 클립보드 복사로 대체
      const text = `${shareData.title}\n${shareData.text}\n${shareData.url}`;
      try {
        await navigator.clipboard.writeText(text);
        alert('📋 공유 링크가 클립보드에 복사되었습니다!');
      } catch (clipboardError) {
        fallbackCopyToClipboard(text);
      }
    }
  }
};
