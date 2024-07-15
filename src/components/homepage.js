// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Halaman Utama</h1>
      <div>
        <Link to="/achievements?team=redTeam">
          <button style={{ margin: '10px' }}>Tim Merah</button>
        </Link>
        <Link to="/achievements?team=yellowTeam">
          <button style={{ margin: '10px' }}>Tim Kuning</button>
        </Link>
        <Link to="/achievements?team=blueTeam">
          <button style={{ margin: '10px' }}>Tim Biru</button>
        </Link>
        <Link to="/achievements?team=greenTeam">
          <button style={{ margin: '10px' }}>Tim Hijau</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
