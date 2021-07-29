import React, { ReactElement } from 'react';
import './SearchBar.css';
import search from "./Search.svg";

interface Props {
  type: string;
  getCharacter: string;
  handleGetCharacter: any;
  placeholder: string;
}

function SearchBar({ type, getCharacter, handleGetCharacter, placeholder }: Props): ReactElement {
  
  return (
    <div className="searchBarBlock">
      <img src={search} alt="search icon" />
      <input type={type} value={getCharacter} onChange={handleGetCharacter} placeholder={placeholder} className="searchBar" />
    </div>
  )
}

export default SearchBar;
