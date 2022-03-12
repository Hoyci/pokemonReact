import axios from 'axios'

const pokeApi = axios.create({
    baseURL: "https://pokeapi.co/api/v2",
    timeout: 1500
})

pokeApi.getPokemonById = (id) => {
    return pokeApi.get(`pokemon/${id}`)
} 

export default pokeApi