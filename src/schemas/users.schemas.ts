import { z } from "zod";

const usersCreateSchema = z.object({
    name: z.string().max(45),
    email: z.string().email().max(45),
    admin: z.boolean().optional(),
    password: z.string().max(120)
})

const returnUserCreate = usersCreateSchema.extend({
    id: z.number(),
    createdAt: z.string(),
    updatedAt: z.string(),
    deletedAt: z.string().nullable()
}).omit({password: true})

const returnAllUsersSchema = returnUserCreate.array()
const userUpdateSchema = usersCreateSchema.partial().omit({admin: true})

export {
    usersCreateSchema,
    returnUserCreate,
    returnAllUsersSchema,
    userUpdateSchema
}