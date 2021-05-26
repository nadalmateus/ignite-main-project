import { Category } from '../entities/Category'
import { ICategoryRepository, ICreateCategoryDTO } from './ICategoryRepository'

class PostgreCategoryRepository implements ICategoryRepository {
  findByName (name: string): Category {
    console.log(name)
    return null
  }

  list (): Category[] {
    return null
  }

  create ({ name, description }: ICreateCategoryDTO): void {
    console.log(name, description)
  }
}

export { PostgreCategoryRepository }
