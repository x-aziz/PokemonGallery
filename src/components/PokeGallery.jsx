import React from 'react';
import Pokemon from './Pokemon';
import './PokeGallery.css';

const pokemons = [
  { name: 'Pikachu', image: 'https://img.pokemondb.net/artwork/pikachu.jpg', types: ['Electric'] },
  { name: 'Bulbasaur', image: 'https://img.pokemondb.net/artwork/bulbasaur.jpg', types: ['Grass', 'Poison'] },
  { name: 'Charmander', image: 'https://img.pokemondb.net/artwork/charmander.jpg', types: ['Fire'] },
  { name: 'Squirtle', image: 'https://img.pokemondb.net/artwork/squirtle.jpg', types: ['Water'] },
  { name: 'Jigglypuff', image: 'https://img.pokemondb.net/artwork/jigglypuff.jpg', types: ['Normal', 'Fairy'] },
  { name: 'Meowth', image: 'https://img.pokemondb.net/artwork/meowth.jpg', types: ['Normal'] },
  { name: 'Psyduck', image: 'https://img.pokemondb.net/artwork/psyduck.jpg', types: ['Water'] },
  { name: 'Machop', image: 'https://img.pokemondb.net/artwork/machop.jpg', types: ['Fighting'] },
  { name: 'Gengar', image: 'https://img.pokemondb.net/artwork/gengar.jpg', types: ['Ghost', 'Poison'] },
  { name: 'Eevee', image: 'https://img.pokemondb.net/artwork/eevee.jpg', types: ['Normal'] },
  { name: 'Snorlax', image: 'https://img.pokemondb.net/artwork/snorlax.jpg', types: ['Normal'] },
  { name: 'Dragonite', image: 'https://img.pokemondb.net/artwork/dragonite.jpg', types: ['Dragon', 'Flying'] },
];

const PokeGallery = () => {
  return (
    <div className="poke-gallery">
      {pokemons.map((pokemon, index) => (
        <Pokemon
          key={index}
          name={pokemon.name}
          image={pokemon.image}
          types={pokemon.types}
        />
      ))}
    </div>
  );
};

export default PokeGallery;
