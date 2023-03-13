import { Router } from "express";
import { follow } from "../controllers/follow.controller";

const router = Router();

router.post("/follow", follow);

export default router;
