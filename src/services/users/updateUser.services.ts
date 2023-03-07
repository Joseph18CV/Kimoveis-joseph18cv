import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { User } from "../../entities"
import { AppError } from "../../error"
import { iUserReturn, iUserUpdate } from "../../interfaces/users.interfaces"
import { returnUserCreate } from "../../schemas/users.schemas"

const updateUserServices = async (newUserData: iUserUpdate[], idUser: number, userIdLogin: any): Promise<iUserReturn> => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const oldUserData: User | null = await userRepository.findOneBy({
        id: idUser
    })

    if(userIdLogin.admin === false && userIdLogin.id !== idUser){
        throw new AppError("Insufficient permission", 403)
    }
        
    const user = userRepository.create({
        ...oldUserData,
        ...newUserData
    })

    await userRepository.save(user)

    const updatedUser = returnUserCreate.parse(user)

    return updatedUser

}

export {
    updateUserServices
}