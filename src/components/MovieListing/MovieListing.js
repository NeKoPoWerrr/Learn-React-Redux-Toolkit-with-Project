import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss";

const MovieListing = () => {
    const movies = useSelector(getAllMovies);
    const shows = useSelector(getAllShows)
    let renderMovies, renderShows = "";
    renderMovies = movies.Response === "True" 
    ? (movies.Search.map((movie, index) => {
        return (
            <MovieCard key={index} data={movie} />
        )
    })) 
    : (<div className="movies-error"><h3>{movies.Error}</h3></div>)

    renderShows = movies.Response === "True" 
    ? (shows.Search.map((show, index) => {
        return (
            <MovieCard key={index} data={show} />
        )
    })) 
    : (<div className="movies-error"><h3>{movies.Error}</h3></div>)

    console.log("rener", movies)
    return (
       <div className="movie-wraper">
           <div className="movie-list">
               <h2>Movies</h2>
               <div className="movie-container">
                   {renderMovies}
               </div>
           </div>
           <div className="movie-list">
               <h2>Shows</h2>
               <div className="movie-container">
                   {renderShows}
               </div>
           </div>
       </div>
    )
}

export default MovieListing