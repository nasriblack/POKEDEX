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
