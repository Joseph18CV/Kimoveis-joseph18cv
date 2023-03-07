import { z } from "zod";  
import { createCategorySchema, returnAllCategoriesSchema, returnCategorySchema } from "../schemas/categories.schemas";

type iCategoryRequest = z.infer<typeof createCategorySchema>
type iCategoryReturn = z.infer<typeof returnCategorySchema>
type iAllCategoriesReturn = z.infer<typeof returnAllCategoriesSchema>

export {
    iCategoryRequest,
    iCategoryReturn,
    iAllCategoriesReturn
}