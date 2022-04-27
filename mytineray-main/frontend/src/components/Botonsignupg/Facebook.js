import React from 'react';
import swal from 'sweetalert';
import FacebookLogin from "react-facebook-login";
import axios from 'axios';


function Facebook() {

const responseFacebook = async (response) => {
 console.log(response);
 
   const NuevoUsuario = {
       firstname: response.name,
       lastname:"facebook",  
       email: response.email,
       password: response.id +"Ab" ,
       from: "Facebook"//si el usuario se carga a través de google no se pide la verificación
   }

   await axios.post("https://mytinerary-yohanna.herokuapp.com/api/signup",{NuevoUsuario})
   .then(response=>
   displayMessages(response.data),
  
  )
  
    function displayMessages(data){
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
    <div className='google mt-3'>
       <FacebookLogin
           appId="1569533133424777"
           autoLoad={false}
           fields="name,email,picture"
           callback={responseFacebook} />
           </div>
   
);


}

export default Facebook;


