import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import PokemonPage from "./pages/PokemonPage";
import NotFoundPage from "./pages/NotFoundPage";
import NoPokemonFound from "./pages/NoPokemonFound";

function App() {
  return (
    <Router basename="/POKEDEX">
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/pokemon/:idOrName" element={<PokemonPage />} />
        <Route path="/pokemon/notfound" element={<NoPokemonFound />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
