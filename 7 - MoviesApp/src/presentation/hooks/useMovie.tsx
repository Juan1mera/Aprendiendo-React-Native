import React, { useEffect, useState } from 'react'
import * as UseCases from '../../core/use-cases'
import { movieDbFetcher } from '../../config/adapters/movieDB.adapter';
import { FullMovie } from '../../core/entities/movie.entity';
import { Casting } from '../../core/entities/cast.entity';


export const useMovie = (movieId: number) => {

    const [isLoading, setIsLoading] = useState(true)
    const [movie, setMovie] = useState<FullMovie>()
    const [cast, setCast] = useState<Casting[]>()

    useEffect(()=>{
        loadMovie();
    }, [movieId])

    const loadMovie = async() =>{
      setIsLoading(true)
      const fullMoviePromise =  UseCases.getMovieByIdUseCase(movieDbFetcher, movieId);
      const CastPromise = UseCases.getMovieCastUseCase(movieDbFetcher, movieId)

      const [fullMovie, cast] = await Promise.all([ fullMoviePromise, CastPromise ])

      setMovie(fullMovie)
      setCast(cast)
      setIsLoading(false)
      // console.log({cast})
      // console.log({fullMovie})
    }


  return{
    isLoading,
    movie,
    cast
  }
}
