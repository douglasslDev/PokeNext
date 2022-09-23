import styled from "styled-components";




export const CardContainer = styled.div`
flex-direction: column;
display: flex;
border: 2px solid;
border-radius: 30px;
border-color: black;
background: red;
padding:  10px 20px;
align-items: center;
&:not(:last-child){
margin-right: 20px;
margin-bottom: 20px;

&:hover{
    border-color: red;
}
}

`;

export const PokemonId = styled.div`
display:flex;
font-weight:800;
margin-bottom: 5px;

`;

export const PokemonName = styled.h1`
font-size: 20px;
margin-top: 0px;
margin-bottom: 10px;
font-family: Roboto;

`;

export const PokemonDetals= styled.div`
border:1px  solid white;
padding: 5px;
background: white;
color: black;
margin-top: 10px;
border-radius: 10px;
  
:a{
    justify-content: center;
    align-items: center;
    padding: 20px;
}

&:hover{
    border: solid 1px;
    border-color: black;
    background: #EEE9E9
;
   
}
`;
