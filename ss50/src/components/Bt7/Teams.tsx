import React from 'react';
import { Outlet } from 'react-router-dom';

const Teams: React.FC = () => {
  return (
    <div>
      <h1>Teams Page</h1>
      <Outlet />
    </div>
  );
};

export default Teams;
