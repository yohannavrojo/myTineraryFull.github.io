import { useState } from "react";
import {
  Container,
  Wrapper,
  IconContainer,
  Menu,
  MenuItem,
  MenuItemLink,
  MobileMenuIcon,
} from "../Navbar/Navbar-elements";
import { SiYourtraveldottv } from "react-icons/si";
import { FaBars, FaTimes, FaRegUserCircle } from "react-icons/fa";
import { IconContext } from "react-icons";
import { Outlet, Link } from "react-router-dom";
import { actionType } from "../../reducer";
import { useStateValue } from "../../StateProvider";
import axios from "axios";

const Narbar = () => {
  const [{ user }, dispatch] = useStateValue();

  async function cerrarSesion() {
    const email = user.datoUser.email;
    console.log(email);
    
    await axios.post("http://localhost:4000/api/signOut", { email })
      .then(response => 
        dispatch({
          type: actionType.USER,
          user: null
        })
        
        
        );
  }

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleShowMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };
  return (
    <>
      <Container>
        <Wrapper>
          <IconContext.Provider value={{ color: "#b6a1c6", size: "2.5em" }}>
            <IconContainer showMobileMenu={showMobileMenu}>
              <SiYourtraveldottv />
            </IconContainer>

            <MobileMenuIcon onClick={() => handleShowMobileMenu()}>
              {showMobileMenu ? <FaTimes /> : <FaBars />}
            </MobileMenuIcon>

            <Menu showMobileMenu={showMobileMenu}>
              <MenuItem onClick={() => handleShowMobileMenu()}>
                <Link to="/">
                  {" "}
                  <MenuItemLink>HOME</MenuItemLink>
                </Link>
                <hr />
              </MenuItem>

              <MenuItem onClick={() => handleShowMobileMenu()}>
                <Link to="/Cities">
                  {" "}
                  <MenuItemLink>CITIES</MenuItemLink>
                </Link>
                <hr />
              </MenuItem>

              <MenuItem>
                {!user ? (
                  <MenuItemLink to="/Signin">SIGN IN</MenuItemLink>
                ) : (
                  <MenuItemLink
                    onClick={() => cerrarSesion()}>
                    {/* */}
                    CERRAR SESION
                  </MenuItemLink>
                )}
              </MenuItem>

              <MenuItem onClick={() => handleShowMobileMenu()}>
                <MenuItemLink>
                  <Link to="/Signup">
                    <FaRegUserCircle onClick={() => handleShowMobileMenu()} />
                  </Link>
                </MenuItemLink>
                <hr />
              </MenuItem>
            </Menu>
          </IconContext.Provider>
        </Wrapper>
      </Container>

      <Outlet />
    </>
  );
};

export default Narbar;
