import { useSearchAllMoviesQuery } from "../../../../redux/api/moviesApi";
import { useAppSelector } from "../../../../redux/store/hooks";
import { selectMovies } from "../../../../redux/store/store";
import { Movie } from "../../../../shared/types/movie";

const MoviesList = () => {
  const { moviesSearch, moviesType } = useAppSelector(selectMovies);
  const { data } = useSearchAllMoviesQuery({
    queryParams: { page: 1, query: moviesSearch },
    type: moviesType,
  });

  return (
    <div>
      <div>TYPE: {moviesType}</div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {data?.results?.map((movie: Movie) => (
          <span key={movie.id} style={{ display: "inline" }}>
            <b>{movie.id}</b>
            <span>{movie.title ?? movie.name}</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default MoviesList;
