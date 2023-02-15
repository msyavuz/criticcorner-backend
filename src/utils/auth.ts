import jwt, { JwtPayload } from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import * as bcrypt from "bcrypt";

export const createJWT = (user: any) => {
    const token = jwt.sign(
        {
            id: user.id,
            username: user.username,
        },
        process.env.JWT_SECRET!,
    );
    return token;
};

export const comparePasswords = async (
    password: string,
    hashedPassword: string,
) => {
    return bcrypt.compare(password, hashedPassword);
};

export const hashPassword = async (password: string) => {
    return bcrypt.hash(password, 5);
};

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
