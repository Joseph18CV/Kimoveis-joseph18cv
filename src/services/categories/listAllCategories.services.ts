import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import { iAllCategoriesReturn } from "../../interfaces/categories.interfaces";
import { returnAllCategoriesSchema } from "../../schemas/categories.schemas";

const listAllCategoriesServices = async (): Promise<iAllCategoriesReturn> => {

    const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category)

    const findCategories: Array<Category> = await categoryRepository.find({
        order: {
            id: "ASC"
        },
    })

    const categories = returnAllCategoriesSchema.parse(findCategories)

    return categories

}

export {
    listAllCategoriesServices
}