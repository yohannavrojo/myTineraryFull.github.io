import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100px;
  font-family: 'Nanum Myeongjo', serif;
  background: rgb(214,117,128);
`;
export const Wrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  background: rgba(255, 255, 255, 0);
  
`;

export const IconContainer = styled.div`
  
  margin-left: 0.5rem;
  font-family: 'Nanum Myeongjo', serif;
  font-size: 1.5rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 300;
`;

export const Menu = styled.ul`
  height: 100%;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 990px) {
    position: absolute;
    top: 70px;
    left: ${({ showMobileMenu }) => (showMobileMenu ? "0" : "-100%")};
    width: 100%;
    height: 50vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: #ffffff;
    transition: 0.8s all ease;
  }
`;

export const MenuItem = styled.li`
  z-index: 50;
  cursor: pointer;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: flex-end;
  margin-left:80px;
 
  transition: 0.3s all ease;
  hr {
    text-align: center;
    width: 0;
    border: none;
    
    transition: 0.3s all ease;
  }
  &:hover {
    
    transition: 0.3s all ease;
   
  }
  @media screen and (max-width: 960px) {
    width: 100%;
    height: 70px;
    background-color: rgba(255, 255, 255, 0);
  }
`;

export const MenuItemLink = styled.div`
  color: #86689d;
   font-size: 1.5rem;
  font-weight: 300;
  text-align: center;
  width: 100%;
 

`;


export const MobileMenuIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: flex;
    margin-left: 5rem;
   
   
  }
  `;