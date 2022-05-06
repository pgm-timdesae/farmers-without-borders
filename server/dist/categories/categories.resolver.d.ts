import { CreateCategoryInput, UpdateCategoryInput } from './dto/';
import { Category } from './entities/category.entity';
import { CategoriesService } from './categories.service';
export declare class CategoriesResolver {
    private categoriesService;
    constructor(categoriesService: CategoriesService);
    categories(): Promise<Category[]>;
    getCategory(id: number): Promise<Category>;
    createCategory(createCategoryInput: CreateCategoryInput): Promise<Category>;
    updateCategory(updateCategoryInput: UpdateCategoryInput): Promise<Category>;
    deleteCategory(id: number): Promise<number>;
}
