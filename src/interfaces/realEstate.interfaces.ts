import { z } from "zod";
import { createRealEstateSchema, returnRealEstateOmitSchema } from "../schemas/realEstate.schemas"

type iRealEstateCreate = z.infer<typeof createRealEstateSchema>
type iRealEstateOmitReturn = z.infer<typeof returnRealEstateOmitSchema>

export {
    iRealEstateCreate,
    iRealEstateOmitReturn
}