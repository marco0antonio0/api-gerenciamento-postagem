import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";

export default function Login(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = req.body;
  const secretKey = process.env.JWT_SECRET;
  // Valide as credenciais com o par ordenado no env (substitua este bloco com sua lógica de validação real)
  const validCredentials =
    email === process.env.USER_EMAIL && password === process.env.USER_PASSWORD;

  if (validCredentials) {
    // Crie um token JWT
    const token = jwt.sign({ email }, secretKey, { expiresIn: "24h" });

    res.status(200).json({ token });
  } else {
    res.status(401).json({ error: "Credenciais inválidas" });
  }
}
