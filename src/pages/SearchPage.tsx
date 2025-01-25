import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchPage = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!search) return;

    try {
      navigate(`/pokemon/${search.toLowerCase()}`);
    } catch (error) {
      throw new Error(` an Error occurred: ${error}`);
    }
  };
  const handleRandom = async () => {
    try {
      navigate(`/pokemon/random`);
    } catch (error) {
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
            <button type="submit" className="button-primary">
              Search
            </button>
            <button
              type="button"
              onClick={handleRandom}
              className="button-primary"
            >
              Random
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchPage;
