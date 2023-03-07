import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { RealEstate, Schedule, User } from "../../entities"
import { AppError } from "../../error"
import { iScheduleRequest } from "../../interfaces/schedules.interfaces"

const createSchedulesServices = async ({realEstateId, date, hour}: iScheduleRequest, userId: number): Promise<Object> => {

    const scheduleRepository: Repository<Schedule> = AppDataSource.getRepository(Schedule)
    const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)
    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const realEstateExists: RealEstate | null = await realEstateRepository.findOneBy({
        id: realEstateId
    })

    if(!realEstateExists){
        throw new AppError("RealEstate not found", 404)
    }

    const user: User | null = await userRepository.findOneBy({
        id: userId
    })

    const newDate = new Date(date)
    const newHour = hour.slice(0,2)

    if(newDate.getDay() === 0 || newDate.getDay() === 6){
        throw new AppError("Invalid date, work days are monday to friday", 400)
    }

    if(parseInt(newHour) < 8 || parseInt(newHour) > 18){
        throw new AppError("Invalid hour, available times are 8AM to 18PM", 400)
    }

    const verifyScheduleExists: Schedule | null = await scheduleRepository.createQueryBuilder("schedule").
    where("schedule.realEstateId = :realEstateId", {realEstateId}).
    andWhere("schedule.hour = :hour", {hour}).
    andWhere("schedule.date = :date", {date}).
    getOne()

    if(verifyScheduleExists){
        throw new AppError("Schedule to this real estate at this date and time already exists", 409)
    }

    const verifyUserScheduleExists: Schedule | null = await scheduleRepository.createQueryBuilder("schedule").
    where("schedule.userId = :userId", {userId}).
    andWhere("schedule.date = :date", {date}).
    andWhere("schedule.hour = :hour", {hour}).
    getOne()

    if(verifyUserScheduleExists){
        throw new AppError("User schedule to this real estate at this date and time already exists", 409)
    }

    const newSchedule: Schedule = scheduleRepository.create({
        date: newDate,
        hour: newHour,
        realEstate: realEstateExists,
        user: user!
    })

    await scheduleRepository.save(newSchedule)

    return {message: "Schedule created"}
    
}

export {
    createSchedulesServices
}