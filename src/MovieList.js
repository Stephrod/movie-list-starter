import React from 'react';
import MovieListItem from './MovieListItem';

const MovieList = props => {
  render() {
    return (
      <ul className="movie-list">
        {props.movies.map(movie => {
          return (
            <MovieList
              key={movie._id}
              title={movie.title}
              poster={movie.poster}
              year={movie.year}
              rated={movie.rated}
              plot={movie.plot}
            />
          )
        })}
      </ul>
    );
  }
}

MovieList.propTypes = {
  movies: React.PropTypes.array.isRequired
};

export default MovieList;
