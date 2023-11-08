import React from "react";
import { mockPokemonData } from "../mock/pokeData";

console.log(mockPokemonData);
const PokeCard = () => {
  return (
    <>
      <h1>{mockPokemonData.name}</h1>
      <section>
        <img src={mockPokemonData.sprites.front_default} alt="Charizard" />
        <img src={mockPokemonData.sprites.front_shiny} alt="Charizard" />
      </section>
      <a href={mockPokemonData.video}>Charizard's greatest video</a>
    </>
  );
};

export default PokeCard;
