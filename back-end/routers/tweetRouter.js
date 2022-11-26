import { Router } from "express";

import { usuarios } from "./authRouter.js";

const tweetRouter = Router();

const tweets = [];

tweetRouter.post("/tweets", (req, res) => {
  const { tweet, username } = req.body;

  if (!username || !tweet) {
    return res.status(400).send("Todos os campos são obrigatórios!");
  }

  const { avatar } = usuarios.find((user) => user.username === username);

  tweets.push({ username, tweet, avatar });

  res.status(201).send("OK, seu tweet foi criado");
});

tweetRouter.get("/tweets/:username", (req, res) => {
  const { username } = req.params;

  const tweetsDoUsuario = tweets.filter((t) => t.username === username);

  res.status(200).send(tweetsDoUsuario);
});

tweetRouter.get("/tweets", (req, res) => {
  const { page } = req.query;

  if (page && page < 1) {
    res.status(400).send("Informe uma página válida!");
    return;
  }
  const limite = 10;
  const start = (page - 1) * limite;
  const end = page * limite;

  if (tweets.length <= 10) {
    return res.send(reverseTweets());
  }

  res.status(200).send([...tweets].reverse().slice(start, end));
});

function reverseTweets() {
  return [...tweets].reverse();
}

export default tweetRouter;
