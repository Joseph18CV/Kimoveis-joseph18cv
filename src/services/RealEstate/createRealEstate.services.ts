import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Address, Category, RealEstate } from "../../entities";
import { AppError } from "../../error";
import { iRealEstateCreate, iRealEstateOmitReturn } from "../../interfaces/realEstate.interfaces";
import { addressSchema, realEstateOmitSchema } from "../../schemas/realEstate.schemas";

const createRealEstateServices = async (estateData: iRealEstateCreate): Promise<iRealEstateOmitReturn> => {

    const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)
    const addressRepository: Repository<Address> = AppDataSource.getRepository(Address)
    const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category)
    
    const realEstate = realEstateOmitSchema.parse(estateData)
    const address = addressSchema.parse(estateData.address)

    const adressExists: Address | null = await addressRepository.findOneBy({
        ...address,
        number: address.number ? address.number : ""
    })

    if(adressExists){
        throw new AppError("Address already exists", 409)
    }


    const newAddress: Address = addressRepository.create({street: address.street,
        zipCode: address.zipCode,
        number: address.number ? address.number : null,
        city: address.city,
        state: address.state,
    })

    await addressRepository.save(newAddress)
    
    const category = await categoryRepository.findOneBy({
        id: estateData.categoryId
    })

    if(!category){
        throw new AppError("Category not found", 404)
    }

    const newRealEstate = realEstateRepository.create({
        ...realEstate,
        address: newAddress,
        category: category
    })

    await realEstateRepository.save(newRealEstate)

    return newRealEstate

}       

export {
    createRealEstateServices
}