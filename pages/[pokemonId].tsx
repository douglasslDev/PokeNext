import Image from "next/image";
import * as Styled from "../styles/pokemonStyles";
import Link from "next/link";

export const getStaticPaths = async () => {
  const maxPokemons = 251;
  const api = "https://pokeapi.co/api/v2/pokemon/";

  const res = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await res.json();

  const paths = data.results.map((pokemon, index) => {
    return {
      params: { pokemonId: (index + 1).toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async (context) => {
  const id = context.params.pokemonId;
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await res.json();
  return {
    props: { pokemon: data },
  };
};

const Pokemon = ({ pokemon }) => {
  return (
    <Styled.Container>
      <Styled.PokemonName>{pokemon.name}</Styled.PokemonName>
      <Image
        src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
        width="200"
        height="200"
        alt="{pokemon.name}"
      />
      <Styled.NumberContainer>
        <Styled.NumberTitle>Número: </Styled.NumberTitle> 
        <Styled.NumberPokemon> #{pokemon.id}</Styled.NumberPokemon> 
      </Styled.NumberContainer>
      <Styled.TypeContainer>
        <Styled.TypeTitle>Tipo:</Styled.TypeTitle>
        <Styled.TypePokemon>
          {pokemon.types.map((item, index) => (
            <span key={index}>{item.type.name}</span>
          ))}
        </Styled.TypePokemon>
      </Styled.TypeContainer>
      
      <Styled.DicesContainer>
        <Styled.HeightContainer>
          <Styled.HeightTitle> Altura:</Styled.HeightTitle>
          <Styled.HeightPokemon>{pokemon.height * 10} cm</Styled.HeightPokemon>
        </Styled.HeightContainer>
        <Styled.DividingLine></Styled.DividingLine>
        <Styled.WidthContainer>
          
          <Styled.WidthTitle> Peso:</Styled.WidthTitle>
          <Styled.WidthPokemon>{pokemon.weight / 10}Kg</Styled.WidthPokemon>
        </Styled.WidthContainer>
      </Styled.DicesContainer>
      
      <Styled.Back>
      <Link  href={`http://localhost:3000/`}><a >Voltar</a></Link>
      </Styled.Back>

    </Styled.Container>
  );
};

export default Pokemon;
