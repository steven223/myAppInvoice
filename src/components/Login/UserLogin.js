import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import './UserLogin.css';

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  const navigate = useNavigate();  // Initialize navigate

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'admin@gmail.com' && password === 'admin') {
      setLoginSuccess(true);
      setTimeout(() => {
        setLoginSuccess(false);
        navigate('/homepage');  // Redirect to Homepage after login success
      }, 3000);
    } else {
      setLoginSuccess(false);
      alert('Invalid credentials, please try again.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              placeholder="Enter your email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              placeholder="Enter your password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
      {loginSuccess && <div className="login-success">Login Successful! Redirecting...</div>}
    </div>
  );
}

export default UserLogin;
