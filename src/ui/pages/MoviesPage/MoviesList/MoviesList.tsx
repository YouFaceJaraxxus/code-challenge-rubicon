import {
  useGetPopularMoviesQuery,
  useSearchAllMoviesQuery,
} from "../../../../redux/api/moviesApi";
import { useAppSelector } from "../../../../redux/store/hooks";
import { selectMovies } from "../../../../redux/store/store";
import { MINIMUM_SEARCH_LENGTH } from "../../../../shared/constants/movie";
import { Movie } from "../../../../shared/types/movie";

const MoviesList = () => {
  const { moviesSearch, moviesType } = useAppSelector(selectMovies);

  const shouldShowSearchedMovies =
    moviesSearch && moviesSearch.length >= MINIMUM_SEARCH_LENGTH;

  const { data: searchedMovies } = useSearchAllMoviesQuery(
    {
      queryParams: { page: 1, query: moviesSearch },
      type: moviesType,
    },
    { skip: !shouldShowSearchedMovies }
  );

  const { data: popularMovies } = useGetPopularMoviesQuery({
    queryParams: { page: 1 },
    type: moviesType,
  });

  return (
    <div>
      <div>TYPE: {moviesType}</div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {shouldShowSearchedMovies &&
          searchedMovies?.results?.map((movie: Movie) => (
            <div
              key={movie.id}
              style={{ display: "flex", gap: "10px", flexDirection: "row" }}
            >
              <b>{movie.id}</b>
              <span>{movie.title ?? movie.name}</span>
            </div>
          ))}
        {!shouldShowSearchedMovies &&
          popularMovies?.results?.map((movie: Movie) => (
            <div
              key={movie.id}
              style={{ display: "flex", gap: "10px", flexDirection: "row" }}
            >
              <b>{movie.id}</b>
              <span>{movie.title ?? movie.name}</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MoviesList;
