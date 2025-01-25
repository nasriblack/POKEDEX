import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/button/Button";
import { getPokemon, getRandomPokemon } from "../services/api";

const SearchPage = () => {
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!search) return;
    setIsLoading(true);
    try {
      await getPokemon(search);
      setIsLoading(false);
      navigate(`/pokemon/${search.toLowerCase()}`);
    } catch (error) {
      setIsLoading(false);
      navigate(`/pokemon/notfound`);
      // throw new Error(` an Error occurred: ${error}`);
    }
  };
  const handleRandom = async () => {
    setIsLoading(false);

    try {
      const pokemon = await getRandomPokemon();
      setIsLoading(true);

      navigate(`/pokemon/${pokemon.id}`);
    } catch (error) {
      setIsLoading(false);
      throw new Error(` an Error occurred: ${error}`);
    }
  };
  return (
    <div className="container">
      <div className="card">
        <div className="pokeball-container">
          <img src="/pokeball.png" alt="Pokeball" className="pokeball" />
        </div>
        <form onSubmit={handleSearch} className="form">
          <div className="form-group">
            <label className="label">Pokemon Name or Id</label>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="input"
            />
          </div>
          <div className="button-group">
            <Button
              type="submit"
              isDisabled={isLoading}
              className="button-primary"
            >
              Search
            </Button>
            <Button
              type="button"
              isDisabled={isLoading}
              className="button-primary"
              onClick={handleRandom}
            >
              Random
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchPage;
