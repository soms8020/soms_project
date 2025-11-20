import { RecoilRoot, useRecoilValue } from 'recoil';
import { AnimatePresence } from 'framer-motion';
import { quizProgressState } from './recoil/quizState';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Result from './pages/Result';

const AppContent = () => {
  const quizProgress = useRecoilValue(quizProgressState);

  const renderCurrentPage = () => {
    switch (quizProgress) {
      case 'home':
        return <Home key="home" />;
      case 'quiz':
        return <Quiz key="quiz" />;
      case 'result':
        return <Result key="result" />;
      default:
        return <Home key="home" />;
    }
  };

  return (
    <div className="App">
      <AnimatePresence mode="wait">
        {renderCurrentPage()}
      </AnimatePresence>
    </div>
  );
};

function App() {
  return (
    <RecoilRoot>
      <AppContent />
    </RecoilRoot>
  );
}

export default App;