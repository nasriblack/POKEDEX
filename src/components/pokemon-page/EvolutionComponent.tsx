import React from "react";
import { EvolutionChain } from "../../types/pokemon";
import { useNavigate } from "react-router-dom";
import { MoveRight } from "lucide-react";

type Props = {
  evolution: EvolutionChain;
  backgroundColor: string;
};

const EvolutionComponent = ({ evolution, backgroundColor }: Props) => {
  const chain = evolution.chain;
  const navigate = useNavigate();
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
    <div className="evolution_container">
      {pokemonEvolution?.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && <MoveRight color={backgroundColor} />}
          <div
            style={{
              textAlign: "center",
              cursor: "pointer",
            }}
            onClick={() => navigate(`/pokemon/${item.name}`)}
          >
            <img
              src={item.img}
              alt={item.name}
              style={{
                width: "6rem",
                height: "6rem",
              }}
            />
            <p
              style={{
                textTransform: "capitalize",
                marginTop: "0.5rem",
              }}
            >
              {item.name}
            </p>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default EvolutionComponent;
