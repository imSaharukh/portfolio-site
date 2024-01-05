import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>S A Saharukh</h2>
        <p><a href="mailto:mail@saharukh.com">mail@saharukh.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>3+ Years Expertise as Software Engineer | 💻 Backend Alchemist & Flutter Maestro | Architecting Robust Systems, Optimizing Processes | 📱 Cross-Platform Mobile Guru | 🚀 Tech Impact Enthusiast
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; S A Saharukh <Link to="/">saharukh.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
