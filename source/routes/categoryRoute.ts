import { Router } from 'express';

import { CategoryRepository } from '../modules/cars/repositories/CategoryRepository';
import { createCategoryController } from '../modules/cars/useCases/createCategory';

const categoryRoute = Router();
const categoryRepository = new CategoryRepository();

categoryRoute.post('/', (request, response) => {
	return createCategoryController.handle(request, response);
});

categoryRoute.get('/', (request, response) => {
	const all = categoryRepository.list();

	return response.status(201).json(all);
});

export { categoryRoute };
