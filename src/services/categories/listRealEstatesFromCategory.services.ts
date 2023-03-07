import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Category } from "../../entities"
import { AppError } from "../../error"

const listRealEstatesFromCategoryServices = async (realEstateId: number): Promise<Category> => {

    const categoriesRepository: Repository<Category> = AppDataSource.getRepository(Category)

    const realEstatesCategory = await categoriesRepository.findOne({
        where: {
            id: realEstateId
        },
        relations: {
            realEstate: true
        }
    })

    if(!realEstatesCategory){
        throw new AppError("Category not found", 404)
    }

    return realEstatesCategory

}

export {
    listRealEstatesFromCategoryServices
}