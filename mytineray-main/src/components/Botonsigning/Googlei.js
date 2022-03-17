import React from "react";
import GoogleLogin from 'react-google-login';
import axios from 'axios';


function Googlei(){ 
  
const responseGoogle = async (response) => {
   
    const NuevoUsuario = {
      email: response.profileObj.email,
      password:response.googleId+"Ep" ,
      from:"google"
      
    }

    
    await axios.post("http://localhost:4000/api/signin",{NuevoUsuario})
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

  return(
<GoogleLogin
          clientId="971845975096-d96pfrveho1431brgjcu4m4a2leibuei.apps.googleusercontent.com"
          buttonText="SignIn with Google Account"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
  cookiePolicy={'single_host_origin'}/>
  )
}
  

  export default Googlei;