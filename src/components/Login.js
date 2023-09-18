import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div>
      <h1>Login</h1>
      <Link to="/vendor-login">Vendor Login</Link>
      <Link to="/admin-login">Admin Login</Link>
      <Link to="/user-login">User Login</Link>
    </div>
  );
}

export default Login;
