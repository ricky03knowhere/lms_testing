import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({ user }) => {
  const { pathname, hash } = useLocation();
  const splitLocation = pathname.split("/");
  const url = splitLocation[1] + hash;

  const handleLogout = () => {
    const confirmLogout = window.confirm('Apakah anda yakin, logout?');
    if (confirmLogout) {
      localStorage.removeItem('token');
      window.location.href = '/'
    }
  };

  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 bg-light sidebar" style={{ width: '250px', minHeight: '100vh' }}>
      <Link to="/" className="d-flex align-items-center mb-md-0 me-md-auto link-dark text-decoration-none">
        <span className="fs-4"><img src="./images/logo.png" alt="logo" width={180} /></span>
      </Link>
      <hr className='mt-0' />
      <ul className="nav nav-pills flex-column mb-auto">
        {user.name ?
          <div>
            <li>
              <Link to="/" className={"nav-link link-dark " + (url == '' && 'active')}><i class="fa fa-tachometer-alt me-1"></i> Dashboard</Link>
            </li>
            <li>
              <Link to="/modules" className={"nav-link link-dark " + (url == 'modules' && 'active')}><i class="fa fa-table me-1"></i> Modules</Link>
            </li>
            <li>
              <Link to="/contents" className={"nav-link link-dark " + (url == 'contents' && 'active')}><i class="fa fa-tasks me-1"></i> Contents</Link>
            </li>
            <li>
              <Link to="/group" className={"nav-link link-dark " + (url == 'users' && 'active')}><i class="fa fa-comments me-1"></i> Group Chat</Link>
            </li>
            <li>
              <Link to="/group" className={"nav-link link-dark " + (url == 'users' && 'active')}><i class="fa fa-users me-1"></i> Peserta</Link>
            </li>
            <li>
              <Link to="/pemateri" className={"nav-link link-dark " + (url == 'users' && 'active')}><i class="fa fa-chalkboard-teacher me-1"></i> Pemateri</Link>
            </li>

            <hr />
            <h6>PROFILE</h6>
            <li>
              <Link to="/settings" className={"nav-link link-dark " + (url == 'users' && 'active')}><i class="fa fa-cog me-1"></i> Settings</Link>
            </li>
            <li>
              <Link to="/calendar" className={"nav-link link-dark " + (url == 'users' && 'active')}><i class="fa fa-calendar-alt me-1"></i> Kalender</Link>
            </li>
            <hr />
            <li>
              <a className={"nav-link link-dark"} href="#!" onClick={handleLogout}><i class="fa fa-sign-out-alt me-1"></i> Logout</a>
            </li>
          </div>
          :
          <div>
            <li>
              <Link to="/register" className={"nav-link link-dark " + (url == 'register' && 'active')}><i class="fa fa-user-plus me-1"></i> Register</Link>
            </li>
            <li>
              <Link to="/login" className={"nav-link link-dark " + (url == 'login' && 'active')}><i class="fa fa-sign-in-alt me-1"></i> Login</Link>
            </li>
          </div>
        }
      </ul>
    </div>
  );
};

export default Sidebar;
