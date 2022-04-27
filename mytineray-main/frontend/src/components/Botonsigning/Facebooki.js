import React from 'react';
import FacebookLogin from "react-facebook-login";
import axios from 'axios';
import { actionType } from "../../reducer";
import { useStateValue } from '../../StateProvider';
 import swal from 'sweetalert';
function Facebooki() {
  const [{ user }, dispatch] = useStateValue()
const responseFacebook = async (response) => {
  console.log(response);
  
    const userData= {
     
      email:response.email,           
      password:response.id + "Ab", 
      from:"Facebook"//si el usuario se carga a través de google no se pide la verificación
    }
 
    await axios.post("https://mytinerary-yohanna.herokuapp.com/api/signin",{userData})
    .then(response=>
    displayMessages(response.data),
   
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
    
    <div className='google mt-3'>
    <FacebookLogin
  appId="1569533133424777"
  autoLoad={false}
  fields="name,email,picture"
  callback={responseFacebook} />


</div>
);

}

export default Facebooki;


