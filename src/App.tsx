import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@react95/core/GlobalStyle';
import '@react95/core/themes/win95.css';
import HomePage from './components/HomePage';
import ArticlePage from './components/ArticlePage';
import GuestbookPage from './components/GuestbookPage';

function App() {
  // Get the base path from environment or use default for GitHub Pages
  const basename = import.meta.env.BASE_URL;
  
  return (
    <Router basename={basename}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/article/:id" element={<ArticlePage />} />
        <Route path="/guestbook" element={<GuestbookPage />} />
      </Routes>
    </Router>
  )
}

export default App
