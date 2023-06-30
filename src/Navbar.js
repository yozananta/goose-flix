import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="Navbar">
      <div className="Navbar-logo">wvgs-moviemaniac</div>
      <ul className="Navbar-menu">
        <li className="Navbar-menu-item active">Beranda</li>
        <li className="Navbar-menu-item Navbar-search">
          <input type="text" placeholder="Cari film kesayangan..." className="Navbar-search-input" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
