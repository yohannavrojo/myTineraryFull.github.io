import React from 'react';
import FacebookLogin from "react-facebook-login";
import axios from 'axios';


function Facebook() {


const responseFacebook = async (response) => {
    

    const NuevoUsuario = {
                        firstname:response.name,
                        email:response.email,
                        lastname:"facebook",            
                        password:response.id + "Ab", 
                        from:"Facebook"    
    }  

      await axios.post("http://localhost:4000/api/signup",{NuevoUsuario} )
      .then(response=> //alert(response.data.response)) 


      displayMessages(response.data)
      )

      
      function displayMessages(data){
      if(data.success==="falseVAL"){
        
          alert(data.response.error.details.map(error=>error.message))
      }else if(data.success===true){
         
      console.log(data)
      }
    }
  }

return(
    // <FacebookLogin
    // appId="1062880977629069"
    // autoLoad={false}
    // fields="name,email,picture"        
    // callback={responseFacebook} />
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


