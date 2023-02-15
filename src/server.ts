import express from "express";
import cors from "cors";
import morgan from "morgan";
import movieRouter from "./routes/movie.route";
import userRouter from "./routes/user.route";
import { protect } from "./utils/auth";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {});

app.use("/api", userRouter);
app.use("/api", protect, movieRouter);

export default app;
