import { httpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieDbMovie, Result } from "../../../infrastructure/interfaces/Movie-db.respondes";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import { FullMovie } from "../../entities/movie.entity";

export const getMovieByIdUseCase = async(fetcher:httpAdapter, movieId: number):Promise<FullMovie> =>{

    try {
        const movie = await fetcher.get<MovieDbMovie>(`/${movieId}`);
        const fullMovie = MovieMapper.fromMovideDbToEntity(movie);
        return fullMovie
        // return MovieDetails.results.map(result => MovieMapper.fromMovieDBResultToEntity(result))
    } catch (error) {
        throw new Error(`Cannot get movie by id: ${movieId}`)
    }

}