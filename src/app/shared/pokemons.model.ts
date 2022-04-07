import { Poke } from "./poke.model"

export interface Pokemons {
    count: Number,
    next: string,
    previous: string,
    results: Poke[]
}