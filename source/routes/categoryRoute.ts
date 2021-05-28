import { Router } from 'express';

import { createCategoryController } from '../modules/cars/useCases/createCategory';
import { listCategoryController } from '../modules/cars/useCases/listCategory';

const categoryRoute = Router();

categoryRoute.post('/', (request, response) => {
	return createCategoryController.handle(request, response);
});

categoryRoute.get('/', (request, response) => {
	return listCategoryController.handle(request, response);
});

export { categoryRoute };
