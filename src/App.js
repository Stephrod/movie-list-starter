import React, { Component } from 'react';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();

    this.state = {
      searchText: '',
      contacts: []
    };
  }

  handleSearchBarChange(event) {
  this.setState({
    movies: this.state.movies,
    searchText: event.target.value
  })
}


  render() {
    return (
      <div className="App">
        <SearchBar value={this.state.searchText} onChange={this.handleSearchBarChange.bind(this)} />
        <MovieList movies={this.state.movies}/>
      </div>
    );
  }
}

export default App;
