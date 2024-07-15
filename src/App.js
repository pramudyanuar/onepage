// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/homepage';
import AchievementsPage from './components/achievements';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/achievements" element={<AchievementsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
