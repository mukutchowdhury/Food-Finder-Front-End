import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaSearch } from 'react-icons/fa'
import '../styling/restStyle.css'

const SearchBar = () => {
    const [input, setInput] = useState("")
  return (
  <div className= 'input-wrapper'>  
    <input placeholder='Look for restaurants...' value={input} onChange={(e) => setInput(e.target.value)}/>
    <FaSearch id='search-icon'/>
  </div>
  );
};

export default SearchBar;
