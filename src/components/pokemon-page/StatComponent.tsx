import React from "react";
import { statNameTransformation } from "../../utlis";
import { Pokemon } from "../../types/pokemon";

type Props = {
  pokemon: Pokemon;
  backgroundColor: string;
};

const StatComponent = ({ pokemon, backgroundColor }: Props) => {
  return (
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
};

export default StatComponent;
