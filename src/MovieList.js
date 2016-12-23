import React, { Component } from 'react';
import MovieList from './MovieList';

class MovieList extends Component {
  render() {
    return (
      <ul className="movie-list">
        {this.props.movies.map(movie => {
          return (
            <Movie
              key={movie._id}
              title={movie.name}
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
