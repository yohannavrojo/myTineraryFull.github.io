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
   
  await axios.post("https://mytinerary-yohanna.herokuapp.com/api/comments",{dataComents})
   .then(response=>{

    swal({
      title:response.data.mensaje,
      icon:"success",
      buttons: "ok"
  })
      // setComment(response.data.response.comentario)
    
    
     } ) 
       
  
   }

   useEffect(() => {
        let id = props.itinerario
        axios.get(`https://mytinerary-yohanna.herokuapp.com/api/comments/${id} `)
            .then(response => {
                setComment(response.data.response.comentario)
              
          
              })

         
//  console.log(response)
    }, [reload])

    const borrarComentario = (id) => {
        axios.delete(`https://mytinerary-yohanna.herokuapp.com/api/comments/${id} `)
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
        axios.put(`https://mytinerary-yohanna.herokuapp.com/api/comments/${id} `, { data })
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
       
       {/* imagencommenst */}

          {/* <Avatar
            src={imagencommenst}
            sx={{ width: 56, height: 56 }}
           >
            <p></p>
          </Avatar> */}
             <h5>{itine.lastname}</h5> 
       {itine.user?._id === user?.id?

       
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
          <div className="estilo comente ">
        <div style={{backgroundColor:"#F3E9DD", borderRadius:"0.3em", padding:"2px",marginLeft:"1em",marginTop:"0.3em" }}>{itine.comment}</div>
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
         <p  style={{ backgroundColor:"rgba(201, 215, 219, 0.212)", borderRadius:"1em", width:"100%", height:"100%",marginTop:"1em"}} >You must be logged in to comment</p>
          </div> 

        }
    </div>
  </div>
  </>
  );
}

export default Comments;
