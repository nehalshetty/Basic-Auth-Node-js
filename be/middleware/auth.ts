import jwt from "jsonwebtoken";

const Auth = (req: any, res: any, next: Function) => {
  console.log(req.cookies);

  const token = req.headers["authorization"];

  if (!token) return res.status(401).send("Access denied. No token provided.");

  try {
    //if can verify the token, set req.user and pass to next middleware
    const decoded = jwt.verify(token, "nrs");
    req.user = decoded;
    next();
  } catch (er) {
    //if invalid token
    res.status(400).send("Invalid token.");
  }
};

export default Auth;
