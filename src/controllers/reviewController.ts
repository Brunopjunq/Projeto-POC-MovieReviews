import { Request, Response } from "express";
import { Review, ReviewEntity } from "../protocols/review.js";
import { addReview, getReviews, getTrendingMovies, removeReview, updateReview } from "../repositories/reviewRepository.js";

async function insertReview(req: Request, res: Response) {
    const {userName, movieId, review} = req.body as Review;

    try {
        await addReview({userName, movieId, review});
        return res.sendStatus(201);

    } catch (error) {
        res.sendStatus(500);
        console.log(error);
    }
}

async function getAllReviews(req: Request, res: Response) {
    try {
        const AllReviews: ReviewEntity[] = (await getReviews()).rows;

        return res.send(AllReviews);

    } catch (error) {
        res.sendStatus(500);
        console.log(error);
    }
}

async function deleteReview(req: Request, res: Response) {
    const {id} = req.params;
    
    try {
        await removeReview(Number(id));
        return res.status(200).send("Review Deleted");
    } catch (error) {
        res.sendStatus(500);
        console.log(error);
    }
}

async function updateReviews(req: Request, res: Response) {
    const {id} = req.params;
    const {review} = req.body;
    
    try {
        await updateReview(Number(id), review);
        return res.status(200).send("Review Updated");
    } catch (error) {
        res.sendStatus(500);
        console.log(error);
    }
}

async function getAllTrendingReviews(req: Request, res: Response) {
    try {
        const AllTrendingReviews: ReviewEntity[] = (await getTrendingMovies()).rows;

        return res.send(AllTrendingReviews);

    } catch (error) {
        res.sendStatus(500);
        console.log(error);
    }
}

export {insertReview, getAllReviews, deleteReview, updateReviews, getAllTrendingReviews};