import React, { useEffect, useState } from "react";
import "../City/Itinerarios.css";
import Comments from "../City/Comments";
import { useParams } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import { actionType } from "../../reducer";
import axios from "axios";


function Itinerarios() {
  const [{ cities, user ,itineraries }, dispath] = useStateValue();
  const [ reload,setReload]=useState(false)
  const { id } = useParams();
  const citySelecter = cities.filter((city) => city._id === id);
  console.log(citySelecter);
  const itineSelecter = itineraries.filter(
    (itine) => itine.city === citySelecter[0].name
  );


  useEffect(() => {
    console.log(citySelecter);
    citySelecter.map((city) =>
      axios
        .get(`https://mytinerary-yohanna.herokuapp.com/api/itinerary/${city.name}`)
        .then((response) =>
          dispath({
            type: actionType.ITINERARIESDB,
            itineraries: response.data.response.itinerary,
          })
        )
    );
  }, [ reload]);

  

  // likes

  const likeDislike = async (event) => {
    const token = localStorage.getItem("token");
const id= event.target.id
console.log(id)
// 
    await axios
      .put(
        `https://mytinerary-yohanna.herokuapp.com/api/likeDislike/${id}`,
        {},
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((response) => console.log(response.data.response));

      setReload(!reload)
  };

  

  return (
    <>
      <div>
        <div className="container-card">
          {itineraries.map((itine) => (
            <div key={itine._id} className="card">
              <figure>
                <img
                  src={
                    process.env.PUBLIC_URL +
                    `/Imagenes/imagenesitinerary/${itine.img}`
                  }
                />
              </figure>
              <div className="contenido-card">
                <h3>{itine.name}</h3>
                <p>{itine.description}</p>
                <h2>
                  {itine.price} {itine.time}
                </h2>

                {itine.likes?.includes(user?.id) ?
                <div className="heart">
                  <button
                    type="button"
                    className=" btn far fa-thumbs-up"
                     style={{color:"#cb0505", size: "2.9em"}}
                    onClick={likeDislike}
                    id={itine._id}
                    
                 >
               
                  
                
                  
                  </button>

                  <p>{itine.likes.length}</p>
                </div> 
                :

                <div className="heart">
                        <button type="button"  className=" btn far fa-thumbs-up" onClick={likeDislike} id={itine._id}
                        >
                        </button>

                        <p>{itine.likes.length}</p>
                    </div>
                }
              </div>

              <Comments itinerario={itine._id} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Itinerarios;
