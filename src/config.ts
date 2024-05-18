import { Environment } from "./shared/types/config";

const environment = process.env.VITE_ENVIRONMENT as Environment;
const tMDBApiKey = process.env.VITE_TMDB_API_KEY;
const tMDBApiReadAccessToken = process.env.VITE_TMDB_READ_ACCESS_TOKEN;
const tMDBApiBaseURL= process.env.VITE_TMDB_BASE_URL;

export const config = {
    environment,
    tMDBApiKey,
    tMDBApiReadAccessToken,
    tMDBApiBaseURL
};
