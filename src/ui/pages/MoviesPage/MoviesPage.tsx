import { Link } from "react-router-dom";
import { useSearchAllMoviesQuery } from "../../../redux/api/moviesApi";
import { useState } from "react";
import { MovieType } from "../../../shared/types/movie";

const MoviesPage = () => {
  const [count, setCount] = useState(1);
  const [title, setTitle] = useState("");
  const { data: moviesData } = useSearchAllMoviesQuery({
    queryParams: { page: count, query: title },
    type: MovieType.MOVIE,
  });

  const { data: tvShowsData } = useSearchAllMoviesQuery({
    queryParams: { page: count, query: title },
    type: MovieType.TV_SHOW,
  });

  return (
    <div>
      <div>MOVIES</div>
      <button
        onClick={() => {
          setCount((state) => state + 1);
        }}
      >
        KLIKME
      </button>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value ?? "")}
      />
      <Link to="/about">aboot</Link>
      {moviesData?.results?.map((r) => (
        <div key={r.id}>
          <div>{r.id}</div>
          <div>{r.title}</div>
        </div>
      ))}
      <br />
      <div>TVSHOWS</div>
      <br />
      {tvShowsData?.results?.map((r) => (
        <div key={r.id}>
          <div>{r.id}</div>
          <div>{r.title}</div>
        </div>
      ))}
    </div>
  );
};

export default MoviesPage;
