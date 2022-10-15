import express from "express";
const app = express();
app.use(express.json());
const server = app.listen(3000, () => console.log("server ready"));
