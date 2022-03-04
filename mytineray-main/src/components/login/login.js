import React from 'react';
import "../login/login.css"; 
import { Link } from "react-router-dom";
import axios from 'axios';

const login = () => {
    async function loginUser(event){
        // console.log(event.target[0].value)
        event.preventDefault()
        const userData = {
          email:event.target[0].value,
          password:event.target[1].value,
      }
        // console.log(NuevoUsuario)
      
      // 
      
        await axios.post("http://localhost:4000/api/signin",{userData})
         .then(response=>
         displayMessages(response.data)
        // console.log(response.data)
        )
        function displayMessages(data){
          console.log(data) // continua
        //   dispatch 
       
       
        }
    }
    return (
        
        <>
        
        

    <form className="formulario" onSubmit={loginUser}>
    
    <h1>Sign In</h1>
     <div className="contenedor">
     
     
         
         <div className="input-contenedor">
         <i className="fas fa-envelope icon"></i>
         <input type="text" placeholder="Email"/>
         
         </div>
         
         <div className="input-contenedor">
        <i className="fas fa-key icon"></i>
         <input type="password" placeholder="Password"/>
         
         </div>
         <input type="submit" value="Login" className="button"/>
         <p>By signing up, you agree to our Terms of Use and Privacy Policy.</p>
         <p>You do not have an account?<Link to={"/Signup"}><i className="link" href="#">Sign up </i></Link>  </p>
     </div>
    </form>

        </>
    )
}

export default login

