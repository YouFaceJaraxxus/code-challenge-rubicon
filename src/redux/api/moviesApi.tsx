import { createApi } from "@reduxjs/toolkit/query/react";
import { IGetAllMoviesResponse } from "../../service/interfaces/movieService";
import { axiosBaseQuery } from "../../shared/api/axiosBaseQuery";
import { config } from "../../config";
import { MovieType } from "../../shared/types/movie";

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
          url: `${type}/popular?language=en-US`,
          method: "get",
          params: queryParams,
        };
      },
    }),
  }),
});

export const { useSearchAllMoviesQuery, useGetPopularMoviesQuery } = moviesApi;
