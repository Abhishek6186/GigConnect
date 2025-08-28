import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(express.json());
app.get("/", (req, res) => res.send("GigConnect API"));
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`API listening on ${port}`));
