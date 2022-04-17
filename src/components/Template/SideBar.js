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
      <p>Hi, I&apos;m Saharukh. I like building things.
        I am a <a href="http://cs.aiub.edu/">Computer Science and Engineering</a> student, and
        Software Engineer @ <a href="https://munchies.com.bd/">Munchies</a>.
        Before Munchies I was
        at <a href="https://cookspace.co/">Cookspace</a>
        {/* , <a href="https://planet.com">Planet</a>
        , <a href="https://planetaryresources.com">Planetary Resources</a>
        , <a href="https://facebook.com">Facebook</a>
        , and <a href="https://seds.org">SEDS</a>. */}
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
