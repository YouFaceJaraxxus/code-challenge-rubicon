import { useNavigate } from "react-router-dom";
import { Movie, MovieType } from "../../../../shared/types/movie";
import { useCallback } from "react";
import { ApplicationRoute } from "../../../../shared/types/routes";

interface MoviesListItemProps {
  movie: Movie;
  type: MovieType;
}

const MoviesListItem = ({ movie, type }: MoviesListItemProps) => {
  const navigate = useNavigate();


  const navigateToMovieDetails = useCallback(() => {
    console.log("movie", movie);
    console.log("type", type);
    navigate(
      `/${ApplicationRoute.MOVIES}/${ApplicationRoute.DETAILS}/${type}/${movie.id}`
    );
  }, [navigate, movie, type]);

  return (
    <div
      key={`${type}_${movie.id}`}
      style={{ display: "flex", gap: "10px", flexDirection: "row" }}
      onClick={navigateToMovieDetails}
    >
      <b>{movie.id}</b>
      <span>{movie.title ?? movie.name}</span>
    </div>
  );
};

export default MoviesListItem;
