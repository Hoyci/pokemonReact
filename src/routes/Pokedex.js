import { useParams } from "react-router-dom";
import { Main, Content } from "../components/Utils.styles";
import Loader from "../components/Loader/Loader";
import useFetchApi, {
  NUMBERS_OF_POKEMONS_PER_PAGE,
} from "../hooks/useFetchApi";
import PokeCard from "../components/PokeCard/PokeCard";
import Pagination from "../components/Pagination/Pagination";
import { useState } from "react";

export default function Pokedex() {
  let { pageNumber } = useParams();
  const [currentPage, setCurrentPage] = useState(parseInt(pageNumber));
  const { loading, pokemonsInfos } = useFetchApi(parseInt(pageNumber));
  return (
    <>
      {loading ? (
        <Main>
          <Loader />
        </Main>
      ) : (
        <Content>
          <Pagination
            currentPage={currentPage}
            totalCount={887}
            pageSize={NUMBERS_OF_POKEMONS_PER_PAGE}
            onPageChange={(page) => setCurrentPage(page)}
          />
          <>
            <Main justifyContent="space-between" wrap="wrap">
              {pokemonsInfos.map((pokemon, index) => (
                <PokeCard key={pokemon.name} pokemon={pokemon} index={index} />
              ))}
            </Main>
          </>
        </Content>
      )}
    </>
  );
}
