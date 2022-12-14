import { Router } from "express";

import authRouter from "./authRouter.js";
import tweetRouter from "./tweetRouter.js";

const router = Router();
router.use(authRouter);
router.use(tweetRouter);

export default router;
