import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleBookDemoClick = () => {
    navigate('/book-demo');
  };

  return (
    <nav className="container-body">
      <header className="container-header">
        <div className="left-logo">
          <Link to="/">
            <img
              src="https://sklassics.com/wp-content/uploads/2024/06/Sklassics.png"
              alt="logo"
              style={{ cursor: 'pointer' }}
            />
          </Link>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="menu-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <div className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          <ul className="nav-links">
            <li><a href="/howitworks">How it works</a></li>
            <li><a href="/Features">Features</a></li>
            <li><a href="/Blog">Blog</a></li>
            <li><a href="/FAQ">FAQ</a></li>
          </ul>

          <div className="button-login">
            <button onClick={handleLoginClick} className="header-button">Login</button>
            <button onClick={handleBookDemoClick} className="button-book">Book a demo</button>
          </div>
        </div>
      </header>
    </nav>
  );
};

export default Navbar;

