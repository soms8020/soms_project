/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8B5CF6',      // 보라톤 (신뢰감 + 트렌디함)
        secondary: '#FDE68A',    // 부드러운 노랑 포인트
        text: {
          primary: '#1E293B',    // 본문
          accent: '#8B5CF6',     // 강조
          secondary: '#475569',  // 보조
        }
      },
      fontFamily: {
        sans: ['Pretendard Variable', 'SUIT', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'question': '1.3rem',    // 질문
        'card': '1rem',          // 카드 내용
        'button': '0.9rem',      // 버튼
      },
    },
  },
  plugins: [],
}

