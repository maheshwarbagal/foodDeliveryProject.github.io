import React, { useState } from 'react';
import "./LoginPopup.css"
import { assets } from '../../assets/assets';

const LoginPopup = ({setShowLogin}) => {

  const [currState , setCurrState] = useState("")

  return (
    <div className='login-popup'>
       <form className='login-popup-container'>
        <div className='login-popup-title'>
          <h2>{currState}</h2>
          <img onClick={()=>{setShowLogin(false)}} src={assets.cross_icon}></img>
        </div>
        <div className='login-popup-inputs'>
          {currState==="login"?<></>: <input type='text' placeholder='Your Name' required />}
          
          <input type='text' placeholder='Your Email' required></input>
          <input type='password' placeholder='password' required></input>
        </div>
        <button>{currState==="Sign up" ? "Create Account" : "Login"}</button>
        <div className='login-popup-condition'>
          <input type='checkbox' required />
          <p>By continuing , I agree to the terms of use & privacy policy</p>
        </div>
        {currState==="Login" 
        ?<p>Create a Account? <span onClick={()=>{setCurrState("Sign up")}}>Click here</span></p>
        :<p>Already have Account? <span onClick={()=>{setCurrState("Login")}}>Login here</span></p>
        }
       </form>
    </div>
  );
}

export default LoginPopup;
