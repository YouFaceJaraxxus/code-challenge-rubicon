import { configureStore } from '@reduxjs/toolkit';
import moviesSlice from '../slices/moviesSlice';

const store = configureStore({
  reducer: {
    movies: moviesSlice
  },
})
type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

const selectMovies = (state: RootState) => state.movies;

export type{
  RootState,
  AppDispatch,
}

export {selectMovies
}

export default store;