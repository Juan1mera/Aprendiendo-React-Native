import { httpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieDBResponse } from "../../../infrastructure/interfaces/Movie-db.respondes";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import type { Movie } from "../../entities/movie.entity";





export const moviesTopRatedUseCase = async(fetcher: httpAdapter ): Promise<Movie[]> => {

    try {
        const TopRated = await fetcher.get<MovieDBResponse>('/top_rated');

        return TopRated.results.map(result => MovieMapper.fromMovieDBResultToEntity(result))

    } catch (error) {
        console.log(error)
        throw new Error('Error Encontrando Peliculas - TopRated')
    }

}

