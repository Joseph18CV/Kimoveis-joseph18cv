import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { RealEstate } from "../../entities";

const listAllRealEstatesServices = async (): Promise<RealEstate[]> => {

    const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)

    const findRealEstates: Array<RealEstate> = await realEstateRepository.find({
        order: {
            id: "ASC"
        },
        relations: {
            address: true
        }
    })

    return findRealEstates

}

export {
    listAllRealEstatesServices
}