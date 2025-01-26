import axios from 'axios';
import { Pokemon, PokemonSpecies, EvolutionChain } from '../types/pokemon';

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2'
});

export const getPokemon = async (idOrName: string | number): Promise<Pokemon> => {
  const { data } = await api.get(`/pokemon/${idOrName.toString().toLowerCase()}`);
  return data;
};

export const getPokemonSpecies = async (id: number): Promise<PokemonSpecies> => {
  const { data } = await api.get(`/pokemon-species/${id}`);
  return data;
};

export const getEvolutionChain = async (url: string): Promise<EvolutionChain> => {
  const { data } = await api.get(url);
  return data;
};

export const getRandomPokemon = async (): Promise<Pokemon> => {
  const randomId = Math.floor(Math.random() * 898) + 1;
  return getPokemon(randomId);
};