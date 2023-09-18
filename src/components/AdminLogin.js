import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [signupSuccess, setSignupSuccess] = useState(false);
  const [loginError, setLoginError] = useState('');

  const localAdminsPath = 'admins.json'; // Path to your local admins JSON file

  const fetchLocalAdmins = async () => {
    try {
      const response = await axios.get(localAdminsPath);
      return response.data;
    } catch (error) {
      console.error('Error fetching local admins data:', error);
      return [];
    }
  };

  const handleLogin = async () => {
    try {
      const localAdmins = await fetchLocalAdmins();

      // Check if the entered email and password match any admin's credentials
      const matchedAdmin = localAdmins.find(
        (admin) => admin.email === email && admin.password === password
      );

      if (matchedAdmin) {
        // Perform login logic here (e.g., store user session)
        // Redirect to the admin dashboard or perform any other desired action
        alert('Login successful!');
      } else {
        setLoginError('Invalid credentials. Please try again.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setLoginError('An error occurred while logging in.');
    }
  };

  const handleSignUp = async () => {
    try {
      // Create a new admin object with the entered data
      const newAdmin = {
        email,
        password,
        // Add other admin data fields here as needed
      };

      // Fetch the existing local admins data
      const localAdmins = await fetchLocalAdmins();

      // Add the new admin data to the existing data
      localAdmins.push(newAdmin);

      // Write the updated data back to the local admins JSON file
      await axios.put(localAdminsPath, localAdmins);

      setSignupSuccess(true);
      setEmail('');
      setPassword('');
      setIsSignUp(false);
    } catch (error) {
      console.error('Error during signup:', error);
      setSignupSuccess(false);
    }
  };

  useEffect(() => {
    fetchLocalAdmins(); // Fetch local admins data when the component mounts
  }, []);

  return (
    <div>
      <h2>Admin {isSignUp ? 'Sign Up' : 'Login'}</h2>
      {/* Input fields for email and password */}
      {/* Login and signup buttons */}
      {/* Display loginError and signupSuccess messages */}
      {/* Toggle between login and signup */}
    </div>
  );
}

export default AdminLogin;
