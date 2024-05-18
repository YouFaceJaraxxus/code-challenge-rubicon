import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MovieType } from "../../shared/types/movie";

interface IMoviesSlice {
  moviesType: MovieType;
  moviesSearch: string;
}

const initialState: IMoviesSlice = {
  moviesType: MovieType.TV_SHOW,
  moviesSearch: "",
};

const moviesSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    setMoviesSearch: (state, action: PayloadAction<string>) => {
      state.moviesSearch = action.payload;
    },
    setMoviesType: (state, action: PayloadAction<MovieType>) => {
      state.moviesType = action.payload;
    },
  },
});

export const { setMoviesSearch, setMoviesType } = moviesSlice.actions;

export default moviesSlice.reducer;
