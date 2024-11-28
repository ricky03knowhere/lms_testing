import React, { useState } from 'react';
import axios from 'axios';
import { SERVER_URL } from '../config/config';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(SERVER_URL + '/api/auth/login', {
        email,
        password,
      });
      localStorage.setItem('token', response.data.token);
      setMessage('Login successful!');
      setTimeout(() => {
        window.location.href = '/'
      }, 1000);
    } catch (error) {
      setMessage(error.response.data.message || 'Login failed.');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      {message && <div className={"alert alert-" + (message == 'Login successful!' ? 'success' : 'danger')} style={{ maxWidth: '55%' }}>{message}</div>}
      <div className="card rounded-4 mt-4" style={{ maxWidth: '55%' }}>
        <div className="card-body">
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
