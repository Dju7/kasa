import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './style/main.scss';
import Home from './pages/Home/';
import Logements from './pages/Logements/'
import Apropos from './pages/Apropos/'
import Error from './components/Error/'
import Header from './components/Header'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logements" element={<Logements />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="*" element={<Error />} /> 
      </Routes>
    </Router>
  </React.StrictMode>,
);
