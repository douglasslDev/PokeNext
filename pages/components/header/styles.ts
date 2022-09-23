import styled from "styled-components";

export const Container =  styled.div`
display: flex;
justify-content: space-between;
padding: 20px;
background: black;
border-radius:  0px 0px 40px 40px;
`;

export const LeftContainer = styled.div`
display: flex;
margin-right: 200px;
`;

export const PokeballImage = styled.div``;

export const Title = styled.h2`
font-size:30px;
margin-left: 20px;
align-items: center;
color: red;


`;
export const RightContainer = styled.div`
display: flex;
align-items: center;
font-size: 30px;
color: red;


`;

export const Links = styled.div`

border-bottom: solid red px  ;

&:hover{
        border-bottom: solid 3px red;
       
    }
    &:not(:last-child){
    margin-right: 20px;
}
`;
