import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <header>
        <h1>Цветы-Шары</h1>
        <nav>
          <ul>
            <li><Link to="/">Главная</Link></li>
            <li><Link to="/catalog">Каталог</Link></li>
            <li><Link to="/contact">Контакты</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <footer>
        <p>© 2025 Цветы-Шары. Тел.: +7 (900) 123-45-67</p>
      </footer>
    </Router>
  );
}

export default App;
