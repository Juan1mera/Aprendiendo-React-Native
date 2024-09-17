import { httpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieDBResponse } from "../../../infrastructure/interfaces/Movie-db.respondes";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import type { Movie } from "../../entities/movie.entity";





export const moviesUpComingUseCase = async(fetcher: httpAdapter ): Promise<Movie[]> => {

    try {
        const UpComing = await fetcher.get<MovieDBResponse>('/upcoming');

        return UpComing.results.map(result => MovieMapper.fromMovieDBResultToEntity(result))

    } catch (error) {
        console.log(error)
        throw new Error('Error Encontrando Peliculas - UpComing')
    }

}

