import { Link } from "react-router-dom";
import MoviesSearch from "./MoviesSearch/MoviesSearch";
import MoviesList from "./MoviesList/MoviesList";

const MoviesPage = () => {

  return (
    <div>
      <Link to="/about">aboot</Link>
      <div>MOVIES</div>
      <MoviesSearch />
      <MoviesList />
    </div>
  );
};

export default MoviesPage;
