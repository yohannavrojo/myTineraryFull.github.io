import React from 'react';
import './Form1.css';
import { Link } from "react-router-dom";
// import { actionType } from "../../reducer";
// import { useStateValue } from '../../StateProvider';
import axios from 'axios';
// import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

const FormSignup = () => {
 /* SignUp con Google start */
  
 const responseGoogle = async (response) => {
    console.log(response);
    const googleUser = {
      firstname: response.profileObj.givenName,
      lastname: response.profileObj.familyName,
      email: response.profileObj.email,
      password:response.googleId ,
      google:true,
      from:"Google"
    }
    
    await axios.post("http://localhost:4000/api/signup",{googleUser} )
   .then(response=>    
   displayMessages(response.data)
 )
 function displayMessages(data){
  if(data.success==="falseVAL"){
    console.log(data)
   console.log(data.response.error.details)
  alert(data.response.error.details.map(error=>error.message))
  }else if(data.success===true){
   
    console.log(data)
  }
 }
    
  } 

/* sign up de facebook */

// const responseFacebook = async (response) => {
//   console.log(response);

//   const NuevoUsuario = {
//                       email:response.email,
//                       firstname:response.name,
//                       lastname:"facebook",            
//                       password:response.id + "aB", 
//                       from:"Facebook"    
//   }  

//     await axios.post("http://localhost:4000/api/signup",{NuevoUsuario} )
//     .then(response=> //alert(response.data.response)) 


//     displayMessages(response.data)
//     )

    
//     function displayMessages(data){
//     if(data.success==="falseVAL"){
//         console.log(data)
//         console.log(data.response.error.details)
//         alert(data.response.error.details.map(error=>error.message))
//     }else if(data.success===true){
        
//     console.log(data)
//     }
//   }
// }



async function NewUser(event){
  console.log(event)
  event.preventDefault()
 
  const  NuevoUsuario = {firstname:event.target[0].value,
    lastname:event.target[1].value,
    email:event.target[2].value,
    password:event.target[3].value,
    google:false
}
  console.log(NuevoUsuario)

  await axios.post("http://localhost:4000/api/signup",{NuevoUsuario})
   .then(response=>
   displayMessages(response.data),
  
  )
  function displayMessages(data){
    if(data.success==="falseVAL"){
      console.log(data)
      console.log(data.response.error.details)
    alert(data.response.error.details.map(error=>error.message))
    
  } else if(data.success==="trueUE"){
     console.log(data)
    }
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
            // value={values.firstname}
            // onChange={handleChange}
          />
         
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Lastname</label>
          <input
            className='form-input'
            type='text'
            name='lastname'
            placeholder='Enter lastname'
            // value={values.lastname}
            // onChange={handleChange}
          />
         
        </div>
        
        
        
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            // value={values.email}
            // onChange={handleChange}
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
            // value={values.password}
            // onChange={handleChange}
          />
         
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Confirm Password</label>
          <input
            className='form-input'
            type='password'
            name='password2'
            placeholder='confirm password'
            // value={values.password2}
            // onChange={handleChange}
          />
         
        </div>
        <button className='form-input-btn' type='submit'>
        SIGN UP
        </button>
        <span className='form-input-login'>
        Do you already have an account? Enter  <Link to={"/Signin"}>here
                  
                
              </Link>
        </span>
      </form>

      <GoogleLogin
          clientId="971845975096-d96pfrveho1431brgjcu4m4a2leibuei.apps.googleusercontent.com"
          buttonText="login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
  cookiePolicy={'single_host_origin'}/>,

{/* <FacebookLogin
          appId="1062880977629069"
          autoLoad={true}
          fields="name,email,picture"        
          callback={responseFacebook} /> */}

    </div>
  );
}

export default FormSignup