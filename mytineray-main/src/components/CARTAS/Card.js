import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import { FcInternal } from "react-icons/fc";
function Card() {
  const [{ filterCity }, dispatch] = useStateValue();
  return (
    <>
    {filterCity.map(city=>

      <div className="col-md-5" key={city._id} style={{ margin: "30px" }}>
        <div className="div-imagen ">
          <div className="test" style={{ margin: "90px" }}>
            <p className="text-cards">
              {city.description}
            </p>
          </div>

          <div className="title desvanecer">
            <img className="desvanecer" src={process.env.PUBLIC_URL+`/Imagenes/imagenesciti/${city.img}`} />
            <h4 className="title" style={{ margin: "30px" }}>
              
              {city.name}
            </h4>
          </div>
        </div>
        <Link to={`/CITY/${city._id}`}>
          <div className="boton">
            <a href="#">
              <span><FcInternal /></span>
            </a>
          </div>
        </Link>
      </div>
      )}
    </>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string,
  description: PropTypes.string,
};

export default Card;
