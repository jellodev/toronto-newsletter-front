import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header>
      <nav className={`navbar sticky`}>
        <Link to="/home">Home</Link>
        <Link to="/feed">Feed</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
};

export default Header;
