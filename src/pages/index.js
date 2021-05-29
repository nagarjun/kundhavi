import * as React from 'react';

import Seo from '../components/seo';
import Layout from '../components/layout';

const IndexPage = () => {
  return (
    // jshint ignore:start
    <Layout>
      <Seo title="Projects" />

      <div className="container m-t-35">
        <div className="row">
          <div className="col-sm-12 col-xl-9">
            <div className="heading-block">
              <h1 className="block-size-1">We combine strategy &amp; technology to solve complex business challenges in the design industry.</h1>
            </div>
          </div>
        </div>
      </div>
    </Layout>
    // jshint ignore:end
  );
};

export default IndexPage;
