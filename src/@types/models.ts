import { Movie } from '@prisma/client';

export type createMovieType = Omit<Movie, "created_ad" | "updated_at" | "id">;