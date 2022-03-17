import React, { useState, useEffect } from "react";
import { useStateValue } from "../../StateProvider";
// import "../City/Comments.css";
import { Avatar } from "@material-ui/core";
import imagencommenst from "../imagenes/argelia.jpg";
import axios from "axios";


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

        console.log(comment)

    }, [reload])

    const borrarComentario = (id) => {
        axios.delete(`http://localhost:4000/api/comments/${id} `)
        setReload(!reload)
    }

    const handelChange = (event) => {
        setCambio(event.target.value)

    }

    const modificar = (id) => {
        console.log(id)
        let data = cambio
        axios.put(`http://localhost:4000/api/comments/${id} `, { data })
        setReload(!reload)
    }




  return (
      
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

            <div className="mx-3 text-white bg-success">
            
             <input onKeyUp={handelChange} className="coment-user" defaultValue={itine.comment}></input>
                            

            </div>
            <button type="submit" className="btn btn-primary" onClick={() => borrarComentario(itine._id)} >
                    borrar<i className="fas fa-paper-plane"></i>
                  </button>
                  <button type="submit" className="btn btn-primary" onClick={() => modificar(itine._id)}>
                Modificar<i className="fas fa-paper-plane"></i>
                  </button>
          </div> 
           )}

           {/* BODY  */}
          <div className="accordion-body">
           

            <form onSubmit={submitComment}>
              <div className="form-floating">
                <textarea className="form-control" id="floatingTextarea"></textarea>
                
                <label for="floatingTextarea" >Comments</label> <br />
                
                <div className="btn-comentario-form">
                  <button type="submit" className="btn btn-primary">
                    Send<i className="fas fa-paper-plane"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Comments;
