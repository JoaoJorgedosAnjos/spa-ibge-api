import styled from "styled-components";

export const Container = styled.header`
height:110px;
gap:15px;
background-color:#F9F9FF;
margin: 0 0 10px 0;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
@media(max-width:580px){
    height:140px;
}

img{
    width:135px;
    margin:18px 0 0 25px;

    @media(max-width:457px){
    width:100px;}    
}

div{
    display:flex;
    gap:10px;    
    margin: -8px 0 0 35px;
    
@media(max-width:457px){
        justify-content:center;
        margin: 2px 0 0 35px;
        width:85%;     
}

h2{
    font-weight: 400;
    font-size:25px;
    color: #0c326f;
    @media(max-width:457px){
    font-size:20px; 
}

h2:first-child{
    color:#1351b4;
`
