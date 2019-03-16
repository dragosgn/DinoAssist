import express from "express";
import runSampleVoice from "./runSampleVoice";

const app = express();

const port = 3000;

const projectId = "tyrannosalesos";

const answer = await runSampleVoice(projectId);

console.log(answer, "answer");

app.get("/", (req, res) => res.send("Helloo Dinooo"));

app.listen(port, () => console.log("Dinno listening on port 3000"));
