import { NextApiRequest, NextApiResponse } from "next";
import { without } from "lodash";
import prismaDB from "@/lib/prismaDB";
import serverAuth from "@/lib/serverAuth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "POST") {
      const { movieId } = req.body;
      const { currentUser } = await serverAuth(req);
      const existingMovie = await prismaDB.movie.findUnique({
        where: {
          id: movieId,
        },
      });
      if (!existingMovie) throw new Error(`invalid movie`);
      const user = await prismaDB.user.update({
        where: {
          email: currentUser.email || "",
        },
        data: {
          favoriteIds: { push: movieId },
        },
      });
      return res.status(200).json(user);
    }
    if (req.method === "DELETE") {
      const { movieId } = req.body;
      const { currentUser } = await serverAuth(req);
      const existingMovie = await prismaDB.movie.findUnique({
        where: {
          id: movieId,
        },
      });
      if (!existingMovie) throw new Error(`invalid movie`);
      const updateFavMovies = without(currentUser?.favoriteIds, movieId);
      const updateUser = await prismaDB.user.update({
        where: {
          email: currentUser.email || "",
        },
        data: {
          favoriteIds: updateFavMovies,
        },
      });
      return res.status(200).json(updateUser);
    }
  } catch (error) {
    console.log(error);

    return res.status(500).end();
  }
}
