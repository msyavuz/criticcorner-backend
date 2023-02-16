import { Request, Response } from "express";
import reviewService from "../services/review.service";

const getReviewsByUser = async (req: Request, res: Response) => {
    const username = req.user!.username as string;
    const reviews = await reviewService.getReviews(username);
    res.status(200);
    res.json({ reviews });
};

const createReview = async (req: Request, res: Response) => {
    const userId = req.user!.id as string;
    const movieId = req.body.movieId as string;
    const title = req.body.title as string;
    const content = req.body.content as string;
    const score = req.body.score as string;

    const review = await reviewService.createReview(
        userId,
        movieId,
        title,
        content,
        score,
    );

    res.status(200);
    res.json(review);
};

const updateReview = async (req: Request, res: Response) => {};

export { getReviewsByUser, createReview, updateReview };
