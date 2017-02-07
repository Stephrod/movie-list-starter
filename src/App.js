import React, { Component } from 'react';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();

    this.state = {
      searchText: '',
      movies: []
    };
  }

  componentDidMount() {
    axios.get(`http://www.omdbapi.com`)
      .then(resp => {
        this.setState({
          ...this.state,
          searchText: this.state.searchText,
          movies: resp.data
        })
      })
      .catch(err => console.log(`Error! ${err}`));
  }

  handleSearchBarChange(event) {
    this.setState({
      searchText: event.target.value
    });
  }

  getFilteredMovies() {
  // Remove any white space, and convert the searchText to lowercase
  const term = this.state.searchText.trim().toLowerCase();
  const movies = this.state.movies;

  // If our term is an empty string, we want to return all of the contacts
  if (!term) {
    return movies;
    }
  // Filter will return a NEW array of contacts, the contact will
  // be included in the array if the function returns true,
  // and excluded if the function returns false
  return movies.filter(movie => {
    return movie.name.toLowerCase().search(term) >= 0;
  });
}

  render() {
    return (
      <div className="App">
      <SearchBar value={this.state.searchText} onChange={this.handleSearchBarChange.bind(this)}/>
      <MovieList movies={this.getFilteredMovies()}/>
      </div>
    );
  }
}

export default App;
