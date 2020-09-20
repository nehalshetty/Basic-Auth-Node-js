import { model, Schema } from "mongoose";
import jwt from "jsonwebtoken";

let userSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
});

userSchema.methods.generateAuthToken = ({
  id,
  name,
  email,
}: {
  id: string;
  name: string;
  email: string;
}) => {
  let token = jwt.sign({ id, name, email }, "nrs");
  return token;
};

let userModel: any = model("User", userSchema);

export default userModel;
