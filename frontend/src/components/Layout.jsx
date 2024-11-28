import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const Layout = ({ user, children }) => {
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <Sidebar user={user}/>
      {/* Main Content */}
      <div className="flex-grow-1">
        <Navbar user={user} />
        <div className="container mt-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
