import { AxiosHeaders } from "axios";

export interface IAxiosBaseQuery<T> {
  url: string;
  method: string;
  data?: T;
  params?: Record<string, string|number|string[]|number[]>
  headers?: AxiosHeaders;
}
