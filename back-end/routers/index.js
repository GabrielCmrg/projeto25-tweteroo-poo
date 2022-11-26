import { Router } from "express";

import authRouter from "./authRouter";
import tweetRouter from "./tweetRouter";

const router = Router();
router.use(authRouter);
router.use(tweetRouter);

export default router;
