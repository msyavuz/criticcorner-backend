import { Router } from "express";
import { createUser, signIn } from "../controllers/user.controller";

const router = Router();

router.post("/user", createUser);
router.post("/signin", signIn);

export default router;
