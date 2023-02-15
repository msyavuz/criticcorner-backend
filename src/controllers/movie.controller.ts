import { type Request, type Response } from "express";

function getAllMovies(req: Request, res: Response) {}
function createMovie(req: Request, res: Response) {}
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
