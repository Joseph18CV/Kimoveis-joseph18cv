import { Router } from "express";
import { createLoginController } from "../controllers/login.controllers";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middlewares";
import { createLoginSchema } from "../schemas/login.schemas";

const loginRouters: Router = Router()

loginRouters.post("", ensureDataIsValidMiddleware(createLoginSchema), createLoginController)

export {
    loginRouters
}