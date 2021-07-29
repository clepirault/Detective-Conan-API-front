import React, { ReactElement } from 'react';
import './CharacterDetail.css';

interface Props {
  lastname: string;
  firstname: string;
  alias: string;
  organisation: string;
  role: string;
  relatives: string;
  profession: string;
  comment: string;
  image: string;
}

function CharacterDetail(props: Props): ReactElement {
  const { lastname, firstname, alias, organisation, role, relatives, profession, comment, image } = props;
  return (
    <div className="characterDetail">
      <h3>{firstname[0].toUpperCase()}{firstname.slice(1).toLowerCase()} {lastname ? lastname[0].toUpperCase() : ""}{lastname ? lastname.slice(1).toLowerCase() : ""}</h3>
      <span>{alias}</span>
      <img src={image} alt={`${lastname} ${firstname}`} className="characterImage"/>
      <span>{organisation}</span>
      <span>{profession}</span>
      <span>{comment}</span>
      <span>Rôle : {role}</span>
      <span>Liens : {relatives}</span>
    </div>
  )
}

export default CharacterDetail;
