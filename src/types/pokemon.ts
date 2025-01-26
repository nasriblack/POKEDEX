export interface Pokemon {
    id: number;
    name: string;
    types: PokemonType[];
    sprites: {
      other: {
        'official-artwork': {
          front_default: string;
        };
      };
    };
    stats: {
      base_stat: number;
      stat: {
        name: string;
      };
    }[];
    species: {
      url: string;
    };
  }
  
  export interface PokemonType {
    type: {
      name: string;
    };
  }
  
  export interface PokemonSpecies {
    flavor_text_entries: {
      flavor_text: string;
      language: {
        name: string;
      };
    }[];
    evolution_chain: {
      url: string;
    };
  }
  
  export interface EvolutionChain {
    chain: {
      species: {
        name: string;
      };
      evolves_to: {
        species: {
          name: string;
        };
        evolves_to: {
          species: {
            name: string;
          };
        }[];
      }[];
    };
  }