import html2canvas from 'html2canvas';

// 결과 카드를 이미지로 캡처하는 함수
export const captureResultCard = async (elementId = 'result-card') => {
  try {
    const element = document.getElementById(elementId);
    if (!element) {
      throw new Error('캡처할 요소를 찾을 수 없습니다.');
    }

    const canvas = await html2canvas(element, {
      backgroundColor: '#ffffff',
      scale: 2, // 고해상도를 위한 스케일
      logging: false,
      useCORS: true,
      allowTaint: true,
      width: element.offsetWidth,
      height: element.offsetHeight,
    });
    
    return canvas;
  } catch (error) {
    console.error('이미지 캡처 실패:', error);
    throw error;
  }
};

// 캡처한 이미지를 다운로드하는 함수
export const downloadImage = (canvas, filename = 'mbti-result.png') => {
  try {
    const link = document.createElement('a');
    link.download = filename;
    link.href = canvas.toDataURL('image/png');
    link.click();
  } catch (error) {
    console.error('이미지 다운로드 실패:', error);
    throw error;
  }
};

// 캡처와 다운로드를 한번에 처리하는 함수
export const captureAndDownload = async (elementId, filename) => {
  try {
    const canvas = await captureResultCard(elementId);
    downloadImage(canvas, filename);
    return true;
  } catch (error) {
    console.error('캡처 및 다운로드 실패:', error);
    return false;
  }
};
