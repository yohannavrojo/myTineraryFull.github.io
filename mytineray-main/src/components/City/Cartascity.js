import React from "react";
import "../City/Cartascity.css";
import foto2 from "../imagenes/imagenes itinerary/abudabi2.jpg";
import foto1 from "../imagenes/imagenes itinerary/abudabi1.jpg"
function Cartascity() {
  return (
    <>
   
        <div className="blog-card">
          <input type="radio" name="select" id="tap-1" checked />
          <input type="radio" name="select" id="tap-2" />
          <input type="radio" name="select" id="tap-3" />
          <input type="checkbox" id="imgTap" />
          <div className="sliders">
            <label for="tap-1" className="tap tap-1"></label>
            <label for="tap-2" className="tap tap-2"></label>
            <label for="tap-3" className="tap tap-3"></label>
          </div>

          <div className="inner-part">
            <label for="imgTap" className="img">
              <img className="img-1" src={foto1} />
            </label>
            <div className="content content-1">
              <div className="title">Lorem Ipsum Dolor</div>
              <div className="text1">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Explicabo animi atque aliquid pariatur voluptatem numquam,
                quisquam. Neque est voluptates doloribus!
              </div>
              
              <button>Read more</button>
            </div>
          </div>

          <div className="inner-part">
            <label for="imgTap" className="img">
              <img className="img-2" src={foto2} />
            </label>
            <div className="content content-2">
              <div className="title">Lorem Ipsum Dolor</div>
              <div className="text1">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
                eos ut consectetur numquam ullam fuga animi laudantium nobis rem
                molestias.
              </div>
              <button>Read more</button>
            </div>
          </div>

          <div className="inner-part">
            <label for="imgTap" className="img">
              <img className="img-3" src={foto2} />
            </label>
            <div className="content content-3">
              <div className="title">Lorem Ipsum Dolor</div>
              <div className="text1">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                excepturi nemo commodi sint eum ipsam odit atque aliquam officia
                impedit.
              </div>
              <button>Read more</button>
            </div>
          </div>
        </div>
    </>
  );
}

export default Cartascity;
