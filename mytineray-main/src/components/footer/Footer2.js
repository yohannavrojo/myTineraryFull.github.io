import React from "react";
import "./Footer2.css";
import { AiFillGithub, AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import {FiTwitter } from "react-icons/fi";

function Footer2() {
  return (
    <>
      <footer className="footer">
        <div className="footer__nav">
         
            <div className="nav__ul">
              <a className="nav__title">
                “No me digas lo viejo que eres o lo bien educado que estás. Dime
                cuanto has viajado y te diré cuanto sabes”.Mahoma
              </a>
             

              <div className="nav__ul nav__ul--extra">
                <a href="https://www.facebook.com/" className="iconos-home">
                  <BsFacebook />
                </a>
                <a href="https://www.instagram.com/"  className="iconos-home">
                  <AiOutlineInstagram />
                </a>
                <a href="https://github.com/yohannavrojo/myTineraryFull.git"  className="iconos-home">
                  <FiTwitter />
                </a>
              </div>
            </div>
          
        </div>

        <div className="legal">
          <p className="legal">
            &copy; 2022 Github  <AiFillGithub /> 
            Yohanna V. Rojo N.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer2;
