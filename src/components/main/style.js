import styled from "styled-components";

export const SectionMain = styled.main`
display:flex;
flex-direction:column;
align-items:center;
gap:15px;
h1{
    color: #0c326f; 
}
`
export const DivSelects = styled.div`
margin-top:-10px;
display:flex;
height: 109px;
gap:50px;

@media(max-width:757px){
    flex-direction:column;
    height:240px;
}
`

export const DivInfos = styled.div`
    display:flex;
    flex-wrap: wrap;
    gap:20px;
    justify-content: center;
    width:100%;
`
