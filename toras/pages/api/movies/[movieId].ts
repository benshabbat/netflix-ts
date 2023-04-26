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

    

    return res.status(200).json();
  } catch (error) {
    console.log({ error });
    return res.status(500).end();
  }
}