import React from 'react';
import { Outlet } from 'react-router-dom';

const PrivateRouter2: React.FC = () => {
  return (
    <div>
      <h1>Admin Area</h1>
      <Outlet />
    </div>
  );
};

export default PrivateRouter2;