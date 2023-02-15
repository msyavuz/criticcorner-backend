import prisma from "../utils/db";
import { comparePasswords, createJWT, hashPassword } from "../utils/auth";

async function createUser(username: string, password: string) {
    try {
        const newUser = await prisma.user.create({
            data: {
                username: username,
                hashedPassword: await hashPassword(password),
            },
        });
        const token = createJWT(newUser);
        return token;
    } catch {
        return false;
    }
}

async function signIn(username: string, password: string) {
    const user = await prisma.user.findUnique({
        where: {
            username,
        },
    });

    if (!user) {
        return false;
    }
    const isValid = await comparePasswords(password, user?.hashedPassword);
    if (!isValid) {
        return false;
    }
    const token = createJWT(user);
    return token;
}

export default { createUser, signIn };
