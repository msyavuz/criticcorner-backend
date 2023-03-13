import { User } from "@prisma/client";
import { type Request, type Response } from "express";
import UserService from "../services/user.service";

async function follow(req: Request, res: Response) {
    const username = req.user!.username as string;
    const usernameToFollow = req.body.username as string;
    const user = (await UserService.getUserByUsername(username)) as User;
    const userToFolow = (await UserService.getUserByUsername(
        usernameToFollow,
    )) as User;
    try {
        const r = await UserService.follow(user, userToFolow);
        res.status(200);
        res.json(r);
    } catch (e) {
        res.status(404);
        res.send("An error occured");
    }
}

export { follow };
