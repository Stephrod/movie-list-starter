import React from 'react';
import { Link } from 'react-router';

const Movie = (props) => {
  return (
      <li className="movie">
      <Link to={`/profile/${props.movie.imdbID}`}>
        <div className="image-cropper">
          <img src={props.poster} alt="movie"/>
        </div>
      </Link>
        <div className="movie-info">
          <h2>{props.title}</h2>
          <div onClick={() => props.onDelete(props.id)} className="delete-button">Delete</div>
        </div>
      </li>
  );
}

Movie.propTypes = {
  id: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
}

export default Movie;
