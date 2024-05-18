
import { Movie } from '../../shared/types/movie';
import HttpService from '../httpService';
import IMovieService, { IGetAllMoviesResponse, IMovieServiceConfig } from '../interfaces/movieService';
import { IAxiosService } from '../interfaces/service';

class MovieHttpService implements IMovieService {
  constructor(baseUrl: string) {
    this.service = new HttpService(baseUrl);
  }
  service: IAxiosService;
  getAllMovies = async (config?: IMovieServiceConfig): Promise<IGetAllMoviesResponse> => {
    const movies: Movie[] = await this.service.get("/", config).then(response => response.data);
    let response: IGetAllMoviesResponse = {
      count: movies.length,
      movies,
    };
    if (config) {
      const { limit, offset, filter } = config;
      if (filter != null) {
        response.movies = movies.filter((movie) => {
          let match = true;
          Object.entries(filter).forEach(([key, value]) => {
            const movieVal = movie[key as keyof Movie];
            if (movieVal == null || !movieVal.toLowerCase().includes((value as string).toLowerCase())) {
              match = false;
            }
          })
          return match;
        })
      }
      if (limit != null && offset != null) {
        response.count = response.movies.length;
        response.movies = response.movies.slice(offset, limit + offset);
      }
    }
    return response;
  }
  getMovieById = (id: string): Promise<Movie> => this.service.get(`/${id}`).then(response => response.data);
}

const movieHttpService = new MovieHttpService("ace");

export {
  movieHttpService
};
