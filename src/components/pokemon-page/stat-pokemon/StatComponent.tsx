import { statNameTransformation } from "../../../utlis";
import { Pokemon } from "../../../types/pokemon";
import "./statPokemonComponent.css";

type Props = {
  pokemon: Pokemon;
  backgroundColor: string;
};

const StatComponent = ({ pokemon, backgroundColor }: Props) => {
  return (
    <div
      style={{
        width: "25rem",
        maxWidth: "35rem",
      }}
    >
      {pokemon.stats.map((stat) => (
        <div
          key={stat.stat.name}
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
          <div
            className="stat_base"
            data-testid={`${stat.stat.name.toLowerCase()}-value`}
          >
            {stat.base_stat}
          </div>
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
