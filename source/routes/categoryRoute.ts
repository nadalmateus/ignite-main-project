import { Router } from 'express';

import { CategoryRepository } from '../modules/cars/repositories/CategoryRepository';
import { CreateCategoryService } from '../modules/cars/services/CreateCategoryService';

const categoryRoute = Router();
const categoryRepository = new CategoryRepository();

categoryRoute.post('/', (request, response) => {
	const { name, description } = request.body;

	const createCategoryService = new CreateCategoryService(categoryRepository);

	createCategoryService.execute({ name, description });

	return response.status(201).send();
});

categoryRoute.get('/', (request, response) => {
	const all = categoryRepository.list();

	return response.status(201).json(all);
});

export { categoryRoute };
