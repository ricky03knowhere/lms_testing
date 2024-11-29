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
      <div class="card bg-gradient text-light px-3 py-2 rounded-4" style={{ maxWidth: '73%', background: '#9d51ff' }}>
        <div class="card-body">
          <h6 style={{ color: 'yellow' }}>PEMROGRAMAN</h6>
          <h4 class="card-title mb-2 mt-3">Pemrograman Frontend Modern dengan React dan Angular</h4>
          <p class="card-text" style={{ paddingRight: '12em' }}>Aliquam cras amet ligula mauris nisl risus penatibus a himenaeos proin fringilla imperdiet platea pede class at phasellus quam nisi tincidunt ex fames Congue letius nam mauris auctor mi est cras maecenas</p>
          <span className='me-5 fw-bold'><i class="fa fa-chalkboard-teacher me-2"></i>Pemateri By Josep</span>
          <span className='fw-bold'><i class="fa fa-calendar-alt me-2"></i>14-06-2025</span>
          <a href="#" class="btn btn-light float-end">MULAI LEARNING</a>
        </div>
      </div>
      <h5 className="my-4">MODULES KOMPETENSI</h5>
      <div className="row mb-5" style={{ maxWidth: '75%' }}>
        <div className="col-md-4 mb-3" key={1}>
          <div className="card bg-gradient bg-primary-subtle rounded-4">
            <div className="card-body">
              <h4 className="card-title text-center my-5">PEMROGRAMAN</h4>
              <h6 className="card-subtitle my-2">MATERI KOMPETENSI</h6>
              <p className="card-text">Mattis montes elit donec a proin felis aliquet mollis inceptos praesent sapien massa malesuada imperdiet finibus fusce lobortis erat libero congue efficitur egestas</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3" key={2}>
          <div className="card bg-gradient bg-danger-subtle rounded-4">
            <div className="card-body">
              <h4 className="card-title text-center my-5">CREATIVE MARKETING</h4>
            <h6 className="card-subtitle my-2">MATERI KOMPETENSI</h6>
              <p className="card-text">Congue letius nam mauris auctor mi est cras maecenas amet ut femina urbet dormint habitant tempus rhoncus nunc nisl dis vel donec placerat massa viverra fames</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3" key={3}>
          <div className="card bg-gradient bg-warning-subtle rounded-4">
            <div className="card-body">
              <h4 className="card-title text-center my-5">MANAGEMENT SDM</h4>
              <h6 className="card-subtitle my-2">MATERI KOMPETENSI</h6>
              <p className="card-text">Aliquam cras amet ligula mauris nisl risus penatibus a himenaeos proin fringilla imperdiet platea pede class at phasellus quam nisi tincidunt ex fames</p>
            </div>
          </div>
        </div>
      </div>
      <h5 className="mb-4">NILAI PESERTA</h5>
      <table className="table table-striped" style={{ maxWidth: '70%' }}>
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
