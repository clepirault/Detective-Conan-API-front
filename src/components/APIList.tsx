import axios from 'axios';
import React, { ReactElement, useEffect, useState } from 'react';
import CharacterDetail from './CharacterDetail';
import './CharacterDetail.css';
import FilterBar from './FilterBar';
import SearchBar from './SearchBar';

function APIList(): ReactElement {
  const [characterList, setCharacterList] = useState([]);
  const [getCharacter, setGetCharacter] = useState('');
  const [getCharacterByRole, setGetCharacterByRole] = useState('');
  useEffect(() => {
    axios
      .get('https://detective-conan-api.herokuapp.com/characters')
      .then((response) => response.data)
      .then((data) => {
        setCharacterList(data);
      });
  }, []);
  const handleGetCharacter = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGetCharacter(event.target.value);
  };
  const handleGetCharacterByRole = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setGetCharacterByRole(event.target.value);
  };
  return (
    <div>
      <SearchBar
        type='text'
        getCharacter={getCharacter}
        handleGetCharacter={handleGetCharacter}
        placeholder='Rechercher un personnage'
      />
      <FilterBar
        type='radio'
        name='role'
        allItems='Tous les personnages'
        firstItem='Personnages principaux'
        secondItem='Personnages secondaires'
        thirdItem='Méchants'
        firstValue='principal'
        secondValue='secondaire'
        thirdValue='méchant'
        handleGetCharacterByRole={handleGetCharacterByRole}
      />
      <div className='characterList'>
        {characterList
          .filter(
            (element: any) =>
              (!getCharacterByRole &&
                (element.lastname.includes(getCharacter) ||
                  element.firstname.includes(getCharacter))) ||
              (element.role.includes(getCharacterByRole) &&
                (element.lastname.includes(getCharacter) ||
                  element.firstname.includes(getCharacter)))
          )
          .map((element) => (
            <CharacterDetail {...element} />
          ))}
      </div>
    </div>
  );
}

export default APIList;
