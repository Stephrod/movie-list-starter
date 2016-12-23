import React from 'react';

const MovieListItem = (props) => {
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

export default MovieListItem;
