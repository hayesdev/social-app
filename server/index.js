import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
// must have file extensions when using import method
import postRoutes from "./routes/posts.js";

const app = express();

// middleware
app.use(express.json());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/posts", postRoutes);

// routes

const CONNECTION_URL =
  "mongodb+srv://ghayes:j6sMttc4LEPHch@nodeprojects.xkcjg.mongodb.net/Social-app?retryWrites=true&w=majority";
const PORT = process.env.PORT || 4000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, console.log(`Server listening on port ${PORT}...`));
  })
  .catch((err) => console.log(err.message));
