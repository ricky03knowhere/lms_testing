import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { SERVER_URL } from '../config/config';

const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    const { id, value } = e.target
    setFormData({ ...formData, [id]: value })
  }

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(SERVER_URL + '/api/auth/register', formData);
      setMessage(response.data.message || 'Registration successful!');
    } catch (error) {
      setMessage(error.response.data.message || 'Registration failed.');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Register</h2>
      {message && <div className="alert alert-info" style={{ maxWidth: '55%' }}>{message}</div>}
      <div className="card rounded-4 mt-4" style={{ maxWidth: '55%' }}>
        <div className="card-body">
          <form onSubmit={handleRegister}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange(e)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={formData.email}
                onChange={(e) => handleInputChange(e)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={formData.password}
                onChange={(e) => handleInputChange(e)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
