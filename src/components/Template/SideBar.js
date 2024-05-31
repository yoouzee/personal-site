import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.png`} alt="" />
      </Link>
      <header>
        <h2>Yu Ze 宇泽</h2>
        <p><a href="mailto:yuzetoh@gmail.com">yuzetoh@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hey there! I&apos;m Yu Ze, but feel free to call me yoouzee if that&apos;s easier.
        I&apos;m a proud graduate of NYU and LSE, and I&apos;m currently thriving in
        Singapore&apos;s sunshine! When I&apos;m not working on all things geospatial in the office,
        you&apos;ll find me cheering for Liverpool or playing sports.
      </p>

      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Toh Yu Ze <Link to="/">yoouzee.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
