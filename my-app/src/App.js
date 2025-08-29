import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Watchlist from './components/Watchlist';
import ForLater from './components/ForLater';
import Profile from './components/Profile';
import './App.css';

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="nav-logo">Don't Query Darling</Link>
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/Watchlist" className="nav-link">Watchlist</Link>
            </li>
            <li className="nav-item">
              <Link to="/ForLater" className="nav-link">For Later</Link>
            </li>
            <li className="nav-item">
              <Link to="/Profile" className="nav-link">Profile</Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Watchlist" element={<Watchlist />} />
          <Route path="/ForLater" element={<ForLater />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
