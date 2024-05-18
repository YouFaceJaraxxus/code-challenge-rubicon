import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { movieHttpService as movieService } from "../../service/documentService/movieHttpService";
import {
  IGetAllMoviesResponse,
  IMovieServiceConfig,
} from "../../service/interfaces/movieService";
import { Movie } from "../../shared/types/movie";

interface MoviesState {
  movies: Movie[] | null;
  fetchingMovies: boolean;
  movie: Movie | null;
  fetchingMovieById: boolean;
  count: number;
}

const initialState: MoviesState = {
  movies: null,
  fetchingMovies: false,
  fetchingMovieById: false,
  movie: null,
  count: 0,
};

export const getMoviesAsync = createAsyncThunk(
  "movies/getMovies",
  async (config?: IMovieServiceConfig): Promise<IGetAllMoviesResponse> => {
    const response = await movieService.getAllMovies(config);
    return response;
  }
);

export const getMovieByIdAsync = createAsyncThunk(
  "movies/getMovieById",
  async (id: string): Promise<Movie | null> => {
    const response = await movieService.getMovieById(id);
    return response;
  }
);

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMoviesAsync.pending, (state) => {
        state.fetchingMovies = true;
      })
      .addCase(getMoviesAsync.fulfilled, (state, action) => {
        state.movies = action.payload.results;
        state.count = action.payload.total_results;
        state.fetchingMovies = false;
      })
      .addCase(getMoviesAsync.rejected, (state) => {
        state.fetchingMovies = false;
      })

      .addCase(getMovieByIdAsync.pending, (state) => {
        state.fetchingMovieById = true;
      })
      .addCase(getMovieByIdAsync.fulfilled, (state, action) => {
        state.movie = action.payload;
        state.fetchingMovieById = false;
      })
      .addCase(getMovieByIdAsync.rejected, (state) => {
        state.fetchingMovieById = false;
      });
  },
});

export default moviesSlice.reducer;
