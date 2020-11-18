import React from 'react';
import APIkeys from '../docs/APIKeys.mdx';

const APIKeysPage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col col-lg-9 col-sm-12 col-xs-12">
          <APIkeys />
        </div>
      </div>
    </div>
  );
};

export default APIKeysPage;
