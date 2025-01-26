import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MemoryRouter as Router } from "react-router-dom";
import { mockedEvolutionChain } from "./mockedPokemon";
import EvolutionComponent from "../components/pokemon-page/EvolutionComponent";

describe("Rendering the information Pokemon Component", () => {
  const renderComponent = () => {
    return render(
      <Router>
        <EvolutionComponent
          backgroundColor="color"
          pokemonEvolution={mockedEvolutionChain}
        />
      </Router>
    );
  };

  it("should render evolution component", () => {
    renderComponent();

    mockedEvolutionChain.forEach((evolution) => {
      expect(screen.getByText(evolution.name)).toBeInTheDocument();
      expect(screen.getByAltText(evolution.name)).toBeInTheDocument();
    });

    screen.debug();
  });
});
