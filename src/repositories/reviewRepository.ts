import { QueryResult } from "pg";
import connection from "../database/database.js";
import { Review, ReviewEntity } from "../protocols/review.js";

async function addReview({userName,movieId,review}: Review): Promise<QueryResult>{
    return await connection.query(`INSERT INTO reviews ("userName", "movieId", review) VALUES ($1, $2, $3);`, [userName, movieId, review]);
    
}

async function getReviews(): Promise<QueryResult<ReviewEntity>> {
    return await connection.query(`SELECT * FROM reviews`);
}

async function removeReview(id: number): Promise<QueryResult<ReviewEntity>> {
    return await connection.query(`DELETE FROM reviews WHERE id = $1`, [id]);
}

async function updateReview(id: number, review: string): Promise<QueryResult> {
    return await connection.query(`UPDATE reviews SET review = $1 WHERE id = $2`, [review, id]);
}

async function getTrendingMovies(): Promise<QueryResult> {
    const result = await connection.query(
        `SELECT movies.name,
        COUNT(reviews) AS "numbersOfReviews"
        FROM movies
        JOIN reviews ON reviews."movieId" = movies.id
        GROUP BY movies.name ORDER BY "numbersOfReviews" DESC LIMIT 10;`);

        return result;
}

export { addReview, getReviews, removeReview, updateReview, getTrendingMovies};