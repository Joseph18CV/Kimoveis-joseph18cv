import { Router } from "express";
import { createRealEstateController, listRealEstatesController } from "../controllers/realEstate.controllers";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middlewares";
import { ensureTokenIsValidMiddleware } from "../middlewares/ensureTokenIsValid.middlewares";
import { ensureValidAdminRoutesMiddleware } from "../middlewares/ensureValidAdminRouters.middlewares";
import { createRealEstateSchema } from "../schemas/realEstate.schemas";

const realEstateRouters: Router = Router()

realEstateRouters.post("", ensureTokenIsValidMiddleware, ensureValidAdminRoutesMiddleware, ensureDataIsValidMiddleware(createRealEstateSchema), createRealEstateController)
realEstateRouters.get("", listRealEstatesController)

export {
    realEstateRouters
}