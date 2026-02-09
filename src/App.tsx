import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from '@/components/ScrollToTop';
import Home from '@/pages/Home';
import Admision from '@/pages/Admision';
import Propuesta from '@/pages/Propuesta';
import Nosotros from '@/pages/Nosotros';
import Form from '@/pages/Form';
import Confirmacion from '@/pages/Confirmacion';
import NotFound from '@/pages/NotFound';
import { Header, Footer } from '@/components/layout';

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
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/form" element={<Form />} />
            <Route path="/confirmacion" element={<Confirmacion />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
