import React, { useState } from 'react';
import LoginForm from './LoginForm';

const Auth = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const handleLoginSuccess = () => {
    setLoggedIn(true);
  }
  if (loggedIn) {
    return children;
  } else {
    return <LoginForm onLoginSuccess={handleLoginSuccess} />;
  }
}
export default Auth;