import axios, { AxiosError, AxiosHeaders } from "axios";
import { config } from "../../config";

export const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: "" }) =>
  async ({
    url,
    method,
    data,
    params,
    headers,
  }: {
    url: string;
    method: string;
    data?: any;
    params?: string[];
    headers?: AxiosHeaders;
  }) => {
    try {
      const axiosInstance = axios.create({
        baseURL: config.tMDBApiBaseURL,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${config.tMDBApiReadAccessToken}`,
          // Add any other headers or configurations you need
        },
      });
      const result = await axiosInstance({
        url: baseUrl + url,
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
