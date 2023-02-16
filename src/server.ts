import express from "express";
import cors from "cors";
import morgan from "morgan";
import movieRouter from "./routes/movie.route";
import userRouter from "./routes/user.route";
import reviewRouter from "./routes/review.route";
import { protect } from "./middlewares/auth";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", userRouter);
app.use("/api", protect, movieRouter);
app.use("/api", protect, reviewRouter);

export default app;
