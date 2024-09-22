import { PokeApi } from '../../config/api/PokeApi';
import { Pokemon } from '../../domain/entities/Pokemon';
import { PokeAPIPokemon } from '../../infrastructure/interfaces/pokeapi.interfaces';
import { PokemonMapper } from '../../infrastructure/mappers/pokemon.mapper';

export const getPokemonById = async(id: number): Promise<Pokemon> => {
    // console.log("getPokemonById", id);

    try {
        const {data} = await PokeApi.get<PokeAPIPokemon>(`pokemon/${id}`);

        const pokemon = await PokemonMapper.PokeApiPokemonToEntity(data);
        
        return pokemon;
        
    } catch (error) {
        throw new Error("Error al obtener Pokemon");
        
    }

}