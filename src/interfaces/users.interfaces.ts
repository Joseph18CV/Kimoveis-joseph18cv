import { returnAllUsersSchema, returnUserCreate, usersCreateSchema, userUpdateSchema } from "../schemas/users.schemas";
import { z } from "zod";    

type iUserRequest = z.infer<typeof usersCreateSchema>
type iUserReturn = z.infer<typeof returnUserCreate>
type iUsersReturn = z.infer<typeof returnAllUsersSchema>
type iUserUpdate = z.infer<typeof userUpdateSchema>
type iUserRequestOmitAdmin = Omit<iUserRequest, "admin">

export {
    iUserRequest,
    iUserReturn,
    iUserRequestOmitAdmin,
    iUsersReturn,
    iUserUpdate
}

