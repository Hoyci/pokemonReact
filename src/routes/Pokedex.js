import { useParams } from 'react-router-dom'
import { Main } from '../components/Utils.styles'
import { CardContainer, CardHeader, Text } from '../components/Card/Card.styles'
import Loader from '../components/Loader/Loader'
import useFetchApi from '../hooks/useFetchApi'

export default function Pokedex() {
    let { pageNumber } = useParams()
    const {loading, pokemonsInfos} = useFetchApi(parseInt(pageNumber))
    
    pokemonsInfos.map(item => console.log(item))

  return (
    <>
    {loading ?
        <Main justifyContent="center">
            <Loader />
        </Main>  
        :
        <Main justifyContent="space-between" wrap="wrap">
            {pokemonsInfos.map(pokemon => 
                <CardContainer key={pokemon.id} width="300px">
                    <CardHeader>
                        <Text capitalize="capitalize">{pokemon.id}</Text>
                        <Text capitalize="capitalize">{pokemon.name}</Text>
                    </CardHeader>
                </CardContainer>
                )}
        </Main>
    }
    </>
    
  )
}
