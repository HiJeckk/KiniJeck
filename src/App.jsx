// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar'; // Mengimpor komponen Navbar
import HomePage from './components/Home'; // Mengimpor komponen HomePage

const App = () => {
  return (
    <div>
      <Navbar />
      <HomePage />
    </div>
  );
};

export default App;
