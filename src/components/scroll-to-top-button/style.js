import styled from 'styled-components';

export const Div = styled.div`
    width:50px;
    color:blue;
    
button{
    display:flex;
    align-items:center;
    height:30px;
    width:30px;
    border-radius:25px;
    right:3%;
    opacity:0.5;
    background-color:#1351b4;
    @media(max-width:820px){
        right:1%;
    }
}  
button:hover{
    background-color:#ff7f19;
    transition: 0.4s ease-in-out;
    opacity:1;
}  
svg{
    width:25px;
    height:25px;
    font-weight:700;
    fill:white;   
}
`