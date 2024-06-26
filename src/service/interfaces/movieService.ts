import { Movie } from "../../shared/types/movie";
import { IServiceConfig } from "./service";

export default interface IMovieService {
  getAllMovies: (
    config?: IMovieServiceConfig
  ) => Promise<IGetAllMoviesResponse>;
  getMovieById: (id: string) => Promise<Movie | null>;
}

interface IMovieServiceQueryParameters {
  orderBy: string;
  equalTo: string;
}

interface IMovieServiceFilter {
  name?: string;
  type?: string;
}

interface IMovieServiceConfig extends IServiceConfig {
  filter?: IMovieServiceFilter;
  query?: IMovieServiceQueryParameters;
}

interface IGetAllMoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export type {
  IMovieServiceQueryParameters,
  IMovieServiceFilter,
  IMovieServiceConfig,
  IGetAllMoviesResponse,
};
