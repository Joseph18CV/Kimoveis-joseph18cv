import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Category } from "../entities";
import { AppError } from "../error";

const ensureNameExistsMiddlewares = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category)

    if(!req.body.name){
        return next()
    }

    const findName = await categoryRepository.findOne({
        where: {
            name: req.body?.name
        }
    })

    if(findName){
        throw new AppError("Category already exists", 409)
    }

    return next()

}

export {
    ensureNameExistsMiddlewares
}