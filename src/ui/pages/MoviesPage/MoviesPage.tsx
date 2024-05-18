import { Link } from "react-router-dom";
import MoviesSearch from "./MoviesSearch/MoviesSearch";
import MoviesList from "./MoviesList/MoviesList";
import MoviesNavigation from "./MoviesNavigation/MoviesNavigation";

const MoviesPage = () => {
  return (
    <div>
      <Link to="/about">aboot</Link>
      <div>MOVIES</div>
      <MoviesNavigation />
      <MoviesSearch />
      <MoviesList />
    </div>
  );
};

export default MoviesPage;
