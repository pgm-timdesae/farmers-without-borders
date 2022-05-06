import { Repository } from 'typeorm';
import { CreateProductInput, UpdateProductInput } from './dto';
import { Category } from '../categories/entities/category.entity';
import { CategoriesService } from '../categories/categories.service';
import { Farmer } from '../farmers/entities/farmer.entity';
import { FarmersService } from '../farmers/farmers.service';
import { Product } from './entities/product.entity';
export declare class ProductsService {
    private productsRepository;
    private categoriesService;
    private farmersService;
    constructor(productsRepository: Repository<Product>, categoriesService: CategoriesService, farmersService: FarmersService);
    findAll(): Promise<Product[]>;
    findOne(id: number): Promise<Product>;
    getCategory(categoryId: number): Promise<Category>;
    getFarmer(farmerId: number): Promise<Farmer>;
    getSpecificProducts(name: string): Promise<Product[]>;
    createProduct(createProductInput: CreateProductInput): Promise<Product>;
    updateProduct(updateProductInput: UpdateProductInput): Promise<Product>;
    deleteProduct(id: number): Promise<number>;
}
