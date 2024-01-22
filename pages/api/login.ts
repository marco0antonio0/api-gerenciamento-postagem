// api/exemplo.js

import { NextApiRequest, NextApiResponse } from "next";
import Login from "../../services/login.service";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    Login(req, res);
  } else {
    res.status(401).json({ error: "metodo invalido" });
  }
}
