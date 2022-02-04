import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom"
function Card({ title, imageSource, text, url }) {
  return (
    <>
      <div className="div-imagen ">
        <div className="test" style={{ margin: "90px" }}>
          <p className="text-cards">
            {text
              ? text
              : "Quis duis et enim esse dolore ipsum labore irure culpa. Aliquip dolor proident in ea ad aute duis id qui eiusmod laboris cupidatat anim. Adipisicing eu "}{" "}
          </p>
          



        </div>
        


        
        <div className="title desvanecer">
          <img className="desvanecer" src={imageSource} />
          <h4 className="title" style={{ margin: "30px" }}>
            {" "}
            {title}
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
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  imageSource: PropTypes.string,
  text: PropTypes.string,
};

export default Card;
