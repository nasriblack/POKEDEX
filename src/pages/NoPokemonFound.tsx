import { ChevronLeft } from "lucide-react";

const NoPokemonFound = () => {
  return (
    <div className="container_nopokemon">
      <div className="header_nopoekmon">
        <ChevronLeft
          width={100}
          height={100}
          color="white"
          cursor={"pointer"}
          onClick={() => window.history.back()}
        />
        <h1 className="title_nopokemon">No Pokemon Found!</h1>
      </div>
      <img src="/public/nopokemon_found.png" alt="no_pokemon_found" />
    </div>
  );
};

export default NoPokemonFound;
