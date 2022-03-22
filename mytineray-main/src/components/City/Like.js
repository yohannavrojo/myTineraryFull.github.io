import React,{useState}  from 'react'
import { useStateValue } from '../../StateProvider';
import axios from "axios";
// import "../City/like.css";

function Like (props) {

  const[{user},dispatch]=useStateValue()
  const [Like,setLike]=useState(props.Like)

// console.log(props)

const likeDislike = async()=>{
  const token= localStorage.getItem("token")
  console.log(user)
  await axios.put(`http://localhost:4000/api/likesDislike/${props.id}`,{},{
      headers:{
        'Authorization':'Bearer '+token
      }
    })
  .then(response=>
      setLike(response.data.response))

  
  
}
 

   const colorhearth=Like?.includes(user.datoUser.id)? 'fas fa-heart dos':"far fa-heart" 
 
  return (
    
      <div className='heart'>
        <button type='button' className='btn btn-outline-info' onClick={likeDislike}><i className={colorhearth}></i>
      <span>{Like?.length}</span></button>
      </div>
   
)     
  
}

export default Like;