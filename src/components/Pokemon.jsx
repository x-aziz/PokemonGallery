import React from 'react';
import './Pokemon.css'; // I'll create a simple CSS file for styling

const Pokemon = ({ name, image, types }) => {
  return (
    <div className="pokemon-card">
      <img src={image} alt={name} className="pokemon-image" />
      <h2>{name}</h2>
      <div className="pokemon-types">
        {types.map((type, index) => (
          <span key={index} className={`type ${type.toLowerCase()}`}>{type}</span>
        ))}
      </div>
    </div>
  );
};

export default Pokemon;
