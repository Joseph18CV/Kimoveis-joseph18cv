import { z } from "zod";
import { returnCategorySchema } from "./categories.schemas";

const addressSchema = z.object({
    street: z.string(),
    zipCode: z.string().max(8),
    number: z.string().optional().nullish(),
    city: z.string(),
    state: z.string().max(2)
})

const createRealEstateSchema = z.object({
    value: z.string().or(z.number()),
    size: z.number().int().positive(),
    address: addressSchema,
    categoryId: z.number().int()
})

const returnRealEstateSchema = createRealEstateSchema.extend({
    id: z.number(),
    createAt: z.string(),
    updatedAt: z.string(),
})

const realEstateOmitSchema = createRealEstateSchema.omit({
    address: true, categoryId: true
})

const returnRealEstateOmitSchema = createRealEstateSchema.extend({
    category: returnCategorySchema
}).omit({categoryId: true})

export {    
    createRealEstateSchema,
    returnRealEstateSchema,
    addressSchema,
    realEstateOmitSchema,
    returnRealEstateOmitSchema
}