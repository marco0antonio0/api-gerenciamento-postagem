import jwt, { JsonWebTokenError } from "jsonwebtoken";

export function VerifyToken(token: string) {
  const secretKey = process.env.JWT_SECRET;
  try {
    var res = jwt.verify(token, secretKey);
    console.log(res);
    return res;
  } catch (error) {
    return false;
  }
}
