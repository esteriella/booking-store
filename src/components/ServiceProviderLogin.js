import { useState } from 'react';

function ServiceProviderLogin({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form data and perform service provider login logic

    // Simulate successful login for demonstration
    const loggedInUser = {
      id: 1,
      name: 'Service Provider',
      role: 'service-provider',
    };

    // Call onLogin callback with logged-in user
    onLogin(loggedInUser);

    // Reset form fields
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h2>Service Provider Login</h2>
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

        <button type="submit">Login as Service Provider</button>
      </form>
    </div>
  );
}

export default ServiceProviderLogin;
