import React from 'react';
import Home from '../docs/home.mdx';

const HomePage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col col-lg-9 col-sm-12 col-xs-12">
          <Home />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
