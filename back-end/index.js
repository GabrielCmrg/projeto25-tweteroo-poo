import chalk from "chalk";
import cors from "cors";
import express, { json } from "express";

import router from "./routers/index.js";

const app = express();

app.use(cors());
app.use(json());
app.use(router);

app.listen(5001, () => {
  console.log(chalk.bold.blue("Servidor funfando de boas!!!"));
});
