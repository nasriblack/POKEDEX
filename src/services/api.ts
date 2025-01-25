import axios from 'axios';
import { Pokemon } from '../types/pokemon';

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2'
});

export const getPokemon = async (idOrName: string | number): Promise<Pokemon> => {
  const { data } = await api.get(`/pokemon/${idOrName.toString().toLowerCase()}`);
  return data;
};

export const getRandomPokemon = async (): Promise<Pokemon> => {
  const randomId = Math.floor(Math.random() * 898) + 1;
  return getPokemon(randomId);
};