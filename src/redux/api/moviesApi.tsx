import { createApi } from "@reduxjs/toolkit/query/react";
import { IGetAllMoviesResponse } from "../../service/interfaces/movieService";
import { axiosBaseQuery } from "../../shared/api/axiosBaseQuery";
import { config } from "../../config";

export type GetAllMoviesQueryParams = {
  page: number;
};

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: axiosBaseQuery<void>(config.tMDBApiBaseURL as string),
  endpoints: (builder) => ({
    getAllMovies: builder.query<IGetAllMoviesResponse, GetAllMoviesQueryParams>(
      {
        query: (queryParams: GetAllMoviesQueryParams) => ({
          url: "/movie/popular?language=en-US",
          method: "get",
          params: queryParams,
        }),
      }
    ),
  }),
});

export const { useGetAllMoviesQuery } = moviesApi;
