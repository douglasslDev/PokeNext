import * as Styled from "./styles";

import Image from "next/image";
import Link from "next/link";


 const Card =  ({pokemon})=> {
  return (
    <Styled.CardContainer> 
          <Styled.PokemonId>#{pokemon.id}</Styled.PokemonId>
          <Styled.PokemonName>{pokemon.name}</Styled.PokemonName>
        <div>
<Image
    src={ `https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
    width="120"
    height="120"
    alt="{pokemon.name}"
    />
    </div>
    <Styled.PokemonDetals>
    <Link  href={`/pokemon/${pokemon.id}`}><a >Detalhes</a></Link>

    </Styled.PokemonDetals>
    </Styled.CardContainer>

  )};

  export default Card;