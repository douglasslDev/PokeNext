import * as Styled from "../styles/aboutStyles";
import Image from "next/image";

export default function About  () {
  return (
    <Styled.Container>
        <Styled.Title>Sobre o Projeto</Styled.Title>
      <Styled.Text>
       O projeto tem por objetivo consumir uma API  para buscar e exibir as informações dos Pokemons
      </Styled.Text>
      <Image src="/images/charizard.png" alt="charizard" width={300} height={300 }/>
    </Styled.Container>
  );
};


