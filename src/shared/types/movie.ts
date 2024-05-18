export type Movie = {
  id: string;
  title: string;
  name: string;
  poster_path: string;
};

export enum MovieType {
  MOVIE = "movie",
  TV_SHOW = "tv",
}
