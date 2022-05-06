import { CreateProductInput, UpdateProductInput } from './dto';
import { Category } from '../categories/entities/category.entity';
import { Farmer } from '../farmers/entities/farmer.entity';
import { Product } from './entities/product.entity';
import { ProductsService } from './products.service';
export declare class ProductsResolver {
    private productsService;
    constructor(productsService: ProductsService);
    products(): Promise<Product[]>;
    getProduct(id: number): Promise<Product>;
    getSpecificProducts(name: string): Promise<Product[]>;
    createProduct(createProductInput: CreateProductInput): Promise<Product>;
    updateProduct(updateProductInput: UpdateProductInput): Promise<Product>;
    deleteProduct(id: number): Promise<number>;
    category(product: Product): Promise<Category>;
    farmer(product: Product): Promise<Farmer>;
}
