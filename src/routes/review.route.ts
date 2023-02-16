import { Router } from "express";
import { body } from "express-validator/src/middlewares/validation-chain-builders";
import {
    createReview,
    getReviewsByUser,
    updateReview,
} from "../controllers/review.controller";

const router = Router();

router.get("/review", getReviewsByUser);
router.post(
    "/review",
    body(["movieId", "title", "content"]).isString(),
    body("score").isNumeric(),
    createReview,
);
router.put("/review/:id", updateReview);

export default router;
