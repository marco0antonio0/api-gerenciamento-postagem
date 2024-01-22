import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
export async function checkToken(req: NextApiRequest, res: NextApiResponse) {
  const { authorization } = req.headers;
  const secretKey = process.env.JWT_SECRET;

  if (!authorization) {
    res.status(401).json({ validate: false, error: "Token não fornecido" });
    return;
  } else {
    try {
      var temp = jwt.verify(authorization, secretKey);
      res.status(200).json({ validate: temp });
    } catch (error) {
      res.status(401).json({ validate: false, error: "Não autorizado" });
    }
  }
}
