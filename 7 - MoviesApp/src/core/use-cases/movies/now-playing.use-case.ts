import { httpAdapter } from "../../../config/adapters/http/http.adapter";
import { NowPlayingResponse } from "../../../infrastructure/interfaces/Movie-db.respondes";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import type { Movie } from "../../entities/movie.entity";





export const moviesNowPlayingUseCase = async(fetcher: httpAdapter ): Promise<Movie[]> => {

    try {
        const nowPLaying = await fetcher.get<NowPlayingResponse>('/now_playing');

        return nowPLaying.results.map(result => MovieMapper.fromMovieDBResultToEntity(result))

    } catch (error) {
        console.log(error)
        throw new Error('Error Encontrando Peliculas - NowPlaying')
    }

}

