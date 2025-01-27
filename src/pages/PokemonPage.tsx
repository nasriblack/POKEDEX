/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { EvolutionChain, Pokemon, PokemonSpecies } from "../types/pokemon";
import {
  getEvolutionChain,
  getPokemon,
  getPokemonSpecies,
} from "../services/api";
import { TYPE_COLORS } from "../constants/pokemonColor";
import { ChevronLeft } from "lucide-react";
import EvolutionComponent from "../components/pokemon-page/evolution-pokemon/EvolutionComponent";
import StatComponent from "../components/pokemon-page/stat-pokemon/StatComponent";
import TabComponent from "../components/pokemon-page/TabComponent";
import InformationPokemonComponent from "../components/pokemon-page/information-pokemon/InformationPokemonComponent";

const PokemonPage = () => {
  const { idOrName } = useParams<{ idOrName: string }>();
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [species, setSpecies] = useState<PokemonSpecies | null>(null);
  const [evolution, setEvolution] = useState<EvolutionChain | null>(null);
  const [activeTab, setActiveTab] = useState<"stats" | "evolutions" | "moves">(
    "stats"
  );
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const pokemonData = await getPokemon(idOrName!);
        setPokemon(pokemonData);

        const speciesData = await getPokemonSpecies(pokemonData.id);
        setSpecies(speciesData);

        const evolutionData = await getEvolutionChain(
          speciesData.evolution_chain.url
        );
        setEvolution(evolutionData);
      } catch (err) {
        setError(true);
      }
    };

    fetchPokemonData();
  }, [idOrName]);

  if (error) {
    return <div>Error loading Pokemon</div>;
  }

  if (!pokemon || !species || !evolution) {
    return <div>Loading...</div>;
  }

  const backgroundColor =
    TYPE_COLORS[pokemon.types[0].type.name as keyof typeof TYPE_COLORS];
  const description = species.flavor_text_entries
    .find((entry) => entry.language.name === "en")
    ?.flavor_text.replace(/\f/g, " ");

  const chain = evolution?.chain;

  const pokemonEvolution = [
    {
      name: chain?.species?.name,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
        chain.species.url.split("/")[6]
      }.png`,
    },
    ...chain.evolves_to.map((e) => {
      return {
        name: e.species.name,
        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
          e.species.url.split("/")[6]
        }.png`,
      };
    }),
    ...chain.evolves_to.flatMap((e) =>
      e.evolves_to.map((e2) => {
        return {
          name: e2.species.name,
          img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
            e2.species.url.split("/")[6]
          }.png`,
        };
      })
    ),
  ];
  return (
    <>
      <div style={{ backgroundColor }} className="pokemon_page_container">
        <button onClick={() => navigate("/")} className="back_button">
          <ChevronLeft color="white" size={39} height={67} />
        </button>

        <div className="pokemon_page_content_card">
          <InformationPokemonComponent
            pokemon={pokemon}
            description={description}
          />

          <TabComponent
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            backgroundColor={backgroundColor}
          />

          <div className="pokemon_page_tab_content">
            {activeTab === "stats" && (
              <StatComponent
                pokemon={pokemon}
                backgroundColor={backgroundColor}
              />
            )}
            {activeTab === "evolutions" && (
              <EvolutionComponent
                backgroundColor={backgroundColor}
                pokemonEvolution={pokemonEvolution}
                onClick={(name) => navigate(`/pokemon/${name}`)}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PokemonPage;
