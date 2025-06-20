import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@react95/core/themes/win95.css';
import { GlobalStyle } from '@react95/core';
import HomePage from './components/HomePage';
import ArticlePage from './components/ArticlePage';

function App() {
  // Get the base path from environment or use default for GitHub Pages
  const basename = import.meta.env.BASE_URL;
  
  return (
    <>
      <GlobalStyle />
      <Router basename={basename}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/article/:id" element={<ArticlePage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
