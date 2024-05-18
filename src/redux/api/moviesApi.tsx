import { createApi } from "@reduxjs/toolkit/query/react";
import { IGetAllMoviesResponse } from "../../service/interfaces/movieService";
import { axiosBaseQuery } from "../../shared/api/axiosBaseQuery";
import { config } from "../../config";
import { Movie, MovieType } from "../../shared/types/movie";

type SearchAllMoviesQueryParams = {
  page: number;
  query: string;
};

type SearchAllMoviesParams = {
  type: MovieType;
  queryParams: SearchAllMoviesQueryParams;
};

type GetPopularMoviesParams = {
  type: MovieType;
  queryParams: GetPopularMoviesQueryParams;
};

type GetPopularMoviesQueryParams = {
  page: number;
};


type GetMovieDetailsParams = {
  type: MovieType;
  id: string;
};

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: axiosBaseQuery<void>(config.tMDBApiBaseURL as string),
  endpoints: (builder) => ({
    searchAllMovies: builder.query<
      IGetAllMoviesResponse,
      SearchAllMoviesParams
    >({
      query: (params: SearchAllMoviesParams) => {
        const { queryParams, type } = params;
        return {
          url: `/search/${type}?include_adult=false&language=en-US`,
          method: "get",
          params: queryParams,
        };
      },
    }),
    getPopularMovies: builder.query<
      IGetAllMoviesResponse,
      GetPopularMoviesParams
    >({
      query: (params: GetPopularMoviesParams) => {
        const { type, queryParams } = params;
        return {
          url: `${type}/popular?include_adult=falselanguage=en-US`,
          method: "get",
          params: queryParams,
        };
      },
    }),

    getMovieDetails: builder.query<
      Movie,
      GetMovieDetailsParams
    >({
      query: (params: GetMovieDetailsParams) => {
        const { type, id } = params;
        return {
          url: `${type}/${id}?include_adult=false&language=en-US`,
          method: "get",
        };
      },
    }),
  }),
});

export const { useSearchAllMoviesQuery, useGetPopularMoviesQuery, useGetMovieDetailsQuery } = moviesApi;
