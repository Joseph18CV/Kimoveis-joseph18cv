import { Router } from "express";
import { createUsersController, deleteUsersController, listUsersController, updateUserController } from "../controllers/users.controllers";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middlewares";
import { ensureEmailExistsMiddlewares } from "../middlewares/ensureEmailExists.middlewares";
import { ensureIdExistsMiddleware } from "../middlewares/ensureIdExists.middlewares";
import { ensureTokenIsValidMiddleware } from "../middlewares/ensureTokenIsValid.middlewares";
import { ensureValidAdminRoutesMiddleware } from "../middlewares/ensureValidAdminRouters.middlewares";
import { usersCreateSchema, userUpdateSchema } from "../schemas/users.schemas";

const usersRouters: Router = Router()

usersRouters.post("", ensureDataIsValidMiddleware(usersCreateSchema), ensureEmailExistsMiddlewares, createUsersController)
usersRouters.get("", ensureTokenIsValidMiddleware, ensureValidAdminRoutesMiddleware, listUsersController)
usersRouters.delete("/:id", ensureIdExistsMiddleware, ensureTokenIsValidMiddleware, ensureValidAdminRoutesMiddleware, deleteUsersController)
usersRouters.patch("/:id", ensureTokenIsValidMiddleware, ensureDataIsValidMiddleware(userUpdateSchema), ensureIdExistsMiddleware, updateUserController)

export default usersRouters;