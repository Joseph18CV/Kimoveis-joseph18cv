import { z } from "zod";

const createScheduleSchema = z.object({
    date: z.string(),
    hour: z.string(),
    realEstateId: z.number().int().positive()
})

const returnScheduleSchema = createScheduleSchema.extend({
    id: z.number()
}).omit({realEstateId: true})

export {
    createScheduleSchema,
    returnScheduleSchema
}