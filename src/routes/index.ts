import { Router } from 'express';
import classRouter from './class.routes';
import contentRouter from './content.routes';
import lessonRouter from './lesson.routes';
import studentRouter from './student.routes';

const routes = Router();

/**
 * Registrando as rotas...
 */
routes.use('/class', classRouter);
routes.use('/lesson', lessonRouter);
routes.use('/student', studentRouter);
routes.use('/content', contentRouter);

export default routes;
