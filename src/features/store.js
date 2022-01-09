import { configureStore } from "@reduxjs/toolkit";
import movieReducers from "./movies/movieSlice";

export const store = configureStore({
    reducer: {
        movies: movieReducers,
    },
});