import React, { Component } from 'react';
import MovieListItem from './MovieListItem';

const MovieList = (props) => {
  render() {
    return (
      <ul className="movie-list">
        {props.movies.map(movie => {
          return (
            <Movie
              key={movie._id}
              title={movie.title}
              poster={movie.poster}
              rated={movie.rated}
            />
          )
        })}
      </ul>
    );
  }
}

export default MovieList;
