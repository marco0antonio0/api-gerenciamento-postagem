// api/exemplo.js

import { NextApiRequest, NextApiResponse } from "next";
import { UpdatePost } from "../../../services/service-informativo/update.service";
import { VerifyToken } from "../../../services/authMetodos.service";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, OPTIONS, PATCH, DELETE, POST, PUT"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  const { authorization } = JSON.parse(req.body);

  var auth = VerifyToken(authorization as string);

  if (auth) {
    if (req.method == "POST") {
      UpdatePost(req, res);
    } else {
      res.status(401).json({ status: false, error: "metodo invalido" });
    }
  } else {
    res.status(401).json({ status: false, error: "Não autorizado" });
  }
}
// res.status(401).json({ error: "metodo invalido" });
