import prisma from "../utils/db";

async function getReviews(username: string) {
    const reviews = await prisma.review.findMany({
        where: {
            User: {
                username,
            },
        },
    });

    return reviews;
}

async function createReview(
    userId: string,
    movieId: string,
    title: string,
    content: string,
    score: string,
) {
    const review = await prisma.review.create({
        data: {
            userId,
            movieId,
            title,
            content,
            score: parseInt(score),
        },
    });
    return review;
}

async function updateReview() {}

export default { getReviews, createReview, updateReview };
