import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Machines from './components/Machines';
import Reports from './components/Reports';
import Login from './components/Login';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      {isAuthenticated ? (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/machines" element={<Machines />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="*" element={<Navigate to="/" />} /> {/* Редирект на головну */}
          </Routes>
        </>
      ) : (
        <Routes>
          <Route path="/" element={<Login onLogin={handleLogin} />} />
          <Route path="*" element={<Navigate to="/" />} /> {/* Редирект на логін */}
        </Routes>
      )}
    </Router>
  );
};

export default App;
