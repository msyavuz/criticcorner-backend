import jwt from "jsonwebtoken";
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
