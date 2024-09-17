import { The_MOVIE_DB_KEY } from "@env";
import { AxiosAdapter } from "./http/axios.adaptes";


export const movieDbFetcher =  new AxiosAdapter({
    baseUrl: 'https://api.themoviedb.org/3/movie',
    params: {
        // api_key: 'b30fcd792b85bf0a262ad2668ce06900',
        api_key: The_MOVIE_DB_KEY ?? 'no-key',
        language: 'es'
    }
})