import React, { useState, useEffect } from 'react';
import axios from 'axios';

function VendorLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [signupSuccess, setSignupSuccess] = useState(false);
  const [loginError, setLoginError] = useState('');

  const apiUrl = 'https://your-api-url.com/vendors'; // Replace with your API URL
  const localVendorsPath = 'vendors.json'; // Path to your local vendors JSON file

  const fetchLocalVendors = async () => {
    try {
      const response = await axios.get(localVendorsPath);
      return response.data;
    } catch (error) {
      console.error('Error fetching local vendors data:', error);
      return [];
    }
  };

  const handleLogin = async () => {
    try {
      const localVendors = await fetchLocalVendors();

      // Make a GET request to fetch vendor data from the API
      const response = await axios.get(apiUrl);
      const apiVendors = response.data;

      // Combine local and API vendor data
      const allVendors = [...localVendors, ...apiVendors];

      // Check if the entered email and password match any vendor's credentials
      const matchedVendor = allVendors.find(
        (vendor) => vendor.email === email && vendor.password === password
      );

      if (matchedVendor) {
        // Perform login logic here (e.g., store user session)
        // Redirect to the vendor dashboard or perform any other desired action
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
      // Create a new vendor object with the entered data
      const newVendor = {
        email,
        password,
        // Add other vendor data fields here as needed
      };

      // Fetch the existing local vendors data
      const localVendors = await fetchLocalVendors();

      // Add the new vendor data to the existing data
      localVendors.push(newVendor);

      // Write the updated data back to the local vendors JSON file
      await axios.put(localVendorsPath, localVendors);

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
    fetchLocalVendors(); // Fetch local vendors data when the component mounts
  }, []);

  return (
    <div>
      <h2>Vendor {isSignUp ? 'Sign Up' : 'Login'}</h2>
      {/* Input fields for email and password */}
      {/* Login and signup buttons */}
      {/* Display loginError and signupSuccess messages */}
      {/* Toggle between login and signup */}
    </div>
  );
}

export default VendorLogin;
