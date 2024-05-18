import axios from "axios";
import { IAxiosService, IAxiosServiceConfig } from "./interfaces/service";
import qs from "qs";

class HttpService implements IAxiosService {
  constructor(baseUrl: string, defaultConfig: IAxiosServiceConfig = {}) {
    this.baseUrl = baseUrl;
    this.defaultConfig = defaultConfig;
  }
  baseUrl?: string | undefined;
  defaultConfig: IAxiosServiceConfig = {};

  get = (path: string, config: IAxiosServiceConfig = {}) => {
    let queryString;
    const query = config?.query;
    if (query) {
      queryString = qs.stringify(query);
    }
    return axios.get(
      `${this.baseUrl}${path}${queryString ? `?${queryString}` : ""}`,
      { ...this.defaultConfig.axiosConfig, ...config.axiosConfig }
    );
  };

  post = (path: string, data: object, config: IAxiosServiceConfig = {}) => {
    return axios.post(`${this.baseUrl}${path}`, JSON.stringify(data), {
      ...this.defaultConfig.axiosConfig,
      ...config.axiosConfig,
    });
  };

  put = (path: string, data: any, config: IAxiosServiceConfig = {}) => {
    return axios.put(`${this.baseUrl}${path}`, JSON.stringify(data), {
      ...this.defaultConfig.axiosConfig,
      ...config.axiosConfig,
    });
  };

  patch = (path: string, data: any, config: IAxiosServiceConfig = {}) => {
    return axios.patch(`${this.baseUrl}${path}`, JSON.stringify(data), {
      ...this.defaultConfig.axiosConfig,
      ...config.axiosConfig,
    });
  };

  delete = (path: string, config: IAxiosServiceConfig = {}) => {
    return axios.delete(`${this.baseUrl}${path}`, {
      ...this.defaultConfig.axiosConfig,
      ...config.axiosConfig,
    });
  };
}

export default HttpService;
