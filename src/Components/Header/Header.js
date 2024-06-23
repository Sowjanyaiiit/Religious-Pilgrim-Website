import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="container">
      <header className="header">
      <img src="/Assets/logo.png" alt="Varanasi Logo" className="logo" />
        <nav className="nav">
          <a href="#home">HOME</a>
          <a href="#tourist-places">TOURIST PLACES</a>
          <a href="#temples">TEMPLES</a>
          <a href="#ghats">GHATS</a>
          <a href="#legends">LEGENDS BORN IN VARANASI</a>
          <a href="#lord-shiva">LORD SHIVA</a>
        </nav>
      </header>
      <main className="main-content">
        <h1>Varanasi - The Spiritual Capital of India!</h1>
        <p>
          Varanasi is a city in India, situated on the banks of the holy River Ganga. It is a place where old traditions, religious fervor, and vibrant energy come together like nowhere else. Varanasi has a past that goes back more than thousand years. It is a city full of legends and mythological stories. In Varanasi, faith, history, and culture all blend together. Varanasi is one of the holiest places for Hindus, and it is full of ancient holy temples. As you walk down its small, winding streets, you’ll feel like you’ve gone back in time. Witnessing the daily ceremonies and rituals, vibrations of prayers and chants that have been going on for hundreds of years, will make you lost in the spiritual world.
        </p>
      </main>
      <img src="/Assets/Varanasi.jpg" alt="Varanasi"  className="background-image" />
    </div>
  );
};

export default Header;
