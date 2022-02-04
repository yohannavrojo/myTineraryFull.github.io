import React from "react";
import Footer from ".";
import Icon from "../../components/footer/indexstyleicon";
import { Content } from "./footerstyled";
 
function FooterContainer() {
    return (
        <Footer>
            
            <Footer.Wrapper>
                <Footer.Row>
                <Footer.Column>
                    <Footer.Title>About</Footer.Title>
                    <Footer.Link href="#">Story</Footer.Link>
                    <Footer.Link href="#">Client</Footer.Link>
                    <Footer.Link href="#">Blog</Footer.Link>

                </Footer.Column>
              
                <Footer.Column>
                    <Footer.Title>Contact </Footer.Title>
                    <Footer.Link href="#">Argentina</Footer.Link>
                    <Footer.Link href="#">United States</Footer.Link>
                    <Footer.Link href="#">Australia</Footer.Link>
               

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
            
        </Footer>
    )
    
}
export default FooterContainer;