import prisma, { Movie } from "../utils/db";
type movieWithoutId = {
    title: string;
    description: string;
    imageUrl: string;
    releaseDate: string;
};

async function createMovie({
    title,
    description,
    imageUrl,
    releaseDate,
}: movieWithoutId) {
    const movie = await prisma.movie.create({
        data: {
            title,
            description,
            imageUrl,
            releaseDate: new Date(releaseDate),
        },
    });

    return movie;
}

export default { createMovie };
