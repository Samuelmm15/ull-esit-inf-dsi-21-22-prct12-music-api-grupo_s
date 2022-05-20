import {ArtistSchema} from "../Schemas/artistSchema";
import {model} from "mongoose";
import {Artist} from "../Interfaces/artistInterface";

export const artist = model<Artist>('Artist', ArtistSchema);
