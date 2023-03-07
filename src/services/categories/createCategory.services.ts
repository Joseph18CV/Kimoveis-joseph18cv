import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import { iCategoryRequest, iCategoryReturn } from "../../interfaces/categories.interfaces";
import { returnCategorySchema } from "../../schemas/categories.schemas";

const createCategoryServices = async (categoryData: iCategoryRequest): Promise<iCategoryReturn> => {

   const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category)

   const category: Category = categoryRepository.create(categoryData)

   await categoryRepository.save(category)

   const newCategory = returnCategorySchema.parse(category)

   return newCategory
    
}

export {
    createCategoryServices
}