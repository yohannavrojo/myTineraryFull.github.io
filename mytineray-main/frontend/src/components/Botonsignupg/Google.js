import React from "react";
import GoogleLogin from 'react-google-login';
import axios from 'axios';
import swal from 'sweetalert';


function Google(){ 
  
  const responseGoogle = async (response) => {
      console.log(response);


      const NuevoUsuario = {
          firstname: response.profileObj.givenName,
          lastname: response.profileObj.familyName,
          email: response.profileObj.email,
          password: response.googleId + "Ka",
          from:"google", //controladores
      }
      await axios.post("https://mytinerary-yohanna.herokuapp.com/api/signup",{NuevoUsuario})
   .then(response=>
   displayMessages(response.data),
  
  )
  function displayMessages(data){
    // alert (data.mensaje)
    // localStorage.setItem("token",data.response.token)
    swal({
      title:data.mensaje,
      icon:"success",
      buttons: "ok"
  })
    console.log(data)
     
}

  }

 
  
  return(
<div>
     
      <GoogleLogin
      clientId="971845975096-d96pfrveho1431brgjcu4m4a2leibuei.apps.googleusercontent.com"
      buttonText="singup WITH GOOGLE"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />
  </div>  
  )


}
  

  export default Google;