import { Link } from "react-router-dom";
import { useGetAllMoviesQuery } from "../../../redux/slices/moviesSlice";

const MoviesPage = () => {
  const { data, error, isLoading } = useGetAllMoviesQuery();

  console.log("data", data);
  console.log("error", error);
  console.log("isLoading", isLoading);
  return (
    <div>
      <div>MOVIES</div>
      <Link to="/about">aboot</Link>
    </div>
  );
};

export default MoviesPage;
