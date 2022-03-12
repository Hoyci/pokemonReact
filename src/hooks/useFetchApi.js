import { useState, useEffect } from 'react'
import getIDsPerPage from './getIDsPerPage'
import pokeApi from '../API/pokeApi'

export default function useFetchApi(pageNumber) {
    const NUMBERS_OF_POKEMONS_PER_PAGE = 12
    const [pokemonsInfos, setPokemonsInfo] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        const listIds = getIDsPerPage(pageNumber, NUMBERS_OF_POKEMONS_PER_PAGE)
        console.log(listIds)
        const fetchApi = async () => {
            const promises = []
            listIds.forEach(id => {
                promises.push(
                    pokeApi.getPokemonById(id)
                )
            });
            console.log(promises)
            
            await Promise.all(promises)
                .then(response => response.map(item => item.data))
                .then(data => setPokemonsInfo(data))
                .then(setLoading(false))
        }
        fetchApi()
    }, [pageNumber])
  return {
      pokemonsInfos, 
      loading
    }
}
