import React, { useState, useEffect } from "react";
import { useStateValue } from "../../StateProvider";
import "../City/Comments.css";
import { Avatar } from "@material-ui/core";
import imagencommenst from "../imagenes/argelia.jpg";
import axios from "axios";
import {FaTrashAlt} from "react-icons/fa";
import { MdCreate } from "react-icons/md";
import swal from 'sweetalert';




function Comments(props) {
    const [comment, setComment] = useState();
  const [{ user }, dispatch] = useStateValue();
  const [reload, setReload] = useState(false);
  const [cambio, setCambio] = useState()


  const submitComment =async (event) => {
    event.preventDefault();

    const dataComents = {
      itinerario: props.itinerario,
      mensaje: event.target[0].value,
      user: user.id,
      
    }
   
  await axios.post("http://localhost:4000/api/comments",{dataComents})
   .then(response=>
      setComment(response.data.response.comentario)
    
      ) 
       
  
   }

   useEffect(() => {
        let id = props.itinerario
        axios.get(`http://localhost:4000/api/comments/${id} `)
            .then(response => {
                setComment(response.data.response.comentario)
              
          
              })

         
//  console.log(response)
    }, [reload])

    const borrarComentario = (id) => {
        axios.delete(`http://localhost:4000/api/comments/${id} `)
        .then(response => {
console.log(response)
   swal({
          title:response.data.mensaje,
          icon:"success",
          buttons: "ok"
      })
        })
        setReload(!reload)
     
    
      }

    const handelChange = (event) => {
        setCambio(event.target.value)

    }

    const modificar = (id) => {
        
        let data = cambio
        axios.put(`http://localhost:4000/api/comments/${id} `, { data })
        .then(response => {
          console.log(response)
             swal({
                    title:response.data.mensaje,
                    icon:"success",
                    buttons: "ok"
                })
                  })
      
      
        setReload(!reload)
    }
    console.log(comment)
console.log(user)


  return (
    <>
     
    <div className="accordion d-grid col-10 mx-4" id="accordionExample">



    {/* <div className="accordion-item"> */}
    
      <h2 className="accordion-header " id="headingOne">
        <button className="accordion-button   "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          COMMENTS
        </button>

      </h2>
      <br />
      
      <div
        id="collapseOne"
        className="accordion-collapse collapse"
        aria-labelledby="headingOne"
      >
         {comment?.map(itine=>  
       <div className="d-flex position-relative mx-3 ">
       
       

          <Avatar
            src={imagencommenst}
            sx={{ width: 56, height: 56 }}
          ></Avatar>
            
           
       {itine.user?.id == user?.user?
          <div className="floating" >
            
          <div>
           <input onKeyUp={handelChange} className="inputBoton" defaultValue={itine.comment}></input>
            </div>
           
           
            <button  type="button" className="btn btn-info mx-3 " onClick={() => borrarComentario(itine._id)} >
                  <FaTrashAlt/> 
                </button>
                <button type="button" className="btn btn-info" onClick={() => modificar(itine._id)}>
             <MdCreate/>
                </button>               
            
          </div>
          : 
          <div>
        <div style={{border:"0",backgroundColor:"#F3E9DD", borderRadius:"5px", width:"100%", height:"40px", padding:"2px"}}>{itine.comment}</div>
          </div> 
         }
       
        </div>

        
         )}

         {/* BODY  */}

          {user ?
        <div className="accordion-body">
       

          <form onSubmit={submitComment}>
            <div className="form-floating">
              <textarea className="form-control" id="floatingTextarea"></textarea> <br/>              
              <div className="btn-comentario-form">

                <button type="submit" className="btn btn-info">
                  Send<i className="fas fa-paper-plane"></i>
                </button>
              
               
              </div>
              
            </div>
          </form>
        </div>
        
        :
 <div className="floating" >
         <p >You must be logged in to comment</p>
          </div> 

        }
    </div>
  </div>
  </>
  );
}

export default Comments;
