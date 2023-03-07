import { Request, Response } from "express";
import { iScheduleRequest } from "../interfaces/schedules.interfaces";
import { createSchedulesServices } from "../services/schedules/createSchedules.services";
import { listScheduleFromRealEstateServices } from "../services/schedules/listSchedulesFromRealEstate.services";

const createSchedulesController = async (req: Request, res: Response): Promise<Response> => {

    const scheduleData: iScheduleRequest = req.body
    const userId: number = req.user.id

    const newSchedule = await createSchedulesServices(scheduleData, userId)

    return res.status(201).json(newSchedule)

}

const listSchedulesFromRealEstateController = async (req: Request, res: Response): Promise<Response> => {

    const realEstateId: number = parseInt(req.params.id)

    const schedule = await listScheduleFromRealEstateServices(realEstateId)

    return res.status(200).json(schedule)

}

export {
    createSchedulesController,
    listSchedulesFromRealEstateController
}