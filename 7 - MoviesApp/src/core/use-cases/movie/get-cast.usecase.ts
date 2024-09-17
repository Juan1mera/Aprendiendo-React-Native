import { httpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieDBCastResponse } from "../../../infrastructure/interfaces/Movie-db.respondes";
import { CastMapper } from "../../../infrastructure/mappers/cast.mapper";
import { Casting } from "../../entities/cast.entity";

export const getMovieCastUseCase = async(fetcher: httpAdapter, movieId: number): Promise<Casting[]> => {
    try {
        
        const {cast} = await fetcher.get<MovieDBCastResponse>(`/${movieId}/credits`);

        const actors = cast.map((actor) => CastMapper.fromMovieDBCastEntity(actor));
        return actors;
    } catch (error) {
        throw new Error(`Cannor Find Casting of ${movieId} `)
    }
}