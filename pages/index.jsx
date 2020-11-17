import React from 'react';
import Home from '../docs/home.mdx';

const HomePage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col col-3">
          Nav
          <ul>
            <li>List</li>
            <li>List</li>
            <li>List</li>
          </ul>
        </div>
        <div className="col col-9">
          <Home />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
