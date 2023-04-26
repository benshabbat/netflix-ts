import { NextApiRequest, NextApiResponse } from "next";

import prismaDB from "@/lib/prismaDB";
import serverAuth from "@/lib/serverAuth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== "GET") {
      return res.status(405).end();
    }
    await serverAuth(req);
    const { movieId } = req.query;

    if (typeof movieId !== "string") {
      throw new Error(`Invalid id`);
    }

    if (!movieId) {
      throw new Error(`Invalid id`);
    }
    const movie = await prismaDB.movie.findUnique({
      where:{
        id: movieId
      }
    })
    if (!movie) {
      throw new Error(`Invalid id`);
    }

    return res.status(200).json(movie);
  } catch (error) {
    console.log({ error });
    return res.status(500).end();
  }
}
