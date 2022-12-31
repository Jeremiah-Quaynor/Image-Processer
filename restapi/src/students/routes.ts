import { Router} from 'express'
import controller from './controller';

const router = Router();

router.get('/', controller.getStudents);
router.get('/:id', controller.getStudentByID);
router.post('/', controller.addStudent);

export default router;
