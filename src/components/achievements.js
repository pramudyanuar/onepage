// src/components/AchievementsPage.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { teamData } from '../dummyData';

const AchievementsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);
  const teamKey = query.get('team');

  const team = teamData[teamKey] || { name: 'Unknown', achievements: [{ title: 'No data available.', description: '', photo: '' }] };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <button
        onClick={() => navigate('/')}
        style={{ marginBottom: '20px', padding: '10px 20px', fontSize: '16px' }}
      >
        Kembali
      </button>
      <h1>Halaman Achievements</h1>
      <h2>{team.name}</h2>
      <div>
        {team.achievements.map((achievement, index) => (
          <div key={index} style={{ margin: '20px', textAlign: 'left', display: 'inline-block', width: '300px' }}>
            <h3>{achievement.title}</h3>
            <p>{achievement.description}</p>
            <img src={achievement.photo} alt={achievement.title} style={{ width: '100%', height: 'auto' }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsPage;
