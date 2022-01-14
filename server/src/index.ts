import path from "path";
require('dotenv').config()
import express, { Request, Response, NextFunction } from 'express';
import { fetchByUsername } from "./controllers/userController";

const app = express();

app.use("/static", express.static(path.join(__dirname, "static")));

app.use(function (req: Request, res: Response, next: NextFunction) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

app.listen(process.env.PORT, () => console.log("Server running"));

app.get('/summoner/:username', fetchByUsername)