import { Pokemon } from "../../domain/entities/Pokemon";
import { PokeApi } from "../../config/api/PokeApi";
import type { PokeAPIPaginatedResponse, PokeAPIPokemon } from "../../infrastructure/interfaces/pokeapi.interfaces";
import { PokemonMapper } from "../../infrastructure/mappers/pokemon.mapper";

export const sleep = async() => {
    return new Promise(resolve => setTimeout(resolve, 2000));
}


export const getPokemons = async (page:number, limit: number = 20): Promise<Pokemon[]> => {
  try {
    const url = `/pokemon?offset=${page*10}&limit=${limit}`;
    const { data } = await PokeApi.get<PokeAPIPaginatedResponse>(url);

    const PokemonPromises = data.results.map((info) => {
        return PokeApi.get<PokeAPIPokemon>(info.url);
    });

    const PokeApiPokemons = await Promise.all(PokemonPromises);

    const pokemonsPromises = PokeApiPokemons.map((item) => PokemonMapper.PokeApiPokemonToEntity(item.data));

    return await  Promise.all(pokemonsPromises);

  } catch (error) {
    console.error("Error al obtener Pokemons", error);
    throw new Error("Error al obtener Pokemons");
  }
};
