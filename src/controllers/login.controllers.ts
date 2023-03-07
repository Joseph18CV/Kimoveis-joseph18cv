import { Request, Response } from "express";
import { iLogin } from "../interfaces/login.interfaces";
import { createLoginServices } from "../services/login/createLogin.services";

const createLoginController = async (req: Request, res: Response): Promise<Response> => {

    const loginData: iLogin = req.body

    const token = await createLoginServices(loginData)

    return res.json({
        token: token
    })

}

export {
    createLoginController
}