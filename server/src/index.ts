import path from "path";
require('dotenv').config()
import express, { Request, Response, NextFunction } from 'express';
import bodyParser from "body-parser";
import { fetchByUsername } from "./controllers/userController";
import { fetchMatchesByPage } from "./controllers/endedMatchController";
Error.stackTraceLimit = Infinity;

const app = express();

app.use("/static", express.static(path.join(__dirname, "static")));

app.use(function (req: Request, res: Response, next: NextFunction) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(process.env.PORT, () => console.log("Server running"));

app.get('/summoner/:username', fetchByUsername);

app.get('/matches', fetchMatchesByPage)

app.get("/3", (req, res) => {
    res.status(404);
    res.end();
})