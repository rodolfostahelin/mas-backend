import {Request, Response} from 'express';
import { CourseUnit } from '../models/CourseUnit';
import {CreateCourseUnitService} from '../services/CreateCourseUnitService'
import { GetCourseUnitsService } from '../services/GetCourseUnitService';

class CourseUnitController {
    async create(request:Request, response:Response, ){
        const courseUnitData = request.body

        const createCourseUnit= new CreateCourseUnitService()

        const courseUnit = await createCourseUnit.execute(courseUnitData);
    return response.json(CourseUnit);

    }

    async show(request:Request, response:Response){
        const userId = request.body.user;

        const getCourseUnit = new GetCourseUnitsService();

        const courseUnits = await getCourseUnit.execute(userId);

        return response.json(courseUnits);
    }
}

export {CourseUnitController};