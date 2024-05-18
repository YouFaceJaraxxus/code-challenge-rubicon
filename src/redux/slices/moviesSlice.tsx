import { createApi } from "@reduxjs/toolkit/query/react";
import { IGetAllMoviesResponse } from "../../service/interfaces/movieService";
import { axiosBaseQuery } from "./axiosBaseQuery";
import { config } from "../../config";

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: axiosBaseQuery({
    baseUrl: config.tMDBApiBaseURL as string,
  }),
  endpoints: (builder) => ({
    getAllMovies: builder.query<IGetAllMoviesResponse, void>({
      query: () => ({
        url: "/movie/popular?language=en-US&page=1",
        method: "get",
      }),
    }),
  }),
});

export const { useGetAllMoviesQuery } = moviesApi;
