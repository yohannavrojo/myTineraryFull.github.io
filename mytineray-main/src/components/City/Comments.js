import React, { useState, useEffect } from "react";
import { useStateValue } from "../../StateProvider";
// import "../City/Comments.css";
import { Avatar } from "@material-ui/core";
import imagencommenst from "../imagenes/argelia.jpg";
import axios from "axios";
import {FaTrashAlt} from "react-icons/fa";
import { MdCreate } from "react-icons/md";
import swal from 'sweetalert';
//import Like from "../City/Like";



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
      user: user.datoUser.id,
      
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




  return (
    <>
     
    <div className="accordion d-grid col-10 mx-4" id="accordionExample">



    <div className="accordion-item">
    
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

          <div className="form-floating" >
          
           <input onKeyUp={handelChange} className="text-blue bg-light mx-3" defaultValue={itine.comment}></input>
                          

          </div>
          
          <button  type="button" className="btn btn-light" onClick={() => borrarComentario(itine._id)} >
                  <FaTrashAlt/>
                </button>
                <button type="button" className="btn btn-light" onClick={() => modificar(itine._id)}>
             <MdCreate/>
                </button>
       
       
        </div> 

        
         )}

         {/* BODY  */}
        <div className="accordion-body">
       

          <form onSubmit={submitComment}>
            <div className="form-floating">
              <textarea className="form-control" id="floatingTextarea"></textarea> <br/>              
              <div className="btn-comentario-form">

                <button type="submit" className="btn btn-outline-info">
                  Send<i className="fas fa-paper-plane"></i>
                </button>
              
                {/* <Like like={itine.like} id={itine._id}/> */}
              </div>
              
            </div>
          </form>
        </div>

      </div>
    </div>
  </div>
  </>
  );
}

export default Comments;
