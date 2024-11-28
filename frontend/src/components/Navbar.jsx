import React from 'react';

const Navbar = ({ user }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" href="/">Learning Management System</a>
        <nav className="navbar bg-body-tertiary">
          <form className="container-fluid" style={{ width: '20em' }}>
            <div className="input-group">
              <span className="input-group-text" id="basic-addon1"><i className="fa fa-search"></i></span>
              <input type="text" className="form-control" placeholder="Search class.." aria-label="search" aria-describedby="basic-addon1" />
            </div>
          </form>
          <div className="continer-fluid"><i className="fa fa-bell mx-3"></i></div>
          <div className="continer-fluid"><i className="fa fa-envelope mx-3"></i></div>
        </nav>
        <div className="d-flex align-items-center">
          {user.name ?
            <div>
              <img
                src={user.profilePicture || './images/user.png'}
                alt="Profile"
                className="rounded-circle me-2"
                style={{ width: '40px', height: '40px' }}
              />
              <span>Selamat Datang, <b>{user.name || 'User'}</b></span>
            </div>
            : null}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
