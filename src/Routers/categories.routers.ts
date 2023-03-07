import { Router } from "express";
import { createCategoryController, listCategoriesController, listRealEstatesFromCategoryController } from "../controllers/categories.controllers";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middlewares";
import { ensureNameExistsMiddlewares } from "../middlewares/ensureNameExists.middlewares";
import { ensureTokenIsValidMiddleware } from "../middlewares/ensureTokenIsValid.middlewares";
import { ensureValidAdminRoutesMiddleware } from "../middlewares/ensureValidAdminRouters.middlewares";
import { createCategorySchema } from "../schemas/categories.schemas";

const categoriesRouters: Router = Router()

categoriesRouters.post("", ensureDataIsValidMiddleware(createCategorySchema), ensureTokenIsValidMiddleware, ensureValidAdminRoutesMiddleware, ensureNameExistsMiddlewares, createCategoryController)
categoriesRouters.get("", listCategoriesController)
categoriesRouters.get("/:id/realEstate", listRealEstatesFromCategoryController)

export {
    categoriesRouters
}