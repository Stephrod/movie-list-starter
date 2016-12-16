import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();

      this.state = {
        movies: [],
        searchText: ''
      };
    }

    componentDidMount() {
      axios.get('http://www.omdbapi.com/?')
        .then(resp => {
          this.setState({
            searchText: this.state.searchText,
            movies: resp.data
          })
        })
        .catch(err => console.log(`Error! ${err}`));
    }

    handleSearchBarChange(event) {
      this.setState({
        movies: event.target.movies,
        searchText: event.target.value
      })
    }

    getFilteredContacts(){
      const term = this.state.searchText.trim().toLowerCase();
      const movies = this.state.movies;

      if (!term) {
        return movies;
      }
      return movies.filter(movie => {
        return movie.name.toLowerCase().search(term) >= 0;
      })
    }

    render() {
      return (
        <div className="App">
        <SearchBar value={this.state.searchText} onChange{this.handleSearchBarChange.bind(this)}/>
        <MovieList movies={this.getFilteredContacts()} />
        </div>
      );
    }

    componentDidMount() {
      console.log('componentDidMount');
      debugger;
    }
}

export default App;
