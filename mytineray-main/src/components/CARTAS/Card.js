import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom"
function Card({ name, img, description }) {
 
  return (
    <>
      <div className="div-imagen ">
        <div className="test" style={{ margin: "90px" }}>
          <p className="text-cards">
            {description
              ? description
              : "Quis duis et enim esse dolore ipsum labore irure culpa. Aliquip dolor proident in ea ad aute duis id qui eiusmod laboris cupidatat anim. Adipisicing eu "}{" "}
          </p>
          



        </div>
        


        
        <div className="title desvanecer">
          <img className="desvanecer" src={img} />
          <h4 className="title" style={{ margin: "30px" }}>
            {" "}
            {name}
          </h4>
        </div>
      </div>
      <Link to="/CITY"><div className="boton">
                <a href="#">
                  <span>Read More</span>
                </a>
              </div></Link>
    </>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string,
  description: PropTypes.string,
};

export default Card;
