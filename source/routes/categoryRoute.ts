import { Router } from 'express';
import multer from 'multer';

import { createCategoryController } from '../modules/cars/useCases/category/createCategory';
import { listCategoryController } from '../modules/cars/useCases/category/listCategory';

const categoryRoute = Router();

const upload = multer({
	dest: './tmp',
});

categoryRoute.post('/', (request, response) => {
	return createCategoryController.handle(request, response);
});

categoryRoute.get('/', (request, response) => {
	return listCategoryController.handle(request, response);
});

categoryRoute.post('/import', upload.single('file'), (request, response) => {
	const { file } = request;

	console.log(file);
	return response.send();
});

export { categoryRoute };
