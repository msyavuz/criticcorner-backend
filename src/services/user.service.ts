import { User } from "@prisma/client";
import prisma from "../utils/db";
import { comparePasswords, createJWT, hashPassword } from "../utils/token";

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

async function follow(user: User, userToFollow: User) {
    const res = await prisma.user.update({
        where: {
            id: user.id,
        },
        data: {
            following: {
                connect: {
                    id: userToFollow.id,
                    username: userToFollow.username,
                },
            },
        },
    });
    await prisma.user.update({
        where: {
            id: userToFollow.id,
        },
        data: {
            followers: {
                connect: {
                    id: user.id,
                    username: user.username,
                },
            },
        },
    });
    return res;
}

async function getUserByUsername(username: string) {
    const user = await prisma.user.findFirst({ where: { username } })!;
    return user;
}

export default { createUser, signIn, follow, getUserByUsername };
