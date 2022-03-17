import React from 'react';
import FacebookLogin from "react-facebook-login";
import axios from 'axios';


function Facebook() {

const responseFacebook = async (response) => {

   const NuevoUsuario = {
       firstname: response.name,
       lastname:  "facebook",
       email: response.email,
       password: response.id + "Fa",
       from: "facebook"//si el usuario se carga a través de google no se pide la verificación
   }

   await axios.post("http://localhost:4000/api/signup",{NuevoUsuario })
   .then(response => //alert(response.data.response))
     
       displayMessages(response.data) //para validar los datos

   )
function displayMessages(data) {
   if (data.success === "falseVAL") {
       
       alert(data.response.error.details.map(error => error.message))
   } else if (data.success === true) {
       console.log(data)
   }

}
}

return (
 
       <FacebookLogin
           appId="1569533133424777"
           autoLoad={false}
           fields="name,email,picture"
           callback={responseFacebook} />
   
);

}

export default Facebook;


