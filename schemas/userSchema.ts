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

userSchema.methods.generateAuthToken = () => {
  let id: any = this.id;
  let token = jwt.sign({ id: id }, "nrs");
  return token;
};

let userModel = model("User", userSchema);

export default userModel;
