import { useState } from 'react';
import '../styling/restStyle.css'

const SearchBar = () => {
    const [input, setInput] = useState("")
  return (
  <div className= 'input-wrapper'>  
    <input placeholder='Look for restaurants...' value={input} onChange={(e) => setInput(e.target.value)}/>
  </div>
  );
};

export default SearchBar;
