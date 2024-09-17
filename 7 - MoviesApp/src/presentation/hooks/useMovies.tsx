import { useEffect, useState } from "react"
import { Movie } from "../../core/entities/movie.entity"

import * as useCases from '../../core/use-cases'
import { movieDbFetcher } from "../../config/adapters/movieDB.adapter";
import { NowPlayingResponse } from '../../infrastructure/interfaces/Movie-db.respondes';
import { moviesPopularUseCase } from '../../core/use-cases/movies/popular.use-case ';

let popularPage = 1;


export const useMovies = () =>{
    
    const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
    const [Popular, setNowPopular] = useState<Movie[]>([]);
    const [TopRated, setNowTopRated] = useState<Movie[]>([]);
    const [UpComing, setNowUpComing] = useState<Movie[]>([]);
    
    const [isLoading, setIsLoading] = useState(true)




    useEffect(() => {
        initaLoader()
    }, [])

    const initaLoader = async() => {


        const nowPlayingPromise =  useCases.moviesNowPlayingUseCase(movieDbFetcher)
        const PopularPromise =  useCases.moviesPopularUseCase(movieDbFetcher)
        const TopRatedPromise =  useCases.moviesTopRatedUseCase(movieDbFetcher)
        const UpComingPromise =  useCases.moviesUpComingUseCase(movieDbFetcher)

        const [
            nowPlayingMovies,
            PopularMovies,
            TopRatedMovies,
            UpComingMovies,
        ] = await Promise.all([
            nowPlayingPromise,
            PopularPromise,
            TopRatedPromise,
            UpComingPromise,

        ]);

        setNowPlaying(nowPlayingMovies)
        setNowPopular(PopularMovies)
        setNowTopRated(TopRatedMovies)
        setNowUpComing(UpComingMovies)

        setIsLoading(false);

    }


    return {
        isLoading,
        nowPlaying,
        Popular, 
        TopRated,
        UpComing,    
        
        
        popularNexPage: async () =>{
            popularPage++;
            const PopularMovies = await useCases.moviesPopularUseCase(movieDbFetcher,{
                page: popularPage
            });

            setNowPopular(prev => [...prev, ...PopularMovies]);
        }
    }
}