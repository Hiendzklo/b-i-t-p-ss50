import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRouter: React.FC = () => {
  const isAuthenticated = localStorage.getItem('auth') === 'true';
  const role = localStorage.getItem('role');

  const isAuthorized = role === 'Admin';

  return isAuthenticated && isAuthorized ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
