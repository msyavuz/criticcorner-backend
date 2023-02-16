import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

export const protect = (req: Request, res: Response, next: NextFunction) => {
    const bearer = req.headers.authorization;

    if (!bearer) {
        res.status(401);
        res.json({ message: "Not authorized" });
        return;
    }
    const [, token] = bearer.split(" ");
    if (!token) {
        res.status(401);
        res.json({ message: "Not authorized" });
        return;
    }
    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET!);
        req.user = payload as JwtPayload;
        next();
    } catch (e) {
        console.error(e);
        res.status(401);
        res.send({ message: "Invalid token" });
        return;
    }
};
