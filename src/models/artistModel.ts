import {ArtistSchema} from "../Schemas/artistSchema";
import {model} from "mongoose";
import {Artist} from "../Interfaces/artistInterface";

/**
 * Artist Model
 */
export const artist = model<Artist>('Artist', ArtistSchema);
