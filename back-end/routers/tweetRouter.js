import { Router } from "express";

import { tweetController } from "../controllers/index.js";

const tweetRouter = Router();
tweetRouter.post("/tweets", tweetController.createTweet);
tweetRouter.get("/tweets/:username", tweetController.getUserTweet);
tweetRouter.get("/tweets", tweetController.getTweets);

export default tweetRouter;
