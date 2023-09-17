import React, { useState } from 'react';

function CustomerLogin({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form data and perform customer login logic

    // Simulate successful login for demonstration
    const loggedInUser = {
      id: 1,
      name: 'Customer',
      role: 'customer',
    };

    // Call onLogin callback with logged-in user
    onLogin(loggedInUser);

    // Reset form fields
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h2>Customer Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /><br/><br/>

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /><br/><br/>

        <button type="submit">Login as Customer</button>
      </form>
    </div>
  );
}

export default CustomerLogin;
