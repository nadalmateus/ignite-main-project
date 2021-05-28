import { Router } from 'express';

import { categoryRoute } from './categoryRoute';
import { specificationRoute } from './specificationRoute';

const router = Router();

router.use('/categories', categoryRoute);
router.use('/specifications', specificationRoute);

export { router };
