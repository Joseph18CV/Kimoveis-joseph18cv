import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { User } from "../../entities"
import { AppError } from "../../error"

const deleteUsersServices = async (userId: number): Promise<void> => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const user = await userRepository.findOne({
        where: {
            id: userId
        }
    })

    if(user?.deletedAt !== null){
        throw new AppError("User has already been deleted", 404)
    }

    await userRepository.softRemove(user!)

}

export {
    deleteUsersServices
}

