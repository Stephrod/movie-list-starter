import React from 'react';

const MovieListItem = props => {
  return (
    <li className="movie">
      <div className="image-cropper">
        <img src={props.poster} alt="poster"/>
      </div>
      <div className="movie-info">
        <h2>{props.title}</h2>
        {props.rated}
        {props.year}
        {props.runtime}
      </div>
    </li>
  );
}

MovieListItem.propTypes = {
  poster: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  rated: React.PropTypes.string.isRequired,
  year: React.PropTypes.string.isRequired,
  runtime: React.PropTypes.string.isRequired
};
export default MovieListItem;
