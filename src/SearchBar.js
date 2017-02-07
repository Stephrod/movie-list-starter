import React from 'react';

const SearchBar = props => {
  return (
    <input
      className='search-bar'
      type="text"
      value={props.value}
      onChange={ event => props.onChange(event) }
    />
  );
};

SearchBar.propTypes = {
  // The value of the input element
  value: React.PropTypes.string.isRequired,
  // The handler that is triggered when the value changes
  // It passes the full SyntheticEvent as the first function argument
  onChange: React.PropTypes.func.isRequired
};

export default SearchBar;
