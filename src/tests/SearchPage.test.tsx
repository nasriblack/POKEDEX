import { fireEvent, render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import SearchPage from "../pages/SearchPage";
import { MemoryRouter as Router } from "react-router-dom";
import { getPokemon } from "../services/api";

vi.mock("../services/api", () => ({
  getPokemon: vi.fn(),
  getRandomPokemon: vi.fn(),
}));

describe("SearchPage", () => {
  const renderComponent = () => {
    return render(
      <Router>
        <SearchPage />
      </Router>
    );
  };

  it.only("renders search input and buttons", () => {
    renderComponent();

    expect(screen.getByText(/Pokemon Name or Id/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /search/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /random/i })).toBeInTheDocument();
  });

  it.only("handles search for existing pokemon", async () => {
    renderComponent();

    const input = screen.getByTestId("search_input");
    const searchButton = screen.getByRole("button", { name: /search/i });

    fireEvent.change(input, { target: { value: "pikachu" } });
    fireEvent.click(searchButton);
    // screen.debug();
    expect(searchButton).toBeDisabled();
    expect(getPokemon).toHaveBeenCalledWith("pikachu");
  });

  it.only("navigates to not found page for invalid pokemon", async () => {
    vi.mocked(getPokemon).mockRejectedValue(new Error("Not found"));

    renderComponent();

    const input = screen.getByTestId("search_input");
    const searchButton = screen.getByRole("button", { name: /search/i });

    fireEvent.change(input, { target: { value: "invalidpokemon" } });
    fireEvent.click(searchButton);

    expect(getPokemon).toHaveBeenCalledWith("invalidpokemon");
  });
});
