import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import FirebasePage from './components/FirebasePage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/firebase-connection" element={<FirebasePage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
