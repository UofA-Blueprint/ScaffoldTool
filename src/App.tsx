import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import FirebasePage from './pages/FirebasePage';

function App() {
  return (
    <Router>
      <Navbar links={['/']} titles={['Home']} />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/firebase-connection" element={<FirebasePage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
