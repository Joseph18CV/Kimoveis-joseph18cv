import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { User } from "../../entities"
import { iUserRequestOmitAdmin, iUserReturn } from "../../interfaces/users.interfaces"
import { returnUserCreate } from "../../schemas/users.schemas"

const createUsersServices = async (userData: iUserRequestOmitAdmin): Promise<iUserReturn> => {

   const userRepository: Repository<User> = AppDataSource.getRepository(User)

   const user: User = userRepository.create(userData)

   await userRepository.save(user)

   const newUser = returnUserCreate.parse(user)

   return newUser
    
}

export {
    createUsersServices
}