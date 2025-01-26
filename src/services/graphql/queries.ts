import { gql } from "@apollo/client";


export const GET_POKEMON = gql`
  query GetPokemon($name: String!) {
    pokemon_v2_pokemon(where: {name: {_eq: $name}}) {
      id
      name
      height
      weight
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
      pokemon_v2_pokemonstats {
        base_stat
        pokemon_v2_stat {
          name
        }
      }
      pokemon_v2_pokemonspecy {
        pokemon_v2_pokemonspeciesflavortexts(where: {language_id: {_eq: 9}}, limit: 1) {
          flavor_text
        }
        evolution_chain_id
      }
    }
  }
`;
// export const GET_POKEMON = gql`
//     query GetPokemon($idOrName: String!) {
//         pokemon(idOrName: $idOrName) {
//         id
//         name
//         height
//         weight
//         types {
//             type {
//             name
//             }
//         }
//         stats {
//             base_stat
//             effort
//             stat {
//             name
//             }
//         }
//         moves {
//             move {
//             name
//             }
//         }
//         sprites {
//             front_default
//         }
//         species {
//             name
//         }
//         }
//     }
//     `;

export const GET_POKEMON_SPECIES = gql`
  query GetPokemonSpecies($id: Int!) {
    pokemonSpecies(id: $id) {
      flavorTextEntries {
        flavorText
        language {
          name
        }
      }
      evolutionChain {
        url
      }
    }
  }
`;

export const GET_EVOLUTION_CHAIN = gql`
query GetEvolutionChain($url: String!) {
  evolutionChain(url: $url) {
    chain {
      species {
        name
        url
      }
      evolvesTo {
        species {
          name
          url
        }
        evolvesTo {
          species {
            name
            url
          }
        }
      }
    }
  }
}
`;

