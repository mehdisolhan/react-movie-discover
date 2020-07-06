import React from 'react';
import './Movie.css';

class Movie extends React.Component{
    render(){
        const movie = this.props.movie;
        if(movie.Response === "True") {
        return (
            <div id="movieContainer">
            <div className="card">
              <div className="card-body card-title">
                <p className="card-text card-movie-title">{movie.Title}</p>
              </div>
              <div className="card-body card-poster">
                  { movie.Poster !== "N/A" ? 
                    <img id="posterImg" src={movie.Poster} className="card-img-top img-fluid rounded mx-auto d-block" alt="..." />
                   : 
                   <p className="notFound">Picture could not be found</p>
                  }
              </div>
              <div className="card-body card-stars">
                <p className="card-text"><b>Stars:</b> {movie.Actors}</p>
                <hr></hr>
              </div>
              <div className="card-body card-rate">
                <p className="card-text"><b>IMDb Rate:</b> {movie.imdbRating} </p>
              </div>
            </div>
          </div>
                
        );
        } else {
            return (
                <div id="movieContainer">
                     <p className="notFound">Movie/Tv series could not be found</p>
                </div>
            );
        }
    }
} 
export default Movie;