import styled from "styled-components";

export const Container = styled.div `

height: auto;
`;

export const Wrapper = styled.div `

display:flex;
flex-direction:column;
justify-content:center;

@media screen and (max-width:968 px){
    margin-left:100px;
    flex-wrap:wrap;
    justify-content: space-around;
   
}

`;
export const Column = styled.div `

margin-top:30px;
display:flex;
flex-direction:column;
text-align:right;

`;
export const Row = styled.div `

display:grid;
grid-template-columns:repeat(auto-fill,minmax(25%,1fr));
grid-gap:20px;

@media (max-width:968px){
    grid-templed-columns:repeat(auto-fill,minmax(25%,1fr));
}
`;
export const Link = styled.div `
color:#ffffff;
margin-bottom:20px;
font-size:20px;
text-decoration:none;
text-align:center;
&:hover{
    color:#8d7866;
    transition:200ms ease-in;
}
`;
export const Title = styled.p `
font-size:30px;
color:#ffffff;
margin-bottom:40px;
font-weight:bold;
font-family: 'Nanum Myeongjo', serif;
`;

export const Content = styled .p `
margin-top:30px;
color:#ffffff;


`;

export const Icon = styled.i`
font-size:20px;
margin-right:16px;
`;