import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

// middleware
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send("<h1>Social App</h1>");
});

const port = 4000;

app.listen(port, console.log(`Server listening on port ${port}...`));
