import { httpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieDBResponse } from "../../../infrastructure/interfaces/Movie-db.respondes";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import type { Movie } from "../../entities/movie.entity";


interface Options{
    page?: number;
    limit?: number;
}


export const moviesPopularUseCase = async(fetcher: httpAdapter, options?: Options ): Promise<Movie[]> => {

    try {
        const Popular = await fetcher.get<MovieDBResponse>('/popular',{
            params:{
                page: options?.page ?? 1
            }
        });

        return Popular.results.map(result => MovieMapper.fromMovieDBResultToEntity(result))

    } catch (error) {
        console.log(error)
        throw new Error('Error Encontrando Peliculas - Popular')
    }

}

