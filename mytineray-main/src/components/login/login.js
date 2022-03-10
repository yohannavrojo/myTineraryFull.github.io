import React from "react";
import "../login/login.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { actionType } from "../../reducer";
import { useStateValue } from '../../StateProvider';

const login = () => {
  const [{ user }, dispatch] = useStateValue()
 

  async function loginUser(event) {
    event.preventDefault();
    const userData = {
      email: event.target[0].value,
      password: event.target[1].value,
    };

    await axios
      .post("http://localhost:4000/api/signin", { userData })
      .then(response => 
        
        displayMessages(response.data)
      
      
      )

    function displayMessages(data) {
      
      if (!data.success) {
        console.log(data.error)
    }
      
    else { console.log(data.response) }
       
    dispatch({
          type: actionType.USER,
          user: data.response,
        });
      

    }

    console.log(user) //trae vacio preguntar 
  }
  return (
    <>
      <form className="formulario" onSubmit={loginUser}>
        <h1>Sign In</h1>
        <div className="contenedor">
          <div className="input-contenedor">
            <i className="fas fa-envelope icon"></i>
            <input type="text" placeholder="Email" />
          </div>

          <div className="input-contenedor">
            <i className="fas fa-key icon"></i>
            <input type="password" placeholder="Password" />
          </div>
          <input type="submit" value="Login" className="button" />
          <p>
            By signing up, you agree to our Terms of Use and Privacy Policy.
          </p>
          <p>
            You do not have an account?
            <Link to={"/Signup"}>
              <i className="link" href="#">
                Sign up{" "}
              </i>
            </Link>{" "}
          </p>
        </div>
      </form>
    </>
  );
};

export default login;
