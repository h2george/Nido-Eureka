
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Admision from './pages/Admision';
import Propuesta from './pages/Propuesta';
import Nosotros from './pages/Nosotros'; // Added import for Nosotros
import Form from './pages/Form';
import Confirmacion from './pages/Confirmacion';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admision" element={<Admision />} />
            <Route path="/propuesta" element={<Propuesta />} />
            <Route path="/nosotros" element={<Nosotros />} /> {/* Replaced /equipo and /historia with /nosotros */}
            <Route path="/form" element={<Form />} />
            <Route path="/confirmacion" element={<Confirmacion />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
