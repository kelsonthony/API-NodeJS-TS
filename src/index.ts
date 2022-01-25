import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { userRoutes } from "./routes";
import bodyParser from "body-parser";
import cors from "cors";

const PORT = process.env.PORT || 8091;
const HOST = process.env.API_URL;

const app = express();

app.use(bodyParser.json());

app.use(({}, res, next) => {
    //Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
    //Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    app.use(cors());
    next();
});

userRoutes(app);

app.listen(PORT, () => console.log("Start server", +PORT));
