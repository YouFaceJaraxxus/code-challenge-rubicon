import { setMoviesType } from "../../../../redux/slices/moviesSlice";
import { useAppDispatch } from "../../../../redux/store/hooks";
import { MovieType } from "../../../../shared/types/movie";

const MoviesNavigation = () => {
  const dispatch = useAppDispatch();

  const toggleMovieType = (movieType: MovieType) => () => {
    dispatch(setMoviesType(movieType));
  };

  return (
    <div style={{ display: "flex", gap: "10px", flexDirection: "row" }}>
      <div onClick={toggleMovieType(MovieType.MOVIE)}>MOVIES</div>
      <div onClick={toggleMovieType(MovieType.TV_SHOW)}>TV SHOWS</div>
    </div>
  );
};

export default MoviesNavigation;
