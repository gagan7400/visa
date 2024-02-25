import React, { Fragment } from "react";
import { Navigate, Route } from "react-router-dom";
import Cookies from 'js-cookie';

const ProtectedRoute = ({ component: Component }) => {
  const storedcokkies = Cookies.get('token');
  if (storedcokkies !== "true") {
    return <Navigate to='/adminlogin' replace={true} />
  }
  return (
    <>
      <Component />
    </>
  );
};

export default ProtectedRoute;