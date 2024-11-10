// App.js
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Treatments from './Pages/treatments';
import Appointment from './Pages/appointment';
import About from './Pages/about';
import LoginPage from './Pages/login';
import Home from './Pages/home';
import Register from './Pages/register';


function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => setLoggedIn(true);

  const handleLogout = () => {
    setLoggedIn(false);
    navigate('/login');  // Navigate to login page after logout
  };

  return (
    <div className="App">
      <Navbar loggedIn={loggedIn} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/treatments" element={<Treatments />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

// Wrap App in BrowserRouter at the export level for navigation to work properly
function AppWithRouter() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default AppWithRouter;
