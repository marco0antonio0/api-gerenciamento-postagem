// api/exemplo.js

import { NextApiRequest, NextApiResponse } from "next";
import Login from "../../services/login.service";
import { GetPost } from "../../services/getPost.service";
import { CreatePost } from "../../services/createPost.service";
import { GetPostByKey } from "../../services/getPostByKey";
import { VerifyToken } from "../../services/authMetodos.service";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
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
  const temp = req.method;

  const { Authorization } = req.headers;
  var auth = VerifyToken(Authorization as string);
  if (auth) {
    switch (temp) {
      case "GET":
        GetPostByKey(req, res);
        break;

      default:
        res.status(401).json({ error: "metodo invalido" });
        break;
    }
  } else {
    res.status(401).json({ state: false, error: "Não autorizado" });
  }
}
