import { config } from "../../config";
import { Movie } from "../../shared/types/movie";
import HttpService from "../httpService";
import IMovieService, {
  IGetAllMoviesResponse,
  IMovieServiceConfig,
} from "../interfaces/movieService";
import { IAxiosService } from "../interfaces/service";

const defaultBaseURL = config.tMDBApiBaseURL;
const tMDBApiReadAccessToken = config.tMDBApiReadAccessToken;

class MovieHttpService implements IMovieService {
  constructor(baseUrl = defaultBaseURL) {
    if (!baseUrl) {
      throw new Error("[MovieHttpService]: Missing base url");
    }
    this.service = new HttpService(baseUrl, {
      axiosConfig: {
        headers: { Authorization: `Bearer ${tMDBApiReadAccessToken}` },
      },
    });
  }
  service: IAxiosService;
  getAllMovies = async (
    config?: IMovieServiceConfig
  ): Promise<IGetAllMoviesResponse> => {
    const response: IGetAllMoviesResponse = await this.service
      .get("/movie/popular?language=en-US", config)
      .then((response) => response.data);
    return response;
  };
  getMovieById = (id: string): Promise<Movie> =>
    this.service.get(`/${id}`).then((response) => response.data);
}

const movieHttpService = new MovieHttpService();

export { movieHttpService };
