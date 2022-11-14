export type MovieEntity = {
    id: number,
    name: string,
    genre: string
}

export type Movie = Omit<MovieEntity, "id">;