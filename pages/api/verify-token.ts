// api/exemplo.js

import { NextApiRequest, NextApiResponse } from "next";
import { checkToken } from "../../services/validate.service";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    checkToken(req, res);
  } else {
    res.status(401).json({ error: "metodo invalido" });
  }
}
