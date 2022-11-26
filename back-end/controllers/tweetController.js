import { userController } from "./index.js";

const tweets = [];

export const createTweet = (req, res) => {
  const { tweet, username } = req.body;

  if (!username || !tweet) {
    return res.status(400).send("Todos os campos são obrigatórios!");
  }

  const { avatar } = userController.usuarios.find(
    (user) => user.username === username
  );

  tweets.push({ username, tweet, avatar });

  res.status(201).send("OK, seu tweet foi criado");
};

export const getUserTweet = (req, res) => {
  const { username } = req.params;

  const tweetsDoUsuario = tweets.filter((t) => t.username === username);

  res.status(200).send(tweetsDoUsuario);
};

export const getTweets = (req, res) => {
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
};

function reverseTweets() {
  return [...tweets].reverse();
}
