import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const handelLogout = () => {
    localStorage.setItem('isUserLoggedIn', '');
    navigate('/');
  };
  return (
    <div>
      <h1>homepage</h1>
      <button onClick={handelLogout}>logout</button>
    </div>
  );
};
export default Home;
