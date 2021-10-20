import {Request, Response} from 'express';
import { CourseUnit } from '../models/CourseUnit';
import {CreateCourseUnitService} from '../services/CreateCourseUnitService'

class CourseUnitController {
    async create(request:Request, response:Response, ){
        const courseUnitData = request.body

        const createCourseUnit= new CreateCourseUnitService()

        const courseUnit = await createCourseUnit.execute(courseUnitData);
    return response.json(CourseUnit);

    }
}

export {CourseUnitController};