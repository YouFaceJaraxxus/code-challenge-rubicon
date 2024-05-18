import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { moviesApi } from "../slices/moviesSlice";

const store = configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesApi.middleware),
});
type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;


export type { RootState, AppDispatch };

setupListeners(store.dispatch)

export default store;
