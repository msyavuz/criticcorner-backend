import { type Request, type Response } from "express";
import UserService from "../services/user.service";

async function createUser(req: Request, res: Response) {
    const username = req.body.username;
    const password = req.body.password;

    const token = await UserService.createUser(username, password);

    if (!token) {
        res.json({ message: "User with username already exists." });
    }
    res.json({ token });
}

async function signIn(req: Request, res: Response) {
    const username = req.body.username;
    const password = req.body.password;

    const token = await UserService.signIn(username, password);
    console.log(token);
    if (!token) {
        res.status(401);
        res.json({ message: "Wrong credentials." });
        return;
    }
    res.json({ token });
}

export { createUser, signIn };
