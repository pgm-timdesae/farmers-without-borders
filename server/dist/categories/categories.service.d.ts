import { Repository } from 'typeorm';
import { CreateCategoryInput, UpdateCategoryInput } from './dto';
import { Category } from './entities/category.entity';
export declare class CategoriesService {
    private categoriesRepository;
    constructor(categoriesRepository: Repository<Category>);
    findAll(): Promise<Category[]>;
    findOne(id: number): Promise<Category>;
    createCategory(createCategoryInput: CreateCategoryInput): Promise<Category>;
    updateCategory(updateCategoryInput: UpdateCategoryInput): Promise<Category>;
    deleteCategory(id: number): Promise<number>;
}
