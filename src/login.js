import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BasicFrom = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const isUserLoggedIn = localStorage.getItem('isUserLoggedIn');

  // * Function to set key word isUserLoggedin local storage for reference if the user is logged in or not
  const handleSetLocalStorage = () => {
    navigate('/home');
    localStorage.setItem('isUserLoggedIn', 'logedIn');
  };

  useEffect(() => {
    if (isUserLoggedIn === 'logedIn') {
      navigate('/home');
    }
  }, []);

  return (
    <>
      <from action="">
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="passwordl"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleSetLocalStorage}> login</button>
      </from>
    </>
  );
};

export default BasicFrom;
