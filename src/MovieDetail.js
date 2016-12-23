import React, { Component } from 'react';
import axios from 'axios';

class MovieDetail extends Component {
  constructor() {
    super();

    this.state = {
      movie: null
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:3001/api/contacts/${this.props.params.id}`)
      .then(resp => {
        this.setState({
          movie: resp.data
        })
      })
      .catch(err => console.log(`Error! ${err}`));
  }

  renderProfile() {
    return (
      <div className="profile">
        <div className="movie-info">
          <h2>Name: {this.state.movie.title}</h2>
        </div>
      </div>
    );
  }

  render() {
    if (!this.state.movie) {
      return <h2>Loading...</h2>
    }

    return this.renderProfile();
  }
}

export default MovieDetail;
