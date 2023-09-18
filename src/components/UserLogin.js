import React, { useState } from 'react';

function UserLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [signupSuccess, setSignupSuccess] = useState(false);
  const [loginError, setLoginError] = useState('');

  const handleLogin = () => {
    // Add login logic here (e.g., validate credentials, set user session)
    // Replace the following with your authentication logic
    if (email === 'user@example.com' && password === 'password') {
      alert('Login successful!');
    } else {
      setLoginError('Invalid credentials. Please try again.');
    }
  };

  const handleSignUp = () => {
    // Add signup logic here (e.g., create a new user account)
    // Replace the following with your signup logic
    alert('Sign up successful!');
    setSignupSuccess(true);
    setEmail('');
    setPassword('');
    setIsSignUp(false);
  };

  return (
    <div>
      <h2>User {isSignUp ? 'Sign Up' : 'Login'}</h2>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {isSignUp ? (
        <button onClick={handleSignUp}>Sign Up</button>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
      {loginError && <p>{loginError}</p>}
      {signupSuccess && <p>Sign up successful! You can now log in.</p>}
      <p>
        {isSignUp
          ? 'Already have an account?'
          : "Don't have an account?"
        }{' '}
        <button onClick={() => setIsSignUp(!isSignUp)}>
          {isSignUp ? 'Login' : 'Sign Up'}
        </button>
      </p>
    </div>
  );
}

export default UserLogin;
