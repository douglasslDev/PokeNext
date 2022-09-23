import Card from  "./../components/card"
import * as Styled from "../styles/styles";


export  async function getStaticProps(){
  const maxPokemons = 251
  const api = 'https://pokeapi.co/api/v2/pokemon/'

  const res  = await fetch (`${api}/?limit=${maxPokemons}`)
  const data = await res.json()

data.results.forEach((item,index) => {
  item.id= index+1
})
return{
  props:{
    pokemons:data.results,
  },
}

}
export default function Home({pokemons}) {
  return (
    <Styled.Container> 
      <h1>pokenext</h1>
      <Styled.PokemonContainer>
      {pokemons.map((pokemon)=>(
        <Card  key={pokemon.id} pokemon={pokemon}/>
      )
      )}
      </Styled.PokemonContainer>
      </Styled.Container>
  )
}
