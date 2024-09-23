import { Pokemon } from "../../domain/entities/Pokemon";
import { PokeApi } from "../../config/api/PokeApi";
import type { PokeAPIPaginatedResponse, PokeAPIPokemon } from "../../infrastructure/interfaces/pokeapi.interfaces";
import { PokemonMapper } from "../../infrastructure/mappers/pokemon.mapper";

export const getPokemons = async (page: number, limit: number = 20): Promise<Pokemon[]> => {
  try {
    // Cálculo correcto del offset
    const offset = page * limit;
    const url = `/pokemon?offset=${offset}&limit=${limit}`;

    // Obtener la respuesta paginada de la API
    const { data } = await PokeApi.get<PokeAPIPaginatedResponse>(url);

    // Mapear las promesas para obtener los detalles de cada Pokémon
    const pokemonDetailsPromises = data.results.map(async (info) => {
      const { data: pokemonDetails } = await PokeApi.get<PokeAPIPokemon>(info.url);
      return PokemonMapper.PokeApiPokemonToEntity(pokemonDetails);
    });

    // Resolvemos todas las promesas y retornamos los Pokémon mapeados
    return await Promise.all(pokemonDetailsPromises);

  } catch (error) {
    console.error("Error al obtener Pokemons", error);
    throw new Error("Error al obtener Pokemons");
  }
};
