import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { RealEstate } from "../../entities"
import { AppError } from "../../error"

const listScheduleFromRealEstateServices = async (idRealEstate: number): Promise<RealEstate> => {

    const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)

    const findRealEstate: RealEstate | null = await realEstateRepository.createQueryBuilder("realEstate").
    innerJoinAndSelect("realEstate.address", "address").
    innerJoinAndSelect("realEstate.category", "category").
    innerJoinAndSelect("realEstate.schedules", "schedule").
    innerJoinAndSelect("schedule.user", "user").
    where("realEstate.id = :id", {id: idRealEstate}).
    getOne()
    

    if(!findRealEstate){
        throw new AppError("RealEstate not found", 404)
    }

    return findRealEstate
}

export {
    listScheduleFromRealEstateServices
} 
