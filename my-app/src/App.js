import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Importez vos composants de page ici
import Home from './components/Home';
// import About from './pages/About';
// import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Définissez vos routes ici */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<div>Watchlist</div>} />
        <Route path="/contact" element={<div>Contact</div>} />
        
        {/* Route 404 - doit être la dernière */}
        <Route path="*" element={<div>Page non trouvée</div>} />
      </Routes>
    </div>
  );
}

export default App;
