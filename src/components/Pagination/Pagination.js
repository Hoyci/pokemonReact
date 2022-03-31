import { usePagination, DOTS } from "../../hooks/usePagination";
import { PaginationContainer, PaginationItem, Dots } from "./Pagination.styles";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

const Pagination = ({
  onPageChange,
  totalCount,
  sibilingCount = 1,
  currentPage,
  pageSize,
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    sibilingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <PaginationContainer>
      <PaginationItem
        disabled={currentPage === 1 ? true : false}
        to={`/pokemonReact/pokedex/${currentPage - 1}`}
      >
        <RiArrowLeftSLine
          onClick={onPrevious}
          fontSize={"13px"}
          color={"black"}
        />
      </PaginationItem>
      {paginationRange.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return <Dots>&#8230;</Dots>;
        }
        return (
          <PaginationItem
            to={`/pokemonReact/pokedex/${pageNumber}`}
            firstAndLast={
              pageNumber === 1 || pageNumber === lastPage ? true : false
            }
            selected={pageNumber === currentPage ? true : false}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </PaginationItem>
        );
      })}
      <PaginationItem
        disabled={currentPage === lastPage ? true : false}
        to={`/pokemonReact/pokedex/${currentPage + 1}`}
      >
        <RiArrowRightSLine onClick={onNext} fontSize={"13px"} color={"black"} />
      </PaginationItem>
    </PaginationContainer>
  );
};

export default Pagination;
