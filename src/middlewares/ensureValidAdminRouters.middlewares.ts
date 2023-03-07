import { NextFunction, Request, Response } from "express";
import { AppError } from "../error";

const ensureValidAdminRoutesMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    const authUser = req.user

    if(authUser.admin === false){
        throw new AppError("Insufficient permission", 403)
    }

    next()

}

export {
    ensureValidAdminRoutesMiddleware
}