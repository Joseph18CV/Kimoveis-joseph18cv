import { Request, Response } from "express";
import { iRealEstateCreate } from "../interfaces/realEstate.interfaces";
import { createRealEstateServices } from "../services/RealEstate/createRealEstate.services";
import { listAllRealEstatesServices } from "../services/RealEstate/listAllRealEstates.services";

const createRealEstateController = async (req: Request, res: Response): Promise<Response> => {

    const estateData: iRealEstateCreate = req.body

    const newEstate = await createRealEstateServices(estateData)

    return res.status(201).json(newEstate)

}

const listRealEstatesController = async (req: Request, res: Response): Promise<Response> => {

    const realEstates = await listAllRealEstatesServices()

    return res.json(realEstates)

}

export {
    createRealEstateController,
    listRealEstatesController
}