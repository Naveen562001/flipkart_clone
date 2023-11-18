import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import './register.scss';



const Register = () => {

const [user ,setUser] =useState([]);
const [isRegistered, setIsRegistered] = useState(false);


useEffect(()=>{
   
},[isRegistered])

    const handleOnchange= (event)=>{
       const name = event.target.name
       const value = event.target.value
       setUser((values)=> ({...values,[name]:value}))

    }



    const handleOnSubmit= async(e) =>{
        e.preventDefault()
        const formInput = new FormData();

        formInput.append('username',user.UserName)
        formInput.append('email',user.email)
        formInput.append('password',user.password)

            try{
                
                const response = await axios.post('http://localhost:4000/inputs', formInput);
                if (response.data) {
                    // Login successful, redirect to home page
            
                    window.location.href = '/login';
                    console.log(response);
                  } else {
                    alert('failed to register');
                  }
                console.log(response.data);
            }
            catch(err){
                console.error(err)
            }
       
        }
console.log(user);
  return (
    <div className='register-container'>
        <div id='title-register'>Register</div>

            <div id ='log-img2'>
            <img id='img-log' src='https://i.pinimg.com/originals/70/a6/ac/70a6acb26009ee325d832e3f38ba07a7.png' alt='log-img'></img>
            </div>
        <div className ='form-container'>
            <form onSubmit={handleOnSubmit}>
                <div id = 'in1'>
                    <label>UserName</label>
                <input type='text' name='UserName' value={user.UserName} placeholder='Enter UserName' onChange={handleOnchange}></input>
                </div>
                <div id = 'in2'>
                <label>Email</label>
                <input type='email' name='email' value={user.email} placeholder='Enter UserName' onChange={handleOnchange}></input>
                </div>
                <div id = 'in3'>
                <label>Password</label>
                <input type='password' name='password' value={user.password} placeholder='Enter UserName' onChange={handleOnchange}></input>
                </div>
                <button id ='but1' type = 'submit'>register</button>
            </form>
        </div>
                <p id ='p1'>Already registered <NavLink to ='/login'><span>login here!</span></NavLink></p>
        <div>
            
        </div>
    </div>
  )
}

export default Register