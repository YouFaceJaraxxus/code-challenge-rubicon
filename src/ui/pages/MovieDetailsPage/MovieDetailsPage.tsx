import { Link, useParams } from "react-router-dom";
import { useGetMovieDetailsQuery } from "../../../redux/api/moviesApi";
import { MovieType } from "../../../shared/types/movie";
import { ApplicationRoute } from "../../../shared/types/routes";
import { config } from "../../../config";

const MovieDetailsPage = () => {
  const params = useParams();

  const type = (params.type as MovieType) ?? MovieType.MOVIE;
  const id = params.id ?? "";

  const { data: movie } = useGetMovieDetailsQuery(
    {
      id,
      type,
    },
    { skip: !type || !id }
  );

  return (
    <div>
      <div>
        <Link to={`/${ApplicationRoute.MOVIES}`}>Back</Link>
      </div>
      <div>MOVIE DETAILS</div>
      <div>{movie?.name || movie?.title}</div>
      <div style={{ maxWidth: "300px" }}>
        <img
          alt="movie.jpg"
          src={`${config.tMDBImageApiBaseURL}${movie?.poster_path}`}
        />
      </div>
    </div>
  );
};

export default MovieDetailsPage;
