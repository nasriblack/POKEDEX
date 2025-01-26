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
import { ArrowLeft, ChevronLeft } from "lucide-react";
import Button from "../components/button/Button";
import { statNameTransformation } from "../utlis";

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

  console.log("checking the idOrName", idOrName);

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

  const renderStats = () => (
    <div
      style={{
        width: "100%",
        maxWidth: "35rem",
      }}
    >
      {pokemon.stats.map((stat) => (
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            marginBottom: "0.5rem",
          }}
        >
          <div className="stat_name" style={{ color: backgroundColor }}>
            {statNameTransformation(stat.stat.name)}
          </div>
          <div className="stat_base">{stat.base_stat}</div>
          <div className="stat_bar">
            <div
              className="stat_bar_fill"
              style={{
                width: `${(stat.base_stat / 255) * 100}%`,
                backgroundColor,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <>
      <div style={{ backgroundColor }} className="pokemon_page_container">
        <button onClick={() => navigate("/")} className="back_button">
          <ChevronLeft color="white" size={39} height={67} />
        </button>

        <div className="pokemon_page_content_card">
          <img
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt={pokemon.name}
            className="pokemon_page_image"
          />

          <h1 className="pokemon_page_title">{pokemon.name}</h1>

          <div className="pokemon_page_type_container">
            {pokemon.types.map((type) => (
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

          <div className="pokemon_page_tab_container">
            {(["stats", "evolutions", "moves"] as const).map((tab) => (
              <Button
                type="button"
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`tab_button ${activeTab === tab ? "active" : ""}`}
                style={
                  activeTab === tab
                    ? { backgroundColor }
                    : { color: backgroundColor }
                }
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </Button>
            ))}
          </div>

          <div className="pokemon_page_tab_content">
            {activeTab === "stats" && renderStats()}
          </div>
        </div>
      </div>
    </>
  );
};

export default PokemonPage;
