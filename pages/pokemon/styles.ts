import styled from "styled-components";


export const Container = styled.div`
display: flex;
align-items: center;
flex-direction: column;
margin:20px 0px;
border: 2px solid;
border-radius: 40px;
background: red;
height: 700px;
justify-content: center;
display:flex;

`;

export const PokemonName = styled.div`
font-size:50px;
display:flex;
`;

export const NumberContainer = styled.div`
display: flex;
justify-content: center;
flex-direction:column;
align-items: center;
`;

export const NumberTitle =styled.h1`
display:flex;
margin:  5px 0px;
`;

export const NumberPokemon = styled.h3`
display:flex;
margin: 0px;

`;

export const TypeContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;

`;

export const TypeTitle = styled.h1`
display: flex;
margin:5px;

`;

export const TypePokemon = styled.h3`
display: flex;
`;

export const DicesContainer = styled.div`
justify-content: center;
align-items: center;
flex-direction: row;
display: flex;
padding: 0px;
margin: 0px;


`;

export const HeightContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;

`;

export const HeightTitle = styled.h1`
display: flex;
`;

export const HeightPokemon = styled.h3`
display: flex;
`;

export const DividingLine = styled.div`
display: flex;
border: 1px solid black;
height: 150px;
margin: 0px 20px;

`;

export const WidthContainer = styled.div`
display: flex;
align-items: center;
flex-direction: column;
`;

export const WidthTitle = styled.h1``;

export const WidthPokemon = styled.h3``;

export const Back = styled.div`
display:flex;
border: 1px  black;
border-radius: 66px;
background: black;
color: white;
padding: 10px;
margin-top: 10px;


&:hover{
    background: #d3d3d3;
    color: black;
    cursor: pointer;
}
`;