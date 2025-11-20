// MBTI 계산 로직 - README 기획안 기준
export const calculateMBTI = (answers) => {
  const score = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
  
  answers.forEach(answer => {
    if (answer && answer.type) {
      score[answer.type] += 1;
    }
  });
  
  const mbtiType = 
    `${score.E > score.I ? "E" : "I"}` +
    `${score.S > score.N ? "S" : "N"}` +
    `${score.T > score.F ? "T" : "F"}` +
    `${score.J > score.P ? "J" : "P"}`;
  
  return mbtiType;
};

// MBTI 유형별 결과 데이터
export const mbtiResults = {
  "ENFP": {
    title: "재기발랄한 활동가",
    summary: "열정적이고 창의적인 자유로운 영혼",
    traits: ["창의적이고 상상력이 풍부", "사람들과의 관계를 중시", "새로운 가능성을 탐구"],
    compatible: ["INFJ", "INTJ"],
    opposite: ["ISTJ"],
    emoji: "🌟"
  },
  "ENFJ": {
    title: "정의로운 사회운동가", 
    summary: "따뜻하고 공감능력이 뛰어난 리더",
    traits: ["타인에 대한 깊은 공감", "뛰어난 리더십", "이상주의적 성향"],
    compatible: ["INFP", "ISFP"],
    opposite: ["ISTP"],
    emoji: "💚"
  },
  "ENTP": {
    title: "뜨거운 논쟁을 즐기는 변론가",
    summary: "독창적이고 지적 호기심이 많은 혁신가",
    traits: ["뛰어난 창의력", "논리적 사고", "도전을 즐김"],
    compatible: ["INFJ", "INTJ"],
    opposite: ["ISFJ"],
    emoji: "🔥"
  },
  "ENTJ": {
    title: "대담한 통솔자",
    summary: "강력한 리더십을 가진 전략가",
    traits: ["강한 리더십", "전략적 사고", "목표 지향적"],
    compatible: ["INTP", "ISTP"],
    opposite: ["ISFP"],
    emoji: "👑"
  },
  "INFP": {
    title: "열정적인 중재자",
    summary: "창의적이고 이상주의적인 꿈꾸는 사람",
    traits: ["깊은 감수성", "창의적 재능", "강한 개인적 가치관"],
    compatible: ["ENFJ", "ESFJ"],
    opposite: ["ESTJ"],
    emoji: "🦄"
  },
  "INFJ": {
    title: "선의의 옹호자",
    summary: "통찰력 있고 이상주의적인 조력자",
    traits: ["뛰어난 직관력", "이상주의적", "타인의 성장을 도움"],
    compatible: ["ENFP", "ENTP"],
    opposite: ["ESTP"],
    emoji: "🔮"
  },
  "INTP": {
    title: "논리적인 사색가",
    summary: "호기심 많고 논리적인 사고를 하는 분석가",
    traits: ["뛰어난 논리적 사고", "독립적", "지적 호기심"],
    compatible: ["ENTJ", "ESTJ"],
    opposite: ["ESFJ"],
    emoji: "🧠"
  },
  "INTJ": {
    title: "용의주도한 전략가",
    summary: "전략적이고 독립적인 완벽주의자",
    traits: ["전략적 사고", "독립적", "장기적 비전"],
    compatible: ["ENFP", "ENTP"],
    opposite: ["ESFP"],
    emoji: "🎯"
  },
  "ESFP": {
    title: "자유로운 영혼의 연예인",
    summary: "즉흥적이고 사교적인 엔터테이너",
    traits: ["밝고 긍정적", "뛰어난 사교성", "현재를 즐김"],
    compatible: ["ISFJ", "ISTJ"],
    opposite: ["INTJ"],
    emoji: "🎪"
  },
  "ESFJ": {
    title: "사교적인 외교관",
    summary: "따뜻하고 배려심 많은 협력자",
    traits: ["따뜻한 배려심", "뛰어난 협력", "책임감"],
    compatible: ["ISFP", "INFP"],
    opposite: ["INTP"],
    emoji: "🌸"
  },
  "ESTP": {
    title: "모험을 즐기는 사업가",
    summary: "행동력 있고 모험을 즐기는 실용주의자",
    traits: ["뛰어난 행동력", "현실적", "모험을 즐김"],
    compatible: ["ISFJ", "ISTJ"],
    opposite: ["INFJ"],
    emoji: "⚡"
  },
  "ESTJ": {
    title: "엄격한 관리자",
    summary: "체계적이고 신뢰할 수 있는 조직가",
    traits: ["체계적", "강한 책임감", "뛰어난 관리 능력"],
    compatible: ["ISFP", "INTP"],
    opposite: ["INFP"],
    emoji: "📋"
  },
  "ISFP": {
    title: "호기심 많은 예술가",
    summary: "유연하고 예술적 감각이 뛰어난 탐험가",
    traits: ["뛰어난 예술적 감각", "유연함", "개인의 가치 중시"],
    compatible: ["ESFJ", "ESTJ"],
    opposite: ["ENTJ"],
    emoji: "🎨"
  },
  "ISFJ": {
    title: "용감한 수호자",
    summary: "배려심 깊고 책임감 강한 보호자",
    traits: ["깊은 배려심", "강한 책임감", "타인을 먼저 생각"],
    compatible: ["ESFP", "ESTP"],
    opposite: ["ENTP"],
    emoji: "🛡️"
  },
  "ISTP": {
    title: "만능 재주꾼",
    summary: "실용적이고 독립적인 문제 해결사",
    traits: ["실용적 문제해결", "독립적", "논리적"],
    compatible: ["ESFJ", "ENTJ"],
    opposite: ["ENFJ"],
    emoji: "🔧"
  },
  "ISTJ": {
    title: "신중하고 실용적인 현실주의자",
    summary: "체계적이고 신뢰할 수 있는 전통주의자",
    traits: ["체계적", "신뢰할 수 있음", "전통과 안정성 중시"],
    compatible: ["ESFP", "ESTP"],
    opposite: ["ENFP"],
    emoji: "📐"
  }
};