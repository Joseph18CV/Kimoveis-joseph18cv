import { Request, Response } from "express";
import { iUserRequest, iUserUpdate } from "../interfaces/users.interfaces";
import { deleteUsersServices } from "../services/users/deleteUsers.services";
import { listUsersServices } from "../services/users/listUsers.services";
import { updateUserServices } from "../services/users/updateUser.services";
import { createUsersServices } from "../services/users/users.services";

const createUsersController = async (req: Request, res: Response): Promise<Response> => {

    const userData: iUserRequest = req.body

    const newUser = await createUsersServices(userData)

    return res.status(201).json(newUser)

}

const listUsersController = async (req: Request, res: Response): Promise<Response> => {

    const users = await listUsersServices()

    return res.json(users)

}

const deleteUsersController = async (req: Request, res: Response) => {

    await deleteUsersServices(parseInt(req.params.id))

    return res.status(204).send()

}

const updateUserController = async (req: Request, res: Response) => {

    const userData: iUserUpdate[] = req.body
    const userId = parseInt(req.params.id)
    const userIdLogin = req.user

    const userUpdated = await updateUserServices(userData, userId, userIdLogin)

    return res.json(userUpdated)
}

export {
    createUsersController,
    listUsersController,
    deleteUsersController,
    updateUserController
}

