import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MemoryRouter as Router } from "react-router-dom";
import { mockedPokemon } from "./mockedPokemon";
import StatComponent from "../components/pokemon-page/StatComponent";

describe("Rendering the information Pokemon Component", () => {
  const renderComponent = () => {
    return render(
      <Router>
        <StatComponent backgroundColor="red" pokemon={mockedPokemon} />
      </Router>
    );
  };

  it("should render the stat correctly", () => {
    renderComponent();
    const expectedStats = ["HP", "ATK", "DEF", "SATK", "SDEF", "SPD"];
    expectedStats.forEach((stat) => {
      expect(screen.getByText(stat)).toBeInTheDocument();
    });

    // screen.debug();
  });
  it("displays correct base stat values", () => {
    renderComponent();
    mockedPokemon.stats.forEach(({ stat, base_stat }) => {
      expect(
        screen.getByTestId(`${stat.name.toLowerCase()}-value`)
      ).toHaveTextContent(base_stat.toString());
    });
  });
});
