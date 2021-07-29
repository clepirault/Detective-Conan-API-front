import axios from 'axios';
import React, { ReactElement, useEffect, useState } from 'react';
import CharacterDetail from './CharacterDetail';
import './CharacterDetail.css';

function APIList(): ReactElement {
  const [characterList, setCharacterList] = useState([]);
  useEffect(()=>{
    axios
    .get('http://localhost:8000/characters')
    .then((response)=>response.data)
    .then((data)=>{
      setCharacterList(data);
    });
  }, []);
  return (
    <div className="characterList">
      {
        characterList
        .map((element)=>(
          <CharacterDetail {...element}  />
        ))
      } 
    </div>
  )
}

export default APIList;
