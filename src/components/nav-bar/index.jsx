import React from 'react';
import { Link } from 'react-router-dom';
import './nav-bar.css';

function NavBar({ links }) {
  return (
    <nav className="navbar">
      {links.map((link) => (
        <Link key={link.path} to={link.path}>{link.name}</Link>
      ))}
    </nav>
  );
}

export default NavBar;