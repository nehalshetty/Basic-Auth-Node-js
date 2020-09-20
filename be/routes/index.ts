import { Router } from "express";
import userModel from "../schemas/userSchema";

import bcrypt from "bcrypt";

let routes = Router();

routes.post("/register", async (req, res) => {
  let password = await bcrypt.hash(req.body.password, 10);
  let newUser: any = new userModel({
    email: req.body.email,
    name: req.body.name,
    password,
  });

  try {
    await newUser.save();
    const token = newUser.generateAuthToken({
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
    });

    res.header("Authorization", token).send({
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
    });
  } catch (err) {
    res.send(err);
  }
});

routes.post("/login", async (req, res) => {
  let password = req.body.password;
  let user: any = await userModel.aggregate([
    { $match: { email: req.body.email } },
    {
      $project: {
        // id: `${$_id}`,
        _id: 0,
      },
    },
  ]);

  // console.log(user, user[0].password);
  if (!user.length)
    return res.status(404).send({ email: "User does not exist" });

  let isPasswordCorrect = await bcrypt.compare(password, `${user[0].password}`);
  if (isPasswordCorrect) {
    let { id, name, email } = user[0];
    let userM = new userModel();

    let token = await userM.generateAuthToken({
      id,
      name,
      email,
    });
    res.header("Authorization", token).send("Done");
  } else {
    res.status(400).send({ password: "Incorrect password" });
  }
});

export default routes;
