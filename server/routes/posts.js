import express from "express";
import getPosts from "../controllers/posts.js";

const router = express.Router();

// router.get("/", (req, res) => {
//   res.send("<h1>Social App</h1>");
// });
router.get("/", getPosts);

export default router;
