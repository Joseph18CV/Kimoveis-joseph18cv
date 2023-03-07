import { Router } from "express";
import { createSchedulesController, listSchedulesFromRealEstateController } from "../controllers/schedules.controllers";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middlewares";
import { ensureTokenIsValidMiddleware } from "../middlewares/ensureTokenIsValid.middlewares";
import { ensureValidAdminRoutesMiddleware } from "../middlewares/ensureValidAdminRouters.middlewares";
import { createScheduleSchema } from "../schemas/schedules.schemas";

const scheduleRouters: Router = Router()

scheduleRouters.post("", ensureTokenIsValidMiddleware, ensureDataIsValidMiddleware(createScheduleSchema), createSchedulesController)
scheduleRouters.get("/realEstate/:id", ensureTokenIsValidMiddleware, ensureValidAdminRoutesMiddleware, listSchedulesFromRealEstateController)

export {
    scheduleRouters
}   