import React from 'react';
import NomePokemon from './NomePokemon';

class Pokedex extends React.Component {
  render() {
    const { pokemons } = this.props;
    return (
      <div className="pokedex">
        {pokemons.map(pokemonss => <NomePokemon key={pokemonss.id} pokemon={pokemonss} />)}
      </div>
    )
  }
}
export default Pokedex;