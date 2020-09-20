import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Routes from "./routes";
import UserSchema from "./schemas/userSchema";
import Auth from "./middleware/auth";

dotenv.config();
const app = express();

const PORT: string = process.env.PORT || "3000";

app.use(express.json());
app.use("/api", Routes);

app.get("/", Auth, (req: any, res) => {
  res.send("Auth completed");
});

mongoose.connect(
  `mongodb+srv://${"nrs"}:${"pass1234"}@cluster0.meykv.mongodb.net/${"Auth"}?retryWrites=true&w=majority`,
  { useUnifiedTopology: true, useNewUrlParser: true },
  (err: Error) => {
    if (err) {
      console.log("Mongo connection error", err);
    } else {
      app.listen(PORT, () => {
        console.log(`Server running at ${PORT}`);
      });
    }
  }
);
