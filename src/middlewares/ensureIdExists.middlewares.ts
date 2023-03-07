import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { User } from "../entities";
import { AppError } from "../error";

const ensureIdExistsMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    const movieRepository: Repository<User> = AppDataSource.getRepository(User)

    const findUser = await movieRepository.findOne({
        where: {
            id: parseInt(req.params.id)
        }
    })

    if(!findUser){
        throw new AppError("User not found", 404)
    }

    return next()

}

export {
    ensureIdExistsMiddleware
}