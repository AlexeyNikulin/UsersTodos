import React from 'react';

import './Search-Panel.css';

const SearchPanel = () => {

    return (
      <input type="text"
             className="form-control search-input"
             placeholder="Type to search" />
    );
};

export default SearchPanel;