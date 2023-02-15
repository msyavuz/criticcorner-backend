import { PrismaClient, User, Review, Movie, Comment } from "@prisma/client";

const prisma = new PrismaClient();

export default prisma;
export { User, Review, Movie, Comment };
