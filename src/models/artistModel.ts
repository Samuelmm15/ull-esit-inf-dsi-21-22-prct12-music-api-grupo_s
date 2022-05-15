import {ArtistSchema} from "../App-Data-Bases-Operations/Schemas/artistSchema";
import {model} from "mongoose";
import {Artist} from "../App-Data-Bases-Operations/Interfaces/artistInterface";

export const artist = model<Artist>('Artist', ArtistSchema);
