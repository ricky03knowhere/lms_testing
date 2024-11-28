import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { SERVER_URL } from '../config/config';

const Homepage = () => {
  const [modules, setModules] = useState([]);

  useEffect(() => {
    axios.get(SERVER_URL + '/api/content/modules')
      .then((response) => {
        setModules(response.data.data);
      })
      .catch((error) => {
        console.error('Error fetching modules:', error);
      });
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Modules</h2>
      <div className='mb-3'>Berikut module yang dapat anda pelajari untuk menambah skill pemrograman / komputer kalian, daftar sekarang juga!!</div>
      <div className="row">
        {modules.map((module) => (
          <div className="col-md-4 mb-3" key={module.id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{module.name}</h5>
                <p className="card-text">{module.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
