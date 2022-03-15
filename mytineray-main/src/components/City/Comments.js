import React from "react";
// import "../City/Comments.css";
import imagencommenst from "../imagenes/argelia.jpg";
function Comments() {
  return (
    <>
      <div>
        <p>
          <a
            className="btn"
            data-bs-toggle="collapse"
            href="#multiCollapseExample1"
            role="button"
            aria-expanded="false"
          
          >
              {/* // BOTON COLOR  */}
            {" "} 
            <div className="boton">
              <a href="#">
                <span>COMMENTS</span>
              </a>
            </div>
          </a>
        </p>
        <div className="row">
            
          <div className="col ">
            <div className="collapse multi-collapse" id="multiCollapseExample1" >
            {/* //INPUT DE TEXTO */}
            <img className="rounded-circle mx-3 w-10 p-4" src={imagencommenst} />
              <div className="form-floating mx-5"> 
                <textarea
                  className="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea"
                ></textarea>
                <label for="floatingTextarea">Comments</label>
              </div>

              <div className="card card-body">
                <div className="bg-white">
                  <div className="d-flex flex-row fs-12">
                    <button
                      className="btn position-relative rounded-circle mx-3"
                    >
                        
                      <div className="like cursor ">
                        <i className="fa fa-thumbs-o-up "></i>
                        <span className="ml-2">Like</span>
                      </div>
                    </button>
                    <button
                      type="button"
                      className="btn position-relative rounded-circle"
                    >
                      <div className="like cursor ">
                        <i className="fa fa-comment "></i>
                        <span className=" ml-1">Sending</span>
                      </div>
                    </button>
                    <button
                      type="button"
                      className="btn position-relative rounded-circle mx-3"
                    >
                      <div className="like cursor">
                        <i className="fa fa-share"></i>
                        <span className="ml-2">Share</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="collapse multi-collapse" id="multiCollapseExample2">
              Some placeholder content for the first collapse component of
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Comments;
