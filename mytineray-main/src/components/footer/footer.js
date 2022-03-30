import React from "react";
import Footer from ".";
import Icon from "../../components/footer/indexstyleicon";
import { Content } from "./footerstyled";
import "../general/Home.css" 

function FooterContainer() {
    return (
        <Footer>
            
           <div className="fondofooter">
               {/* <img className="fondofooter1" src={require("../imagenes/fondofooter.jpg")}/>  */}
            <Footer.Wrapper>
                <Footer.Row>
                <Footer.Column>
                    <Footer.Title>Story</Footer.Title>
                    {/* <Footer.Link href="#"></Footer.Link>
                    <Footer.Link href="#">Client</Footer.Link>
                    <Footer.Link href="#">Blog</Footer.Link> */}

                </Footer.Column>
              
                <Footer.Column>
                  
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Social</Footer.Title>
                    <Footer.Link href="#"><Icon className="fab fa-facebook-f"/></Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-instagram"/></Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-youtube"/></Footer.Link>

                </Footer.Column>
                </Footer.Row>
               <Content><h4>&copy; Copyright 2018, Example Corporation</h4></Content> 
            </Footer.Wrapper>
            </div>
        </Footer>
    )
    
}
export default FooterContainer;