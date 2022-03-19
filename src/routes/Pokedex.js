import { useParams } from 'react-router-dom'
import { Main } from '../components/Utils.styles'
import Loader from '../components/Loader/Loader'
import useFetchApi from '../hooks/useFetchApi'
import PokeCard from '../components/PokeCard/PokeCard'

export default function Pokedex() {
    let { pageNumber } = useParams()
    const { loading, pokemonsInfos } = useFetchApi(parseInt(pageNumber))
    
    // pokemonsInfos.map(item => console.log(item))

  return (
    <>
    {loading ?
        <Main>
            <Loader />
        </Main>  
        :
        <Main justifyContent="space-between" wrap="wrap">
            {pokemonsInfos.map((pokemon, index) => 
                <PokeCard key={pokemon.name} pokemon={pokemon} index={index}/>,
                )}
        </Main>
    }
    </>
    
  )
}
