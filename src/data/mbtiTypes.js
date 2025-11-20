// MBTI 유형별 결과 데이터
export const mbtiTypes = {
  "ENFP": {
    name: "ENFP",
    title: "자유로운 영혼형",
    description: "세상을 탐험하고, 사람들과 어울리는 걸 좋아해요. 열정적이고 창의적이며 새로운 가능성을 끊임없이 탐색합니다.",
    emoji: "💫",
    compatibility: ["INFJ", "INTJ"],
    traits: ["열정적이고 에너지가 넘침", "창의적이고 상상력이 풍부함", "사람들과의 관계를 중시함", "새로운 경험을 추구함"]
  },
  "ENFJ": {
    name: "ENFJ",
    title: "정의로운 사회운동가",
    description: "따뜻하고 공감능력이 뛰어나며 타인을 돕는 것을 좋아합니다. 천생 리더로 사람들을 이끄는 능력이 있어요.",
    emoji: "💚",
    compatibility: ["INFP", "ISFP"],
    traits: ["타인에 대한 깊은 공감능력", "뛰어난 리더십과 소통능력", "이상주의적이고 도덕적", "사람들의 성장을 도움"]
  },
  "ENTP": {
    name: "ENTP",
    title: "뜨거운 논쟁을 즐기는 변론가",
    description: "독창적이고 지적 호기심이 많습니다. 새로운 아이디어를 좋아하고 논쟁을 즐기며 혁신적인 사고를 해요.",
    emoji: "🔥",
    compatibility: ["INFJ", "INTJ"],
    traits: ["뛰어난 창의력과 혁신성", "논리적 사고와 분석력", "도전을 즐기는 성격", "빠른 학습능력"]
  },
  "ENTJ": {
    name: "ENTJ",
    title: "대담한 통솔자",
    description: "강력한 리더십과 전략적 사고를 가진 사람입니다. 목표 지향적이고 효율성을 추구하며 조직을 이끄는 능력이 있어요.",
    emoji: "👑",
    compatibility: ["INTP", "ISTP"],
    traits: ["강력한 리더십", "전략적이고 체계적인 사고", "목표 달성에 대한 강한 의지", "효율성과 성과를 중시"]
  },
  "INFP": {
    name: "INFP",
    title: "열정적인 중재자",
    description: "창의적이고 이상주의적이며 깊은 내면 세계를 가진 사람입니다. 가치와 신념을 중요시하며 표현력이 뛰어나요.",
    emoji: "🦄",
    compatibility: ["ENFJ", "ESFJ"],
    traits: ["깊은 감수성과 공감능력", "창의적이고 예술적 재능", "강한 개인적 가치관", "진정성을 추구함"]
  },
  "INFJ": {
    name: "INFJ",
    title: "선의의 옹호자",
    description: "통찰력 있고 이상주의적인 사람입니다. 사람들의 잠재력을 발견하고 도와주는 것을 좋아해요.",
    emoji: "🔮",
    compatibility: ["ENFP", "ENTP"],
    traits: ["뛰어난 직관력과 통찰력", "이상주의적이고 완벽주의적", "깊은 내면의 세계", "타인의 성장을 돕는 것을 좋아함"]
  },
  "INTP": {
    name: "INTP",
    title: "논리적인 사색가",
    description: "호기심이 많고 논리적인 사고를 하는 사람입니다. 지적 탐구를 즐기며 독립적으로 사고해요.",
    emoji: "🧠",
    compatibility: ["ENTJ", "ESTJ"],
    traits: ["뛰어난 논리적 사고력", "독립적이고 자율적", "지적 호기심이 많음", "객관적이고 분석적"]
  },
  "INTJ": {
    name: "INTJ",
    title: "용의주도한 전략가",
    description: "전략적이고 독립적이며 장기적인 계획을 세우는 사람입니다. 효율성과 목표 달성을 중요시해요.",
    emoji: "🎯",
    compatibility: ["ENFP", "ENTP"],
    traits: ["전략적이고 체계적인 사고", "독립적이고 자신감 있음", "장기적 비전을 가짐", "효율성을 추구함"]
  },
  "ESFP": {
    name: "ESFP",
    title: "자유로운 영혼의 연예인",
    description: "즉흥적이고 사교적이며 현재를 즐기는 사람입니다. 열정적이고 에너지가 넘치며 사람들을 즐겁게 만들어요.",
    emoji: "🎪",
    compatibility: ["ISFJ", "ISTJ"],
    traits: ["밝고 긍정적인 에너지", "뛰어난 사교성", "즉흥적이고 유연함", "현재를 즐기는 성격"]
  },
  "ESFJ": {
    name: "ESFJ",
    title: "사교적인 외교관",
    description: "따뜻하고 배려심이 많으며 책임감이 강한 사람입니다. 조화를 중요시하고 사람들의 필요를 채워주는 것을 좋아해요.",
    emoji: "🌸",
    compatibility: ["ISFP", "INFP"],
    traits: ["따뜻하고 배려심이 많음", "뛰어난 협력과 조화 능력", "책임감이 강함", "타인의 감정을 잘 이해함"]
  },
  "ESTP": {
    name: "ESTP",
    title: "모험을 즐기는 사업가",
    description: "행동력 있고 모험을 즐기는 사람입니다. 현실적이고 즉각적인 결과를 추구하며 실용적인 해결책을 찾아요.",
    emoji: "⚡",
    compatibility: ["ISFJ", "ISTJ"],
    traits: ["뛰어난 행동력과 추진력", "현실적이고 실용적", "모험을 즐기는 성격", "즉각적인 문제해결 능력"]
  },
  "ESTJ": {
    name: "ESTJ",
    title: "엄격한 관리자",
    description: "체계적이고 신뢰할 수 있으며 전통을 중시하는 사람입니다. 규칙과 질서를 중요시하며 조직을 효율적으로 운영해요.",
    emoji: "📋",
    compatibility: ["ISFP", "INTP"],
    traits: ["체계적이고 조직적", "강한 책임감과 신뢰성", "전통과 규칙을 중시", "뛰어난 관리 능력"]
  },
  "ISFP": {
    name: "ISFP",
    title: "호기심 많은 예술가",
    description: "유연하고 예술적 감각이 뛰어난 사람입니다. 현재를 즐기며 아름다움을 추구하고 자신만의 독특한 스타일을 가지고 있어요.",
    emoji: "🎨",
    compatibility: ["ESFJ", "ESTJ"],
    traits: ["뛰어난 예술적 감각", "유연하고 적응력이 좋음", "개인의 가치를 중시", "조용하지만 따뜻한 성격"]
  },
  "ISFJ": {
    name: "ISFJ",
    title: "용감한 수호자",
    description: "배려심 깊고 책임감이 강한 사람입니다. 타인의 필요를 먼저 생각하며 조용하고 신뢰할 수 있는 사람이에요.",
    emoji: "🛡️",
    compatibility: ["ESFP", "ESTP"],
    traits: ["깊은 배려심과 봉사정신", "강한 책임감", "조용하지만 따뜻함", "타인의 필요를 먼저 생각"]
  },
  "ISTP": {
    name: "ISTP",
    title: "만능 재주꾼",
    description: "실용적이고 독립적인 문제 해결자입니다. 손으로 만드는 것을 좋아하며 논리적으로 사고하고 즉각적인 결과를 추구해요.",
    emoji: "🔧",
    compatibility: ["ESFJ", "ENTJ"],
    traits: ["뛰어난 실용적 문제해결 능력", "독립적이고 자율적", "논리적이고 객관적", "손재주가 뛰어남"]
  },
  "ISTJ": {
    name: "ISTJ",
    title: "신중하고 실용적인 현실주의자",
    description: "체계적이고 신뢰할 수 있으며 전통을 중시하는 사람입니다. 사실과 경험을 바탕으로 판단하며 안정성을 추구해요.",
    emoji: "📐",
    compatibility: ["ESFP", "ESTP"],
    traits: ["체계적이고 신뢰할 수 있음", "전통과 안정성을 중시", "신중하고 계획적", "사실과 경험을 바탕으로 판단"]
  }
};