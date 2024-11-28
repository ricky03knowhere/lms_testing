import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { SERVER_URL } from '../config/config';

const Dashboard = () => {
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');

    axios.get(SERVER_URL + '/api/content/participant-scores/', {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        setParticipants(response.data);
      })
      .catch((error) => {
        console.error('Error fetching participants:', error);
      });
  }, []);

  return (
    <div className="container mt-5">
      <h5 className="mb-4">NILAI PESERTA</h5>
      <table className="table table-striped">
        <thead>
          <tr>
            <th className='text-center'>Rank</th>
            <th>Name</th>
            <th>Class</th>
            <th>Module</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {participants.map((participant, index) => (
            <tr key={participant.id}>
              <td className='text-center'>{index >= 3 ? index + 1 : null}{index < 3 && <i className={"fa fa-medal ms-2 text-" + (index == 0 ? 'warning' : index == 1 ? 'secondary' : 'danger')} style={{ fontSize: '1.3rem' }}></i>}</td>
              <td>{participant.name}</td>
              <td>{Math.round(Math.random() * 3) > 1 ? 'Frontend Developer' : 'DevOps'}</td>
              <td>{Math.round(Math.random() * 3) > 1 ? 'F-1' : 'D-3'}</td>
              <td className='text-success fw-bold'>{participant.points} pts</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
