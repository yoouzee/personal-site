import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Yu Ze's personal website. Singapore based NYU & LSE graduate, "
    + 'VP of Engineering at Smile Identity, co-founder of Arthena and Matroid, and YC Alumni.'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">Hellu!</Link></h2>
          <p>
            Welcome to my website :)
          </p>
        </div>
      </header>
      <p> Nice to meet you! I hope to share some projects that I&apos;m working on here and
        I hope you enjoy them.
      </p>
      <p> Website adapted from <Link to="https://github.com/mldangelo/personal-site">Michael D&apos;Angelo</Link>.</p>
    </article>
  </Main>
);

export default Index;
