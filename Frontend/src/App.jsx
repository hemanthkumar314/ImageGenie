/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { BrowserRouter, Link, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import { logo } from './assets';
import { Home, CreatePost, Login } from './pages';

const Header = ({ userName, onLogout }) => {
  return (
    <header className="w-full flex justify-between items-center bg-white sm:px-8 py-4 border-b border-b-[#e6ebf4]">
      <Link to='/home'>
        <img src={logo} alt='logo' className='w-28 object-contain'/>
      </Link>
      <Link to='/create-post' className='font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md ml-auto mr-4'>
        Create
      </Link>
      <button onClick={onLogout} className='font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md'>
        Log Out
      </button>
    </header>
  );
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  const handleLogin = (name) => {
    setIsLoggedIn(true);
    setUserName(name);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName('');
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          isLoggedIn ? 
          <Navigate to="/home" /> : 
          <Login onLogin={handleLogin} />
        } />
        <Route path='/home' element={
          isLoggedIn ? 
          <>
            <Header userName={userName} onLogout={handleLogout} />
            <Home userName={userName} />
          </> : 
          <Navigate to="/" />
        } />
        <Route path='/create-post' element={
          isLoggedIn ? 
          <>
            <Header userName={userName} onLogout={handleLogout} />
            <CreatePost userName={userName} />
          </> : 
          <Navigate to="/" />
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App;