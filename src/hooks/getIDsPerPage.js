export default function getIDsPerPage(pageNumber, NUMBERS_OF_POKEMONS_PER_PAGE) {
    if (pageNumber === 1) {
        const start = 1
        const end = pageNumber * NUMBERS_OF_POKEMONS_PER_PAGE
        return Array(end - start + 1).fill().map((item, index) => start + index)
    }
    const start = (pageNumber - 1) * NUMBERS_OF_POKEMONS_PER_PAGE
    const end = pageNumber * NUMBERS_OF_POKEMONS_PER_PAGE
    return Array(end - start).fill().map((item, index) => start + index)
}
