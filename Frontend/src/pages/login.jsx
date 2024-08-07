/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {person,email,password} from '../assets';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [action, setAction] = useState('Login');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting form");
    console.log(action);
    
    let url = action === 'Sign Up' ? 'http://localhost:8080/auth/signup': 'http://localhost:8080/auth/login';
    
    console.log(action);
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        const data = await response.json();
        
        if (action === 'Login') {
          console.log(data.user)
          onLogin(data.user);
          navigate('/home');
        } else {
          alert(data.message);
          setAction('Login');
          setFormData({name: '', email:'', password:'' }); 
          alert('Sign up successful! Please log in with your new credentials.');
        }
      } else {
        const errorData = await response.json();
        setFormData({name: '', email:'', password:'' }); 
        console.error(`${action} failed:`, errorData.message);
        alert(`${action} failed: ${errorData.message}`);
      }
    } catch (error) {
      console.error(`There was an error during ${action}:`, error);
      alert(`An error occurred. Please try again.`);
    }
  };

  return (
    <form className='flex flex-col m-auto bg-[#fff] pb-[30px] w-[40%] mt-6 border rounded-md' onSubmit={handleSubmit}>
      <div className='flex flex-col items-center gap-[9px] w-[100%] mt-[30px]'> 
        <div className='text-[#3c009d] text-3xl font-bold'>{action}</div>
        <div className='w-[61px] h-[6px] bg-[#3c009d]'></div>
      </div>
      <div className='mt-[55px] flex flex-col gap-[25px]'>
        {action === "Sign Up" && (
          <div className='flex items-center m-auto w-[310px] h-[55px] bg-[#eaeaea] rounded-md'>
            <img src={person} alt='' className='my-[0px] mx-[30px]'/>
            <input 
              type='text' 
              name='name'
              value={formData.name}
              onChange={handleInputChange}
              required 
              className='h-[50px] w-[400px] bg-transparent outline-none border-none text-[#797979] text-[13px]' 
              placeholder='Name'
            />
          </div>
        )}
        
        <div className='flex items-center m-auto w-[310px] h-[55px] bg-[#eaeaea] rounded-md'>
          <img src={email} alt='' className='my-[0px] mx-[30px]'/>
          <input 
            type='email' 
            name='email'
            value={formData.email}
            onChange={handleInputChange}
            required 
            className='h-[50px] w-[400px] bg-transparent outline-none border-none text-[#797979] text-[13px]' 
            placeholder='Email Id'
          />
        </div>
        <div className='flex items-center m-auto w-[310px] h-[55px] bg-[#eaeaea] rounded-md'>
          <img src={password} alt='' className='my-[0px] mx-[30px]'/>
          <input 
            type='password' 
            name='password'
            value={formData.password}
            onChange={handleInputChange}
            required 
            className='h-[50px] w-[400px] bg-transparent outline-none border-none text-[#797979] text-[13px]' 
            placeholder='Password'
          />
        </div>
      </div>
      <div className='pl-[90px] mt-[25px] text-[#797979] text-[13px]'>
        {action === 'Login' ? (
          <>
            New Member? <span className='text-[#4c00b4] cursor-pointer ml-[10px]' onClick={() => setAction('Sign Up')}>Sign Up</span>
          </>
        ) : (
          <>
            Already have an account? <span className='text-[#4c00b4] cursor-pointer ml-[10px]' onClick={() => setAction('Login')}>Login</span>
          </>
        )}
      </div>
      
      <div className='flex gap-[30px] my-[60px] mx-auto'>
        <button 
          type="submit"
          className='flex justify-center items-center w-[100px] h-[40px] text-[13px] font-bold cursor-pointer rounded-md bg-[#4c00b4] text-[#fff]'
        >
          {action}
        </button>
      </div>
    </form>
  );
};

export default Login;