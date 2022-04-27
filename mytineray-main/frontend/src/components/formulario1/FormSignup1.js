import React from 'react';
import './Form1.css';
import { Link } from "react-router-dom";
 import Facebook from "../Botonsignupg/Facebook";
import Google from "../Botonsignupg/Google";
import axios from 'axios';
import swal from "sweetalert";


const FormSignup = () => {
  
async function NewUser(event){
  console.log(event)
  event.preventDefault()
 
  const  NuevoUsuario = {firstname:event.target[0].value,
    lastname:event.target[1].value,
    email:event.target[2].value,
    password:event.target[3].value,
    from:"signup",
}

  await axios.post("https://mytinerary-yohanna.herokuapp.com/api/signup",{NuevoUsuario})
   .then(response=>
   displayMessages(response.data),
  
  )
  function displayMessages(data){
  //  alert (data.mensaje)
  // localStorage.setItem("token",data.response.token)
   swal({
    title:data.mensaje,
    icon:"success",
    buttons: "ok"
})
   console.log(data)
    
  }
}

  return (
    <div className='form-content-right'>
      <form  className='form' noValidate onSubmit={NewUser}>
        <h1>
        SIGN UP
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Firstname</label>
          <input
            className='form-input'
            type='text'
            name='firstname'
            placeholder='Enter firstname'
           
          />
         
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Lastname</label>
          <input
            className='form-input'
            type='text'
            name='lastname'
            placeholder='Enter lastname'
           
          />
         
        </div>
        
        
        
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
          
          />
         
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='
            Enter your password'
           
          />
         
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Confirm Password</label>
          <input
            className='form-input'
            type='password'
            name='password2'
            placeholder='confirm password'
          
          />
         
        </div>
        <button className='form-input-btn' type='submit'>
        SIGN UP
        </button>

        
        <span className='form-input-login'>
        Do you already have an account? Enter  <Link to={"/Signin"}>here
                  
                
              </Link>
              
            
        </span>
           <Facebook/> 
          
          <Google/> 
      </form>

    </div>
  );
}

export default FormSignup