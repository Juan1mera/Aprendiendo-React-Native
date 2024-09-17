import { Cast } from "../interfaces/Movie-db.respondes";
import { Casting } from "../../core/entities/cast.entity";


export class CastMapper{
    static fromMovieDBCastEntity(actor: Cast): Casting{
        return{
            id: actor.id,
            name: actor.name,
            character: actor.character ?? 'No character',
            avatar: actor.profile_path 
                ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                : `https://i.stack.imgur.com/l60Hf.png`
        }
    }
}