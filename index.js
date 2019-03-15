import express from "express";

const app = express();

const port = 3000;

app.get("/", (req, res) => res.send("Helloo Dinooo"));

app.listen(port, () => console.log("Dinno listening on port 3000"));
