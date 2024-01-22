// api/exemplo.js

import { NextApiRequest, NextApiResponse } from "next";
import Login from "../../services/login.service";
import { GetPost } from "../../services/getPost.service";
import { CreatePost } from "../../services/createPost.service";
import { UpdatePost } from "../../services/update.service";
import { DeletePost } from "../../services/delete.service";
import { VerifyToken } from "../../services/authMetodos.service";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Middleware para habilitar o CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );

  const temp = req.method;
  const { authorization } = req.headers;
  var auth = VerifyToken(authorization as string);
  if (auth) {
    switch (temp) {
      case "GET":
        GetPost(req, res);
        break;
      case "POST":
        CreatePost(req, res);
        break;
      case "PUT":
        UpdatePost(req, res);
        break;
      case "DELETE":
        DeletePost(req, res);
        break;

      default:
        res.status(401).json({ error: "metodo invalido" });
        break;
    }
  } else {
    res.status(401).json({ state: false, error: "Não autorizado" });
  }
}
// res.status(401).json({ error: "metodo invalido" });
