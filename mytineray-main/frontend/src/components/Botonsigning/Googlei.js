import React from "react";
import GoogleLogin from 'react-google-login';
import axios from 'axios';
import { actionType } from "../../reducer";
import { useStateValue } from '../../StateProvider';
import swal from 'sweetalert';

function Googlei(){ 
  const [{ user }, dispatch] = useStateValue()
const responseGoogle = async (response) => {
  
    const userData = {
      email: response.profileObj.email,
      password:response.googleId+"Ka" ,
      from:"google"
      
    }

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
        icon:"success",
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