import { NextApiRequest, NextApiResponse } from "next";
import prismaDB from "@/lib/prismaDB";
// import serverAuth from "@/lib/serverAuth";
import { without } from "lodash";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "PUT") {
      const { movieId ,idUser } = req.body;
      // const { currentUser } = await serverAuth(req);
      
      const existingMovie = await prismaDB.movie.findUnique({
        where: {
          id: movieId,
        },
      });
      if (!existingMovie) {
        console.log(`invalid movie`);
        throw new Error(`invalid movie`);
      }
      else{
        const user = await prismaDB.user.update({
          where: {
            id: idUser,
          },
          data: {
            favoriteIds: { push: movieId },
          },
        })
        return res.status(200).json(user);
      }
     
    }

    if (req.method === "DELETE") {
      const { movieId,user } = req.body;
      // const { currentUser } = await serverAuth(req);
      const existingMovie = await prismaDB.movie.findUnique({
        where: {
          id: movieId,
        },
      });
      if (!existingMovie) throw new Error(`invalid movie`);
      const updatedFavMovies = without(user?.favoriteIds, movieId);
      const updateUser = await prismaDB.user.update({
        where: {
          id: user?.id,
        },
        data: {
          favoriteIds: updatedFavMovies,
        },
      });
      return res.status(200).json(updateUser);
    }
    return res.status(400).end();
  } catch (error) {
    console.log(error);

    return res.status(500).end();
  }
}
