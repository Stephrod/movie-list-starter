import React from 'react';
import Movie from './Movie'

const MovieList = (props) => {
      return (
        <ul className="movie-list">
        {props.movies.map(movies =>
          return (
            <Movie
            key={movie._id}
            id={movie._id}
            title={movie.title}
            onDelete={props.onDelete}
            />
          )
        )}
      </ul>
    );
  };

export default MovieList;
