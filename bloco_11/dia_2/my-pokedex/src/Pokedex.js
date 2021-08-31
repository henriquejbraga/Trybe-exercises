import React from 'react';
import NomePokemon from './NomePokemon';

class Pokedex extends React.Component {
  render() {
    const { pokemons } = this.props;
    return (
      <div className="pokedex">
        {pokemons.map(pokemon => <NomePokemon key={pokemon.id} pokemon={pokemon} />)}
      </div>
    )
  }
}
export default Pokedex;