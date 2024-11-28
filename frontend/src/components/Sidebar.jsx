import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ user }) => {
  const handleLogout = () => {
    const confirmLogout = window.confirm('Apakah anda yakin, logout?');
    if (confirmLogout) {
      localStorage.removeItem('token');
      window.location.href = '/'
    }
  };

  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{ width: '250px', height: '100vh' }}>
      <Link to="/" className="d-flex align-items-center mb-md-0 me-md-auto link-dark text-decoration-none">
        <span className="fs-4"><img src="./images/logo.png" alt="logo" width={180} /></span>
      </Link>
      <hr className='mt-0' />
      <ul className="nav nav-pills flex-column mb-auto">
        {user.name ?
          <div>
            <li>
              <Link to="/" className="nav-link link-dark">Dashboard</Link>
            </li>
            <li>
              <Link to="/modules" className="nav-link link-dark">Modules</Link>
            </li>
            <li>
              <Link to="/contents" className="nav-link link-dark">Contents</Link>
            </li>
            <li>
              <Link to="/participants" className="nav-link link-dark">Participants</Link>
            </li>
            <li>
              <a className="nav-link link-dark" href="#!" onClick={handleLogout}>Logout</a>
            </li>
          </div>
          :
          <div>
            <li>
              <Link to="/Register" className="nav-link link-dark">Register</Link>
            </li>
            <li>
              <Link to="/Login" className="nav-link link-dark">Login</Link>
            </li>
          </div>
        }
      </ul>
    </div>
  );
};

export default Sidebar;
