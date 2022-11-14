export type ReviewEntity = {
    id: number,
    userName: string,
    movieId: number,
    review: string
}

export type Review = Omit<ReviewEntity, "id">;