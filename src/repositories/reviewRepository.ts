import { QueryResult } from "pg";
import connection from "../database/database.js";
import { Review, ReviewEntity } from "../protocols/review.js";

async function addReview({userName,movieId,review}: Review): Promise<QueryResult>{
    return await connection.query(`INSERT INTO reviews ("userName", "movieId", review) VALUES ($1, $2, $3);`, [userName, movieId, review]);
    
}

async function getReviews(): Promise<QueryResult<ReviewEntity>> {
    return await connection.query(`SELECT * FROM reviews`);
}

export { addReview, getReviews};