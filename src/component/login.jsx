import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './signup.scss';

const Login = () => {

const [inputL,setInput] = useState({
    email:'',
    password:'',
  }); 

  const [exists,setExists] = useState(false);

  const handleOnChange= (event)=>{
    const name = event.target.name
    const value = event.target.value
    setInput(({...inputL,[name]:value}))

 }

 const handleSubmit = async (e)=>{
     e.preventDefault();

     try {
      const response = await axios.post('http://localhost:4000/loginDetail', inputL,{
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.data) {
        // Login successful, redirect to home page

        window.location.href = '/';
        console.log(response);
      } else {
        alert('Invalid email or password');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred while trying to log in. Please try again later.');
    }
  };



  

//console.log(exists);
console.log(inputL);
  return (
    <div className='Login-Container'>
      <div id='title-login'>Login</div>

      <div id ='log-img1'>
        <img id='img-log' src='https://i.pinimg.com/originals/70/a6/ac/70a6acb26009ee325d832e3f38ba07a7.png' alt='log-img'></img>
      </div>
      <div className='login-credential'>
        <form onSubmit={handleSubmit}>
        <div id = 'in1'>
         <label>Email</label> 
        <input type = 'email' value={inputL.email} name = 'email' placeholder='enter email' onChange ={handleOnChange}></input>
        </div> 
        <div id = 'in2'>
          <label>Password</label>
        <input type = 'password' value={inputL.password} name = 'password' placeholder='enter password' onChange ={handleOnChange}></input>
        </div>
        <button id = 'but1' type='submit' >Login</button>
        </form>
      </div>
      <p id = 'p1'>Don't have an account <NavLink to='/register'> <span>sign up here!</span></NavLink></p>
      </div>
  )
}

export default Login