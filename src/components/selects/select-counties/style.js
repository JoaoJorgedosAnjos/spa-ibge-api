import styled from "styled-components";

export const H2 = styled.h2`
color: #0c326f; 
`
export const Div = styled.div`
width:300px;
color: #0c326f; 
font-size:18px; 
font-weight:700;
text-align: center;
`
export const customStyles = {
    singleValue: (provided) => ({
        ...provided,
        height: '100%',
        color: '#1351b4',
        paddingTop: '3px',

    }),
    option: (provided) => ({
        ...provided,
        cursor: 'pointer',
    }),
   
    control: (provided) => ({
        ...provided,
        cursor: 'pointer',
        borderRadius: 35,
        background: "#F9F9FF",
        border: 0,
        outline: '1px solid blueviolet',
    })
}
