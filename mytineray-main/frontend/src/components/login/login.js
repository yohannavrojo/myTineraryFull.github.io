import React from "react";
import "../login/login.css";
import { Link } from "react-router-dom";
import Facebooki from "../Botonsigning/Facebooki";
import Googlei from "../Botonsigning/Googlei";
import axios from "axios";
import { actionType } from "../../reducer";
import { useStateValue } from '../../StateProvider';
import swal from "sweetalert";


const Login = () => {
  const [{ user }, dispatch] = useStateValue()
 
  async function loginUser(event) {
    event.preventDefault(); // previene el comportamiento por defecto del botón submit, que es limpiar el formulario
    const userData = {
      email: event.target[0].value,
      password: event.target[1].value,
    };

    await axios
      .post("https://mytinerary-yohanna.herokuapp.com/api/signin", { userData })
      .then(response => 
        
        displayMessages(response.data)
      
      
      )

    function displayMessages(data) {
      console.log(data)
      if (!data.success) {
        swal({
          title:data.mensaje,
          icon:"error",
          buttons: "ok"
      })
 
      
    }
      
    else { 
     
     localStorage.setItem("token",data.response.token)
      swal({
        title:data.mensaje,
        icon:"success",
        buttons: "ok"
    })
    dispatch({
          type: actionType.USER,
          user: data.response,
        });
      

    }
  }

    //trae vacio preguntar 
  }
  return (
    <>
    <div className="fondo-login">
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
          
          
          <Facebooki/>
          <Googlei/>
          </p>
          
          
        </div>
       



      </form>
      </div>
    </>
  );
};

export default Login;
