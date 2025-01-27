import React from "react";
// import { useNavigate } from "react-router-dom";
import { MoveRight } from "lucide-react";
import "./evolutionPokemonComponent.css";

type Props = {
  pokemonEvolution: {
    name: string;
    img: string;
  }[];
  backgroundColor: string;
  onClick?: (name: string) => void;
};

const EvolutionComponent = ({
  pokemonEvolution,
  backgroundColor,
  onClick,
}: Props) => {
  // const navigate = useNavigate();

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
            onClick={() => onClick && onClick(item.name)}
            // onClick={() => navigate(`/pokemon/${item.name}`)}
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
