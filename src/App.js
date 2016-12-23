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
      axios.get(`http://www.omdbapi.com/?t=${movie}&plot=short&r=json`)
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

    render() {
      return (
        <div className="App">
        <SearchBar value={this.state.searchText} onChange{this.handleSearchBarChange.bind(this)}/>
        <MovieList movies={this.getFilteredContacts()} />
        </div>
      );
    }

//     componentDidMount() {
//       console.log('componentDidMount');
//       debugger;
//     }
// }

export default App;
