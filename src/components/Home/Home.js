import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import { useDispatch } from "react-redux";
import { fetchAsyncMovies, fetchAsyncShows } from "../../features/movies/movieSlice";

const Header = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchAsyncMovies());
        dispatch(fetchAsyncShows());
    }, [dispatch]);

    return (
        <div className="banner-img">
            <MovieListing />
        </div>
    );
};

export default Header