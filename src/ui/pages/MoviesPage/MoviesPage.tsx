import { Link } from "react-router-dom";
import { selectMovies } from "../../../redux/store/store";
import { useAppDispatch, useAppSelector } from "../../../redux/store/hooks";
import { useEffect } from "react";
import { getMoviesAsync } from "../../../redux/slices/moviesSlice";

const MoviesPage = () => {

  const dispatch = useAppDispatch();
  const { movies, count } = useAppSelector(selectMovies);

  useEffect(() => {
    dispatch(getMoviesAsync())
  }, [dispatch])

  console.log("movies", movies);
  console.log("count", count);
    return <div>
      <div>MOVIES</div>
      <Link to="/about">aboot</Link>
    </div>;
  };
  

  export default MoviesPage;