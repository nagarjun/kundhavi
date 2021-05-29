import { Link } from 'gatsby';
import React from 'react';

import ImgLogo from '../images/logo.png';
import ImgLogo2x from '../images/logo2x.png';

const Header = () => (
  // jshint ignore:start
  <header id="masthead" className="site-header standard sticky" role="banner">
    <div className="container">
      <div id="site-branding">
        <Link to="/" className="logo-brand">
          <img className="logo" src={ImgLogo} alt="Logo" />
          <img className="retina-logo" src={ImgLogo2x} alt="Retina Logo" />
        </Link>
      </div>
      <span id="ham-trigger-wrap">
        <span className="ham-trigger">
          <span></span>
        </span>
      </span>
      <nav id="site-navigation" className="main-navigation" role="navigation" aria-label="Top Menu">
        <ul id="top-menu" className="menu">
          <li>
            <Link to="/">Projects</Link>
          </li>
          <li>
            <Link to="/">About Me</Link>
          </li>
          <li>
            <Link to="/">Blog</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  // jshint ignore:end
);

export default Header;
