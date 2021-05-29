import React from 'react';
import PropTypes from 'prop-types';

import Header from './header';

const Layout = ({ children }) => {
  return (
    // jshint ignore:start
    <div id="page" className="site">
      <Header />
      {children}
    </div>
    // jshint ignore:end
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
