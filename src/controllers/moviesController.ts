import { Request, Response } from "express";
import { Movie, MovieEntity } from "../protocols/movie.js";
import { addMovie, getMovies, removeMovie } from "../repositories/movieRepository.js";

async function insertMovie(req: Request, res: Response) {
    const {name, genre} = req.body as Movie;

    try {
        await addMovie({name, genre});
        return res.sendStatus(201);

    } catch (error) {
        res.sendStatus(500);
        console.log(error);
    }
}

async function getAllMovies(req: Request, res: Response) {
    try {
        const AllMovies: MovieEntity[] = (await getMovies()).rows;

        return res.send(AllMovies);

    } catch (error) {
        res.sendStatus(500);
        console.log(error);
    }
}

async function deleteMovie(req: Request, res: Response) {
    const {id} = req.params;
    
    try {
        await removeMovie(Number(id));
        return res.status(200).send("Movie Deleted");
    } catch (error) {
        res.sendStatus(500);
        console.log(error);
    }
}

export {insertMovie, getAllMovies, deleteMovie};