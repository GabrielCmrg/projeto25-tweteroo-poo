import { Router } from "express";

import { userController } from "../controllers/index.js";

const authRouter = Router();

authRouter.post("/sign-up", userController.signup);

export default authRouter;
