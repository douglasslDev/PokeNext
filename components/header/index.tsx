import * as Styled from "./styles";
import Link from "next/link";
import Image from "next/image";


export const Header =  ()=> {
  return (
    <Styled.Container>
      <Styled.LeftContainer>
        <Styled.PokeballImage>
        <Image src="/images/pokeball.png" alt="pokenext" width={80} height={80}/>
        </Styled.PokeballImage>
      
      <Styled.Title>Pokedex</Styled.Title>
      </Styled.LeftContainer>
      <Styled.RightContainer>
        <Styled.Links>
      <Link href="/"><a>Home</a></Link>
      </Styled.Links>
      <Styled.Links>
     <Link href="/components/about/about"><a>sobre</a></Link>
     </Styled.Links>
     </Styled.RightContainer>
    </Styled.Container>
  );
};

export default Header;