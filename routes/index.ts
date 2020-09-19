import { Router } from "express";
import UserSchema from "../schemas/userSchema";

import bcrypt from "bcrypt";

let routes = Router();

routes.post("/login", async (req, res) => {
  let password = await bcrypt.hash(req.body.password, 10);
  let newUser: any = new UserSchema({
    email: req.body.email,
    name: req.body.name,
    password,
  });
  try {
    await newUser.save();
    const token = newUser.generateAuthToken();
    res.header("x-auth-token", token).send({
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
    });
  } catch (err) {
    res.send(err);
  }
});

export default routes;
