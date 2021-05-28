import { Router } from 'express';

import { createSpecificationController } from '../modules/cars/useCases/specification/createSpecification';

const specificationRoute = Router();

specificationRoute.post('/', (request, response) => {
	return createSpecificationController.handle(request, response);
});

export { specificationRoute };
