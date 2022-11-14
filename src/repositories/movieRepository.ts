import { QueryResult } from "pg";
import connection from "../database/database.js";
import { Movie, MovieEntity } from "../protocols/movie.js";

async function addMovie({name,genre}: Movie): Promise<QueryResult>{
    return await connection.query(`INSERT INTO movies (name, genre) VALUES ($1, $2);`, [name,genre])
    
}

async function getMovies(): Promise<QueryResult<MovieEntity>> {
    return await connection.query(`SELECT * FROM movies`);
}

async function removeMovie(id: number): Promise<QueryResult<MovieEntity>> {
    return await connection.query(`DELETE FROM movies WHERE id = $1`, [id]);
}

export { addMovie, getMovies, removeMovie};