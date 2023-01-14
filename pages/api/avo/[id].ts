import DB from "@database";
import { NextApiRequest, NextApiResponse } from "next";

const getAvo = async (request: NextApiRequest, response: NextApiResponse) => {
  const { id } = request.query;
  const db = new DB();
  const entry = await db.getById(id as string);

  if (entry === null) {
    response.status(404).json({ message: "Object not found" });
  }

  response.status(200).json(entry);
};

export default getAvo;
