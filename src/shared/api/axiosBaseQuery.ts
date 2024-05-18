import axios, { AxiosError } from "axios";
import { config } from "../../config";
import { IAxiosBaseQuery } from "../types/api";

export const axiosBaseQuery =
  <T>(baseUrl: string) =>
  async ({ url, method, data, params, headers }: IAxiosBaseQuery<T>) => {
    try {
      const axiosInstance = axios.create({
        baseURL: baseUrl,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${config.tMDBApiReadAccessToken}`,
          // Add any other headers or configurations you need
        },
      });
      const result = await axiosInstance({
        url: `${baseUrl}/${url}`,
        method,
        data,
        params,
        headers,
      });
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError as AxiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };
