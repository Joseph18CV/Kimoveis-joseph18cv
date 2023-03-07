import { z } from "zod";
import { createScheduleSchema, returnScheduleSchema } from "../schemas/schedules.schemas";

type iScheduleRequest = z.infer<typeof createScheduleSchema>
type iScheduleReturn = z.infer<typeof returnScheduleSchema>

export {
    iScheduleRequest,
    iScheduleReturn
}