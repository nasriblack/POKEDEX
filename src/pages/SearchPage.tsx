/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/button/Button";
import { getPokemon, getRandomPokemon } from "../services/api";
import { useLazyQuery } from "@apollo/client";
import { GET_POKEMON } from "../services/graphql/queries";

const SearchPage = () => {
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const [getPokemon, { loading }] = useLazyQuery(GET_POKEMON, {
    onCompleted: (data) => {
      if (data.pokemon) {
        navigate(`/pokemon/${search.toLowerCase()}`);
      }
    },
    onError: () => {
      navigate("/pokemon/notfound");
    },
  });
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!search) return;

    getPokemon({
      variables: {
        idOrName: search.toLowerCase(),
      },
    });
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
              isDisabled={loading}
              className="button-primary"
            >
              Search
            </Button>
            <Button
              type="button"
              isDisabled={loading}
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
