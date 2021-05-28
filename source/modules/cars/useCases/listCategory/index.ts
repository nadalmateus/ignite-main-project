import { CategoryRepository } from '../../repositories/CategoryRepository';
import { ListCategoryController } from './ListCategoryController';
import { ListCategoryUseCase } from './ListCategoryUseCase';

const cateRepository = new CategoryRepository();
const listCategoryUseCase = new ListCategoryUseCase(cateRepository);
const listCategoryController = new ListCategoryController(listCategoryUseCase);

export { listCategoryController };
