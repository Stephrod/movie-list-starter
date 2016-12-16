import React, { Component } from 'react';

class MovieList extends Component {
  constructor(){
    super();

    this.state = {
      movies = []
    }

    render() {
      return (
        <ul className="movie-list">
        </ul>
      )
    }
  }
}

export defaul MovieList;
