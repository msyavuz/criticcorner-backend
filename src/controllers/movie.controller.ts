import { type Request, type Response } from "express";
import { validationResult } from "express-validator/src/validation-result";
import movieService from "../services/movie.service";

function getAllMovies(req: Request, res: Response) {}
async function createMovie(req: Request, res: Response) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(404);
        res.json({ errors: errors.array() });
        return;
    } else {
        const movie = await movieService.createMovie({ ...req.body });
        res.status(200);
        res.json(movie);
    }
}
function getMovieById(req: Request, res: Response) {}
function updateMovieById(req: Request, res: Response) {}
function deleteMovieById(req: Request, res: Response) {}

export {
    getAllMovies,
    createMovie,
    getMovieById,
    updateMovieById,
    deleteMovieById,
};
