import React, { ReactElement } from 'react';
import './CharacterDetail.css';

interface Props {
  lastname: string;
  firstname: string;
  alias: string;
  role: string;
  relatives: string;
  profession: string;
  comment: string;
  image: string;
}

function CharacterDetail(props: Props): ReactElement {
  const { lastname, firstname, alias, role, relatives, profession, comment, image } = props;
  return (
    <div className="characterDetail">
      <h3>{firstname} {lastname}</h3>
      <span>{alias}</span>
      <img src={image} alt={`${lastname} ${firstname}`} className="characterImage"/>
      <span>Rôle : {role}</span>
      <span>Liens : {relatives}</span>
      <span>Profession : {profession}</span>
      <span>{comment}</span>
    </div>
  )
}

export default CharacterDetail;
