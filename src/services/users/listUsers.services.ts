import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { iUsersReturn } from "../../interfaces/users.interfaces";
import { returnAllUsersSchema } from "../../schemas/users.schemas";

const listUsersServices = async (): Promise<iUsersReturn> => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const findUsers: Array<User> = await userRepository.find({
        order: {
            id: "ASC"
        },
        withDeleted: true
    })

    const users = returnAllUsersSchema.parse(findUsers)

    return users

}

export {
    listUsersServices
}