import { describe, it, expect, vi } from "vitest";
import { MemoryRouter as Router } from "react-router-dom";
import { render, screen, waitFor } from "@testing-library/react";
import PokemonPage from "../pages/PokemonPage";
import { getPokemon } from "../services/api";

vi.mock("../services/api", () => ({
  getPokemon: vi.fn(),
  getRandomPokemon: vi.fn(),
}));

describe("PokemonPage", () => {
  const renderComponent = () => {
    return render(
      <Router>
        <PokemonPage />
      </Router>
    );
  };

  it("should render an error loading Pokemon", async () => {
    vi.mocked(getPokemon).mockRejectedValue(new Error("Error loading Pokemon"));

    renderComponent();

    await waitFor(() => {
      expect(screen.getByText("Error loading Pokemon")).toBeInTheDocument();
    });
  });
});
