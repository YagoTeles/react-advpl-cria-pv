// PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const PrivateRoute = ({ children }) => {
  const { hash } = useAuth();

  if (!hash) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;