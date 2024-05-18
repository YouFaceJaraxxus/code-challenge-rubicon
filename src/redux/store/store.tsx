import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { moviesApi } from "../api/moviesApi";
import moviesSlice from "../slices/moviesSlice";

const store = configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer,
    moviesSlice: moviesSlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesApi.middleware),
});
type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

const selectMovies = (state: RootState) => state.moviesSlice;

setupListeners(store.dispatch);

export type { RootState, AppDispatch };
export { selectMovies };

export default store;
