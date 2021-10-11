import { getRepository } from 'typeorm';
import { CourseUnit } from '../model/CourseUnit';

interface CourseUnitData {
    name: string;
    description: string;
    activy_id: string;
}

class CreateCourseUnitService {
    async execute({ name, description, activy_id }: CourseUnitData) {

        const courseUnitRepository = getRepository(CourseUnit);

        const course_unit = courseUnitRepository.create({
            name,
            description,
            activy_id
        });

        await courseUnitRepository.save(course_unit);

        return course_unit;

    }
}

export { CreateCourseUnitService };