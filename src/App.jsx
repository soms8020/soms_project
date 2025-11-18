import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MbtiProvider } from './context/MbtiContext';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <MbtiProvider>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </Router>
    </MbtiProvider>
  );
}

export default App;

