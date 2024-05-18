import { Link } from "react-router-dom";
import { useGetAllMoviesQuery } from "../../../redux/api/moviesApi";
import { useState } from "react";

const MoviesPage = () => {
  const [count, setCount] = useState(1);
  const { data, error, isLoading,  } = useGetAllMoviesQuery({page: count});

  console.log("data", data);
  console.log("error", error);
  console.log("isLoading", isLoading);
  return (
    <div>
      <div>MOVIES</div>
      <button onClick={() => {setCount((state) => state+1)}}>KLIKME</button>
      <Link to="/about">aboot</Link>
    </div>
  );
};

export default MoviesPage;
