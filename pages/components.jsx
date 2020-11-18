import React from 'react';
import Components from '../docs/components.mdx';

const ComponentsPage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col col-lg-9 col-sm-12 col-xs-12">
          <Components />
        </div>
      </div>
    </div>
  );
};

export default ComponentsPage;