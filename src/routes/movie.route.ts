import { Router } from "express";
import { createMovie, deleteMovieById, getAllMovies, getMovieById, updateMovieById } from "../controllers/movie.controller";

const router = Router();

router.get("/movie", getAllMovies);
router.post("/movie", createMovie);
router.get("/movie/:id", getMovieById);
router.put("/movie/:id", updateMovieById);
router.delete("/movie/:id", deleteMovieById);

export default router;
