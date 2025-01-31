import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MemoryRouter as Router } from "react-router-dom";
import { mockedPokemon } from "./mockedPokemon";
import InformationPokemonComponent from "../components/pokemon-page/information-pokemon/InformationPokemonComponent";

describe("Rendering the information Pokemon Component", () => {
  const renderComponent = () => {
    return render(
      <Router>
        <InformationPokemonComponent
          description="This is a mocked description"
          pokemon={mockedPokemon}
        />
      </Router>
    );
  };

  it("should render the information of the pokemon", () => {
    renderComponent();

    expect(screen.getByText(mockedPokemon.name)).toBeInTheDocument();
    mockedPokemon.types.forEach((type) => {
      expect(screen.getByText(type.type.name)).toBeInTheDocument();
    });
    const img = screen.getByAltText(mockedPokemon.name);
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute(
      "src",
      mockedPokemon.sprites.other["official-artwork"].front_default
    );
  });
});
