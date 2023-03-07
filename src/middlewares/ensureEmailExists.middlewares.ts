import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { User } from "../entities";
import { AppError } from "../error";

const ensureEmailExistsMiddlewares = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    const usersRepository: Repository<User> = AppDataSource.getRepository(User)

    if(!req.body.email){
        return next()
    }

    const findEmail = await usersRepository.findOne({
        where: {
            email: req.body?.email
        }
    })

    if(findEmail){
        throw new AppError("Email already exists", 409)
    }

    return next()

}

export {
    ensureEmailExistsMiddlewares
}