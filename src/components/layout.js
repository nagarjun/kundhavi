import React from 'react';
import PropTypes from 'prop-types';

import Header from './header';

const Layout = ({ children }) => {
  return (
    // jshint ignore:start
    <div id="page" className="site">
      <Header />
      <div className="site-content-contain">
        <div id="content" className="site-content">
          <div id="primary" className="content-area">
            <main id="main" className="site-main" role="main">
              <article className="page">
                <div className="entry-content">{children}</div>
              </article>
            </main>
          </div>
        </div>
      </div>
    </div>
    // jshint ignore:end
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
