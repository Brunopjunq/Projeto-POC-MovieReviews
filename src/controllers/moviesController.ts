import { Request, Response } from "express";
import { Movie, MovieEntity } from "../protocols/movie.js";
import { addMovie, getMovies } from "../repositories/movieRepository.js";

async function insertMovie(req: Request, res: Response) {
    const {name, genre} = req.body as Movie;

    try {
        console.log('chegou aqui');
        const newMovie = await addMovie({name, genre});

        console.log(newMovie);

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

export {insertMovie, getAllMovies};