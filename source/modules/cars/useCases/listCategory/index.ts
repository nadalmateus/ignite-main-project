import { CategoryRepository } from '../../repositories/implementations/CategoryRepository';
import { ListCategoryController } from './ListCategoryController';
import { ListCategoryUseCase } from './ListCategoryUseCase';

const cateRepository = CategoryRepository.getInstance();
const listCategoryUseCase = new ListCategoryUseCase(cateRepository);
const listCategoryController = new ListCategoryController(listCategoryUseCase);

export { listCategoryController };
