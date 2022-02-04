import styled from "styled-components";

export const Container = styled.div `

background: rgb(247,151,226);
background: linear-gradient(157deg, rgba(247,151,226,0.8589987020198704) 18%, rgba(159,204,255,0.8477942202271533) 51%, rgba(215,205,205,0.9122199905352766) 69%, rgba(249,236,144,0.7805673294708508) 100%);
height: auto;
width: 100vw;


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
color:#000000;
margin-bottom:20px;
font-size:18px;
text-decoration:none;
text-align:center;
&:hover{
    color:#8d7866;
    transition:200ms ease-in;
}
`;
export const Title = styled.p `
font-size:24px;
color:#000000;
margin-bottom:40px;
font-weight:bold;
`;

export const Content = styled .p `
margin-top:30px;

`;

export const Icon = styled.i`
font-size:18px;
margin-right:16px;
`;