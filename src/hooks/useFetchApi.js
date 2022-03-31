import { useState, useEffect } from 'react';
import getIDsPerPage from './getIDsPerPage';
import pokeApi from '../API/pokeApi';

export const NUMBERS_OF_POKEMONS_PER_PAGE = 12;

export default function useFetchApi(pageNumber) {
  const [pokemonsInfos, setPokemonsInfo] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const listIds = getIDsPerPage(pageNumber, NUMBERS_OF_POKEMONS_PER_PAGE);
    // console.log(listIds)
    const fetchApi = async () => {
      const promisesData = [];
      listIds.forEach((id) => {
        promisesData.push(pokeApi.getPokemonById(id));
      });

      await Promise.all(promisesData)
        .then((response) => response.map((item) => item.data))
        .then((data) => setPokemonsInfo(data))
        .then(setLoading(false));
    };
    fetchApi();
  }, [pageNumber]);
  return {
    pokemonsInfos,
    loading,
  };
}
