// src/components/Navbar.jsx
import React from 'react';
import './Navbar.css'; // Mengimpor file CSS terpisah
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faShoppingCart, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>KiNi</h1>
      <input type="text" placeholder="Cari produk atau informasi..." />
      <nav>
        <a href="#home">
          <FontAwesomeIcon icon={faHome} /> {/* Ikon untuk Home */}
        </a>
        <a href="#keranjang">
          <FontAwesomeIcon icon={faShoppingCart} /> {/* Ikon untuk Keranjang */}
        </a>
        <a href="#contact">
          <FontAwesomeIcon icon={faPhone} /> {/* Ikon untuk Contact Support */}
        </a>
        <a href="#login">
          <FontAwesomeIcon icon={faUser} /> {/* Ikon untuk Login */}
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
