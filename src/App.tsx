import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@react95/core/themes/win95.css';
import HomePage from './components/HomePage';
import ArticlePage from './components/ArticlePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/article/:id" element={<ArticlePage />} />
      </Routes>
    </Router>
  )
}

export default App
