import React from "react";
import { Pokemon } from "../../types/pokemon";
import { TYPE_COLORS } from "../../constants/pokemonColor";

type Props = {
  pokemon: Pokemon | null;
  description: string | undefined;
};

function InformationPokemonComponent({ pokemon, description }: Props) {
  return (
    <>
      <img
        src={pokemon?.sprites.other["official-artwork"].front_default}
        alt={pokemon?.name}
        className="pokemon_page_image"
      />

      <h1 className="pokemon_page_title">{pokemon?.name}</h1>

      <div className="pokemon_page_type_container">
        {pokemon?.types.map((type) => (
          <span
            key={type.type.name}
            className="pokemon_page_type"
            style={{
              backgroundColor:
                TYPE_COLORS[type.type.name as keyof typeof TYPE_COLORS],
            }}
          >
            {type.type.name}
          </span>
        ))}
      </div>

      <p className="description">{description}</p>
    </>
  );
}

export default InformationPokemonComponent;
