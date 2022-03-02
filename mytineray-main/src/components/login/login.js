import React from 'react';
import "../login/login.css"; 
import { Link } from "react-router-dom";

const login = () => {
    return (
        
        <>
        
        

    <form className="formulario">
    
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

