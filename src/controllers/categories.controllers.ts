import { Request, Response } from "express";
import { createCategoryServices } from "../services/categories/createCategory.services";
import { iCategoryRequest } from "../interfaces/categories.interfaces";
import { listAllCategoriesServices } from "../services/categories/listAllCategories.services";
import { listRealEstatesFromCategoryServices } from "../services/categories/listRealEstatesFromCategory.services";

const createCategoryController = async (req: Request, res: Response): Promise<Response> => {

    const categoryData: iCategoryRequest = req.body

    const newUser = await createCategoryServices(categoryData)

    return res.status(201).json(newUser)

}

const listCategoriesController = async (req: Request, res: Response): Promise<Response> => {

    const categories = await listAllCategoriesServices()

    return res.json(categories)

}

const listRealEstatesFromCategoryController = async (req: Request, res: Response): Promise<Response> => {

    const idRealEstate = parseInt(req.params.id)

    const realEstate = await listRealEstatesFromCategoryServices(idRealEstate)

    return res.json(realEstate)

}



export {
    createCategoryController,
    listCategoriesController,
    listRealEstatesFromCategoryController
}
